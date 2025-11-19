import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import Octicons from 'react-native-vector-icons/Octicons';
import BottomBtnUser from '../../components/BottomBtnUser';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken, setAuthToken} from '../../store/authSlice';
import {tokens} from 'react-native-paper/lib/typescript/styles/themes/v3/tokens';
import {socket, socketService} from '../../services/config/Socket';
import {selectUserData} from '../../store/userDetails';
import Geolocation from '@react-native-community/geolocation';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
// import {
//   notificationListeners,
//   requestUserPermission,
// } from './src/services/config/NotificationService/index';
import {setLocation} from '../../store/locationSlice';
import {setRole} from '../../store/role';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function IntroSlider({navigation}) {
  const userData = useSelector(selectUserData);
  const authToken = useSelector(selectAuthToken);
  const dispatch = useDispatch();
  useFocusEffect(() => {
    dispatch(setRole('user'));
  });
  const [imgActive, setImgActive] = useState(0);
  const [item, setItem] = useState(['Text1', 'Text2', 'Text3', 'Text4']);
  const [region, setRegion] = useState(null);
  // const [location, setLocation] =

  useEffect(() => {
    const cleanup = socketService(dispatch, authToken, userData);

    return () => {
      cleanup();
    };
  }, [userData]);

  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.round(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  const handleConfirm = () => {
    navigation.navigate('Login');
  };

  // useEffect(() => {
  //   const initializeLocation = async () => {
  //     const hasPermission = await requestLocationPermission();
  //     if (hasPermission) {
  //       checkLocationServices()
  //         .then(() => {
  //           getCurrentLocation(setRegion, dispatch);
  //         })
  //         .catch(error => {
  //           console.log('Location services not enabled', error.message);
  //           Alert.alert(
  //             'Location Services Disabled',
  //             'Please enable location services to use this feature.',
  //           );
  //         });
  //     }
  //   };
  //   initializeLocation();
  // }, []);
  // const requestLocationPermission = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Location Permission',
  //           message:
  //             'This app needs access to your location to show your current position on the map.',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log('Location permission granted');
  //         return true;
  //       } else {
  //         console.log('Location permission denied');
  //         return false;
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //       return false;
  //     }
  //   } else {
  //     return new Promise((resolve, reject) => {
  //       Geolocation.requestAuthorization(authStatus => {
  //         if (
  //           authStatus === 'granted' ||
  //           authStatus === 'authorizedWhenInUse'
  //         ) {
  //           console.log('Location permission granted');
  //           resolve(true);
  //         } else {
  //           console.log('Location permission denied');
  //           resolve(false);
  //         }
  //       });
  //     });
  //   }
  // };
  // // const checkLocationServices = () => {
  // //   return LocationServicesDialogBox.checkLocationServicesIsEnabled({
  // //     message:
  // //       '<h2>Use Location?</h2> This app wants to change your device settings:<br/><br/>Use GPS for location<br/><br/>',
  // //     ok: 'YES',
  // //     cancel: 'NO',
  // //   });
  // // };

  // const checkLocationServices = async () => {
  //   if (Platform.OS === 'android') {
  //     return LocationServicesDialogBox.checkLocationServicesIsEnabled({
  //       message:
  //         '<h2>Use Location?</h2> This app wants to change your device settings:<br/><br/>Use GPS for location<br/><br/>',
  //       ok: 'YES',
  //       cancel: 'NO',
  //     });
  //   } else {
  //     return new Promise((resolve, reject) => {
  //       Geolocation.getCurrentPosition(
  //         position => resolve(),
  //         error => {
  //           if (error.code === 1) {
  //             reject(new Error('Location services not enabled'));
  //           } else {
  //             resolve();
  //           }
  //         },
  //         // {enableHighAccuracy: true, timeout: 20000, maximumAge: 20000}
  //       );
  //     });
  //   }
  // };
  // const getCurrentLocation = (setRegion, dispatch) => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       const {latitude, longitude} = position.coords;
  //       console.log(
  //         position.coords,
  //         '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
  //       );
  //       const locationObj = {
  //         latitude,
  //         longitude,
  //       };
  //       // dispatch(setLocation(locationObj));
  //       setRegion({
  //         latitude,
  //         longitude,
  //         latitudeDelta: 0.01,
  //         longitudeDelta: 0.01,
  //       });
  //       dispatch(setLocation(locationObj));
  //     },
  //     error => {
  //       console.log('Error getting location: ', error.message);
  //       Alert.alert(
  //         'Error',
  //         'Unable to retrieve your location. Please try again.',
  //       );
  //     },
  //     // {enableHighAccuracy: true, timeout: 20000, maximumAge: 20000},
  //   );
  // };

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      )
        .then(res => {
          console.log('res===>', res);
          if (!!res && res === 'granted') {
            requestUserPermission();
            initializeLocation();
          }
          initializeLocation();
        })
        .catch(error => {
          initializeLocation();
          console.log('error in get permission in app.js');
        });
    } else {
      // requestUserPermission();
      initializeLocation();
    }
  }, []);

  const initializeLocation = async () => {
    const hasPermission = await requestLocationPermission();
    console.log('has permission', hasPermission);
    if (hasPermission) {
      checkLocationServices()
        .then(() => {
          console.log('then');
          getCurrentLocation(setRegion, dispatch);
        })
        .catch(error => {
          console.log('catch');
          console.log('Location services not enabled', error.message);
          Alert.alert(
            'Location Services Disabled',
            'Please enable location services to use this feature.',
          );
        });
    }
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'This app needs access to your location to show your current position on the map.',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          return true;
        } else {
          console.log('Location permission denied');
          return false;
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      return true;
    }
  };
  console.log('hello', region);

  const checkLocationServices = async () => {
    // console.log("work checkLocationServices");
    // return LocationServicesDialogBox.checkLocationServicesIsEnabled({
    //   message:
    //     '<h2>Use Location?</h2> This app wants to change your device settings:<br/><br/>Use GPS for location<br/><br/>',
    //   ok: 'YES',
    //   cancel: 'NO',
    // });

    if (LocationServicesDialogBox) {
      LocationServicesDialogBox.checkLocationServicesIsEnabled({
        message:
          '<h2>Use Location?</h2> This app wants to change your device settings:<br/><br/>Use GPS for location<br/><br/>',
        ok: 'YES',
        cancel: 'NO',
      })
        .then(() => {
          console.log('Location services enabled');
        })
        .catch(error => {
          console.error('Location services not enabled', error.message);
          throw error; // Re-throw the error to handle it in the calling function
        });
    } else {
      console.error('LocationServicesDialogBox is not initialized');
    }
  };

  const getCurrentLocation = (setRegion, dispatch) => {
    console.log('work getCurrentLocation');
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        const locationObj = {
          latitude,
          longitude,
        };
        dispatch(setLocation(locationObj));
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      },
      error => {
        console.log('Error getting location: ', error.message);
        Alert.alert(
          'Error',
          'Unable to retrieve your location. Please try again.',
        );
      },
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 20000},
    );
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}>
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={({nativeEvent}) => onchange(nativeEvent)}>
        <View style={Platform.OS == 'android' ? styles.body : styles.bodyIOS}>
          <Image
            style={styles.letsGetStartedImg1}
            source={images.letsGetStartedImg1}
          />

          <Text style={styles.textBoldBlack2}>
            Welcome to <Text style={styles.bold}>Cuppa,</Text> where your coffee
            journey begins!
          </Text>
        </View>

        <View style={Platform.OS == 'android' ? styles.body : styles.bodyIOS}>
          <Image
            style={styles.letsGetStartedImg1}
            source={images.letsGetStartedImg2}
          />

          <Text style={styles.textBoldBlack}>
            Order for pickup and support local coffee shops, one cup at a time!
            Your choice makes a difference in our{' '}
            <Text style={styles.bold}>community.</Text>
          </Text>
        </View>

        <View style={Platform.OS == 'android' ? styles.body : styles.bodyIOS}>
          <Image
            style={styles.letsGetStartedImg1}
            source={images.letsGetStartedImg3}
          />

          <Text style={styles.textBoldBlack2}>
            Prepare to become a part of a vibrant{' '}
            <Text style={styles.bold}>coffee community.</Text>
          </Text>
        </View>

        <View style={Platform.OS == 'android' ? styles.body : styles.bodyIOS}>
          <Image
            style={styles.letsGetStartedImg4}
            source={images.letsGetStartedImg4}
          />

          <Text style={styles.textBoldBlack2}>
            Your daily{' '}
            <Text style={styles.bold}>caffeine fix just a tap away.</Text>
          </Text>
        </View>
      </ScrollView>

      <View style={Platform.OS == 'ios' ? styles.wrapDotIOS : styles.wrapDot}>
        {item?.map((item, index) => {
          return (
            <View key={index}>
              {Platform.OS == 'android' ? (
                <Text
                  key={index}
                  style={imgActive == index ? styles.dotActive : styles.dot}>
                  ⬤
                </Text>
              ) : (
                <Octicons
                  name={'dot-fill'}
                  color={colors.white}
                  size={sizes.screenHeight * 0.03}
                  style={imgActive == index ? styles.dotActive : styles.dot}
                />
              )}
            </View>
          );
        })}
      </View>
      <View
        style={
          Platform.OS == 'android'
            ? styles.bottomBtnContainer
            : styles.bottomBtnContainerIOS
        }>
        <BottomBtnUser
          title={"Let's get started"}
          img={true}
          onPress={handleConfirm}
        />
      </View>
    </SafeAreaView>
  );
}
