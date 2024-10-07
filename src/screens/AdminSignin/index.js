import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, PermissionsAndroid, Platform, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtnUser from '../../components/BottomBtnUser';
import {colors} from '../../services';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {adminSignIn} from '../../services/config/API';
import {setAuthToken} from '../../store/authSlice';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import messaging from '@react-native-firebase/messaging';
import {
  notificationListeners,
  requestUserPermission,
} from '../../services/config/NotificationService/index';
import {setRole} from '../../store/role';
import {useFocusEffect} from '@react-navigation/native';
import {setUserData} from '../../store/userDetails';

export default function AdminScanQr({navigation}) {
  const dispatch = useDispatch();
  useFocusEffect(() => {
    dispatch(setRole('admin'));
  });

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [deviceToken, setDeviceToken] = useState(null);

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

  useEffect(() => {
    getFcmToken();
    notificationPermission();
  }, []);

  const notificationPermission = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      )
        .then(res => {
          console.log('res===>', res);
          if (!!res && res === 'granted') {
            requestUserPermission();
            notificationListeners();
          }
          notificationListeners();
        })
        .catch(error => {
          console.log('error in get permission in app.js');
        });
    } else {
    }
  };

  const handleSignIn = async () => {
    setLoader(true);
    try {
      if (!email || !password) {
        setErrorMsg('*All fields are required');
        setLoader(false);
        console.log(errorMsg);
      } else {
        if (password.length < 8) {
          setErrorMsg('*Password must contain at least 8 characters');
          console.log(errorMsg);
          setLoader(false);
        } else {
          const body = {
            email,
            password,
            deviceToken,
          };
          console.log(body);
          const response = await adminSignIn(body);
          if (response?.data?.success) {
            console.log(response?.data);
            setLoader(false);
            setErrorMsg('');
            const token = response?.data?.token;
            dispatch(setUserData(response?.data?.outletData));
            dispatch(setAuthToken(token));
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
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Log In'} />
        <Image source={images.cuppaIcon} style={styles.cuppaIcon}/>
        <View style={styles.inputView}>
          <View>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              placeholder={'Enter Email'}
              placeholderTextColor={colors.disabledBg3}
              style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <View>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              placeholder={'Enter Password'}
              style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
              placeholderTextColor={colors.disabledBg3}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={hidePass}
            />
          </View>
          <TouchableOpacity
            style={styles.feather}
            onPress={() => setHidePass(!hidePass)}>
            <Feather
              name={!hidePass ? 'eye' : 'eye-off'}
              color={colors.darkTeal}
              size={24}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.errMsg}>{errorMsg}</Text>

        {loader ? (
          <BottomBtnLoader title={'Sign In'} />
        ) : (
          <BottomBtnUser
            title={'Sign In'}
            img={true}
            onPress={() => {
              handleSignIn();
            }}
          />
        )}

        {/* <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotPassContainer}>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </TouchableOpacity> */}

        {/* <View style={styles.dividerView}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Sign In with</Text>
          <View style={styles.divider} />
        </View>

        <TouchableOpacity>
          <View style={styles.linkView}>
            <Image source={images.googleIcon} style={styles.btnImg} />
            <Text style={styles.linkText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.linkView}>
            <Image source={images.facebookIcon} style={styles.btnImg} />
            <Text style={styles.linkText}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
