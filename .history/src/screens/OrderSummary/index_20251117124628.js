import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TextInput, TouchableOpacity, Platform} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors, fontSize, sizes} from '../../services';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import BottomBtnUser from '../../components/BottomBtnUser';
import DashedLine from 'react-native-dashed-line';
import userDetails, {
  selectUserData,
  setUserData,
} from '../../store/userDetails';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authSlice';
import {deleteFromCart} from '../../services/config/API';
import Modal from 'react-native-modal';
import {ActivityIndicator} from 'react-native-paper';

export default function OrderSummary({navigation}) {
  const user = useSelector(selectUserData);
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [indexToDelete, setIndexToDelete] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletedModal, setDeletedModal] = useState(false);

  const items = user.cart;

  console.log('cartttttttttttttttttttt', items);

  // const [coupon, setCoupon] = useState({
  //   name: 'NUO15',
  //   type: 'New User Coupon',
  //   percentage: '20',
  // });

  const [prices, setPrices] = useState({
    taxes: '0',
    delivery: '0',
  });

  const handleNext = () => {
    if (items.length > 0) {
      const cafeId = items[0].cafeId;
      navigation.navigate('Checkout', {finalTotal, cafeId});
    }
  };

  function calculateTotalAmount(cart) {
    let totalAmount = 0;

    cart.forEach(item => {
      totalAmount += parseFloat(item.amount * item.quantity) || 0;
    });
    return totalAmount;
  }

  const totalAmount = Number(calculateTotalAmount(items).toFixed(2));

  const discount = (percentage, totalAmount) => {
    const parsedPercentage = parseFloat(percentage);
    const parsedTotalAmount = parseFloat(totalAmount);

    if (isNaN(parsedPercentage) || isNaN(parsedTotalAmount)) {
      return 0;
    }
    const discountAmount = (parsedPercentage / 100) * parsedTotalAmount;
    return Number(discountAmount.toFixed(2));
  };

  const totalDiscount = items
    .filter(item => item.discount)
    .reduce((acc, item) => {
      const itemDiscount = (item.totalAmount * item.discount) / 100;
      return acc + itemDiscount;
    }, 0)
    .toFixed(2);
  console.log(totalDiscount);

  const finalTotal = Math.abs(
    Number(
      (
        parseFloat(prices.taxes) +
        totalDiscount +
        parseFloat(prices.delivery) -
        parseFloat(totalAmount)
      ).toFixed(2),
    ),
  );

  // const finalTotal = Number(
  //   (
  //     parseFloat(prices.taxes) +
  //     parseFloat(prices.delivery) -
  //     parseFloat(discount(coupon.percentage, totalAmount)) +
  //     totalAmount
  //   ).toFixed(2),
  // );

  const handleDeleteFromCart = async () => {
    try {
      setLoader(true);
      const body = {
        indexToDelete,
      };
      const response = await deleteFromCart(body, token);
      if (response.data.success) {
        console.log(response.data.user);
        dispatch(setUserData(response.data.user));
        setLoader(false);
        setDeleteModal(false);
        setTimeout(() => {
          setDeletedModal(true);
        }, 500);
        setErrorMsg('');
      } else {
        console.log(response.data.message);
        setLoader(false);
        setErrorMsg(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setErrorMsg('');
    }
  };

  return (
    <SafeAreaView
      style={styles.mainContainer}
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image style={styles.closeBtn} source={images.closeBtn} />
          </TouchableOpacity>
          <Text style={styles.heading2}>Order Summary</Text>
          <View style={styles.closeBtn}></View>
        </View>

        <View style={styles.scrollViewContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.heading}>
              {items.length === 1
                ? `${items.length} item added to your cart`
                : `${items.length} items added to your cart`}
            </Text>
            {items.map((item, index) => {
              return (
                <View key={index}>
                  <View style={styles.itemContainer}>
                    <View style={styles.itemContainer}>
                      <Image
                        style={styles.itemImg}
                        source={{uri: item.image}}
                      />
                      <View>
                        <View style={styles.nameAndQuantity}>
                          <Text style={styles.itemHeading2}>
                            {item.name.length > 22
                              ? `${item.name.substring(0, 22)}..`
                              : item.name}
                          </Text>
                          <Text style={styles.itemHeading2}>
                            ({item.quantity})
                          </Text>
                        </View>
                        <Text style={styles.itemAddOns}>
                          {item.description.length > 30
                            ? `${item.description.substring(0, 30)}...`
                            : item.description}
                        </Text>
                        {item?.discount ? (
                          <Text style={styles.itemAddOns}>
                            {item?.dealTitle}: {item?.discount}% 0ff
                          </Text>
                        ) : null}
                      </View>
                    </View>

                    <TouchableOpacity onPress={() => setDeleteModal(true)}>
                      <Image
                        style={styles.crossIconn}
                        source={images.crossIconn}
                      />
                    </TouchableOpacity>
                  </View>
                  {index < items.length - 1 && (
                    <View style={styles.eventSeparator}></View>
                  )}
                </View>
              );
            })}

            {/* <Text style={styles.heading}>Coupon</Text> */}

            {/* {coupon?.name && (
              <View style={styles.couponRow}>
                <View style={styles.couponRowLeft}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}
                    style={styles.coupon}>
                    <Text style={styles.couponText}>{coupon?.name}</Text>
                  </LinearGradient>
                  <View>
                    <Text style={styles.couponHeading}>{coupon?.type}</Text>
                    <Text style={styles.couponPercentage}>
                      {coupon?.percentage}% off
                    </Text>
                  </View>
                </View>

                <TouchableOpacity>
                  <Image
                    style={styles.crossIconn}
                    source={images.crossIconWhite}
                  />
                </TouchableOpacity>
              </View>
            )} */}

            <Text style={styles.heading}>Bill Details</Text>

            <View style={styles.priceRow}>
              <Text style={styles.textBold}>Item Total</Text>
              <Text style={styles.textBold}>${totalAmount}</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.textBold}>Taxes and Charges</Text>
              <Text style={styles.textBold}>${prices.taxes}</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.textBold}>Total Discount</Text>
              <Text style={styles.textBold}>${totalDiscount}</Text>
            </View>

            {/* {coupon.name && (
              <View style={styles.priceRow}>
                <View style={styles.discountRow}>
                  <Text style={styles.textBold}>Coupon </Text>
                  <Text>({coupon.type})</Text>
                </View>
                <Text style={styles.textBold}>
                  $-{discount(coupon.percentage, totalAmount)}
                </Text>
              </View>
            )} */}
            {/* {Platform.OS == 'android' ? (
              <View style={styles.dashedLine}></View>
            ) : (
              <DashedLine
                dashLength={4} // adjust the length of each dash
                dashGap={2} // adjust the gap between dashes
                dashThickness={1} // adjust the thickness of each dash
                style={{width: '100%', height: 3}} // adjust the width and height of the dotted line
              />
            )} */}

            <DashedLine
              dashLength={12}
              dashGap={5}
              dashThickness={1}
              style={styles.dashedLine}
              dashColor={colors.disabledBg3}
            />

            <View style={styles.priceRow}>
              <Text style={styles.textTeal}>To Pay</Text>
              <Text style={styles.textTeal}>${finalTotal}</Text>
            </View>
            <View style={Platform.OS == 'ios' && styles.height}></View>
          </ScrollView>
        </View>
        <View
          style={
            Platform.OS == 'android'
              ? styles.BottomBtnContainer
              : styles.BottomBtnContainerIOS
          }>
          <BottomBtnUser
            title={'Go to checkout'}
            img={true}
            onPress={handleNext}
          />
        </View>
      </View>

      <Modal
        isVisible={deleteModal}
        onBackButtonPress={() => setDeleteModal(false)}
        onBackdropPress={() => setDeleteModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBodyContainer}>
            <View style={styles.modalBody}>
              <Text style={styles.modalHeading}>Are you sure?</Text>
              <Text style={styles.modalText}>
                Do you want to delete item from the cart?
              </Text>
              <View style={styles.modalBtnContainer}>
                <TouchableOpacity
                  style={styles.modalBtnWhite}
                  onPress={() => {
                    setDeleteModal(false);
                  }}>
                  <Text style={styles.modalBtnWhiteText}>Cancel</Text>
                </TouchableOpacity>
                {loader ? (
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}
                    style={styles.modalBtngreen}>
                    <ActivityIndicator color={colors.white} size={24} />
                  </LinearGradient>
                ) : (
                  <TouchableOpacity onPress={() => handleDeleteFromCart()}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#287C76', '#60B0AA']}
                      style={styles.modalBtngreen}>
                      <Text style={styles.modalBtnGreenText}>Delete</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        isVisible={deletedModal}
        onBackButtonPress={() => setDeletedModal(false)}
        onBackdropPress={() => setDeletedModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBody2}>
            <Text style={styles.modalHeading}>Thankyou</Text>
            <Text style={styles.modalText}>
              Your item has been deleted from the cart.
            </Text>
            <View style={styles.modalBtnContainer2}>
              <TouchableOpacity onPress={() => setDeletedModal(false)}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#287C76', '#60B0AA']}
                  style={styles.modalBtngreen}>
                  <Text style={styles.modalBtnGreenText}>Done</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
