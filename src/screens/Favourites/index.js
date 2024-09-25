import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {sizes} from '../../services';
import {useSelector} from 'react-redux';
import {selectUserData} from '../../store/userDetails';
import {selectOutlets} from '../../store/outletsSlice';
import {selectLocation} from '../../store/locationSlice';

export default function Favourites({navigation}) {
  const [showContent, setShowContent] = useState('Cafes');
  const [favoriteCafes, setFavoriteCafes] = useState([]);
  const location = useSelector(selectLocation);

  const allCafes = useSelector(selectOutlets);

  const userData = useSelector(selectUserData);

  const handleFavoriteCafes = () => {
    const favoriteCafeIds = userData.favorites.map(favorite => favorite._id);

    const favoriteCafes = allCafes.filter(cafe =>
      favoriteCafeIds.includes(cafe._id),
    );

    setFavoriteCafes(favoriteCafes);
  };

  useEffect(() => {
    handleFavoriteCafes();
  }, [userData]);

  const handleAboutCafe = cafeId => {
    navigation.navigate('AboutCafe', {cafeId});
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

  const handleChanges = () => {};

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

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header title={'Favorites'} />
        </View>

        <View style={styles.toggleRow}>
          <View style={styles.toggleBtnContainer}>
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => {
                setShowContent('Cafes');
              }}>
              <Text
                style={
                  showContent === 'Cafes'
                    ? styles.toggleBtnTextTeal
                    : styles.toggleBtnTextBlack
                }>
                Cafes
              </Text>
            </TouchableOpacity>
            <View
              style={
                showContent === 'Cafes' ? styles.underline : styles.noLine
              }></View>
          </View>

          {/* <View style={styles.toggleBtnContainer}>
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => {
                setShowContent('Orders');
              }}>
              <Text
                style={
                  showContent === 'Orders'
                    ? styles.toggleBtnTextTeal
                    : styles.toggleBtnTextBlack
                }>
                Orders
              </Text>
            </TouchableOpacity>
            <View
              style={
                showContent === 'Orders' ? styles.underline : styles.noLine
              }></View>
          </View> */}
        </View>

        {favoriteCafes.length === 0 ? (
          <Text style={styles.noFavoritesText}>
            You don't have any Cafe in your favorite cafes list!
          </Text>
        ) : (
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {showContent === 'Cafes' &&
                favoriteCafes.map((item, index) => {
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
                      style={styles.favoriteCafeContainer}
                      onPress={() => handleAboutCafe(item._id)}>
                      <View style={styles.cafeImgContainer}>
                        <Image
                          style={styles.cafeImg}
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
                      <View style={styles.cafeNameRow}>
                        <Text style={styles.cafeName}>{item.outletName}</Text>
                        <Text style={styles.cafeStatus}>
                          {handleStatus(item.openHours)}
                        </Text>
                      </View>

                      <View style={styles.locationIconRow}>
                        <View style={styles.row}>
                          <Image
                            style={styles.locationIcon}
                            source={images.locationIcon}
                          />
                          <Text style={styles.locationText}>
                            {item.location}
                          </Text>
                        </View>
                        <Text style={styles.cafeDistance}>{distance} km</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}

              {/* {showContent === 'Orders' &&
              favoriteOrders.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.favoriteOrderContainer}>
                    <View style={styles.favoriteOrderLeftContainer}>
                      <Image
                        style={styles.favoriteOrderImg}
                        source={item.image}
                      />
                      <View style={styles.favoriteOrderTextContainer}>
                        <Text style={styles.favoriteOrderTitle}>
                          {item.title}
                        </Text>
                        <Text style={styles.favoriteOrderDescription}>
                          {item.description}
                        </Text>
                        <Text style={styles.favoriteOrderPrice}>
                          {item.price}
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={styles.favoriteOrderIcon}
                      source={images.favoriteOrderIcon}
                    />
                  </TouchableOpacity>
                );
              })} */}
            </ScrollView>
            <View style={{height: sizes.screenHeight * 0.16}}></View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
