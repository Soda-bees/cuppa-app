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
import {loginWithGoogle, signUp} from '../../services/config/API';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken, setAuthToken} from '../../store/authSlice';
import messaging from '@react-native-firebase/messaging';

export default function ThankYou({navigation, route}) {
  const dispatch = useDispatch();

  const {isUser, userData} = route.params;

  const [loader, setLoader] = useState(false);
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
  }, []);

  const handleSignUp = async () => {
    setLoader(true);
    try {
      if (!userData?.loginWithGoogle) {
        const body = {
          userName: userData.userName,
          email: userData.email,
          countryCode: userData.countryCode,
          phoneNumber: userData.phoneNumber,
          password: userData.password,
          userSurvey: userData.userSurvey,
          profile: userData.profile,
          deviceToken,
        };

        const response = await signUp(body);
        console.log(JSON.stringify(response));
        if (response?.data?.success) {
          const token = response?.data?.token;

          dispatch(setAuthToken(token));
          setLoader(false);
        } else {
          console.log(response?.data?.message);
          setLoader(false);
        }
      } else {
        const body = {
          userName: userData?.userName,
          email: userData?.email,
          userSurvey: userData?.userSurvey,
          profile: userData?.profile,
          loginWithGoogle: userData?.loginWithGoogle,
          deviceToken: deviceToken,
        };

        console.log(body);

        const response = await loginWithGoogle(body);
        console.log('GOOGLEEEEEEE', JSON.stringify(response));
        if (response?.data?.success) {
          const token = response?.data?.token;
          dispatch(setAuthToken(token));
          setLoader(false);
        } else {
          console.log(response?.data?.message);
          setLoader(false);
        }
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  return (
    <SafeAreaView
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}
      style={styles.mainContainer}>
      <View style={styles.mainContainerBody}>
        <View style={styles.body}>
          <Text style={styles.heading}>Thank You!</Text>
          <Text style={styles.bodyText}>
            The answers you provided will help us get to know you better.
          </Text>
          <Image source={images.thankYouImg} style={styles.bodyImg} />
          <View style={styles.textContainer}>
            <Text style={styles.bodyText2}>
              Your first <Text style={styles.bodyTextBold}>Cuppa</Text> coffee
              is on us.
            </Text>
          </View>
        </View>

        {loader ? (
          <View
            style={
              Platform.OS == 'android'
                ? styles.bottomBtnContainer
                : styles.bottomBtnContainerIOS
            }>
            <BottomBtnLoader title={'First coffee is on us!'} />
          </View>
        ) : (
          <View
            style={
              Platform.OS == 'android'
                ? styles.bottomBtnContainer
                : styles.bottomBtnContainerIOS
            }>
            <BottomBtnUser
              title={'First coffee is on us!'}
              img={true}
              onPress={handleSignUp}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
