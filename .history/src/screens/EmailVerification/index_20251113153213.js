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

export default function EmailVerification({navigation, route}) {
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);
  // const route = useRoute();
  const {userData, isUser} = route.params;
  // console.log('is user?',isUser)

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

  const handleConfirm = () => {
    navigation.navigate('ResetPassword');
  };

  return (
    <SafeAreaView
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}
      style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainContainerBody}>
          <Header title={'Email Verification'} />
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              Enter 4 digit verification code sent to your registered email
              address.
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
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={
          Platform.OS == 'android' ? styles.bottomBtn : styles.bottomBtnIOS
        }
        onPress={() => {
          if (value === userData.otp) {
            navigation.navigate(isUser ? 'UploadPhoto' : 'AdminUploadPhoto', {
              userData,
              isUser,
            });
          }
        }}>
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
