import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TextInput, TouchableOpacity, Platform} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import DatePicker from 'react-native-date-picker';
import {colors, fontSize, sizes} from '../../services';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import BottomBtnUser from '../../components/BottomBtnUser';
import MapView from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authSlice';
import {
  emptyUserCart,
  selectUserData,
  setUserData,
} from '../../store/userDetails';
import {ActivityIndicator} from 'react-native-paper';
import {placeOrder} from '../../services/config/API';
import {selectOutlets} from '../../store/outletsSlice';
import BottomBtnLoader from '../../components/BottomBtnLoader';

export default function Checkout({navigation, route}) {
  const {finalTotal, cafeId} = route.params;
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [pay, setPay] = useState('apple');

  const token = useSelector(selectAuthToken);
  const user = useSelector(selectUserData);
  const selectedCard =
    user.cardDetails.find(card => card?.selected === true) ||
    user.cardDetails[0];
  const [pickupTime, setPickupTime] = useState('Standard');
  const [paymentMethod, setPaymentMethod] = useState('Wallet');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  console.log(new Date());
  console.log(pickupTime);

  const allCafes = useSelector(selectOutlets);

  const findCafeById = (cafeId, allCafes) => {
    return allCafes.find(cafe => cafe._id === cafeId);
  };

  const cafe = findCafeById(cafeId, allCafes);
  const dispatch = useDispatch();

  const handlePlaceOrder = async () => {
    try {
      setLoader(true);
      const items = user.cart;
      const cafeData = items[0].cafeId;
      const updatedItems = items.map(item => {
        const {cafeId, ...rest} = item;
        return rest;
      });
      const status = 'Pending';

      let formattedPickupTime = pickupTime;
      if (pickupTime !== 'Standard') {
        const currentTime = new Date();
        formattedPickupTime = new Date(pickupTime);

        if (formattedPickupTime < currentTime) {
          setPickupTime('Standard');
          setLoader(false);
          setErrorMsg("*You cannot select a time that's already passed");
          return;
        }

        formattedPickupTime = formatDate(formattedPickupTime);
      }

      const body = {
        cafeData,
        items: updatedItems,
        status,
        pickupTime: formattedPickupTime,
        paymentMethod,
        totalAmount: finalTotal,
      };

      const totalAmount = Number(finalTotal);
      const walletBalance = Number(user.wallet);

      // if (totalAmount > walletBalance) {
      //   const shortfall = totalAmount - walletBalance;
      //   setLoader(false);
      //   setErrorMsg(
      //     `Insufficient balance: You need an additional $${shortfall.toFixed(
      //       2,
      //     )} to complete this order.`,
      //   );
      //   return;
      // }

      console.log(body);
      const response = await placeOrder(body, token);
      if (response?.data?.success) {
        console.log('rrrrreeeeeeeesssssssssssssssss', response.data.newOrder);
        console.log('with cart', user);
        dispatch(emptyUserCart());
        dispatch(setUserData(response.data.userData));
        setErrorMsg('');
        setLoader(false);
        navigation.navigate('OrderPlaced');
      } else {
        console.log(response?.data?.message);
        setErrorMsg(response?.data?.message);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setErrorMsg('');
    }
  };

  const formatDate = dateString => {
    if (dateString) {
      const date = new Date(dateString);
    } else {
      dateString = new Date();
    }

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amPM = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const formattedTime = `${hours}:${minutes} ${amPM}`;

    const daySuffix = day => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    };

    const formattedDate = `${month} ${day}${daySuffix(
      day,
    )}, ${year} ${formattedTime}`;
    return formattedDate;
  };

  const handleScheduledPickUpTime = () => {
    // setPickupTime('');
    setOpen(true);
  };

  const maskCardNumber = cardNumber => {
    const lastFourDigits = cardNumber?.slice(-4);
    const maskedDigits = cardNumber?.slice(0, -4)?.replace(/\d/g, '*');
    return maskedDigits + lastFourDigits;
  };

  const handleSelectPaymentMethod = payment => {
    if (payment === 'Card') {
      setPaymentMethod(payment);
    } else {
      setPaymentMethod(payment);
    }
  };

  const handleCafeDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(1);
  };

  const distance = handleCafeDistance(
    cafe?.outletLocation?.latitude,
    cafe?.outletLocation?.longitude,
    user?.location?.latitude,
    user?.location?.longitude,
  );

  const handleSetPay = method => {
    setPay(method);
  };

  return (
    <SafeAreaView
      style={styles.mainContainer}
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}>
      <View style={{flex: 1}}>
        <Header
          iconType={'teal'}
          heartIcon={'no'}
          favourite={false}
          title={'Checkout'}
          delivery={false}
        />

        <View style={styles.scrollViewContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.heading}>Pickup</Text>

            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                region={{
                  latitude: cafe?.outletLocation?.latitude
                    ? cafe?.outletLocation?.latitude
                    : 40.7590615,
                  longitude: cafe?.outletLocation?.longitude
                    ? cafe?.outletLocation?.longitude
                    : -73.969231,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.015,
                }}></MapView>
            </View>

            <View style={styles.itemContainer}>
              <Image style={styles.icon} source={images.shopIcon} />
              <View>
                <Text style={styles.itemHeading}>{cafe.outletName}</Text>
                <Text style={styles.itemAddOns}>{cafe.location}</Text>
              </View>
            </View>

            <View style={styles.itemContainer}>
              <Image style={styles.icon} source={images.walkIcon} />
              <View>
                <Text style={styles.itemHeading}>Distance</Text>
                <Text style={styles.itemAddOns}>
                  {distance ?? '1.5'} Kilometers
                </Text>
              </View>
            </View>

            <Text style={styles.heading}>Pickup Time</Text>

            <TouchableOpacity
              style={
                pickupTime === 'Standard'
                  ? styles.couponRowLeftTeal
                  : styles.couponRowLeft
              }
              onPress={() => setPickupTime('Standard')}>
              <Image
                style={styles.icon}
                source={
                  pickupTime === 'Standard'
                    ? images.pickUpStandardIconTeal
                    : images.pickUpStandardIcon
                }
              />
              <Text
                style={
                  pickupTime === 'Standard'
                    ? styles.itemHeadingTeal
                    : styles.itemHeading
                }>
                Standard
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                pickupTime !== 'Standard'
                  ? styles.couponRowLeftTeal
                  : styles.couponRowLeft
              }
              onPress={() => handleScheduledPickUpTime()}>
              <Image
                style={styles.icon}
                source={
                  pickupTime !== 'Standard'
                    ? images.pickUpScheduleIconTeal
                    : images.pickUpScheduleIcon
                }
              />
              <Text
                style={
                  pickupTime !== 'Standard'
                    ? styles.itemHeadingTeal
                    : styles.itemHeading
                }>
                {pickupTime === 'Standard'
                  ? `Schedule`
                  : `Scheduled at ${formatDate(date)}`}
              </Text>
            </TouchableOpacity>

            <View style={styles.upiContainer}>
              <Text style={styles.itemHeading}>UPI</Text>

              <View style={styles.payIconRow}>
                <TouchableOpacity
                  onPress={() => {
                    handleSetPay('apple');
                  }}
                  style={
                    pay === 'apple'
                      ? styles.payIconContainerSelected
                      : styles.payIconContainer
                  }>
                  <Image style={styles.payIcon} source={images.applePay} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    handleSetPay('google');
                  }}
                  style={
                    pay === 'google'
                      ? styles.payIconContainerSelected
                      : styles.payIconContainer
                  }>
                  <Image style={styles.payIcon} source={images.googlePay} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    handleSetPay('paypal');
                  }}
                  style={
                    pay === 'paypal'
                      ? styles.payIconContainerSelected
                      : styles.payIconContainer
                  }>
                  <Image style={styles.payIcon} source={images.paypal} />
                </TouchableOpacity>
              </View>
            </View>

            {/* <View style={styles.addCardRow}>
              <Text style={styles.heading}>Credit / Debit Cards</Text>
              {user?.cardDetails?.length > 0 ? (
                <TouchableOpacity
                  style={styles.viewAllContainerMain}
                  onPress={() => {
                    navigation.navigate('CardDetails');
                  }}>
                  <View style={styles.viewAllContainer}>
                    <Text style={styles.viewAllText}>View all</Text>
                  </View>
                </TouchableOpacity>
              ) : null}
            </View>

            {user?.cardDetails?.length <= 0 ? (
              <View style={styles.itemContainer2}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddCard')}>
                  <Image style={styles.icon} source={images.addNewCardIcon} />
                </TouchableOpacity>
                <View>
                  <Text style={styles.itemHeading}>Add New Cards</Text>
                  <Text style={styles.itemAddOns}>
                    Save and pay via card (Safe & Secure)
                  </Text>
                  <View style={styles.payCardsContainer}>
                    <Image style={styles.visaImg} source={images.visaImg} />
                    <Image
                      style={styles.masterCardImg}
                      source={images.masterCardImg}
                    />
                    <Image style={styles.amexImg} source={images.amexImg} />
                  </View>
                </View>
              </View>
            ) : (
              <TouchableOpacity
                style={
                  paymentMethod === 'Card'
                    ? styles.bottomBtn2
                    : styles.bottomBtn
                }
                onPress={() => {
                  const payment = 'Card';
                  handleSelectPaymentMethod(payment);
                }}>
                <View style={styles.bottomBtnLeft}>
                  <Image style={styles.icon} source={images.masterCardImg} />
                  <Text style={styles.itemHeading}>
                    {maskCardNumber(selectedCard?.cardNumber)}
                  </Text>
                </View>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={
                paymentMethod !== 'Card' ? styles.bottomBtn2 : styles.bottomBtn
              }
              onPress={() => {
                const payment = 'Cash on delivery';
                handleSelectPaymentMethod(payment);
              }}>
              <View style={styles.bottomBtnLeft}>
                <Image style={styles.icon} source={images.CODIcon} />
                <Text style={styles.itemHeading}>
                  Cash on delivery available
                </Text>
              </View>
            </TouchableOpacity> */}

            <Text style={styles.errMsg}>{errorMsg}</Text>

            {loader ? (
              <View style={Platform.OS == 'ios' && styles.bottmBtnIOS}>
                <BottomBtnLoader title={'Place order'} />
              </View>
            ) : (
              <View style={Platform.OS == 'ios' && styles.bottmBtnIOS}>
                <BottomBtnUser
                  title={'Place order'}
                  img={true}
                  onPress={() => {
                    handlePlaceOrder();
                  }}
                />
              </View>
            )}
          </ScrollView>
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setPickupTime(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
