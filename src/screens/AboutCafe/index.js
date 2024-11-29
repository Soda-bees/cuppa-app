import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Video from 'react-native-video';
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
import StarRating from 'react-native-star-rating-widget';
import TruncatedTextTwo from '../../components/TruncatedTextTwo';

export default function AboutCafe({navigation, route}) {
  const {cafeId} = route.params;

  const allCafes = useSelector(selectOutlets);

  const cafe = allCafes.find(cafea => cafea._id === cafeId);
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();
  const [favourite, setFavorite] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [rewardModal, setRewardModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

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

  const [showContent, setShowContent] = useState('About');

  const [coffees, setCoffees] = useState([]);

  const handleEvent = (cafeId, eventId) => {
    navigation.navigate('Event', {cafeId, eventId});
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

  ////////////////// reward work below

  const numberOfOrders = cafeId => {
    return userData?.orders?.filter(order => order?.cafeData?._id === cafeId)
      .length;
  };
  useEffect(() => {}, []);

  // const [totalCoffes, setTotalCoffees] = useState(
  //   Number(cafe?.reward?.numberOfOrders),
  // );
  // const [orderedCoffees, setOrderedCoffees] = useState(
  //   numberOfOrders(cafe?._id),
  // );

  // useEffect(() => {
  //   handleCoffees(totalCoffes, numberOfOrders(cafe?._id));
  //   handleFavorite();
  // }, [userData]);

  // const handleCoffees = (totalCoffes, orderedCoffees) => {
  //   let newCoffees = [];

  //   for (let i = 1; i <= totalCoffes; i++) {
  //     if (i <= orderedCoffees) {
  //       newCoffees.push(images.coffeeTealIcon);
  //     } else {
  //       newCoffees.push(images.coffeeGreyIcon);
  //     }
  //   }

  //   if (Number(totalCoffes) <= Number(orderedCoffees)) {
  //     setRedeem(true);
  //   }

  //   setCoffees(newCoffees);
  // };

  const [redeemLoader, setRedeemLoader] = useState(false);
  const [redeemErrMsg, setRedeemErrMsg] = useState('');

  const handleAddToAvailableAdminRewards = async rewardId => {
    try {
      setRedeemLoader(true);
      const body = {
        rewardId,
      };
      const response = await addToAvailableAdminRewards(body, token);
      console.log('resssssssssssss', response.data);
      if (response?.data?.success) {
        dispatch(setUserData(response?.data?.updatedUser));
        setRedeemLoader(false);
        setRewardModal(false);
        setRedeemErrMsg('');
        setTimeout(() => {
          setSuccessModal(true);
        }, 500);
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
  // const rewardAvailable = isRewardAvailable(cafe, userData);

  //////////////

  const [totalCoffes, setTotalCoffees] = useState(
    Number(cafe?.reward?.numberOfOrders),
  );

  const numberOfStamps = cafeId => {
    const stampData = userData?.numberOfStamps?.find(
      stamp => stamp?.cafe === cafeId,
    );
    return stampData ? stampData?.stamps : 0;
  };

  const [orderedCoffees, setOrderedCoffees] = useState(
    numberOfStamps(cafe?._id),
  );

  const handleCoffees = (totalCoffes, orderedCoffees) => {
    let newCoffees = [];

    for (let i = 1; i <= totalCoffes; i++) {
      if (i <= orderedCoffees) {
        newCoffees.push(images.coffeeTealIcon);
      } else {
        newCoffees.push(images.coffeeGreyIcon);
      }
    }

    if (Number(totalCoffes) <= Number(orderedCoffees)) {
      setRedeem(true);
    }

    setCoffees(newCoffees);
  };

  const rewardAvailable =
    Number(cafe?.reward?.numberOfOrders) <= numberOfStamps(cafe?._id);
  useEffect(() => {
    setTotalCoffees(Number(cafe?.reward?.numberOfOrders));
    setOrderedCoffees(numberOfStamps(cafe?._id));
    handleCoffees(totalCoffes, numberOfStamps(cafe?._id));
    handleFavorite();
  }, [userData]);

  const video = cafe?.catalogue?.find(catalogue => catalogue.type === 'video');

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = event => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    setCurrentIndex(newIndex);
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        {showContent === 'Reviews' ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Review', {cafe});
            }}
            style={
              Platform.OS == 'android'
                ? styles.reviewBtnContainer
                : styles.reviewBtnContainerIOS
            }>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#287C76', '#60B0AA']}
              style={styles.reviewBtn}>
              <Image source={images.pencil} style={styles.pencil} />
              {userReview ? (
                <Text style={styles.reviewBtnText}>Edit review</Text>
              ) : (
                <Text style={styles.reviewBtnText}>Write a review</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
        ) : null}

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
        {/* <View style={styles.cafeImageContainer}>
          <Image style={styles.cafeImage} source={{uri: cafe.outletCover}} />
        </View> */}

        <View style={styles.cafeImageContainer}>
          <View style={styles.catalogueContainer}>
            {cafe?.catalogue?.length > 0 ? (
              <FlatList
                data={cafe.catalogue}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                renderItem={({item}) => (
                  <View style={styles.catalogueItem}>
                    {item.type === 'image' ? (
                      <Image
                        source={{uri: item?.url}}
                        style={styles.catalogueImage}
                        resizeMode="cover"
                      />
                    ) : (
                      <Video
                        source={{uri: item?.url}}
                        style={styles.catalogueVideo}
                        resizeMode="stretch"
                        repeat
                        muted
                        playInBackground
                        playWhenInactive
                      />
                    )}
                  </View>
                )}
              />
            ) : (
              <Image
                style={styles.cafeImage}
                source={{uri: cafe.outletCover}}
              />
            )}
          </View>
        </View>

        <View style={styles.nameRow}>
          <Text style={styles.nameHeading}>{cafe.outletName}</Text>
          <View style={styles.openContainer}>
            <Text style={styles.openText}>{handleStatus(cafe.openHours)}</Text>
          </View>
        </View>

        <View style={styles.locationIconRow}>
          <View style={styles.locationIconRowLeft}>
            <View style={styles.locationRowLeft}>
              <Image style={styles.locationIcon} source={images.locationIcon} />
              <Text style={styles.locationText}>{cafe.location}</Text>
            </View>

            <View style={styles.locationRowLeft}>
              <Image style={styles.starIcon} source={images.starIcon} />
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
          </View>
        </View>

        <View style={styles.dateAndTimeRow}>
          <Image style={styles.icon} source={images.clockIcon} />
          <Text style={styles.dateText}>{cafe?.openHours}</Text>
        </View>
        {totalCoffes ? (
          <View style={styles.coffeeRow}>
            <View style={styles.coffeeContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                <View style={[{width: 10}]}></View>
              </ScrollView>
            </View>
            {/* {rewardAvailable ? (
              <View style={styles.claimedContainer}>
                <Text style={styles.openText}>Claimed</Text>
              </View>
            ) : orderedCoffees >= totalCoffes ? (
              <TouchableOpacity
                style={styles.claimedContainer}
                onPress={() => {
                  setRewardModal(true);
                }}>
                <Text style={styles.openText2}>Claim Now</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.coffeeQuantity}>
                {orderedCoffees}/{totalCoffes}
              </Text>
            )} */}

            {rewardAvailable ? (
              <TouchableOpacity
                style={styles.claimedContainer}
                onPress={() => {
                  setRewardModal(true);
                }}>
                <Text style={styles.openText2}>Claim Now</Text>
              </TouchableOpacity>
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
                Menu
              </Text>
            </TouchableOpacity>
            <View
              style={
                showContent === 'Menu' ? styles.underline : styles.noLine
              }></View>
          </View>

          <View style={styles.toggleBtnContainer}>
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => {
                setShowContent('Events');
              }}>
              <Text
                style={
                  showContent === 'Events'
                    ? styles.toggleBtnTextTeal
                    : styles.toggleBtnTextBlack
                }>
                Events
              </Text>
            </TouchableOpacity>
            <View
              style={
                showContent === 'Events' ? styles.underline : styles.noLine
              }></View>
          </View>

          <View style={styles.toggleBtnContainer}>
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => {
                setShowContent('Reviews');
              }}>
              <Text
                style={
                  showContent === 'Reviews'
                    ? styles.toggleBtnTextTeal
                    : styles.toggleBtnTextBlack
                }>
                Reviews
              </Text>
            </TouchableOpacity>
            <View
              style={
                showContent === 'Reviews' ? styles.underline : styles.noLine
              }></View>
          </View>
        </View>

        {showContent === 'About' && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingBottom: sizes.screenHeight * 0.05}}>
              <View style={styles.aboutMainContainer}>
                <View style={styles.aboutTextContainer}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <TruncatedText text={cafe?.description} maxWords={16} />
                  </ScrollView>
                </View>
                {/* {cafe?.catalogue && cafe?.catalogue?.length > 0 ? (
                  <>
                    <Text style={styles.locationHeading}>Catalogue</Text>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}>
                      <View style={styles.catalogueContainer}>
                        {cafe?.catalogue?.map((item, index) => (
                          <View key={index} style={styles.catalogueItem}>
                            {item.type === 'image' ? (
                              <Image
                                source={{uri: item?.url}}
                                style={styles.catalogueImage}
                                resizeMode="cover"
                              />
                            ) : (
                              <Video
                                source={{uri: item?.url}}
                                style={styles.catalogueVideo}
                                resizeMode="contain"
                                controls
                                repeat
                              />
                            )}
                          </View>
                        ))}
                      </View>
                    </ScrollView>
                  </>
                ) : null} */}
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
          </ScrollView>
        )}

        {showContent === 'Menu' && (
          <View
            style={{
              height: sizes.screenHeight * 0.5,
              paddingBottom: sizes.screenHeight * 0.015,
            }}>
            {cafe.category.length > 0 ? (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View
                  style={
                    Platform.OS == 'android'
                      ? styles.menuContainerMain
                      : styles.menuContainerMainIOS
                  }>
                  {cafe.category.map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        style={styles.menuContainer}
                        onPress={() => {
                          // handleMenu(menu, index, cafe.name);
                          // console.log(item._id);
                          handleMenuu(item._id, item.name);
                        }}>
                        <Image
                          style={styles.menuImg}
                          source={{uri: item.categoryCover}}
                        />
                        <View style={styles.menuNameContainer}>
                          <Text style={styles.menuNameText}>{item.name}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            ) : (
              <Text style={styles.locationHeading2}>Menu coming soon!</Text>
            )}
          </View>
        )}

        {showContent === 'Events' && (
          <View
            style={{
              maxHeight: sizes.screenHeight * 0.5,
              paddingBottom: sizes.screenHeight * 0.015,
            }}>
            {filterEvents(cafe.events, userData.clubMember)?.length > 0 ? (
              <>
                <Text style={styles.locationHeading}>Upcoming Events</Text>

                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.upcomingEventsContainerMain}>
                    {filterEvents(cafe.events, userData.clubMember).map(
                      (item, index) => {
                        return (
                          <View
                            key={index}
                            style={styles.upcomingEventsContainer}>
                            <View style={styles.eventImgContainer}>
                              <Image
                                style={styles.eventImg}
                                source={{uri: item.coverPhoto}}
                              />
                            </View>
                            <View style={styles.eventRightContainer}>
                              <View>
                                <Text style={styles.eventNameText}>
                                  {item.title}
                                </Text>
                                <Text style={styles.eventDateText}>
                                  {item.date}
                                </Text>
                              </View>
                              <TouchableOpacity
                                onPress={() => {
                                  handleEvent(cafe._id, item._id);
                                }}
                                style={styles.readMoreBtnContainer}>
                                <LinearGradient
                                  start={{x: 0, y: 0}}
                                  end={{x: 1, y: 0}}
                                  colors={['#287C76', '#60B0AA']}
                                  style={styles.readMoreBtn}>
                                  <Text style={styles.readMoreBtnText}>
                                    Read More
                                  </Text>
                                </LinearGradient>
                              </TouchableOpacity>
                            </View>
                            {index < cafe.events.length - 1 && (
                              <View style={styles.eventSeparator}></View>
                            )}
                          </View>
                        );
                      },
                    )}
                  </View>
                </ScrollView>
              </>
            ) : (
              <Text style={styles.locationHeading2}>
                New events coming soon!
              </Text>
            )}
          </View>
        )}

        {showContent === 'Reviews' && (
          <View
            style={{
              height: sizes.screenHeight * 0.5,
              paddingBottom: sizes.screenHeight * 0.015,
            }}>
            <Text style={styles.locationHeading}>Reviews</Text>

            {reviews.length > 0 ? (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.upcomingEventsContainerMain}>
                  {reviews?.map((item, index) => {
                    const {date, time} = parseTimestamp(item?.createdAt);
                    return (
                      <View key={index} style={styles.reviewContainer}>
                        <View style={styles.reviewImgContainer}>
                          <Image
                            style={styles.reviewImg}
                            source={{uri: item?.userData?.profile}}
                          />
                        </View>
                        <View style={styles.eventRightContainer}>
                          <View>
                            <View style={styles.nameDateRow}>
                              <View>
                                <Text style={styles.eventNameText}>
                                  {item?.userData?.userName}
                                </Text>
                              </View>
                              <View>
                                <Text style={styles.createdAtText}>
                                  {`${date}`}
                                </Text>
                              </View>
                            </View>
                            <View style={styles.ratingContainer}>
                              <StarRating
                                disabled={true}
                                emptyColor="#ECAC37"
                                color="#ECAC37"
                                starSize={18}
                                maxStars={5}
                                rating={item?.rating}
                                onChange={() => {}}
                                scale={0}
                              />
                              <Text
                                style={
                                  styles.rating
                                }>{` (${item?.rating})`}</Text>
                            </View>
                            <TruncatedTextTwo
                              text={item?.comment}
                              maxWords={16}
                            />
                            {item?.reply?.cafeName ? (
                              <View>
                                <Text
                                  style={[
                                    styles.rating,
                                    {alignSelf: 'flex-end', marginVertical: 6},
                                  ]}>
                                  {(() => {
                                    const repliedAt = item?.reply?.repliedAt;
                                    if (repliedAt) {
                                      const repliedDate = new Date(repliedAt);
                                      const currentDate = new Date();

                                      const isSameDay =
                                        repliedDate.getFullYear() ===
                                          currentDate.getFullYear() &&
                                        repliedDate.getMonth() ===
                                          currentDate.getMonth() &&
                                        repliedDate.getDate() ===
                                          currentDate.getDate();

                                      if (isSameDay) {
                                        return `Replied at ${repliedDate.toLocaleTimeString(
                                          [],
                                          {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                          },
                                        )}`; // Show only the time
                                      } else {
                                        return `Replied at ${moment(
                                          repliedAt,
                                        ).format('DD-MM-YYYY')}`; // Show date in DD-MM-YYYY format
                                      }
                                    }
                                    return '';
                                  })()}
                                </Text>
                                <View>
                                  <View style={styles.reviewReplyLeftRow}>
                                    <Image
                                      style={styles.reviewImg2}
                                      source={{uri: item?.reply?.cafeProfile}}
                                    />
                                    <View>
                                      <Text style={styles.textBlack}>
                                        {item?.reply?.cafeName}
                                      </Text>
                                      <Text style={styles.rating}>
                                        {item?.reply?.reply}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            ) : null}
                          </View>
                        </View>
                        {index < cafe?.reviews?.length - 1 && (
                          <View style={styles.eventSeparator}></View>
                        )}
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            ) : (
              <Text style={styles.noReviews}>
                This Cafe doesn't have any reviews on it.
              </Text>
            )}
          </View>
        )}
      </View>
      <Modal
        isVisible={showModal}
        onBackButtonPress={() => setShowModal(false)}
        onBackdropPress={() => setShowModal(false)}
        backdropOpacity={0.5}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setShowModal(false)}
          style={styles.modalContainer}>
          <View style={styles.modalBottomBodyContainer}>
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
        </TouchableOpacity>
      </Modal>
      <Modal
        isVisible={successModal}
        onBackButtonPress={() => setSuccessModal(false)}
        onBackdropPress={() => setSuccessModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.modalBody}>
          <Image source={images.reviewSuccess} style={styles.modalCup2} />

          <Text style={styles.qrModalText}>
            Reward has been added to your available rewards
          </Text>
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
              {/* {cafe?.reward?.howToComplete} */}
              Collet {Number(cafe?.reward?.numberOfOrders)} stamps from{' '}
              {cafe?.outletName} to get this reward.
            </Text>
          </View>

          {rewardAvailable ? (
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

// {redeem ? (
//   redeemLoader ? (
//     <View style={styles.redeemBtnContainer}>
//       <LinearGradient
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}
//         colors={['#287C76', '#60B0AA']}
//         style={styles.reviewBtn}>
//         <ActivityIndicator size={28} color={colors.disabledBg} />
//       </LinearGradient>
//     </View>
//   ) : rewardAvailable ? (
//     <TouchableOpacity style={styles.redeemBtnContainer} disabled>
//       <LinearGradient
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}
//         colors={['#287C76', '#60B0AA']}
//         style={styles.reviewBtn}>
//         {/* <Image source={images.redeemIcon} style={styles.pencil} /> */}
//         <Text style={styles.reviewBtnText}>Claimed</Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   ) : (
//     <TouchableOpacity
//       onPress={() => {
//         handleAddToAvailableAdminRewards(cafe?.reward?._id);
//       }}
//       style={styles.redeemBtnContainer}>
//       <LinearGradient
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}
//         colors={['#287C76', '#60B0AA']}
//         style={styles.reviewBtn}>
//         {/* <Image source={images.redeemIcon} style={styles.pencil} /> */}
//         <Text style={styles.reviewBtnText}>Redeem</Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   )
// ) : (
//   <View style={styles.redeemBtnContainer}>
//     <View style={styles.reviewBtnDisabled}>
//       {/* <Image source={images.redeemIcon} style={styles.pencil} /> */}
//       <Text style={styles.reviewBtnText}>Redeem</Text>
//     </View>
//   </View>
// )}
