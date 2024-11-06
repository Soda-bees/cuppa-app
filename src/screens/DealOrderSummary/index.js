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

export default function DealOrderSummary({navigation, route}) {
  const {deal} = route.params;
  const menus = deal.menuData;
  useEffect(() => {
    console.log(menus);
  }, []);

  const user = useSelector(selectUserData);
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [indexToDelete, setIndexToDelete] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletedModal, setDeletedModal] = useState(false);

  const items = user.cart;
  const [coupon, setCoupon] = useState({
    name: 'NUO15',
    type: 'New User Coupon',
    percentage: '20',
  });

  const [prices, setPrices] = useState({
    taxes: '0',
    delivery: '0',
  });

  const handleNext = () => {
    const cafeId = deal.cafeData;
    navigation.navigate('DealCheckout', {finalTotal, cafeId, menus});
  };

  // function calculateTotalAmount(cart) {
  //   let totalAmount = 0;
  //   deal.menuData.forEach(item => {
  //     totalAmount += parseFloat(item.sizes[0].price * item.quantity) || 0;
  //   });
  //   return totalAmount;
  // }

  // const totalAmount = Number(calculateTotalAmount(items).toFixed(2));

  function calculateTotalAmount(menus) {
    let totalAmount = 0;
    menus.forEach(item => {
      const price = parseFloat(item.sizes[0]?.price || 0);
      totalAmount += price;
    });
    return totalAmount;
  }

  const totalAmount = Number(calculateTotalAmount(menus).toFixed(2));
  console.log('Total Amount:', totalAmount);

  const discount = (percentage, totalAmount) => {
    const parsedPercentage = parseFloat(percentage);
    const parsedTotalAmount = parseFloat(totalAmount);

    if (isNaN(parsedPercentage) || isNaN(parsedTotalAmount)) {
      return 0;
    }
    const discountAmount = (parsedPercentage / 100) * parsedTotalAmount;
    return Number(discountAmount.toFixed(2));
  };

  const finalTotal = Number(
    (
      parseFloat(prices.taxes) +
      parseFloat(prices.delivery) -
      parseFloat(discount(deal.discount, totalAmount)) +
      totalAmount
    ).toFixed(2),
  );

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
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image style={styles.closeBtn} source={images.backIcon} />
          </TouchableOpacity>
          <Text style={styles.heading2}>Exclusive Deal</Text>
          <View style={styles.closeBtn}></View>
        </View>

        <View style={styles.scrollViewContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.heading}>
              {/* {items.length === 1
                ? `${items.length} item added to your cart`
                : `${items.length} items added to your cart`} */}
              Items in your deal
            </Text>
            {menus.map((item, index) => {
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
                          <Text style={styles.itemHeading2}>{item.name}</Text>
                        </View>
                        <Text style={styles.itemAddOns}>
                          {item.description.length > 30
                            ? `${item.description.substring(0, 30)}...`
                            : item.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                  {index < items.length - 1 && (
                    <View style={styles.eventSeparator}></View>
                  )}
                </View>
              );
            })}

            <View style={styles.couponRow}>
              <View style={styles.couponRowLeft}>
                <Image
                  style={styles.itemImg2}
                  source={{uri: deal.coverPhoto}}
                />
                <View>
                  <Text style={styles.couponHeading}>Discount</Text>
                  <Text style={styles.couponPercentage}>
                    {deal?.discount}% off
                  </Text>
                </View>
              </View>

              <TouchableOpacity>
                {/* <Image
                  style={styles.crossIconn}
                  source={images.crossIconWhite}
                /> */}
              </TouchableOpacity>
            </View>

            <Text style={styles.heading}>Bill Details</Text>

            <View style={styles.priceRow}>
              <Text style={styles.textBold}>Item Total</Text>
              <Text style={styles.textBold}>${totalAmount}</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.textBold}>Taxes and Charges</Text>
              <Text style={styles.textBold}>${prices.taxes}</Text>
            </View>

            {/* <View style={styles.priceRow}>
              <Text style={styles.textBold}>Delivery fees</Text>
              <Text style={styles.textBold}>${prices.delivery}</Text>
            </View> */}

            <View style={styles.priceRow}>
              <View style={styles.discountRow}>
                <Text style={styles.textBold}>Deal </Text>
                <Text style={styles.couponPercentage}>
                  (Discount {deal.discount}%)
                </Text>
              </View>
              <Text style={styles.textBold}>
                $-{discount(deal.discount, totalAmount)}
              </Text>
            </View>

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
