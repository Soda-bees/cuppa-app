import React, {useCallback, useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';
import {colors, sizes} from '../../services';
import Feather from 'react-native-vector-icons/Feather';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {addWalletBalance, createPaymentIntent, getWalletBalance, updatePassword} from '../../services/config/API';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authSlice';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import Modal from 'react-native-modal';
import {usePaymentSheet} from '@stripe/stripe-react-native';
import { selectUserData, updateWalletRedux } from '../../store/userDetails';

export default function Wallet({navigation}) {
  const {initPaymentSheet, presentPaymentSheet} = usePaymentSheet();

  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch()
  const userData= useSelector(selectUserData)

  const [loader, setLoader] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
  const [amount, setAmount] = useState(0);
  const [wallet, setWallet] = useState(0);


  const [showModal1, setShowModal1] = useState(false);

  const navigationn = useNavigation();

  const handleCancel = () => {
    navigationn.goBack();
  };


  useFocusEffect(
    useCallback(() => {
      if (userData) {
        setWallet(userData?.wallet);
      }
    }, [userData]),
  );

  const handleGetWalletbalance = async () => {
    try {
      const response = await getWalletBalance(token);
      response?.data;
      if (response?.data?.success) {
        setWallet(response?.data?.balance);
        dispatch(updateWalletRedux(response?.data?.balance));
        setLoader(false);
      } else {
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  useEffect(()=>{
    handleGetWalletbalance()
  },[])

  const handleCreatePaymentIntent = async () => {
    try {
      const numberValue = amount;

      if (!numberValue || numberValue <= 0) {
        Alert.alert('Invalid Amount', 'Please enter valid amount');
        setAmount('');
        return;
      }
      setBtnLoader(true);
      const response = await createPaymentIntent(token,{amount})
      console.log(response);
      const {clientSecret} = response.data;
      console.log('hiiiii', clientSecret);
      if (!clientSecret) {
        setBtnLoader(false);
        setAmount('');
        return Alert.alert('Request failed ', 'Failed to intialize Payment');
      }

      console.log('Payment Sheet Initialization'); // Logging initialization

      const {error: initError} = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        paymentMethodType: 'Card',
        merchantDisplayName: 'Cuppa',
        billingDetails: {
          // email: userData?.email || '',
          // name: userData?.name || '',
          username: userData?.name,
          email: userData?.email,
          user_id:userData._id
          // createdAt: userData?.createdAt,
        },
      });

      if (initError) {
        setBtnLoader(false);
        setAmount('');
        return Alert.alert(
          initError.message || 'Request failed',
          'Please try again',
        );

      }

      const {error: presentError} = await presentPaymentSheet();
      console.log(presentError, 'whyy');
      if (presentError) {
        setBtnLoader(false);
        setAmount('');
        Alert.alert(initError.message || 'Request failed', 'Please try again');

      }
      console.log('yoooooooo');
      const numberAmount = Number(amount);
      const body = {
        amount: numberAmount,
      };
      const responseSecond = await addWalletBalance(
        token,
        body,
      );
      if (responseSecond?.data?.success) {
        setAmount('');
        setWallet(responseSecond?.data?.balance);
        dispatch(updateWalletRedux(responseSecond?.data?.balance));
        setBtnLoader(false);
        Alert.alert(
          'Payment Successful',
          'Your payment has been processed successfully!',
        );
        setAmount('');
      } else {
        setBtnLoader(false);
        setAmount('');
        Alert.alert(responseSecond?.data?.message || 'have some error');
      }

    } catch (error) {
      console.error('Error processing payment:', error.message);
      Alert.alert('Payment Error', 'The payment has been cancelled');
      setBtnLoader(false);
      setAmount('');
    }
  };

  // const handleSaveChanges = async () => {
  //   setLoader(true);
  //   try {
  //     if (!password || !newPass || !confirmPass) {
  //       setErrorMsg('*All fields are required');
  //       setLoader(false);
  //     } else {
  //       if (newPass.length < 8 && confirmPass.length < 8) {
  //         setErrorMsg('*Password must contain at least 8 characters');
  //         setLoader(false);
  //       } else {
  //         if (newPass !== confirmPass) {
  //           setErrorMsg("*Your new password doesn't match");
  //           setLoader(false);
  //         } else {
  //           const body = {
  //             password,
  //             newPassword: newPass,
  //           };
  //           const response = await updatePassword(body, token);
  //           console.log(JSON.stringify(response));
  //           if (response.data.success) {
  //             setErrorMsg('');
  //             setLoader(false);
  //             setShowModal1(true);
  //           } else {
  //             setErrorMsg(response.data.message);
  //             setLoader(false);
  //           }
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //     setLoader(false);
  //     setErrorMsg('');
  //   }
  // };
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
        <View style={styles.mainContainer}>

        <View style={styles.headerContainer}>
          <Header title={'Wallet'} />
        </View>

        <Text style={styles.subHeading}>Available Balance</Text>
        <Text style={styles.disabledText}>
          Funds available for in-app purchases
        </Text>

        <View style={styles.walletContainer}>
          <Image source={images.walletImg} style={styles.walletImg} />
          <Text style={styles.textBoldLarger}>${wallet}</Text>
        </View>

        <KeyboardAvoidingView
          behavior="padding"
          // keyboardVerticalOffset={}
          >
          <View style={styles.paymentContainer}>
            <Text style={styles.disabledText2}>Enter Amount</Text>
            <TextInput
              placeholderTextColor={colors.grayBorder}
              style={styles.inputColorIOS}
              keyboardType="numeric"
              placeholder="Amount"
              value={amount}
              onChangeText={text => setAmount(text)}
            />
          </View>
          {loader ? (
            <BottomBtnLoader />
          ) : (
            <TouchableOpacity
              onPress={() => {
                // handleSaveChanges()
                handleCreatePaymentIntent()
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.btnContainer2}>
                <Text style={styles.buttonText2}>Add Balance</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        <Text style={styles.errMsg}>{errorMsg}</Text>

        </KeyboardAvoidingView>

        {/* <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <TouchableOpacity style={styles.btnContainer} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>


        </View> */}
        </View>
      </TouchableWithoutFeedback>
      <Modal isVisible={showModal1} backdropOpacity={0.5}>
        <View style={styles.modalBody}>
          <Image source={images.reviewSuccess} style={styles.modalCup} />

          <Text style={styles.modalText}>
            Your password has been updated successfully.
          </Text>

          <TouchableOpacity
            onPress={() => {
              setShowModal1(false);
              navigation.navigate('TabNavigation');
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
    </SafeAreaView>
  );
}
