import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {sizes} from '../../services';
import {useSelector} from 'react-redux';
import {selectUserData} from '../../store/userDetails';
import {selectOutlets} from '../../store/outletsSlice';
import {selectAuthToken} from '../../store/authSlice';
import {getAllDeals} from '../../services/config/API';
import {selectLocation} from '../../store/locationSlice';

export default function AllEvents({navigation}) {
  const userData = useSelector(selectUserData);
  const token = useSelector(selectAuthToken);
  const location = useSelector(selectLocation);

  const allCafes = useSelector(selectOutlets);

  const handleEvent = (cafeId, eventId) => {
    navigation.navigate('Event', {cafeId, eventId});
  };

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

  return (
    <SafeAreaView                 <FlatList
                  data={notification}
                  renderItem={({item, index}) => (
                    <View style={styles.notificationContainer}>
                      <Image
                        style={styles.notificationImg}
                        source={images.notificationImg}
                      />
                      <View style={styles.notificationTextContainer}>
                        <View style={styles.row}>
                          <Text style={styles.title}>{item.title}</Text>
                          <Text style={styles.time}>
                            {formatTimeAgo(item.createdAt)}
                          </Text>
                        </View>
                        <Text style={styles.description}>{item.body}</Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                />
                <FlatList
                  data={notification}
                  renderItem={({item, index}) => (
                    <View style={styles.notificationContainer}>
                      <Image
                        style={styles.notificationImg}
                        source={images.notificationImg}
                      />
                      <View style={styles.notificationTextContainer}>
                        <View style={styles.row}>
                          <Text style={styles.title}>{item.title}</Text>
                          <Text style={styles.time}>
                            {formatTimeAgo(item.createdAt)}
                          </Text>
                        </View>
                        <Text style={styles.description}>{item.body}</Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                />>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header title={'Events'} />
        </View>

        <View style={styles.toggleRow}></View>

        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {allCafes?.map((cafe, cafeIndex) => (
              <React.Fragment key={cafeIndex}>
                {filterEvents(cafe?.events, userData.clubMember)?.map(
                  (item, index) => {
                    const distance = handleCafeDistance(
                      cafe?.outletLocation?.latitude,
                      cafe?.outletLocation?.longitude,
                      location?.latitude,
                      location?.longitude,
                    );
                    return (
                      <TouchableOpacity
                        key={index}
                        style={styles.cafeCard}
                        onPress={() => {
                          handleEvent(cafe?._id, item?._id);
                        }}>
                        <View>
                          <Image
                            style={styles.cafeCardImg}
                            source={{uri: item?.coverPhoto}}
                          />
                        </View>
                        <View style={styles.distanceRow}>
                          <View>
                            <Text style={styles.cafeName}>{item?.title}</Text>
                            <View style={styles.locationIconRow}>
                              <Image
                                style={styles.locationIcon}
                                source={images.locationIcon}
                              />
                              <Text style={styles.locationText}>
                                {cafe?.outletName}
                              </Text>
                            </View>
                          </View>

                          <View style={styles.distanceRow2}>
                            <Text style={styles.cafeStatus}>{item?.date}</Text>
                            <Text style={styles.cafeDistance}>
                              {distance} Km
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  },
                )}
              </React.Fragment>
            ))}
          </ScrollView>
          <View
            style={{
              height:
                Platform.OS == 'android'
                  ? sizes.screenHeight * 0.16
                  : sizes.screenHeight * 0.23,
            }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
