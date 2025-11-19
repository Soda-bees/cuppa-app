import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, Platform} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtnUser from '../../components/BottomBtnUser';
import {colors, sizes} from '../../services';

export default function Subscription({navigation}) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleConfirm = () => {
    navigation.navigate('MembershipCheckout');
  };

  return (
    <SafeAreaView
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}
      style={styles.mainContainer}>
      <View style={styles.mainContainerBody}>
        <Header title={'Subscription'} />

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Card number</Text>
          <TextInput
            style={styles.inputField}
            placeholder="1234 5678 4556"
            placeholderTextColor={colors.disabledBg2}
            value={cardNumber}
            keyboardType="numeric"
            onChangeText={text => {
              setCardNumber(text);
            }}
          />
        </View>

        <View style={styles.expiryAndCvvContainer}>
          <View style={styles.inputContainer2}>
            <Text style={styles.inputTitle2}>Expiry date</Text>
            <TextInput
              style={styles.inputField2}
              placeholder="12/24"
              placeholderTextColor={colors.disabledBg2}
              value={expiryDate}
              keyboardType="numeric"
              onChangeText={text => {
                setExpiryDate(text);
              }}
            />
          </View>

          <View style={styles.inputContainer2}>
            <Text style={styles.inputTitle2}>CVV</Text>
            <TextInput
              style={styles.inputField2}
              placeholder="561"
              placeholderTextColor={colors.disabledBg2}
              value={cvv}
              keyboardType="numeric"
              onChangeText={text => {
                setCvv(text);
              }}
            />
          </View>
        </View>

        <View style={styles.payBtnContainer}>
          <TouchableOpacity style={styles.payBtn}>
            <Image style={styles.payIcon} source={images.googlePayIcon} />
            <Text style={styles.payBtnText}>Pay with Google Pay</Text>
          </TouchableOpacity>

          <View style={styles.separator}></View>

          <TouchableOpacity style={styles.payBtn}>
            <Image style={styles.payIcon} source={images.payPalIcon} />
            <Text style={styles.payBtnText}>Pay with Paypal</Text>
          </TouchableOpacity>
        </View>

        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <BottomBtnUser
            title={'Proceed to checkout'}
            img={true}
            onPress={handleConfirm}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
