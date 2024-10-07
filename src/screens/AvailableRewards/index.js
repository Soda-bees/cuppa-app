import React, {useEffect, useRef, useState} from 'react';
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
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors, sizes} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import BottomBtnUser from '../../components/BottomBtnUser';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authSlice';
import {
  addToAvailableCuppaRewards,
  getAllDeals,
  getAllRewards,
  giveUserReward,
} from '../../services/config/API';
import {selectUserData, setUserData} from '../../store/userDetails';
import QRCode from 'react-native-qrcode-svg';

export default function AvailableRewards({navigation, route}) {
  const user = route.params.userData;

  const [showAvailableRewards, setShowAvailableRewards] = useState(true);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [rewardId, setRewardId] = useState('');
  const [loader, setLoader] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [rewardItem, setRewardItem] = useState('');
  const [userData, setUserData] = useState(user);

  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  const handleModalTest = () => {
    setTimeout(() => {
      setShowModal4(true);
    }, 500);
  };

  const handleConfirm = () => {
    navigation.navigate('RewardsHistory');
  };

  const truncateText = (text, maxChars) => {
    if (!text) return '';
    if (text.length > maxChars) {
      return text.substring(0, maxChars) + '...';
    }
    return text;
  };

  const handleAddToAvailableCuppaRewards = async () => {
    // try {
    //   setLoader(true);
    //   const body = {
    //     rewardId,
    //   };
    //   const response = await addToAvailableCuppaRewards(body, token);
    //   if (response?.data?.success) {
    //     dispatch(setUserData(response?.data?.updatedUser));
    //     setLoader(false);
    //     setErrMsg('');
    //     setConfirmModal(false);
    //     setTimeout(() => {
    //       setSuccessModal(true);
    //     }, 100);
    //   } else {
    //     setLoader(false);
    //     setErrMsg(response?.data?.message);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setLoader(false);
    // }
  };

  const [rewards, setRewards] = useState([
    {
      title: 'One Free Coffee',
      image: images.modalCup,
      noOfBeans: '100',
    },
    {
      title: 'One Free Coffee',
      image: images.modalCup,
      noOfBeans: '100',
    },
    {
      title: 'One Free Coffee',
      image: images.couponImg,
      noOfBeans: '100',
    },
    {
      title: 'One Free Coffee',
      image: images.modalCup2,
      noOfBeans: '100',
    },
  ]);

  const handleGiveUserReward = async () => {
    try {
      setLoader(true);
      const body = {
        userId: userData._id,
        rewardId: rewardItem._id,
      };
      console.log(body);

      const response = await giveUserReward(token, body);
      console.log(response?.data?.user);

      if (response?.data?.success) {
        setUserData(response?.data?.user);
        setLoader(false);
        setErrMsg('');
        setConfirmModal(false);
        setTimeout(() => {
          setSuccessModal(true);
        }, 500);
      } else {
        setLoader(false);
        setErrMsg(response?.data?.message);
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        {/* <Header title={'Available Rewards'} iconType={'green'} /> */}

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AdminQrMain');
            }}>
            <Image
              source={images.crossIconGreen}
              style={styles.crossIconGreen}
            />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>Available Rewards</Text>
          <View style={styles.crossIconGreen}></View>
        </View>

        <View style={styles.userDetailsContainer}>
          <Image style={styles.userImg} source={{uri: userData?.profile}} />
          <Text style={styles.textBlackBold}>{userData?.userName}</Text>
          <View style={styles.beansContainer}>
            <Image style={styles.beansGold} source={images.beansGold} />
            <Text style={styles.textLight}>{userData?.numberOfBeans}</Text>
          </View>
        </View>

        <View style={styles.availableRewardsContainer2}>
          <View style={styles.RewardsScrollViewContainerLarge}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {userData?.availableCuppaRewards?.length > 0 ? (
                <>
                  <Text style={styles.textLight2}>Cuppa Rewards</Text>
                  <View style={styles.itemsInRow}>
                    {userData?.availableCuppaRewards?.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          style={styles.rewardsContainer2}
                          onPress={() => {
                            setConfirmModal(true);
                            setRewardItem(item);
                          }}>
                          <Image
                            style={styles.itemImgLarge}
                            source={{uri: item?.cover}}
                          />
                          <Text style={styles.textLight}>{item?.title}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </>
              ) : null}

              {userData?.availableAdminRewards?.length > 0 ? (
                <>
                  <Text style={styles.textLight3}>Cafe Rewards</Text>
                  <View style={styles.itemsInRow}>
                    {userData?.availableAdminRewards?.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          style={styles.rewardsContainer2}
                          onPress={() => {
                            setConfirmModal(true);
                            setRewardItem(item);
                          }}>
                          <Image
                            style={styles.itemImgLarge}
                            source={{uri: item?.rewardItem?.image}}
                          />
                          <Text style={styles.textLight}>
                            {item?.rewardItem?.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </>
              ) : null}
            </ScrollView>
          </View>
        </View>

        {/* <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <BottomBtnUser title={''} img={true} onPress={handleConfirm} />
        </View> */}

        <Modal
          isVisible={confirmModal}
          onBackButtonPress={() => {
            setConfirmModal(false);
            setErrMsg('');
          }}
          onBackdropPress={() => {
            setConfirmModal(false);
            setErrMsg('');
          }}
          backdropOpacity={0.5}>
          <TouchableOpacity 
          onPress={() => setConfirmModal(false)}
          activeOpacity={1}
          style={styles.modalContainer}>
            <View style={styles.modalBottomBodyContainer}>
            <View style={styles.modalBottomBody}>
              <Text style={styles.modalBottomHeading}>
                Grand this reward to the user
              </Text>
              {rewardItem?.cover ? (
                <View
                  style={{
                    alignSelf: 'center',
                    marginTop: sizes.screenHeight * 0.02,
                  }}>
                  <View style={styles.rewardsContainer2}>
                    <Image
                      style={styles.itemImgLarge}
                      source={{uri: rewardItem?.cover}}
                    />
                    <Text style={styles.textLight}>{rewardItem?.title}</Text>
                  </View>
                </View>
              ) : null}

              {rewardItem?.rewardItem ? (
                <View
                  style={{
                    alignSelf: 'center',
                    marginTop: sizes.screenHeight * 0.02,
                  }}>
                  <View style={styles.rewardsContainer2}>
                    <Image
                      style={styles.itemImgLarge}
                      source={{uri: rewardItem?.rewardItem.image}}
                    />
                    <Text style={styles.textLight}>
                      {rewardItem?.rewardItem?.name}
                    </Text>
                  </View>
                </View>
              ) : null}

              <Text style={styles.errMsg}>{errMsg}</Text>
              <View style={styles.modalBtnContainer}>
                <TouchableOpacity
                  style={styles.modalBtnWhite}
                  onPress={() => {
                    setConfirmModal(false);
                    setErrMsg('');
                  }}>
                  <Text style={styles.modalBtnWhiteText}>Cancel</Text>
                </TouchableOpacity>

                {loader ? (
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}
                    style={styles.modalBtngreen}>
                    <ActivityIndicator size={28} color={colors.disabledBg} />
                  </LinearGradient>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      handleGiveUserReward();
                    }}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#287C76', '#60B0AA']}
                      style={styles.modalBtngreen}>
                      <Text style={styles.modalBtnGreenText}>Confirm</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            </View>

          </TouchableOpacity>
        </Modal>

        <Modal
          isVisible={successModal}
          onBackButtonPress={() => {
            setSuccessModal(false);
            navigation.navigate('AdminQrMain');
          }}
          onBackdropPress={() => {
            setSuccessModal(false);
            navigation.navigate('AdminQrMain');
          }}
          backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <Image source={images.reviewSuccess} style={styles.modalCup2} />

            <Text style={styles.qrModalText}>
              The selected reward has been removed from the user's rewards list.
              Please proceed to assign the reward to the user.
            </Text>
          </View>
        </Modal>

        <Modal
          isVisible={showModal3}
          onBackButtonPress={() => setShowModal3(false)}
          onBackdropPress={() => setShowModal3(false)}
          backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <Image source={images.modalCup} style={styles.modalCup} />
            <Text style={styles.modalText}>
              Your free coffee is now stored in your Reward wallet.
            </Text>
          </View>
        </Modal>

        <Modal
          isVisible={showModal4}
          onBackButtonPress={() => setShowModal4(false)}
          onBackdropPress={() => setShowModal4(false)}
          backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <QRCode size={sizes.screenWidth * 0.4} value={rewardId} />
            <Text style={styles.qrModalText}>Scan to claim your reward</Text>
          </View>
        </Modal>

        {/* <Modal
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
        </Modal> */}
      </View>
    </SafeAreaView>
  );
}
