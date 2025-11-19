import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {colors, sizes} from '../../services';
import {useDispatch, useSelector} from 'react-redux';
import {
  addNewReviewUserRedux,
  deleteUserReviewRedux,
  selectUserData,
  updateUserReviewRedux,
} from '../../store/userDetails';
// import StarRating from 'react-native-star-rating';
import StarRating from 'react-native-star-rating-widget';

import BottomBtnUser from '../../components/BottomBtnUser';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import {selectAuthToken} from '../../store/authSlice';
import {
  deleteReview,
  postReview,
  updateReview,
} from '../../services/config/API';
import Modal from 'react-native-modal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  addNewReviewRedux,
  deleteOutletReviewRedux,
  selectOutlets,
  updateOutletReviewRedux,
} from '../../store/outletsSlice';
export default function Review({navigation, route}) {
  const {cafe} = route.params;
  const token = useSelector(selectAuthToken);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [edit, setEdit] = useState(false);
  const [review, setReview] = useState();

  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  const [showModal1, setShowModal1] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const handlePostReview = async () => {
    try {
      setLoader(true);

      if (comment && rating !== 0) {
        const body = {
          cafeData: cafe?._id,
          comment,
          rating,
        };

        const response = await postReview(body, token);

        if (response.data.success) {
          console.log(response.data.newReview);
          dispatch(addNewReviewRedux(response.data.newReview));
          dispatch(addNewReviewUserRedux(response.data.newReview));
          setLoader(false);
          setErrMsg('');
          setShowModal1(true);
        } else {
          console.log(response.data.message);
          setErrMsg(response.data.message);
          setLoader(false);
        }
      } else {
        setErrMsg(
          'Please provide rating and some comments to post your review',
        );
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  const handleUpdateReview = async () => {
    try {
      setLoader(true);

      if (comment && rating !== 0) {
        const body = {
          reviewId: review._id,
          comment,
          rating,
        };

        const response = await updateReview(body, token);

        if (response.data.success) {
          console.log(response.data);
          dispatch(updateOutletReviewRedux(response.data));
          dispatch(updateUserReviewRedux(response.data));
          setLoader(false);
          setErrMsg('');
          setShowModal1(true);
        } else {
          console.log(response.data.message);
          setErrMsg(response.data.message);
          setLoader(false);
        }
      } else {
        setErrMsg(
          'Please provide rating and some comments to update your review',
        );
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  const handleDeleteReview = async () => {
    try {
      setLoader2(true);

      const body = {
        reviewId: review._id,
      };

      const response = await deleteReview(body, token);

      if (response.data.success) {
        console.log(response.data.deletedReview);
        dispatch(deleteOutletReviewRedux(response.data));
        dispatch(deleteUserReviewRedux(response.data));

        setLoader2(false);
        setErrMsg('');
        setDeleteModal(true);
      } else {
        console.log(response.data.message);
        setErrMsg(response.data.message);
        setLoader2(false);
      }
    } catch (error) {
      console.log(error);
      setLoader2(false);
    }
  };

  const handleSubmit = () => {
    {
      review ? handleUpdateReview() : handlePostReview();
    }
  };

  const handleCheckIfReviewed = (cafeId, userData) => {
    return (
      userData?.reviews?.some(review => {
        review.cafeData.toString() === cafeId.toString();
      }) || false
    );
  };

  const findUserReview = (reviews, userId) => {
    for (const review of reviews) {
      if (review.userData._id === userId) {
        return review;
      }
    }
    return null;
  };

  useEffect(() => {
    handleCheckIfReviewed(cafe._id, userData);
    const userReview = findUserReview(cafe.reviews, userData._id);
    if (userReview) {
      setRating(userReview.rating);
      setComment(userReview.comment);
      setReview(userReview);
    }
  }, []);

  return (
    <SafeAreaView
      style={styles.mainContainer}
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}>
      {/* <ScrollView> */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView extraHeight={100}>
          <View>
            <View style={styles.headerContainer}>
              <Header title={review ? 'Edit your review' : 'Write a review'} />
            </View>
            <Image
              style={styles.outletCover}
              source={{uri: cafe?.outletCover}}
            />
            <Text style={styles.cafeName}>{cafe?.outletName}</Text>
            <View style={styles.ratingContainer}>
              <StarRating
                emptyColor="#ECAC37"
                color="#ECAC37"
                starSize={36}
                maxStars={5}
                rating={rating}
                onChange={rating => setRating(rating)}
              />
            </View>
            <Text
              style={styles.disabledText}>{`Tell us about your experience at 
            ${cafe.outletName}`}</Text>

            <View style={styles.profileContainerMain}>
              <View style={styles.profileContainer}>
                <Image
                  style={styles.profile}
                  source={{uri: userData.profile}}
                />
                <Text style={styles.userName}>{userData.userName}</Text>
              </View>
              {review ? (
                loader2 ? (
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}
                    style={styles.deleteBtn}>
                    <ActivityIndicator color={'white'} size={26} />
                  </LinearGradient>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setConfirmModal(true);
                    }}
                    style={styles.deleteBtnContainer}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#287C76', '#60B0AA']}
                      style={styles.deleteBtn}>
                      <Image
                        source={images.deleteIcon}
                        style={styles.deleteIcon}
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                )
              ) : null}
            </View>
            <View style={styles.instructionsContainer}>
              <TextInput
                placeholder="Your review here.."
                placeholderTextColor={colors.disabledBg2}
                multiline
                value={comment}
                style={styles.descriptionInput}
                onChangeText={text => {
                  setComment(text);
                }}
              />
            </View>
            <Text style={styles.errMsg}>{errMsg}</Text>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
      {/* </ScrollView> */}
      {loader ? (
        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <BottomBtnLoader title={'Submit'} />
        </View>
      ) : (
        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <BottomBtnUser title={'Submit'} img={true} onPress={handleSubmit} />
        </View>
      )}
      <Modal isVisible={showModal1} backdropOpacity={0.5}>
        <View style={styles.modalBody}>
          <Image source={images.reviewSuccess} style={styles.modalCup} />
          {review ? (
            <Text style={styles.modalText}>
              Your review has been updated successfully.
            </Text>
          ) : (
            <Text style={styles.modalText}>
              Your review has been posted successfully.
            </Text>
          )}

          <TouchableOpacity
            onPress={() => {
              setShowModal1(false);
              navigation.navigate('Home');
            }}
            style={styles.reviewBtnContainer}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#287C76', '#60B0AA']}
              style={styles.reviewBtn}>
              <Text style={styles.reviewBtnText}>Back to Home</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal isVisible={confirmModal} backdropOpacity={0.5}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBottomBodyContainer}>
            <View style={styles.modalBottomBody}>
              <Text style={styles.modalBottomHeading}>
                Are you sure you want to delete your review?
              </Text>
              <View style={styles.modalBtnContainer}>
                <TouchableOpacity
                  style={styles.modalBtnWhite}
                  onPress={() => {
                    setConfirmModal(false);
                  }}>
                  <Text style={styles.modalBtnWhiteText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setConfirmModal(false);
                    handleDeleteReview();
                  }}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}
                    style={styles.modalBtngreen}>
                    <Text style={styles.modalBtnGreenText}>Delete</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal isVisible={deleteModal} backdropOpacity={0.5}>
        <View style={styles.modalBody}>
          <Image source={images.reviewSuccess} style={styles.modalCup} />

          <Text style={styles.modalText}>
            Your review has been deleted successfully.
          </Text>

          <TouchableOpacity
            onPress={() => {
              setDeleteModal(false);
              navigation.navigate('Home');
            }}
            style={styles.reviewBtnContainer}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#287C76', '#60B0AA']}
              style={styles.reviewBtn}>
              <Text style={styles.reviewBtnText}>Back to Home</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
