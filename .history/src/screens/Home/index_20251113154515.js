import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  RefreshControl,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import BottomBtn from '../../components/BottomBtn';
import {colors, sizes} from '../../services';
import {ScrollView} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {removeAuthToken, selectAuthToken} from '../../store/authSlice';
import {
  getAllCafes,
  getAllDeals,
  getAllEvents,
  getUserDetail,
} from '../../services/config/API';
import {selectUserData, setUserData} from '../../store/userDetails';
import {selectOutlets, setOutlets} from '../../store/outletsSlice';
import Geolocation from '@react-native-community/geolocation';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import Modal from 'react-native-modal';
import {socket, socketService} from '../../services/config/Socket';
import axios from 'axios';
import {setLocation} from '../../store/locationSlice';

export default function Home({navigation}) {
  const userData = useSelector(selectUserData);
  const authToken = useSelector(selectAuthToken);

  const watchId = useRef(null);
  const token = useSelector(selectAuthToken);
  const outlet = useSelector(selectOutlets);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const [search, setSearch] = useState('');
  const [allCafes, setAllCafes] = useState();
  const [sortedCafes, setSortedCafes] = useState([]);
  const [allDeals, setAllDeals] = useState();
  const [allEvents, setAllEvents] = useState();
  const [nearestCafes, setNearestCafes] = useState();
  const [newNotification, setNewNotification] = useState(false);

  const [region, setRegion] = useState({
    latitude: -33.865143,
    longitude: 151.2099,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  });

  useEffect(() => {
    const cleanup = socketService(dispatch, authToken, userData);

    return () => {
      cleanup();
    };
  }, [userData]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
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
    return distance;
  };

  const filterCafesByDistance = (allCafes, userData, maxDistance = 10000) => {
    const userLat = region?.latitude;
    const userLon = region?.longitude;

    return allCafes?.filter(cafe => {
      const cafeLat = cafe?.outletLocation?.latitude;
      const cafeLon = cafe?.outletLocation?.longitude;
      const distance = calculateDistance(userLat, userLon, cafeLat, cafeLon);
      return distance <= maxDistance;
    });
  };

  const handleGetUserDetails = async () => {
    try {
      const response = await getUserDetail(token);
      console.log(
        '==========================User Data=========================',
        response?.data?.userData,
      );
      dispatch(setUserData(response.data.userData));
      // setUserDetails(response?.data?.userData);
    } catch (error) {
      console.log(error);
    }
  };

  const userDetails = useSelector(selectUserData);

  const handleGetAllCafes = async () => {
    try {
      const response = await getAllCafes(token);
      console.log(
        '==========================Outlets=========================',
        response?.data?.outlets,
      );
      dispatch(setOutlets(response?.data?.outlets));
      setAllCafes(response?.data?.outlets);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetAllDeals = async () => {
    try {
      const response = await getAllDeals(token);
      console.log(
        '==========================Deals=========================',
        response?.data?.deals,
      );

      await setAllDeals(response?.data?.deals);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetAllEvents = async () => {
    try {
      const response = await getAllEvents(token);
      console.log(
        '==========================Events=========================',
        response?.data?.events,
      );
      await setAllEvents(response?.data?.events);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUserDetails();
    handleGetAllCafes();
    handleNearestCafes();
    handleGetAllEvents();
    handleGetAllDeals();
  }, [token]);

  // useEffect(() => {
  //   requestLocationPermission();
  // }, [region]);

  const handleNotification = () => {
    navigation.navigate('Notification');
  };

  const handleFavorites = () => {
    navigation.navigate('Favourites');
  };

  const handleAboutCafe = cafeId => {
    navigation.navigate('AboutCafe', {cafeId});
  };

  const handleMapView = () => {
    navigation.navigate('MapVieww', {filteredCafes});
  };

  const handleEvent = (cafeId, eventId) => {
    navigation.navigate('Event', {cafeId, eventId});
  };

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

  const isFutureDateOrToday = (dateString, timeString) => {
    const [day, month, year] = dateString.split('-').map(Number);
    const eventDate = new Date(year, month - 1, day);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (eventDate < today) {
      return false;
    }

    if (eventDate > today) {
      return true;
    }

    const [startTime, endTime] = timeString.split(' - ').map(time => {
      const [timePart, period] = time.trim().split(' ');
      let [hours, minutes] = timePart.split(':').map(Number);

      // Convert to 24-hour format
      if (period === 'PM' && hours < 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;

      return {hours, minutes};
    });

    const eventStart = new Date();
    eventStart.setHours(startTime.hours, startTime.minutes, 0, 0);

    const eventEnd = new Date();
    eventEnd.setHours(endTime.hours, endTime.minutes, 0, 0);

    const currentTime = new Date();

    return currentTime >= eventStart && currentTime <= eventEnd;
  };

  const handleNearestCafes = () => {
    const nearbyCafes = filterCafesByDistance(allCafes, userDetails);
    console.log(
      '==========================nearbyCafes=========================',
      nearbyCafes,
    );

    setNearestCafes(nearbyCafes);
  };

  useEffect(() => {
    if (allCafes?.length > 0 && userDetails) {
      handleNearestCafes();
    }
  }, [allCafes, userDetails]);

  const filteredCafes = search
    ? nearestCafes.filter(item => {
        const searchLower = search.toLowerCase();
        const nameMatches = item.outletName.toLowerCase().includes(searchLower);
        return nameMatches;
      })
    : nearestCafes;

  const handleAllCafes = cafe => {
    navigation.navigate('AllCafes', {cafe});
  };

  const [filteredEvents, setFilteredEvents] = useState([]);

  const filterEvents = (events, isClubMember) => {
    return events
      ?.filter(item => isFutureDateOrToday(item.date, item.timing))
      ?.filter(item => {
        if (!isClubMember) {
          return item.exclusive === false;
        }
        return true;
      });
  };

  useEffect(() => {
    setFilteredEvents(filterEvents);
  }, [userDetails]);

  const getDaysAgoDate = days => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date;
  };

  const countOrdersInLast7Days = orders => {
    const sevenDaysAgo = getDaysAgoDate(7);
    return orders.filter(order => new Date(order.createdAt) >= sevenDaysAgo)
      .length;
  };

  const sortCafesByRecentOrders = (cafes, limit = 7) => {
    if (!Array.isArray(cafes)) return [];
    const cafesCopy = [...cafes];
    const sortedCafes = cafesCopy.sort((a, b) => {
      const ordersA = countOrdersInLast7Days(a.orders);
      const ordersB = countOrdersInLast7Days(b.orders);
      return ordersB - ordersA;
    });
    return sortedCafes.slice(0, limit);
  };

  useEffect(() => {
    if (allCafes?.length > 0) {
      const sorted = sortCafesByRecentOrders(allCafes);
      setSortedCafes(sorted);
    }
  }, [allCafes]);

  // useEffect(() => {
  //   const initializeLocation = async () => {
  //     const hasPermission = await requestLocationPermission();
  //     if (hasPermission) {
  //       checkLocationServices()
  //         .then(() => {
  //           getCurrentLocation(setRegion);
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
  //     return true;
  //   }
  // };
  // const checkLocationServices = () => {
  //   return LocationServicesDialogBox.checkLocationServicesIsEnabled({
  //     message:
  //       '<h2>Use Location?</h2> This app wants to change your device settings:<br/><br/>Use GPS for location<br/><br/>',
  //     ok: 'YES',
  //     cancel: 'NO',
  //   });
  // };
  // const getCurrentLocation = setRegion => {
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
    // if (Platform.OS === 'android') {
    //   PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    //   )
    //     .then(res => {
    //       console.log('res===>', res);
    //       if (!!res && res === 'granted') {
    //         requestUserPermission();
    //         initializeLocation();
    //       }
    //       initializeLocation();
    //     })
    //     .catch(error => {
    //       initializeLocation();
    //       console.log('error in get permission in app.js');
    //     });
    // } else {
    // requestUserPermission();
    initializeLocation();
    // }
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
  console.log('helloHome', region);

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

  useEffect(() => {
    if (userData && userData.notifications) {
      checkNotifications(userData.notifications);
    }
  }, [userData]);

  const checkNotifications = notifications => {
    const hasUnseenNotification = notifications.some(
      notification => !notification.seen,
    );
    setNewNotification(hasUnseenNotification);
  };

  const [address, setAddress] = useState(null);
  const GOOGLE_MAPS_API_KEY = 'AIzaSyCbWOArVUIn-uRQ8S3fsvayHrep5El4ab4';

  // const getAddressFromCoordinates = async (latitude, longitude) => {
  //   try {
  //     const response = await axios.get(
  //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`,
  //     );
  //     console.log('response of adresssssssssssssssssssss', response);

  //     if (response.data.status === 'OK') {
  //       const addressComponents = response.data.results[0].address_components;
  //       const area =
  //         addressComponents.find(component =>
  //           component.types.includes('sublocality_level_1'),
  //         )?.long_name || '';
  //       const city =
  //         addressComponents.find(component =>
  //           component.types.includes('locality'),
  //         )?.long_name || '';

  //       setAddress({area, city});
  //       console.log(
  //         '==========================address=========================',
  //         area,
  //         city,
  //       );
  //     } else {
  //       console.log('Error fetching address:', response.data.status);
  //     }
  //   } catch (error) {
  //     console.log('Error in geocoding:', error);
  //   }
  // };

  // // const getAddressFromCoordinates = async (latitude, longitude) => {
  // //   try {
  // //     const response = await axios.get(
  // //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`,
  // //     );

  // //     if (response.data.status === 'OK') {
  // //       const fullAddress = response.data.results[0].formatted_address;
  // //       setAddress(fullAddress);
  // //     } else {
  // //       console.log('Error fetching address:', response.data.status);
  // //     }
  // //   } catch (error) {
  // //     console.log('Error in geocoding:', error);
  // //   }
  // // };

  // useEffect(() => {
  //   const longitude = region?.longitude;
  //   const latitude = region?.latitude;
  //   24.82189586609208, 67.03412679656822;
  //   24.97490344785739, 67.0564277222358;
  //   getAddressFromCoordinates(latitude, longitude);
  // }, [region]);
  console.log(region);

  const onRefresh = async () => {
    setLoader(true);
    try {
      await Promise.all([
        handleGetUserDetails(),
        handleGetAllCafes(),
        handleGetAllDeals(),
        handleNearestCafes(),
        handleGetAllEvents(),
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false); // Stop the loader after both calls finish
    }
  };

  // const handleSortDeals = allDeals => {
  //   // Get today's date
  //   const today = new Date();
  //   today.setHours(0, 0, 0, 0); // Normalize to start of the day

  //   // Filter out expired deals and sort valid deals
  //   const sortedDeals = allDeals
  //     ?.filter(deal => {
  //       const [day, month, year] = deal.validTill.split('-').map(Number);
  //       const validTillDate = new Date(year, month - 1, day);

  //       return validTillDate >= today; // Include only today or future dates
  //     })
  //     .sort((a, b) => {
  //       const [dayA, monthA, yearA] = a.validTill.split('-').map(Number);
  //       const [dayB, monthB, yearB] = b.validTill.split('-').map(Number);

  //       const dateA = new Date(yearA, monthA - 1, dayA);
  //       const dateB = new Date(yearB, monthB - 1, dayB);

  //       return dateA - dateB; // Earliest date first
  //     });

  //   return sortedDeals;
  // };

  const handleSortDeals = (allDeals, filteredCafes) => {
    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to start of the day

    // Filter out expired deals and sort valid deals
    const sortedDeals = allDeals
      ?.filter(deal => {
        const [day, month, year] = deal.validTill.split('-').map(Number);
        const validTillDate = new Date(year, month - 1, day);

        // Check if the deal is valid and matches any filtered cafe
        const isMatchingCafe = filteredCafes?.some(
          cafe => cafe._id === deal.cafeData,
        );

        return validTillDate >= today && isMatchingCafe; // Include only matching and valid deals
      })
      .sort((a, b) => {
        const [dayA, monthA, yearA] = a.validTill.split('-').map(Number);
        const [dayB, monthB, yearB] = b.validTill.split('-').map(Number);

        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);

        return dateA - dateB; // Earliest date first
      });

    return sortedDeals;
  };

  const sortedDeals = handleSortDeals(allDeals, filteredCafes);
  console.log(sortedDeals, 'delassssssssssssssssssssssssssss');

  return (
    <SafeAreaView>
      {allCafes && userDetails ? (
        <View style={styles.mainContainer}>
          <View style={styles.searchRow}>
            <View style={styles.searchRowLeft}>
              <Image style={styles.searchIcon} source={images.searchIcon} />
              <TextInput
                placeholder="Search"
                placeholderTextColor={colors.disabledBg2}
                onChangeText={text => {
                  setSearch(text);
                }}
                value={search}
                style={
                  Platform.OS == 'android'
                    ? styles.searchField
                    : styles.searchFieldIOS
                }
              />
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.notificationIconContainer}
                onPress={() => {
                  handleFavorites();
                }}>
                <Image
                  style={styles.notificationIcon}
                  source={images.heartIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.notificationIconContainer}
                onPress={() => {
                  handleNotification();
                }}>
                <Image
                  style={styles.notificationIcon}
                  source={images.notificationIcon}
                />
                {newNotification ? (
                  <View style={styles.notificationDot}></View>
                ) : null}
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              marginBottom: sizes.screenHeight * 0.02,
            }} // Ensures the scroll view covers the full area
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={loader}
                onRefresh={onRefresh} // Combined refresh function
                colors={[colors.tealMix]}
                progressBackgroundColor="white"
              />
            }>
            <View style={styles.viewAllRow}>
              <Text
                style={
                  Platform.OS == 'android'
                    ? styles.viewAllHeading
                    : styles.viewAllHeadingIOS
                }>
                Explore Cafes
              </Text>
              <TouchableOpacity
                style={styles.mapViewContainerMain}
                onPress={handleMapView}>
                <View style={styles.mapViewContainer}>
                  <Text style={styles.viewAllText}>Map View</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={region}
                region={region}
                showsUserLocation
                showsMyLocationButton>
                {/* <Marker
                    coordinate={{
                      latitude: region.latitude,
                      longitude: region.longitude,
                    }}
                  /> */}
              </MapView>
            </View>

            {filteredCafes?.length > 0 ? (
              <>
                {region && (
                  <View style={styles.viewAllRow}>
                    <Text
                      style={
                        Platform.OS == 'android'
                          ? styles.viewAllHeading
                          : styles.viewAllHeadingIOS
                      }>
                      Nearest Cafes
                    </Text>
                    <TouchableOpacity
                      style={styles.viewAllContainerMain}
                      onPress={() => {
                        handleAllCafes(filteredCafes);
                      }}>
                      <View style={styles.viewAllContainer}>
                        <Text style={styles.viewAllText}>View all</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.cafeCardContainer}>
                    {filteredCafes?.map((item, index) => {
                      const rating = handleRating(item);
                      const distance = handleCafeDistance(
                        item?.outletLocation?.latitude,
                        item?.outletLocation?.longitude,
                        region?.latitude,
                        region?.longitude,
                      );
                      return (
                        <TouchableOpacity
                          key={index}
                          style={styles.cafeCard}
                          onPress={() => {
                            handleAboutCafe(item._id);
                          }}>
                          <View>
                            <Image
                              style={styles.cafeCardImg}
                              source={{uri: item.outletCover}}
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
                            <Text style={styles.cafeName}>
                              {item.outletName}
                            </Text>
                            <View style={styles.locationIconRow}>
                              <Image
                                style={styles.locationIcon}
                                source={images.locationIcon}
                              />
                              <Text style={styles.locationText}>
                                {item.location.length > 20
                                  ? `${item.location.substring(0, 20)}...`
                                  : item.location}
                              </Text>
                            </View>
                            <View style={styles.distanceRow}>
                              <Text style={styles.statusText}>
                                {handleStatus(item.openHours)}
                              </Text>
                              <Text
                                style={
                                  styles.distanceText
                                }>{`${distance} km`}</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </ScrollView>
              </>
            ) : null}

            {handleSortDeals(allDeals, filteredCafes)?.length > 0 ? (
              <>
                <View style={styles.viewAllRow}>
                  <Text
                    style={
                      Platform.OS == 'android'
                        ? styles.viewAllHeading
                        : styles.viewAllHeadingIOS
                    }>
                    Exclusive Deals
                  </Text>
                  <TouchableOpacity
                    style={styles.viewAllContainerMain}
                    onPress={() => {
                      navigation.navigate('AllDeals', {
                        deals: sortedDeals,
                      });
                    }}>
                    <View style={styles.viewAllContainer}>
                      <Text style={styles.viewAllText}>View all</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.cafeCardContainer2}>
                    {handleSortDeals(allDeals, filteredCafes)?.map(
                      (item, index) => {
                        return (
                          <TouchableOpacity
                            key={index}
                            style={styles.dealContainer}
                            onPress={() => {
                              navigation.navigate('CafeDeals', {
                                deal: item,
                              });
                            }}>
                            <Image
                              style={styles.dealImg}
                              source={{uri: item?.coverPhoto}}
                            />
                          </TouchableOpacity>
                        );
                      },
                    )}
                  </View>
                </ScrollView>
              </>
            ) : null}

            <View style={styles.viewAllRow}>
              <Text
                style={
                  Platform.OS == 'android'
                    ? styles.viewAllHeading
                    : styles.viewAllHeadingIOS
                }>
                Trending Cafes
              </Text>
              <TouchableOpacity
                style={styles.viewAllContainerMain}
                onPress={() => {
                  handleAllCafes(sortedCafes);
                }}>
                <View style={styles.viewAllContainer}>
                  <Text style={styles.viewAllText}>View all</Text>
                </View>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.cafeCardContainer}>
                {sortedCafes?.map((item, index) => {
                  const rating = handleRating(item);
                  const distance = handleCafeDistance(
                    item?.outletLocation?.latitude,
                    item?.outletLocation?.longitude,
                    region?.latitude,
                    region?.longitude,
                  );
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.cafeCard}
                      onPress={() => {
                        handleAboutCafe(item._id);
                      }}>
                      <View>
                        <Image
                          style={styles.cafeCardImg}
                          source={{uri: item.outletCover}}
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
                        <Text style={styles.cafeName}>{item.outletName}</Text>
                        <View style={styles.locationIconRow}>
                          <Image
                            style={styles.locationIcon}
                            source={images.locationIcon}
                          />
                          <Text style={styles.locationText}>
                            {item.location.length > 20
                              ? `${item.location.substring(0, 20)}...`
                              : item.location}
                          </Text>
                        </View>
                        <View style={styles.distanceRow}>
                          <Text style={styles.statusText}>
                            {handleStatus(item.openHours)}
                          </Text>
                          <Text
                            style={
                              styles.distanceText
                            }>{`${distance} km`}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>

            <View style={styles.viewAllRow}>
              <Text
                style={
                  Platform.OS == 'android'
                    ? styles.viewAllHeading
                    : styles.viewAllHeadingIOS
                }>
                Upcoming Events
              </Text>
              <TouchableOpacity
                style={styles.viewAllContainerMain}
                onPress={() => {
                  if (
                    filterEvents(allEvents, userDetails?.clubMember)?.length > 0
                  ) {
                    navigation.navigate('AllEvents');
                  }
                }}>
                <View style={styles.viewAllContainer}>
                  <Text style={styles.viewAllText}>View all</Text>
                </View>
              </TouchableOpacity>
            </View>
            {filterEvents(allEvents, userDetails?.clubMember)?.length > 0 ? (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.cafeCardContainer}>
                  {allCafes?.map((cafe, cafeIndex) => (
                    <React.Fragment key={cafeIndex}>
                      {filterEvents(cafe?.events, userDetails.clubMember)?.map(
                        (item, index) => {
                          const distance = handleCafeDistance(
                            cafe?.outletLocation?.latitude,
                            cafe?.outletLocation?.longitude,
                            region?.latitude,
                            region?.longitude,
                          );
                          return (
                            <TouchableOpacity
                              key={index}
                              style={styles.cafeCard}
                              onPress={() => {
                                handleEvent(cafe._id, item._id);
                              }}>
                              <View>
                                <Image
                                  style={styles.cafeCardImg}
                                  source={{uri: item.coverPhoto}}
                                />
                              </View>
                              <View>
                                <Text style={styles.cafeName}>
                                  {item.title}
                                </Text>
                                <View style={styles.locationIconRow}>
                                  <Image
                                    style={styles.locationIcon}
                                    source={images.locationIcon}
                                  />
                                  <Text style={styles.locationText}>
                                    {cafe.outletName}
                                  </Text>
                                </View>
                                <View style={styles.distanceRow}>
                                  <Text style={styles.statusText}>
                                    {item.date}
                                  </Text>
                                  <Text
                                    style={
                                      styles.distanceText
                                    }>{`${distance} km`}</Text>
                                </View>
                              </View>
                            </TouchableOpacity>
                          );
                        },
                      )}
                    </React.Fragment>
                  ))}
                </View>
              </ScrollView>
            ) : (
              <Text style={styles.locationHeading2}>
                New events coming soon!
              </Text>
            )}

            <View style={{height: sizes.screenHeight * 0.02}}></View>
            {/* <BottomBtn
              title={"Today's Recommendation"}
              img={true}
              onPress={handleNext}
            /> */}
            <View
              style={
                Platform.OS == 'android'
                  ? styles.bottomTabBgSpace
                  : styles.bottomTabBgSpaceIOS
              }></View>
          </ScrollView>
        </View>
      ) : (
        <View style={styles.mainContainer2}>
          <Modal isVisible={true} backdropOpacity={0.3}>
            <ActivityIndicator
              size={sizes.screenWidth * 0.14}
              color={colors.tealMix}
            />
          </Modal>
        </View>
      )}
    </SafeAreaView>
  );
}
