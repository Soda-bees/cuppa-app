import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

import {colors, sizes} from '../../services';
import {ScrollView} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import TruncatedText from '../../components/TruncatedText';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {selectOutlets} from '../../store/outletsSlice';
import {selectUserData, setUserData} from '../../store/userDetails';
import {selectAuthToken} from '../../store/authSlice';
import {
  addToAvailableAdminRewards,
  toggleFavorites,
} from '../../services/config/API';
import Modal from 'react-native-modal';
import BottomBtnUser from '../../components/BottomBtnUser';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import TruncatedTextTwo from '../../components/TruncatedTextTwo';

export default function CafeDeals({navigation, route}) {
  const {deal} = route.params;
  const cafeId = deal.cafeData;
  const menus = deal.menuData;
  useEffect(() => {
    console.log(menus);
  }, []);

  const allCafes = useSelector(selectOutlets);

  const cafe = allCafes.find(cafea => cafea._id === cafeId);
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();
  const [favourite, setFavorite] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [rewardModal, setRewardModal] = useState(false);

  const handleRating = cafe => {
    if (cafe?.reviews && cafe?.reviews?.length > 0) {
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

  const [rating, setRating] = useState(handleRating(cafe));
  const [redeem, setRedeem] = useState();

  const [reviews, setReviews] = useState([]);

  const userData = useSelector(selectUserData);

  const numberOfOrders = cafeId => {
    return userData?.orders?.filter(order => order?.cafeData?._id === cafeId)
      .length;
  };
  const outlets = useSelector(selectOutlets);

  const [totalCoffes, setTotalCoffees] = useState(
    Number(cafe?.reward?.numberOfOrders),
  );
  const [orderedCoffees, setOrderedCoffees] = useState(
    numberOfOrders(cafe._id),
  );
  const [showContent, setShowContent] = useState('About');

  const [coffees, setCoffees] = useState([]);

  const handleEvent = (cafeId, eventId) => {
    navigation.navigate('Event', {cafeId, eventId});
  };

  useEffect(() => {
    handleCoffees(totalCoffes, orderedCoffees);
    handleFavorite();
  }, [userData]);

  const handleCoffees = (totalCoffes, orderedCoffees) => {
    let newCoffees = [];

    for (let i = 1; i <= totalCoffes; i++) {
      if (i <= orderedCoffees) {
        newCoffees.push(images.coffeeTealIcon);
      } else {
        newCoffees.push(images.coffeeGreyIcon);
      }
    }

    if (Number(totalCoffes) === Number(orderedCoffees)) {
      setRedeem(true);
    }

    setCoffees(newCoffees);
  };

  const handleMenuu = (categoryId, category) => {
    const filteredMenu = cafe.menu.filter(
      item => item.category._id === categoryId,
    );
    console.log(filteredMenu);
    navigation.navigate('Menu', {filteredMenu, category, cafe});
  };

  const handleStatus = openHours => {
    const currentTime = new Date();

    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    const [openTime, closeTime] = openHours?.split(' - ');

    const [openHourStr, openMinuteStr] = openTime?.split(':');
    const [closeHourStr, closeMinuteStr] = closeTime?.split(':');

    const openHour = parseInt(openHourStr, 10);
    const openMinute = parseInt(openMinuteStr, 10);
    const closeHour = parseInt(closeHourStr, 10);
    const closeMinute = parseInt(closeMinuteStr, 10);

    const isMorning = openTime.includes('AM') || openTime?.includes('am');
    const isEvening = closeTime.includes('PM') || closeTime?.includes('pm');

    const adjustedCloseHour =
      isEvening && closeHour !== 12 ? closeHour + 12 : closeHour;

    const adjustedOpenHour = isMorning && openHour === 12 ? 0 : openHour;

    const openingHour24 =
      openTime?.includes('AM') && openHour === 12
        ? 0
        : openTime?.includes('PM')
        ? openHour + 12
        : openHour;
    const closingHour24 =
      closeTime?.includes('AM') && closeHour === 12
        ? 0
        : closeTime?.includes('PM')
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

  const handleFavorites = async () => {
    try {
      setLoader(true);
      const body = {
        cafeId: cafe._id,
      };

      const response = await toggleFavorites(body, token);

      if (response?.data?.success) {
        dispatch(setUserData(response?.data?.populatedUserData));
        setLoader(false);
        setShowModal(false);
      } else {
        setLoader(false);
        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setErrorMsg('');
      setShowModal(false);
    }
  };

  const handleFavorite = () => {
    // const isCafeInFavorites = userData?.favorites?.includes(cafe._id);
    const isIdFound = userData?.favorites?.some(item => item._id === cafe._id);
    setFavorite(isIdFound);
  };
  const handleModal = () => {
    setShowModal(false);
  };

  const parseTimestamp = timestamp => {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    let hours = date.getHours();
    const amPM = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes} ${amPM}`;

    return {date: formattedDate, time: formattedTime};
  };

  const processReviews = (cafe, userId) => {
    const userReview = cafe?.reviews?.find(
      review => review?.userData?._id?.toString() === userId?.toString(),
    );
    const otherReviews = cafe.reviews.filter(
      review => review?.userData?._id?.toString() !== userId?.toString(),
    );
    return {userReview, otherReviews};
  };

  const {userReview, otherReviews} = processReviews(cafe, userData._id);

  useEffect(() => {
    setReviews(userReview ? [userReview, ...otherReviews] : otherReviews);
  }, []);

  const [redeemLoader, setRedeemLoader] = useState(false);
  const [redeemErrMsg, setRedeemErrMsg] = useState('');

  const handleAddToAvailableAdminRewards = async rewardId => {
    try {
      setRedeemLoader(true);
      const body = {
        rewardId,
      };

      const response = await addToAvailableAdminRewards(body, token);

      if (response?.data?.success) {
        dispatch(setUserData(response?.data?.updatedUser));
        setRedeemLoader(false);
        setRedeemErrMsg('');
      } else {
        setRedeemLoader(false);
        setRedeemErrMsg(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
      setRedeemLoader(false);
    }
  };

  const isRewardAvailable = (cafe, userData) => {
    if (!cafe?.reward?._id || !userData?.availableAdminRewards) return false;
    return userData.availableAdminRewards.some(
      reward => reward._id === cafe.reward._id,
    );
  };
  const rewardAvailable = isRewardAvailable(cafe, userData);

  const isFutureDate = dateString => {
    const [day, month, year] = dateString.split('-').map(Number);
    const eventDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    return eventDate > currentDate;
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

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={navigation.goBack}
              style={styles.backIconContainer}>
              <Image style={styles.backIcon} source={images.backIconWhite} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowModal(true);
              }}
              style={styles.backIconContainer}>
              <View style={styles.favouritesIconContainer}>
                <Image
                  style={styles.favouritesIcon}
                  source={favourite ? images.favouritesIcon : images.heartIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cafeImageContainer}>
          <Image style={styles.cafeImage} source={{uri: cafe.outletCover}} />
        </View>

        <View style={styles.nameRow}>
          <Text style={styles.nameHeading}>{cafe.outletName}</Text>
          <View style={styles.openContainer}>
            <Text style={styles.openText}>{handleStatus(cafe.openHours)}</Text>
          </View>
        </View>

        <View style={styles.locationIconRow}>
          <View style={styles.locationIconRowLeft}>
            <Image style={styles.locationIcon} source={images.locationIcon} />
            <Text style={styles.locationText}>{cafe.location}</Text>
            <Image style={styles.starIcon} source={images.starIcon} />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
        {totalCoffes ? (
          <View style={styles.coffeeRow}>
            <View style={styles.coffeeContainer}>
              {coffees.map((item, index) => {
                return index === coffees.length - 1 ? (
                  // <Text key={index}>Last Item</Text>
                  <View key={index}>
                    <Image style={styles.coffee} source={item} />
                    <TouchableOpacity
                      style={styles.rewardIconContainer}
                      onPress={() => {
                        setRewardModal(true);
                      }}>
                      <Image
                        style={styles.rewardIcon}
                        source={images.rewardIcon}
                      />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <Image style={styles.coffee} key={index} source={item} />
                );
              })}
            </View>
            {rewardAvailable ? (
              <View style={styles.claimedContainer}>
                <Text style={styles.openText}>Claimed</Text>
              </View>
            ) : (
              <Text style={styles.coffeeQuantity}>
                {orderedCoffees}/{totalCoffes}
              </Text>
            )}
          </View>
        ) : null}

        <View style={styles.toggleRow}>
          <View style={styles.toggleBtnContainer}>
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => {
                setShowContent('About');
              }}>
              <Text
                style={
                  showContent === 'About'
                    ? styles.toggleBtnTextTeal
                    : styles.toggleBtnTextBlack
                }>
                About
              </Text>
            </TouchableOpacity>
            <View
              style={
                showContent === 'About' ? styles.underline : styles.noLine
              }></View>
          </View>

          <View style={styles.toggleBtnContainer}>
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => {
                setShowContent('Menu');
              }}>
              <Text
                style={
                  showContent === 'Menu'
                    ? styles.toggleBtnTextTeal
                    : styles.toggleBtnTextBlack
                }>
                Deal Menu
              </Text>
            </TouchableOpacity>
            <View
              style={
                showContent === 'Menu'
                  ? styles.underlineMenu
                  : styles.noLineMenu
              }></View>
          </View>
        </View>

        {showContent === 'About' && (
          <View>
            <View style={styles.aboutMainContainer}>
              <View style={styles.aboutTextContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <TruncatedText text={cafe.description} maxWords={16} />
                </ScrollView>
              </View>
              <Text style={styles.locationHeading}>Location</Text>
            </View>

            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                showsUserLocation
                showsMyLocationButton
                region={{
                  latitude: cafe?.outletLocation?.latitude,
                  longitude: cafe?.outletLocation?.longitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}>
                <Marker
                  coordinate={{
                    latitude: cafe?.outletLocation?.latitude,
                    longitude: cafe?.outletLocation?.longitude,
                  }}
                />
              </MapView>
            </View>
          </View>
        )}

        {showContent === 'Menu' && (
          <View style={{height: sizes.screenHeight * 0.3}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={
                  Platform.OS == 'android'
                    ? styles.menuBody
                    : styles.menuBodyIOS
                }>
                <View>
                  {menus.map((item, index) => {
                    return (
                      <View key={index} style={styles.menuContainer}>
                        <View style={styles.menuSubContainer}>
                          <View style={styles.itemImgContainer}>
                            <Image
                              style={styles.itemImg}
                              source={{uri: item.image}}
                            />
                          </View>
                          <View style={styles.itemRightContainer}>
                            <Text style={styles.itemNameText}>{item.name}</Text>
                            <Text style={styles.itemPriceText}>
                              {`$ ${item.sizes[0].price}`}
                            </Text>
                          </View>
                        </View>
                        {index < menus.length - 1 && (
                          <View style={styles.eventSeparator}></View>
                        )}
                      </View>
                    );
                  })}
                </View>
              </View>
            </ScrollView>
          </View>
        )}
        {showContent === 'Menu' ? (
          <View
            style={
              Platform.OS == 'android'
                ? styles.bottomBtnContainer2
                : styles.bottomBtnContainer2IOS
            }>
            <BottomBtnUser
              title={'Place Order'}
              img={true}
              onPress={() => {
                navigation.navigate('DealOrderSummary', {deal});
              }}
            />
          </View>
        ) : null}
      </View>
      <Modal
        isVisible={showModal}
        onBackButtonPress={() => setShowModal(false)}
        onBackdropPress={() => setShowModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.modalContainer}>
          {favourite ? (
            <View style={styles.modalBottomBody}>
              <View style={styles.modalBottomTextBody}>
                <Text style={styles.modalTextBold}>
                  Do you want to remove this cafe from your favorites?
                </Text>
              </View>

              <View style={styles.bottomBtnContainer}>
                {loader ? (
                  <BottomBtnLoader title={'Remove'} />
                ) : (
                  <BottomBtnUser
                    title={'Remove'}
                    img={true}
                    onPress={handleFavorites}
                  />
                )}
              </View>
            </View>
          ) : (
            <View style={styles.modalBottomBody}>
              <View style={styles.modalBottomTextBody}>
                <Text style={styles.modalTextBold}>
                  Do you want to add this cafe to your favorites?
                </Text>
              </View>

              <View style={styles.bottomBtnContainer}>
                {loader ? (
                  <BottomBtnLoader title={'Add'} />
                ) : (
                  <BottomBtnUser
                    title={'Add'}
                    img={true}
                    onPress={handleFavorites}
                  />
                )}
              </View>
            </View>
          )}
        </View>
      </Modal>

      <Modal
        isVisible={rewardModal}
        onBackButtonPress={() => setRewardModal(false)}
        onBackdropPress={() => setRewardModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.rewardModalBody}>
          <View style={styles.rewardItemImgContainer}>
            <Image
              style={styles.rewardItemImg}
              source={{uri: cafe?.reward?.rewardItem?.image}}
            />
          </View>

          <Text style={styles.rewardItemName}>
            {cafe?.reward?.rewardItem?.name}
          </Text>
          <Text style={styles.rewardItemDescription}>
            {cafe?.reward?.rewardItem?.description}
          </Text>

          <View style={styles.rewardModalTextBody}>
            <Text style={styles.rewardModalTextBold}>
              {cafe?.reward?.howToComplete}
            </Text>
          </View>

          {redeem ? (
            redeemLoader ? (
              <View style={styles.redeemBtnContainer}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#287C76', '#60B0AA']}
                  style={styles.reviewBtn}>
                  <ActivityIndicator size={28} color={colors.disabledBg} />
                </LinearGradient>
              </View>
            ) : rewardAvailable ? (
              <TouchableOpacity style={styles.redeemBtnContainer}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#287C76', '#60B0AA']}
                  style={styles.reviewBtn}>
                  {/* <Image source={images.redeemIcon} style={styles.pencil} /> */}
                  <Text style={styles.reviewBtnText}>Claimed</Text>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  handleAddToAvailableAdminRewards(cafe?.reward?._id);
                }}
                style={styles.redeemBtnContainer}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#287C76', '#60B0AA']}
                  style={styles.reviewBtn}>
                  {/* <Image source={images.redeemIcon} style={styles.pencil} /> */}
                  <Text style={styles.reviewBtnText}>Redeem</Text>
                </LinearGradient>
              </TouchableOpacity>
            )
          ) : (
            <View style={styles.redeemBtnContainer}>
              <View style={styles.reviewBtnDisabled}>
                {/* <Image source={images.redeemIcon} style={styles.pencil} /> */}
                <Text style={styles.reviewBtnText}>Redeem</Text>
              </View>
            </View>
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
}
