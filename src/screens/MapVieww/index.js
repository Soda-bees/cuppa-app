import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, Platform} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

import {ScrollView} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid, Alert} from 'react-native';
import Header from '../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {selectOutlets} from '../../store/outletsSlice';
import {selectLocation, setLocation} from '../../store/locationSlice';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';

export default function MapVieww({navigation, route}) {
  const cafe = route.params.filteredCafes;
  // const cafe = useSelector(selectOutlets);
  const [region, setRegion] = useState(null);
  const dispatch = useDispatch();

  console.log('Mapview======================', cafe);
  const handleAboutCafe = cafeId => {
    navigation.navigate('AboutCafe', {cafeId});
  };

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
  //       console.log(
  //         'mili?????????????????????????????????????????????????????????????',
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log('Location permission granted');
  //         // Call getCurrentPosition only if permission is granted
  //         Geolocation.getCurrentPosition(
  //           position => {
  //             const {latitude, longitude} = position.coords;
  //             console.log(
  //               position.coords,
  //               '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
  //             );
  //             setRegion({
  //               latitude,
  //               longitude,
  //               latitudeDelta: 0.01,
  //               longitudeDelta: 0.01,
  //             });
  //           },
  //           error => console.log(error.message),
  //           // {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  //         );
  //       } else {
  //         console.log('Location permission denied');
  //         // Handle permission denied case (e.g., inform the user)
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   requestLocationPermission();
  // }, []);

  // console.log('mapppvvvv', region);

  const handleStatus = openHours => {
    const currentTime = new Date();

    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    const [openTime, closeTime] = openHours.split(' - ');

    const [openHourStr, openMinuteStr] = openTime.split(':');
    const [closeHourStr, closeMinuteStr] = closeTime.split(':');

    const openHour = parseInt(openHourStr, 10);
    const openMinute = parseInt(openMinuteStr, 10);
    const closeHour = parseInt(closeHourStr, 10);
    const closeMinute = parseInt(closeMinuteStr, 10);

    const isMorning = openTime.includes('AM') || openTime.includes('am');
    const isEvening = closeTime.includes('PM') || closeTime.includes('pm');

    const adjustedCloseHour =
      isEvening && closeHour !== 12 ? closeHour + 12 : closeHour;

    const adjustedOpenHour = isMorning && openHour === 12 ? 0 : openHour;

    const openingHour24 =
      openTime.includes('AM') && openHour === 12
        ? 0
        : openTime.includes('PM')
        ? openHour + 12
        : openHour;
    const closingHour24 =
      closeTime.includes('AM') && closeHour === 12
        ? 0
        : closeTime.includes('PM')
        ? closeHour + 12
        : closeHour;
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    const openingTimeInMinutes = openingHour24 * 60 + openMinute;
    const closingTimeInMinutes = closingHour24 * 60 + closeMinute;

    if (
      currentTimeInMinutes >= openingTimeInMinutes &&
      currentTimeInMinutes <= closingTimeInMinutes
    ) {
      return 'open';
    } else {
      return 'closed';
    }
  };

  const handleRating = cafe => {
    if (cafe?.reviews && cafe.reviews.length > 0) {
      const totalRating = cafe.reviews.reduce(
        (sum, review) => sum + parseFloat(review.rating),
        0,
      );
      const averageRating = (totalRating / cafe.reviews.length).toFixed(1);
      return averageRating;
    } else {
      return 0;
    }
  };

  const handleCafeDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(1);
  };

  const location = useSelector(selectLocation);

  console.log(location, 'hhhhh');

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
          throw error;
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
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <MapView
          style={styles.map}
          region={region}
          initialRegion={{
            latitude: -33.865143,
            longitude: 151.2099,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}
          showsUserLocation
          showsMyLocationButton></MapView>

        <View style={styles.headerContainer}>
          <Header title={''} />
        </View>
        {region ? (
          <View
            style={
              Platform.OS == 'android'
                ? styles.ScrollViewContainer
                : styles.ScrollViewContainerIOS
            }>
            <View style={styles.viewAllRow}>
              <Text style={styles.viewAllHeading}>Nearest Cafes</Text>
              <TouchableOpacity style={styles.viewAllContainerMain}>
                <TouchableOpacity
                  style={styles.viewAllContainer}
                  onPress={() => {
                    navigation.navigate('AllCafes', {cafe});
                  }}>
                  <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.cafeCardContainer}>
                {cafe?.map((item, index) => {
                  const rating = handleRating(item);
                  const distance = handleCafeDistance(
                    item?.outletLocation?.latitude,
                    item?.outletLocation?.longitude,
                    location?.latitude,
                    location?.longitude,
                  );
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.cafeCard}
                      onPress={() => {
                        handleAboutCafe(item?._id);
                      }}>
                      <View>
                        <Image
                          style={styles.cafeCardImg}
                          source={{uri: item?.outletCover}}
                        />
                        <View style={styles.cafeCardRatingContainer}>
                          <Image
                            style={styles.starIcon}
                            source={images.starIcon}
                          />
                          <Text style={styles.cafeCardRatingText}>
                            {rating}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text style={styles.cafeName}>{item?.outletName}</Text>
                        <View style={styles.locationIconRow}>
                          <Image
                            style={styles.locationIcon}
                            source={images.locationIcon}
                          />
                          <Text style={styles.locationText}>
                            {item?.location}
                          </Text>
                        </View>
                        <View style={styles.distanceRow}>
                          <Text style={styles.distanceText}>
                            {handleStatus(item?.openHours)}
                          </Text>
                          <Text style={styles.distanceText}>{distance} Km</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
