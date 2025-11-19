import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, Platform} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

import {colors, sizes} from '../../services';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import BottomBtnUser from '../../components/BottomBtnUser';
import {useSelector} from 'react-redux';
import {selectUserData} from '../../store/userDetails';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export default function Menu({navigation, route}) {
  const {filteredMenu, category, cafe} = route.params;

  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  const userData = useSelector(selectUserData);

  useEffect(() => {
    setQuantity(userData?.cart?.length);
  }, []);

  const handleAddToCart = item => {
    navigation.navigate('AddToCart', {cafe, item});
  };

  const handleConfirm = () => {
    navigation.navigate('Checkout');
  };

  const handlePriceAndQuantity = price => {
    const numericValue = parseFloat(price.replace(/[^0-9.]/g, ''));

    if (!isNaN(numericValue)) {
      setQuantity(quantity + 1);
      setTotalPrice(parseFloat((totalPrice + numericValue).toFixed(2)));
    }

    console.log(totalPrice);
  };

  return (
    <SafeAreaView
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}
      style={styles.mainContainer}>
      <View style={{justifyContent: 'flex-start'}}>
        <Header
          iconType={'teal'}
          heartIcon={'yes'}
          favourite={false}
          title={category}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: 'black',
            marginTop: sizes.screenHeight * 0.02,
            alignSelf: 'center',
          }}>
          <View
            style={
              Platform.OS == 'android' ? styles.menuBody : styles.menuBodyIOS
            }>
            <View>
              <Text style={styles.heading}>Today's Special</Text>

              {filteredMenu.map((item, index) => {
                return (
                  <View key={index} style={styles.menuContainer}>
                    <TouchableOpacity
                      style={styles.menuSubContainer}
                      onPress={() => {
                        handleAddToCart(item);
                      }}>
                      <View style={styles.itemImgContainer}>
                        <Image
                          style={styles.itemImg}
                          source={{uri: item.image}}
                        />
                      </View>
                      <View style={styles.itemRightContainer}>
                        <Text style={styles.itemNameText}>{item.name}</Text>
                        <Text style={styles.itemPriceText}>
                          {`$ ${item.sizes[0].price}`}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    {index < filteredMenu.length - 1 && (
                      <View style={styles.eventSeparator}></View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={
          Platform.OS == 'android'
            ? styles.bottomBtnContainer
            : styles.bottomBtnContainerIOS
        }>
        <Text style={styles.errMsg}>{errorMsg}</Text>
        <BottomBtnUser
          title={`${
            quantity === 1
              ? `${quantity} item added to your cart`
              : `${quantity} items added to your cart`
          }`}
          img={true}
          onPress={() => {
            if (quantity > 0) {
              setErrorMsg('');
              navigation.navigate('OrderSummary');
            } else {
              setErrorMsg(
                '*Add at least one item to your cart in order to proceed to your order summary',
              );
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

// title={`${quantity} items added - $${totalPrice}`}
