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
import {useRoute} from '@react-navigation/native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import LinearGradient from 'react-native-linear-gradient';

export default function SendOTP({navigation, route}) {
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [errorMsg, setErrorMsg] = useState('');

  const {otp, email} = route.params;

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const handleVerifyCode = () => {
    if (otp == value) {
      navigation.navigate('ResetPassword', {email});
      setErrorMsg('');
    } else {
      setErrorMsg('Please enter correct OTP');
    }
  };

  return (
    <SafeAreaView
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}
      style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainContainerBody}>
          <Header title={'Verification Code'} />
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              You would've recieved an OTP code sent to the {email}
            </Text>

            <View style={styles.codeFieldContainer}>
              <CodeField
                ref={ref}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[
                      Platform.OS == 'android' ? styles.cell : styles.cellIOS,
                      isFocused && styles.focusCell,
                    ]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </View>

            <View style={styles.otpTextContainer}>
              <Text style={styles.forgetText}>Resend code in </Text>

              {seconds > 9 ? (
                <Text style={styles.number}> 0:{seconds}</Text>
              ) : (
                <Text style={styles.number}>0:0{seconds}</Text>
              )}

              <Text style={styles.forgetText}> seconds </Text>
            </View>
            <Text style={styles.errMsg}>{errorMsg}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={
          Platform.OS == 'android' ? styles.bottomBtn : styles.bottomBtnIOS
        }
        onPress={() => handleVerifyCode()}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#287C76', '#60B0AA']}
          style={styles.btnContainer}>
          <Text style={styles.buttonText}>Next</Text>
          <Image
            source={images.bottomBtnNextIcon}
            style={styles.bottomBtnNextIcon}
          />
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
