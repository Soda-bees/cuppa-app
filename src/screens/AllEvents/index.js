import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, ScrollView, Text, TouchableOpacity} from 'react-native';
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
      ?.filter(item => isFutureDate(item.date))
      ?.filter(item => {
        if (!isClubMember) {
          return item.exclusive === false;
        }
        return true;
      });
  };

  const isFutureDate = dateString => {
    const [day, month, year] = dateString.split('-').map(Number);
    const eventDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    return eventDate > currentDate;
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
    <SafeAreaView>
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
          <View style={{height:Platform.OS == 'android' ? sizes.screenHeight * 0.16 : sizes.screenHeight * 0.23}}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
