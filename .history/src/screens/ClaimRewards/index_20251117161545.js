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
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors, sizes} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authSlice';
import {
  addToAvailableCuppaRewards,
  getAllRewards,
} from '../../services/config/API';
import {selectUserData, setUserData} from '../../store/userDetails';
import QRCode from 'react-native-qrcode-svg';

export default function ClaimRewards({navigation}) {
  const [showAvailableRewards, setShowAvailableRewards] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const userDetails = useSelector(selectUserData);
  const [rewardId, setRewardId] = useState('');
  const [data, setData] = useState({rewardId: '', userId: ''});
  const [loader, setLoader] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [cuppaRewardId, setCuppaRewardId] = useState('');
  const [howToComplete, setHowToComplete] = useState('');
  const [instructions, setInstructions] = useState('');

  const [availableRewards, setAvailableRewards] = useState(
    userDetails.availableAdminRewards,
  );
  const [availableCuppaRewards, setAvailableCuppaRewards] = useState(
    userDetails.availableCuppaRewards,
  );
  const [rewards, setRewards] = useState([]);
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  const handleGetAllRewards = async () => {
    try {
      const response = await getAllRewards(token);
      await setRewards(response?.data?.rewards);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetAllRewards();
  }, []);

  useEffect(() => {
    setAvailableRewards(userDetails.availableAdminRewards);
    setAvailableCuppaRewards(userDetails.availableCuppaRewards);
  }, [userDetails]);

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
        }, 500);
      } else {
        setLoader(false);
        setErrMsg('Not enough beans!');
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  return (
    <SafeAreaView
      style={styles.mainContainer}
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}>
      <View>
        <Header title={'Claim Rewards'} iconType={'green'} />

        <View style={styles.availableRewardsContainer}>
          <TouchableOpacity
            style={styles.availableRewardsRow}
            onPress={() => {
              setShowAvailableRewards(!showAvailableRewards);
            }}>
            <View style={styles.availableRewardsRow}>
              {showAvailableRewards === false && (
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#287C76', '#60B0AA']}
                  style={styles.numberOfRewards}>
                  <Text style={styles.numberOfRewardsText}>
                    {availableRewards.length + availableCuppaRewards.length}
                  </Text>
                </LinearGradient>
              )}

              <Text style={styles.heading}>Available Rewards</Text>
            </View>
            <Image
              style={styles.dropDownIcon}
              source={
                showAvailableRewards ? images.dropUpnIcon : images.dropDownIcon
              }
            />
          </TouchableOpacity>

          {showAvailableRewards == true && (
            <View style={styles.availableRewardsScrollViewContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {availableRewards.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.rewardsContainer}
                      onPress={() => {
                        setData({
                          rewardId: item._id,
                          userId: userDetails._id,
                        });
                        setRewardId(item._id);
                        setShowModal7(true);
                      }}>
                      <View key={index}>
                        <Text style={styles.textBlackBold2}>
                          {item?.rewardItem?.name}
                        </Text>
                        <Text style={styles.textLight2}>
                          {truncateText(item?.rewardItem?.description, 50)}
                        </Text>
                        <Text style={styles.textLight}>Available at:</Text>
                        <Text style={styles.textBlackBold2}>
                          {item?.cafeId?.outletName}
                        </Text>
                      </View>
                      <Image
                        style={styles.itemImgSmall2}
                        source={{uri: item?.rewardItem?.image}}
                      />
                    </TouchableOpacity>
                  );
                })}
                {availableCuppaRewards.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.rewardsContainer}
                      onPress={() => {
                        setData({
                          rewardId: item._id,
                          userId: userDetails._id,
                        });
                        setRewardId(item._id);
                        setInstructions(item?.instructions);
                        setShowModal7(true);
                      }}>
                      <View key={index}>
                        <Text style={styles.textBlackBold2}>{item?.title}</Text>
                        <View style={styles.row}>
                          <Text style={styles.textBlackLight}>
                            Beans:{' '}
                            <Text style={styles.textLight}>
                              {item?.numberOfBeans}
                            </Text>
                          </Text>
                          <Image
                            style={styles.beansGold2}
                            source={images.beansGold}
                          />
                        </View>
                      </View>
                      <Image
                        style={styles.itemImgSmall}
                        source={{uri: item?.cover}}
                      />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          )}
        </View>

        <View style={styles.availableRewardsContainer2}>
          <Text style={styles.textLight}>Ready to win?</Text>
          <Text style={styles.heading}>
            Turn Cuppa Beans into your favourite rewards
          </Text>

          <View
            style={
              showAvailableRewards &&
              (availableCuppaRewards.length > 0 || availableRewards.length > 0)
                ? styles.RewardsScrollViewContainer
                : styles.RewardsScrollViewContainerLarge
            }>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.itemsInRow}>
                {rewards?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.rewardsContainer2}
                      onPress={() => {
                        setConfirmModal(true);
                        setRewardId(item._id);
                        setInstructions(item?.instructions);
                      }}>
                      <Image
                        style={styles.itemImgLarge}
                        source={{uri: item?.cover}}
                      />
                      <Text style={styles.textLight}>{item?.title}</Text>
                      <View style={styles.beansContainer}>
                        <Image
                          style={styles.beansGold}
                          source={images.beansGold}
                        />
                        <Text style={styles.textLight}>
                          {item?.numberOfBeans}
                        </Text>
                      </View>
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
          <BottomBtnUser
            title={'Rewards History'}
            img={true}
            onPress={handleConfirm}
          />
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
            <QRCode size={sizes.screenWidth * 0.4} value={userDetails._id} />
            <Text style={styles.qrModalText}>Scan to claim your reward</Text>
          </View>
        </Modal>

        <Modal
          isVisible={showModal7}
          onBackButtonPress={() => setShowModal7(false)}
          onBackdropPress={() => setShowModal7(false)}
          backdropOpacity={0.5}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setShowModal7(false);
            }}
            style={styles.modalContainer}>
            <View style={styles.modalBottomBodyConatiner}>
              <View style={styles.modalBottomBody}>
                <Text style={styles.modalBottomHeading}>
                  Redeem Cuppa Rewards
                </Text>
                <Text style={styles.modalBottomText}>
                  Before redeeming this prize, please ensure that you are at a
                  Cuppa registered cafe.
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
          </TouchableOpacity>
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
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setConfirmModal(false);
            }}
            style={styles.modalContainer}>
            <View style={styles.modalBottomBodyConatiner}>
              <View style={styles.modalBottomBody}>
                <Text style={styles.modalBottomHeading}>
                  Turn Cuppa Beans into your favourite rewards
                </Text>
                <Text style={styles.modalBottomText2}>
                  {instructions}
                  {/* Before redeeming this prize, please ensure that your address
                  is correct in your profile to guarantee a successful shipping
                  process. */}
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
      </View>
    </SafeAreaView>
  );
}
