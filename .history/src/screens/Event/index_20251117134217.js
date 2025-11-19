import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Modal from 'react-native-modal';
import {colors, sizes} from '../../services';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authSlice';
import {
  cancelRegistration,
  joinExclusiveEvent,
} from '../../services/config/API';
import {selectUserData} from '../../store/userDetails';
import {selectOutlets, updateEventRedux} from '../../store/outletsSlice';

export default function Event({navigation, route}) {
  const {cafeId, eventId} = route.params;
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const token = useSelector(selectAuthToken);
  const user = useSelector(selectUserData);
  const outlets = useSelector(selectOutlets);
  const [cafe, setCafe] = useState();
  const [event, setEvent] = useState();

  const [showModal6, setShowModal6] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);

  const [register, setRegister] = useState();

  const handleNext = () => {
    navigation.navigate('');
  };

  const handleRegisterModal = () => {
    setTimeout(() => {
      setRegister(true);
    }, 2000);
  };

  const handleConfirmationModal = () => {
    setTimeout(() => {
      setShowModal2(true);
    }, 500);
  };

  const handleJoinExclusiveEvent = async () => {
    try {
      setLoader(true);
      const body = {
        eventId: event?._id,
      };
      const response = await joinExclusiveEvent(body, token);

      if (response.data.success) {
        console.log(response?.data?.selectedEvent);
        dispatch(updateEventRedux(response?.data));
        setErrorMsg('');
        setLoader(false);
        setShowModal6(false);
        setTimeout(() => {
          setShowModal2(true);
        }, 500);
      } else {
        console.log(response?.data?.message);
        setErrorMsg('');
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setErrorMsg('');
    }
  };

  const handleCancelRegistration = async () => {
    try {
      setLoader(true);
      const body = {
        eventId: event._id,
      };
      const response = await cancelRegistration(body, token);

      if (response?.data?.success) {
        console.log(response?.data?.selectedEvent);
        dispatch(updateEventRedux(response.data));
        setErrorMsg('');
        setLoader(false);
        setCancelModal(false);
      } else {
        console.log(response?.data?.message);
        setErrorMsg(response?.data?.message);
        setLoader(false);
        setCancelModal(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setErrorMsg('');
    }
  };

  const handleIsRegistered = () => {
    const isUserRegistered = event?.registeredUsers?.includes(user?._id);
    setRegister(isUserRegistered);
  };

  useEffect(() => {
    handleIsRegistered();
    const selectedCafe = outlets?.find(cafe => cafe._id === cafeId);
    const selectedEvent = selectedCafe?.events?.find(
      event => event._id === eventId,
    );
    setCafe(selectedCafe);
    setEvent(selectedEvent);
  }, [outlets]);

  return (
    <SafeAreaView
      style={styles.mainContainer}
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header iconType={'white'} />
        </View>
        <View style={styles.cafeImageContainer}>
          <Image style={styles.cafeImage} source={{uri: event?.coverPhoto}} />
          <View style={styles.exclusiveTextContainer}>
            {event?.exclusive ? (
              <Text style={styles.exclusiveText}>
                Exclusive To Cuppa Club Members
              </Text>
            ) : (
              <Text style={styles.exclusiveText}>Open Event</Text>
            )}
          </View>
        </View>

        <View style={styles.nameRow}>
          <Text style={styles.nameHeading}>{event?.title}</Text>
        </View>

        <View style={styles.locationIconRow}>
          <View style={styles.locationIconRow2}>
            <Image style={styles.locationIcon} source={images.locationIcon} />
            <Text style={styles.locationText}>{cafe?.outletName}</Text>
          </View>
          {event?.exclusive ? (
            <Text style={styles.locationText}>Total slots {event?.slots}</Text>
          ) : null}
        </View>

        <View style={styles.dateAndTimeRow}>
          <Image style={styles.icon} source={images.dateIcon2} />
          <Text style={styles.dateText}>{event?.date}</Text>
          <Image style={styles.icon} source={images.clockIcon} />
          <Text style={styles.dateText}>{event?.timing}</Text>
        </View>

        {/* <Text style={styles.punchLineText}>{event.punchLine}</Text> */}
        <Text style={styles.descriptionText}>{event?.description}</Text>

        <Modal
          isVisible={showModal6}
          onBackButtonPress={() => setShowModal6(false)}
          onBackdropPress={() => setShowModal6(false)}
          backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <Image source={images.modalCup} style={styles.modalCup} />

            <Text style={styles.modalTextHeading}> Your Presence Matters!</Text>

            <Text style={styles.modalTextNormal}>
              When you register for an exclusive event, you secure a spot that
              could have gone to another coffee enthusiast. If, for any reason,
              you're unable to attend, please let us know in advance. Please be
              aware that failure to attend an event you've signed up for may
              result in a two-week suspension from registering for other private
              events. We appreciate your understanding and commitment to making
              our exclusive gatherings a great experience for all.
            </Text>

            {loader ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.btnContainerModal}>
                <Text style={styles.buttonTextModal}>Register Now</Text>
                <ActivityIndicator color={'white'} size={30} />
              </LinearGradient>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  handleJoinExclusiveEvent();
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#287C76', '#60B0AA']}
                  style={styles.btnContainerModal}>
                  <Text style={styles.buttonTextModal}>Register Now</Text>
                  <Image
                    source={images.bottomBtnNextIcon}
                    style={styles.bottomBtnNextIconModal}
                  />
                </LinearGradient>
              </TouchableOpacity>
            )}
          </View>
        </Modal>

        <Modal
          isVisible={showModal2}
          // onBackButtonPress={() => setShowModal2(false)}
          onBackdropPress={() => setShowModal2(false)}
          backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <Image source={images.modalCup} style={styles.modalCup} />
            <Text style={styles.modalText}>
              You Have Successfully been Registered to the Event!
            </Text>
          </View>
        </Modal>

        <Modal
          isVisible={cancelModal}
          onBackButtonPress={() => setCancelModal(false)}
          onBackdropPress={() => setCancelModal(false)}
          backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <Text style={styles.modalTextHeading}>
              Are you sure you want to cancel your registration?
            </Text>

            {loader ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.btnContainerModal}>
                <Text style={styles.buttonTextModal}>Cancel Now</Text>
                <ActivityIndicator color={'white'} size={30} />
              </LinearGradient>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  handleCancelRegistration();
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#287C76', '#60B0AA']}
                  style={styles.btnContainerModal}>
                  <Text style={styles.buttonTextModal}>Cancel Now</Text>
                  <Image
                    source={images.bottomBtnNextIcon}
                    style={styles.bottomBtnNextIconModal}
                  />
                </LinearGradient>
              </TouchableOpacity>
            )}
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
