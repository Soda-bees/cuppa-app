import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  PermissionsAndroid,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtnUser from '../../components/BottomBtnUser';
import {colors} from '../../services';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../services/config/API';
import {setAuthToken} from '../../store/authSlice';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import messaging from '@react-native-firebase/messaging';
import {
  notificationListeners,
  requestUserPermission,
} from './../../services/config/NotificationService/index';
import role, {selectRole, setRole} from '../../store/role';
import {useFocusEffect} from '@react-navigation/native';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  useFocusEffect(() => {
    dispatch(setRole('user'));
  });
  const role = useSelector(selectRole);
  console.log(role);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [deviceToken, setDeviceToken] = useState(null);

  const getFcmToken = async () => {
    try {
      const token = await messaging().getToken();
      setDeviceToken(token);
      console.log('Notification token Login=', token);
      return token;
    } catch (error) {
      console.log('Error in generating token:', error);
    }
  };

  // const getFcmToken = async () => {
  //   try {
  //     // Register the device for remote messages (iOS only)
  //     if (Platform.OS === 'ios') {
  //       await messaging().registerDeviceForRemoteMessages();
  //       await messaging().setAutoInitEnabled(true);
  //     }

  //     // Get the FCM token
  //     const token = await messaging().getToken();
  //     setDeviceToken(token);
  //     console.log('Notification token Login=', token);
  //     return token;
  //   } catch (error) {
  //     console.log('Error in generating token:', error);
  //   }
  // };

  useEffect(() => {
    getFcmToken();
    notificationPermission();
  }, []);
  const notificationPermission = async () => {
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
    } else if (Platform.OS === 'ios') {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken();
      } else {
        console.log('Notification permission denied');
      }
    } else {
      getFcmToken();
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
          const response = await signIn(body);
          if (response?.data?.success) {
            console.log(response?.data);
            setLoader(false);
            setErrorMsg('');
            const token = response?.data?.token;
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

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '515132883013-b200o0vkotfhf2pdo3tq9f6uegv42gcu.apps.googleusercontent.com',
  //   });
  // }, []);

  // async function onGoogleButtonPress() {
  //   try {
  //     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  //     const {idToken, user} = await GoogleSignin.signIn();
  //     console.log(idToken, user);

  //     // Create a Google credential with the token
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //     // Sign-in the user with the credential
  //     return auth().signInWithCredential(googleCredential);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Log In'} />
        <Text style={styles.subHeading}>
          Offering coffee enthusiasts, a personalized platform with options to
          engage with local coffee shops.
        </Text>
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
          <BottomBtnUser title={'Sign In'} img={true} onPress={handleSignIn} />
        )}
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotPassContainer}>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.dividerView}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Sign In with</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.bottomSignupView}>
          <Text style={styles.textNormal}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}
            style={styles.bottomSignupTextContainer}>
            <Text style={styles.bottomSignupText}>Sign Up Today!</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            // onGoogleButtonPress();
          }}>
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
        </TouchableOpacity>
        <View style={styles.bottomSignupView}>
          <Text style={styles.textNormal}>Want to scan QR Code? </Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(setRole('admin'));
              navigation.navigate('AdminSignin');
            }}
            style={styles.bottomSignupTextContainer}>
            <Text style={styles.bottomSignupText}>Switch To Admin Panel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
