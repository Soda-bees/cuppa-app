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
} from '../../services/config/API';
import {selectUserData, setUserData} from '../../store/userDetails';
import QRCode from 'react-native-qrcode-svg';

export default function RewardDetails({navigation}) {
  const [showAvailableRewards, setShowAvailableRewards] = useState(true);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [rewardId, setRewardId] = useState('');
  const [loader, setLoader] = useState(false);
  const [errMsg, setErrMsg] = useState('');
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
    try {
      setLoader(true);
      const body = {
        rewardId,
      };

      const response = await addToAvailableCuppaRewards(body, token);

      if (response?.data?.success) {
        dispatch(setUserData(response?.data?.updatedUser));
        setLoader(false);
        setErrMsg('');
        setConfirmModal(false);
        setTimeout(() => {
          setSuccessModal(true);
        }, 100);
      } else {
        setLoader(false);
        setErrMsg(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
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

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Available Rewards'} iconType={'green'} />

        <View style={styles.userDetailsContainer}>
          <Image style={styles.userImg} source={images.userImg} />
          <Text style={styles.textBlackBold}>Jake Garcia</Text>
          <View style={styles.beansContainer}>
            <Image style={styles.beansGold} source={images.beansGold} />
            <Text style={styles.textLight}>500</Text>
          </View>
        </View>

        <View style={styles.availableRewardsContainer2}>
          <Text style={styles.textLight2}>User's rewards</Text>

          <View style={styles.RewardsScrollViewContainerLarge}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.itemsInRow}>
                {rewards?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.rewardsContainer2}
                      onPress={() => {
                        // setConfirmModal(true);
                        // setRewardId(item._id);
                      }}>
                      <Image style={styles.itemImgLarge} source={item?.image} />
                      <Text style={styles.textLight}>{item?.title}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
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

        <Modal
          isVisible={showModal7}
          onBackButtonPress={() => setShowModal7(false)}
          onBackdropPress={() => setShowModal7(false)}
          backdropOpacity={0.5}>
          <View style={styles.modalContainer}>
            <View style={styles.modalBottomBody}>
              <Text style={styles.modalBottomHeading}>
                Redeem Cuppa Rewards
              </Text>
              <Text style={styles.modalBottomText}>
                Before redeeming this prize, please ensure that your address is
                correct in your profile to guarantee a successful shipping
                process.
              </Text>
              <View style={styles.modalBtnContainer}>
                <TouchableOpacity
                  style={styles.modalBtnWhite}
                  onPress={() => {
                    setShowModal7(false);
                  }}>
                  <Text style={styles.modalBtnWhiteText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleModalTest();
                    setShowModal7(false);
                  }}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}
                    style={styles.modalBtngreen}>
                    <Text style={styles.modalBtnGreenText}>Redeem</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

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
          <View style={styles.modalContainer}>
            <View style={styles.modalBottomBody}>
              <Text style={styles.modalBottomHeading}>
                Turn Cuppa Beans into your favourite rewards
              </Text>
              <Text style={styles.modalBottomText2}>
                Before redeeming this prize, please ensure that your address is
                correct in your profile to guarantee a successful shipping
                process.
              </Text>
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
                      handleAddToAvailableCuppaRewards();
                    }}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#287C76', '#60B0AA']}
                      style={styles.modalBtngreen}>
                      <Text style={styles.modalBtnGreenText}>Continue</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
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
      </View>
    </SafeAreaView>
  );
}
