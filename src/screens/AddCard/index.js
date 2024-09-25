import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Text,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtnUser from '../../components/BottomBtnUser';
import {colors, sizes} from '../../services';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authSlice';
import {addCardDetails} from '../../services/config/API';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import {err} from 'react-native-svg';
import {addCardDetailsRedux, selectUserData} from '../../store/userDetails';

export default function AddCard({navigation}) {
  const token = useSelector(selectAuthToken);
  const userDetails = useSelector(selectUserData);

  const dispatch = useDispatch();

  const [ownerName, setOwnerName] = useState('');
  const [cardNumberrr, setCardNumberrr] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cVV, setCVV] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [loader, setLoader] = useState(false);

  const handleConfirm = () => {
    // navigation.goBack();
    handleCardDetails();
  };

  const formatCardNumber = input => {
    const numericInput = input.replace(/\D/g, '');
    const chunks = numericInput.match(/.{1,4}/g) || [];
    return chunks.join('-');
  };

  const formatExpiryDate = input => {
    const numericInput = input.replace(/\D/g, '');
    const chunks = numericInput.match(/.{1,2}/g) || [];
    return chunks.join('/');
  };

  const extractNumbers = value => {
    const numericValues = value.match(/\d+/g);
    return numericValues ? numericValues.join('') : '';
  };

  const handleCardDetails = async () => {
    setLoader(true);
    const cardNumber = extractNumbers(cardNumberrr);
    const expiryDate = extractNumbers(expiry);
    const cvv = extractNumbers(cVV);

    try {
      if (
        !ownerName ||
        cardNumber.length !== 16 ||
        expiryDate.length !== 4 ||
        cvv.length !== 3
      ) {
        setLoader(false);
        return setErrMsg('*Please enter valid card details.');
      }
      const body = {
        ownerName,
        cardNumber,
        expiryDate,
        cvv,
      };

      const response = await addCardDetails(body, token);

      if (response.data.success) {
        setLoader(false);
        setErrMsg('');
        console.log(response.data.cardDetails);
        dispatch(addCardDetailsRedux(response.data.cardDetails));
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
      setErrMsg(error);
    }
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainContainer}>
          <Header title={'Add Card'} />

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Name</Text>

            <TextInput
              style={
                Platform.OS == 'android'
                  ? styles.inputField
                  : styles.inputFieldIOS
              }
              placeholder="Ex. John Doe"
              placeholderTextColor={colors.disabledBg3}
              value={ownerName}
              onChangeText={text => {
                setOwnerName(text);
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Card number</Text>

            <TextInput
              style={
                Platform.OS == 'android'
                  ? styles.inputField
                  : styles.inputFieldIOS
              }
              placeholder="1234-5678-4556-7865"
              placeholderTextColor={colors.disabledBg3}
              value={formatCardNumber(cardNumberrr)}
              keyboardType="numeric"
              maxLength={19}
              onChangeText={text => {
                if (text.length <= 19) {
                  setCardNumberrr(formatCardNumber(text));
                }
              }}
            />
          </View>

          <View style={styles.expiryAndCvvContainer}>
            <View style={styles.inputContainer2}>
              <Text style={styles.inputTitle2}>Expiry date</Text>
              <TextInput
                style={styles.inputField2}
                placeholder="12/24"
                placeholderTextColor={colors.disabledBg3}
                value={formatExpiryDate(expiry)}
                keyboardType="numeric"
                maxLength={5}
                onChangeText={text => {
                  if (text.length <= 5) {
                    setExpiry(formatExpiryDate(text));
                  }
                }}
              />
            </View>

            <View style={styles.inputContainer2}>
              <Text style={styles.inputTitle2}>CVV</Text>
              <TextInput
                style={styles.inputField2}
                placeholder="561"
                placeholderTextColor={colors.disabledBg3}
                value={cVV}
                keyboardType="numeric"
                maxLength={3}
                onChangeText={text => {
                  if (text.length <= 3) setCVV(text);
                }}
              />
            </View>
          </View>

          <Text style={styles.errMsg}>{errMsg}</Text>

          {/* <View style={styles.payBtnContainer}>
          <TouchableOpacity style={styles.payBtn}>
            <Image style={styles.payIcon} source={images.googlePayIcon} />
            <Text style={styles.payBtnText}>Pay with Google Pay</Text>
          </TouchableOpacity>

          <View style={styles.separator}></View>

          <TouchableOpacity style={styles.payBtn}>
            <Image style={styles.payIcon} source={images.payPalIcon} />
            <Text style={styles.payBtnText}>Pay with Paypal</Text>
          </TouchableOpacity>
        </View> */}

          <View
            style={
              Platform.OS == 'android'
                ? styles.bottomBtnContainer
                : styles.bottomBtnContainerIOS
            }>
            {loader ? (
              <BottomBtnLoader title={'Save'} />
            ) : (
              <BottomBtnUser
                title={'Save'}
                img={true}
                onPress={handleConfirm}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
