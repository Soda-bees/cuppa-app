import React, {useRef, useState} from 'react';
import {
  Image,
  Keyboard,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import {colors, sizes} from '../../services';
import BottomBtn from '../../components/BottomBtn';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../services/utilities/images';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import {forgotPasswordOTP, signIn} from '../../services/config/API';
import {SafeAreaView} from 'react-native-safe-area-context';
// import { useRoute } from '@react-navigation/native';

export default function ForgotPassword({navigation, route}) {
  const [email, setemail] = useState();
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const ref = useRef();

  const handleForgotPasswordOtp = async () => {
    setLoader(true);
    try {
      const response = await forgotPasswordOTP(email);
      if (response.data.success) {
        console.log(response?.data?.otp);
        setLoader(false);
        setErrorMsg('');
        const otp = response?.data?.otp;
        console.log(otp);
        navigation.navigate('SendOTP', {otp, email});
      } else {
        console.log(response?.data?.message);
        setLoader(false);
        setErrorMsg(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setErrorMsg('');
    }
  };

  return (
    <SafeAreaView
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}
      style={styles.mainContainer}>
      <View style={{height: sizes.screenHeight * 0.78}}>
        <TouchableWithoutFeedback
          style={{height: sizes.screenHeight * 0.76}}
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View>
            <Header title={'Forgot Password'} />
            <Text style={styles.heading}>
              Please enter your email to recieve a verification code
            </Text>
            <View style={styles.inputView}>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                placeholder={'Enter Email'}
                style={styles.inputField}
                placeholderTextColor={colors.disabledBg3}
                onChangeText={text => setemail(text)}
                value={email}
              />
            </View>

            <Text style={styles.errMsg}>{errorMsg}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {loader ? (
        <View
          style={
            Platform.OS == 'android' ? styles.bottomBtn : styles.bottomBtnIOS
          }>
          <BottomBtnLoader title={'Next'} />
        </View>
      ) : (
        <TouchableOpacity
          style={
            Platform.OS == 'android' ? styles.bottomBtn : styles.bottomBtnIOS
          }
          onPress={handleForgotPasswordOtp}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={['#165F5A', '#287C76']}
            style={styles.btnContainer}>
            <Text style={styles.buttonText}>Next</Text>
            <Image
              source={images.bottomBtnNextIcon}
              style={styles.bottomBtnNextIcon}
            />
          </LinearGradient>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}
