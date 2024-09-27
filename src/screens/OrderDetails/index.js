import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import BottomBtnUser from '../../components/BottomBtnUser';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authSlice';
import {cancelOrder, getOrderDetails} from '../../services/config/API';
import {ScrollView} from 'react-native-gesture-handler';
import {setUserData} from '../../store/userDetails';
import Modal from 'react-native-modal';

export default function OrderDetails({navigation, route}) {
  const orderId = route.params.orderId;
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  const [orderDetails, setOrderDetails] = useState();
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [cancel, setCancel] = useState(false);

  const handleOrderDetails = async () => {
    try {
      const res = await getOrderDetails(orderId, token);
      if (res?.data?.success) {
        setOrderDetails(res?.data?.orderDetails);
        // setCancel(checkCancelCondition(res?.data?.orderDetails?.createdAt));
        // checkCancelCondition(res?.data?.orderDetails?.createdAt);
        const {createdAt, pickupTime} = res?.data?.orderDetails;
        setCancel(checkCancelCondition(createdAt, pickupTime));
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkCancelCondition = (timestamp, pickupTime) => {
    const currentDateTime = new Date();
    const givenDateTime = new Date(timestamp);
    console.log(timestamp, pickupTime);
    // If pickupTime is "Standard", check cancellation condition based on createdAt
    if (pickupTime === 'Standard') {
      const diffInMs = Math.abs(currentDateTime - givenDateTime);
      const diffInMinutes = Math.floor(diffInMs / 1000 / 60);
      console.log('standard', diffInMinutes <= 5, diffInMinutes);
      return diffInMinutes <= 5;
    } else {
      // If pickupTime is not "Standard", parse the pickup time
      const pickupDateTime = parsePickupTime(pickupTime);
      console.log(pickupDateTime);
      // Calculate the difference in minutes between current time and pickup time
      const diffInMs = Math.abs(currentDateTime - pickupDateTime);
      const diffInMinutes = Math.floor(diffInMs / 1000 / 60);

      // If the difference is less than 10 minutes, cancel is false, else true
      console.log('scheduled', diffInMinutes >= 15, diffInMinutes);
      return diffInMinutes >= 15;
    }
  };

  const parsePickupTime = pickupTime => {
    const parts = pickupTime.split(' ');

    const month = parts[0];
    const day = parseInt(parts[1].replace(/(st|nd|rd|th)/, ''), 10);
    const year = parseInt(parts[2], 10);

    const timeParts = parts[3].split(':');
    let hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const amPM = parts[4];

    if (amPM === 'PM' && hours !== 12) {
      hours += 12;
    }

    const pickupDateTime = new Date(
      year,
      getMonthNumber(month),
      day,
      hours,
      minutes,
    );
    return pickupDateTime;
  };

  const getMonthNumber = monthName => {
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
    return months.indexOf(monthName);
  };

  // const checkCancelCondition = timestamp => {
  //   const givenDateTime = new Date(timestamp);
  //   const currentDateTime = new Date();

  //   const diffInMs = Math.abs(currentDateTime - givenDateTime);
  //   const diffInMinutes = Math.floor(diffInMs / 1000 / 60);

  //   if (diffInMinutes <= 2) {
  //     setCancel(true);
  //   } else {
  //     setCancel(false);
  //   }
  // };

  // const checkCancelCondition = time => {
  //   console.log(time);
  //   const [day, month, year] = dateString.split('-');
  //   const [time, modifier] = timeString.split(' ');
  //   let [hours, minutes] = time.split(':');

  //   if (modifier === 'PM' && hours !== '12') {
  //     hours = parseInt(hours, 10) + 12;
  //   }
  //   if (modifier === 'AM' && hours === '12') {
  //     hours = 0;
  //   }

  //   const givenDateTime = new Date(year, month - 1, day, hours, minutes);
  //   const currentDateTime = new Date();
  //   const diffInMs = Math.abs(currentDateTime - givenDateTime);
  //   const diffInMinutes = Math.floor(diffInMs / 1000 / 60);

  //   if (diffInMinutes > 30) {
  //     // setCancel(false);
  //     return false;
  //   } else {
  //     // setCancel(true);
  //     return true;
  //   }
  // };

  const timestamp = orderDetails?.createdAt;
  const {date, time} = parseTimestamp(timestamp);

  function parseTimestamp(timestamp) {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    let hours = date.getHours();
    const amPM = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${day}-${month}-${year}`;
    const formattedTime = `${hours}:${minutes} ${amPM}`;

    return {date: formattedDate, time: formattedTime};
  }

  useEffect(() => {
    handleOrderDetails();
  }, []);

  const handleCancelOrder = async () => {
    setLoader(true);
    console.log(orderId, 'orderidddddddddddddddddddd');
    try {
      const body = {orderId};
      const res = await cancelOrder(body, token);
      console.log(res.data, 'responseeeeeeeeeeeeeeeeee');

      if (res?.data?.success) {
        console.log(res.data.success, 'trruuuuuuuuuuuuuuu');
        console.log(res.data.message, 'trruuuuuuuuuuuuuuu');
        dispatch(setUserData(res?.data?.userData));
        setConfirmModal(false);
        setTimeout(() => {
          setDeleteModal(true);
        }, 500);
        setLoader(false);
        setErrorMsg('');
      } else {
        console.log(res.data.success, 'falseeeeeeeeeeeeeeeeee');
        console.log(res.data.message, 'falseeeeeeeeeeeeeeeeee');
        setErrorMsg(res.data.message);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
      setLoader(false);
    }
  };

  // useEffect(() => {
  //   // checkCancelCondition(date, time);
  //   // if (date && time) {
  //   const data = checkCancelCondition(date, time);
  //   console.log('-=-=-=-=', data);
  //   // }
  // }, [orderId]);
  console.log(cancel);
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header title={'Order Details'} />
        </View>

        <View style={styles.statusRow}>
          <View style={styles.dateAndTimeContainer}>
            <Text style={styles.dateAndTime}>{`${date}`}</Text>
            <Text style={styles.dateAndTime}>{`${time}`}</Text>
          </View>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={['#287C76', '#60B0AA']}
            style={styles.statusContainer}>
            <Text style={styles.statusText}>{orderDetails?.status}</Text>
          </LinearGradient>
        </View>

        <View style={styles.hr}></View>
        <View style={styles.scrollViewContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {orderDetails?.items?.map((item, index) => (
              <View key={index} style={styles.menuContainer}>
                <Image source={{uri: item?.image}} style={styles.menuImg} />
                <View style={styles.menuRight}>
                  <View style={styles.row}>
                    <Text style={styles.name}>{item?.name}</Text>
                    <Text
                      style={styles.name}>{`Quantity ${item?.quantity}`}</Text>
                  </View>
                  <Text style={styles.description}>{item?.description}</Text>
                </View>
                <View style={styles.hr}></View>
              </View>
            ))}

            <View style={styles.row}>
              <Text style={styles.name}>Pickup time</Text>
              <Text style={styles.amount}>{`${orderDetails?.pickupTime}`}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.name}>Final amount</Text>
              <Text
                style={styles.amount}>{`$${orderDetails?.totalAmount}`}</Text>
            </View>
            <View style={styles.height}></View>
          </ScrollView>
        </View>

        {cancel ? (
          <View
            style={
              Platform.OS == 'android'
                ? styles.bottomBtnContainer
                : styles.bottomBtnContainerIOS
            }>
            <Text style={styles.errMsg}>{errorMsg}</Text>
            <BottomBtnUser
              title={'Cancel Order'}
              img={true}
              onPress={() => {
                setConfirmModal(true);
              }}
            />
          </View>
        ) : null}

        <Modal isVisible={confirmModal} backdropOpacity={0.5}>
          <View style={styles.modalContainer}>
            <View style={styles.modalBottomBody}>
              <Text style={styles.modalBottomHeading}>
                Are you sure you want to cnacel this order?
              </Text>
              <View style={styles.modalBtnContainer}>
                <TouchableOpacity
                  style={styles.modalBtnWhite}
                  onPress={() => {
                    if (!loader) {
                      setConfirmModal(false);
                    }
                  }}>
                  <Text style={styles.modalBtnWhiteText}>Discard</Text>
                </TouchableOpacity>

                {loader ? (
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}
                    style={styles.modalBtngreen}>
                    <ActivityIndicator color={'white'} size={30} />
                  </LinearGradient>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      handleCancelOrder();
                    }}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#287C76', '#60B0AA']}
                      style={styles.modalBtngreen}>
                      <Text style={styles.modalBtnGreenText}>Cancel now</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </Modal>

        <Modal isVisible={deleteModal} backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <Image source={images.reviewSuccess} style={styles.modalCup} />

            <Text style={styles.modalText}>
              Your order has been canceled successfully.
            </Text>

            <TouchableOpacity
              onPress={() => {
                setDeleteModal(false);
                setTimeout(() => {
                  setConfirmModal(false);
                  navigation.navigate('Home');
                }, 100);
              }}
              style={styles.reviewBtnContainer}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.reviewBtn}>
                <Text style={styles.reviewBtnText}>Continue</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
