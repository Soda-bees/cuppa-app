import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Text,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import BottomBtnUser from '../../components/BottomBtnUser';
import {colors, sizes} from '../../services';
import PhoneInput from 'react-native-phone-number-input';
import {emailVerification} from '../../services/config/API/index';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import messaging from '@react-native-firebase/messaging';

export default function Signup({navigation}) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [hideSignupPass, setHideSignUpPass] = useState(true);
  const isUser = true;
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [otp, setOtp] = useState('');
  const [deviceToken, setDeviceToken] = useState(null);

  useEffect(() => {
    getFcmToken();
  }, []);

  const handleEmailVerification = async () => {
    setLoader(true);
    try {
      if (!userName || !email || !password || !contactNo) {
        setErrorMsg('*All fields are required');
        setLoader(false);
        console.log(errorMsg);
      }
      if (!check1 || !check2 || !check3) {
        setErrorMsg('*Please check all checkboxes to proceed');
        setLoader(false);
        console.log(errorMsg);
      } else {
        if (password.length < 8) {
          setErrorMsg('*Password must contain at least 8 characters');
          console.log(errorMsg);
          setLoader(false);
        } else {
          const response = await emailVerification(email);
          if (response.data.success) {
            console.log(response?.data?.otp);
            setOtp(response?.data?.otp);
            setLoader(false);
            setErrorMsg('');

            const userData = {
              userName,
              email,
              password,
              phoneNumber:
                phoneInput?.current?._reactInternals?.stateNode?.state?.number,
              countryCode:
                phoneInput?.current?._reactInternals?.stateNode?.state
                  ?.countryCode,
              otp: response?.data?.otp,
              deviceToken,
            };
            console.log(userData);

            navigation.navigate('EmailVerification', {userData, isUser});
          } else {
            console.log(response?.data?.message);
            setLoader(false);
            setErrorMsg(response?.data?.message);
          }
        }
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setErrorMsg('');
    }
  };

  const getFcmToken = async () => {
    try {
      // Register the device for remote messages (iOS only)
      if (Platform.OS === 'ios') {
        await messaging().registerDeviceForRemoteMessages();
        await messaging().setAutoInitEnabled(true);
      }

      // Get the FCM token
      const token = await messaging().getToken();
      setDeviceToken(token);
      console.log('Notification token Login=', token);
      return token;
    } catch (error) {
      console.log('Error in generating token:', error);
    }
  };

  const handleConfirm = () => {
    handleEmailVerification();
  };

  return (
    <SafeAreaView
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}
      style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainContainerBody}>
          <View style={styles.headerContainer}>
            <Header title={'Sign Up'} />
          </View>

          <View style={styles.inputView}>
            <View>
              <Text style={styles.inputTitle}>Username</Text>
              <TextInput
                placeholder={'Enter Name'}
                style={
                  Platform.OS == 'android'
                    ? styles.inputField
                    : styles.inputFieldIOS
                }
                placeholderTextColor={colors.disabledBg3}
                onChangeText={text => setUserName(text)}
                value={userName}
              />
            </View>
          </View>

          <View style={styles.inputView}>
            <View>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                placeholder={'Enter Email'}
                placeholderTextColor={colors.disabledBg3}
                style={
                  Platform.OS == 'android'
                    ? styles.inputField
                    : styles.inputFieldIOS
                }
                onChangeText={text => setEmail(text)}
                value={email}
              />
            </View>
          </View>

          <View style={styles.inputView}>
            <View>
              <Text style={styles.inputTitle}>Contact Number</Text>

              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="US"
                layout="first"
                withShadow={false}
                autoFocus={false}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
                withDarkTheme={false}
                flagButtonStyle={{
                  backgroundColor: colors.bgLight,
                  height: sizes.screenHeight * 0.07,
                  width: sizes.screenHeight * 0.07,
                }}
                containerStyle={{
                  height: sizes.screenHeight * 0.07,
                }}
                textInputStyle={{
                  height: sizes.screenHeight * 0.07,
                  color: colors.black,
                }}
                textInputProps={{
                  placeholderTextColor: colors.disabledBg2,
                }}
                onChangeText={text => {
                  setContactNo(text);
                }}
              />
            </View>
          </View>

          <View style={styles.inputView}>
            <View>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                placeholder={'Enter Password'}
                style={
                  Platform.OS == 'android'
                    ? styles.inputField
                    : styles.inputFieldIOS
                }
                placeholderTextColor={colors.disabledBg3}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={hideSignupPass}
              />
            </View>

            <TouchableOpacity
              style={styles.feather}
              onPress={() => setHideSignUpPass(!hideSignupPass)}>
              <Feather
                name={!hideSignupPass ? 'eye' : 'eye-off'}
                color={colors.darkTeal}
                size={24}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.checkField}>
            <TouchableOpacity
              style={styles.checkIconContainer}
              onPress={() => {
                setCheck1(!check1);
              }}>
              <Image
                style={styles.checkIcon}
                source={check1 ? images.checkedIcon : images.unCheckedIcon}
              />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.textBold}>
                Yes, I’d like promo alerts from Cuppa
              </Text>
              <Text style={styles.textLight}>
                Know about product offers, announcements and initiatives.
              </Text>
            </View>
          </View>

          <View style={styles.checkField}>
            <TouchableOpacity
              style={styles.checkIconContainer}
              onPress={() => {
                setCheck2(!check2);
              }}>
              <Image
                style={styles.checkIcon}
                source={check2 ? images.checkedIcon : images.unCheckedIcon}
              />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.textBold}>I’d like to sign in faster</Text>
              <Text style={styles.textLight}>
                Use iCloud Keychain to securely store sign in credentials.
              </Text>
            </View>
          </View>

          <View style={styles.checkField}>
            <TouchableOpacity
              style={styles.checkIconContainer}
              onPress={() => {
                setCheck3(!check3);
              }}>
              <Image
                style={styles.checkIcon}
                source={check3 ? images.checkedIcon : images.unCheckedIcon}
              />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.textBold}>I accept the Terms of Use</Text>
              <Text style={styles.textLight}>
                By joining, I agree to Cuppa@ Rewards Terms, the application
                Terms, and have read the Privacy Statement.
              </Text>
            </View>
          </View>

          <Text style={styles.errMsg}>{errorMsg}</Text>
        </View>
      </TouchableWithoutFeedback>

      {loader ? (
        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <BottomBtnLoader title={'Next'} />
        </View>
      ) : (
        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <BottomBtnUser title={'Next'} img={true} onPress={handleConfirm} />
        </View>
      )}
    </SafeAreaView>
  );
}
