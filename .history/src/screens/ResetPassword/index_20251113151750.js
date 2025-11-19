import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import {colors} from '../../services';
import BottomBtn from '../../components/BottomBtn';
import Feather from 'react-native-vector-icons/Feather';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../services/utilities/images';
import {resetPassword} from '../../services/config/API';
import BottomBtnLoader from '../../components/BottomBtnLoader';

export default function ResetPassword({navigation, route}) {
  const {email} = route.params;

  const [newpassword, setNewpassword] = useState('');
  const [hideNewPass, setHideNewPass] = useState(true);
  const [confirmpassword, setConfirmpassword] = useState('');
  const [hideConfirmPass, setHideConfirmPass] = useState(true);
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleResetPassword = async () => {
    try {
      setLoader(true);
      if (newpassword.length < 8) {
        setErrorMsg('*Password must contain at least 8 characters');
        setLoader(false);
      } else {
        if (newpassword !== confirmpassword) {
          setErrorMsg('*You have entered a wrong password');
          setLoader(false);
        } else {
          const body = {
            email,
            newPassword: newpassword,
          };
          const response = await resetPassword(body);
          if (response.data.success) {
            console.log(response?.data?.message);
            setLoader(false);
            setErrorMsg('');
            navigation.navigate('Login');
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

  return (
    <SafeAreaView
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}
      style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainContainer}>
          <Header title={'Reset Password'} />
          <Text style={styles.heading}>
            Enter a new password to reset the password of your account.
          </Text>
          <View style={styles.inputView}>
            <View>
              <Text style={styles.inputTitle}>New Password</Text>
              <TextInput
                placeholder="Enter New Password"
                style={
                  Platform.OS == 'android'
                    ? styles.inputField
                    : styles.inputFieldIOS
                }
                placeholderTextColor={colors.disabledBg3}
                onChangeText={text => setNewpassword(text)}
                value={newpassword}
                secureTextEntry={hideNewPass}
              />
            </View>

            <TouchableOpacity
              style={styles.feather}
              onPress={() => setHideNewPass(!hideNewPass)}>
              <Feather
                name={!hideNewPass ? 'eye' : 'eye-off'}
                color={colors.teal}
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputView}>
            <View>
              <Text style={styles.inputTitle}>Confirm Password</Text>
              <TextInput
                placeholder="Re-Enter New Password"
                style={
                  Platform.OS == 'android'
                    ? styles.inputField
                    : styles.inputFieldIOS
                }
                placeholderTextColor={colors.disabledBg3}
                onChangeText={text => setConfirmpassword(text)}
                value={confirmpassword}
                secureTextEntry={hideConfirmPass}
              />
            </View>

            <TouchableOpacity
              style={styles.feather}
              onPress={() => setHideConfirmPass(!hideConfirmPass)}>
              <Feather
                name={!hideConfirmPass ? 'eye' : 'eye-off'}
                color={colors.teal}
                size={20}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.errMsg}>{errorMsg}</Text>

          {loader ? (
            <View
              style={
                Platform.OS == 'android'
                  ? styles.bottomBtn
                  : styles.bottomBtnIOS
              }>
              <BottomBtnLoader title={'Next'} />
            </View>
          ) : (
            <TouchableOpacity
              style={
                Platform.OS == 'android'
                  ? styles.bottomBtn
                  : styles.bottomBtnIOS
              }
              onPress={handleResetPassword}>
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
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
