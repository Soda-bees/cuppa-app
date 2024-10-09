import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, Text, TextInput, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors, fontSize, sizes} from '../../services';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import BottomBtn from '../../components/BottomBtn';
import Modal from 'react-native-modal';
// import CircularProgress from 'react-native-circular-progress-indicator';
// import ProgressCircle from 'react-native-progress-circle';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserData, setUserData} from '../../store/userDetails';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import BottomBtnUser from '../../components/BottomBtnUser';
import {cancelMembership} from '../../services/config/API';
import {selectAuthToken} from '../../store/authSlice';

export default function RewardsMain({navigation}) {
  const dispatch = useDispatch();
  const [successModal, setSuccessModal] = useState(false);
  const userData = useSelector(selectUserData);
  const token = useSelector(selectAuthToken);

  const [showContent, setShowContent] = useState('My Rewards');
  const [clubMember, setClubMember] = useState(userData?.clubMember);

  const [showModal, setShowModal] = useState(false);
  const [unsubModal, setUnsubModal] = useState(false);
  const [unsub, setUnsub] = useState(false);
  const [loader, setLoader] = useState(false);

  const [membershipPerks, setMembershipPerks] = useState([
    {
      image: images.modalCup,
      title: 'Receive 2 free coffes per week.',
      description:
        'Redeem two free coffees per week at any Cuppa-listed local coffee shop.',
    },
    {
      image: images.rewards2x,
      title: 'Double the excitement, Double the rewards!',
      description:
        'Every activity and eligible purchase earns you double the points. Benefit of the opportunity to boost your way to wonderful rewards.',
    },
    {
      image: images.exclusiveEvents,
      title: 'Exclusive Events',
      description:
        'Gain exclusive access to organized events hosted by coffee shops.',
    },
  ]);

  const [extraPoints, setExtraPoints] = useState([
    {
      title: 'We love feedback!',
      description: 'Let us know how we did and get extra points.',
      noOfBeans: '40',
    },
    {
      title: 'Enjoy with friends!',
      description: 'We give a gift to your friends for their first visit.',
      noOfBeans: '50',
    },
  ]);

  const handleNext = () => {
    navigation.navigate('Checkout');
  };

  const handleClaimRewards = () => {
    navigation.navigate('ClaimRewards');
  };

  const handleViewBenefits = () => {
    setShowModal(true);
  };

  const handleCancelMembership = async () => {
    setLoader(true);
    try {
      const response = await cancelMembership(token);
      if (response?.data?.success) {
        console.log(
          '==========================Updated User Data=========================',
          response?.data?.updatedUser,
        );
        dispatch(setUserData(response?.data?.updatedUser));
        setLoader(false);
        setUnsubModal(false);
        setTimeout(() => {
          setSuccessModal(true);
        }, 500);
      } else {
        setLoader(false);
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
      setErrMsg(error);
    }
  };

  useEffect(() => {});

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header
          headerType={'Rewards'}
          favourite={false}
          title={'Rewards'}
          userIcon={userData?.profile}
        />

        <View style={styles.toggleRow}>
          <View style={styles.toggleBtnContainer}>
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => {
                setShowContent('My Rewards');
              }}>
              <Text
                style={
                  showContent === 'My Rewards'
                    ? styles.toggleBtnTextTeal
                    : styles.toggleBtnTextBlack
                }>
                My Rewards
              </Text>
            </TouchableOpacity>
            <View
              style={
                showContent === 'My Rewards' ? styles.underline : styles.noLine
              }></View>
          </View>

          <View style={styles.toggleBtnContainer}>
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => {
                setShowContent('How it works');
              }}>
              <Text
                style={
                  showContent === 'How it works'
                    ? styles.toggleBtnTextTeal
                    : styles.toggleBtnTextBlack
                }>
                How it works
              </Text>
            </TouchableOpacity>
            <View
              style={
                showContent === 'How it works'
                  ? styles.underline
                  : styles.noLine
              }></View>
          </View>
        </View>

        <View style={styles.scrollViewContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {showContent === 'My Rewards' && (
              <View style={styles.scrollViewBodyContainer}>
                <View style={styles.myRewardsShareBgContainer}>
                  <Image
                    style={styles.myRewardsShareBg}
                    source={images.myRewardsShareBg}
                  />
                  <View style={styles.myRewardsShareTextContainer}>
                    <Text style={styles.shareTextWhite}>
                      Share Cuppa With Friends & Family
                    </Text>
                    {/* <TouchableOpacity style={styles.shareBtn}>
                      <Text style={styles.shareBtnText}>Share</Text>
                    </TouchableOpacity> */}
                  </View>
                </View>

                {userData?.clubMember ? (
                  <View style={{alignItems: 'center'}}>
                    <View style={styles.membershipCardContainer2}>
                      <Image
                        style={styles.cuppaClubMembershipBg}
                        source={images.cuppaClubMembershipBg}
                      />
                      <View style={styles.membershipCardTextContainer}>
                        <View>
                          <Text style={styles.membershipStatus}>
                            Membership status
                          </Text>
                          <Text style={styles.shareTextWhite2}>
                            Cuppa Club Member
                          </Text>
                        </View>

                        <TouchableOpacity
                          style={styles.shareBtn3}
                          onPress={() => {
                            setUnsubModal(true);
                          }}>
                          <Text style={styles.shareBtnText}>
                            Cancel Subscription
                          </Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                          style={styles.shareBtn3}
                          onPress={() => {
                            handleViewBenefits();
                          }}>
                          <Text style={styles.shareBtnText}>View benefits</Text>
                        </TouchableOpacity> */}
                      </View>
                    </View>
                    <Text style={styles.heading}>
                      Here's what you've earned
                    </Text>

                    <View style={styles.beansRow}>
                      <Text style={styles.textVeryLarge}>
                        {userData?.numberOfBeans}
                      </Text>
                      <Image
                        style={styles.beansGold}
                        source={images.beansGold}
                      />
                      <Image
                        style={styles.rightArrowIconn}
                        source={images.rightArrowIconn}
                      />
                    </View>

                    <TouchableOpacity onPress={handleClaimRewards}>
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#287C76', '#60B0AA']}
                        style={styles.claimRewardsBtnContainer}>
                        <Text style={styles.claimRewardsBtnText}>
                          Claim Rewards
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>

                    {/* <View style={styles.progressCircleContainer2}>
                      <View>
                        <Text style={styles.heading}>Weekly Challenge:</Text>
                        <Text style={styles.textRegular}>
                          7 day streak of coffee purchase
                        </Text>
                      </View>
                      <AnimatedCircularProgress
                        size={54}
                        width={7}
                        fill={50}
                        rotation={0}
                        lineCap="round"
                        tintColor="#60B0AA"
                        backgroundColor="#60B0AA33">
                        {fill => (
                          <Text style={styles.ProgressCircleText}>{fill}%</Text>
                        )}
                      </AnimatedCircularProgress>
                    </View>

                    <View style={styles.getExtraPointsContainerMain}>
                      <Text style={styles.heading}>Get extra points</Text>
                      <View style={styles.separator}></View>
                      {extraPoints.map((item, index) => {
                        return (
                          <View key={index}>
                            <View style={styles.getExtraPointsContainer}>
                              <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>
                                  {item.description}
                                </Text>
                              </View>
                              <View>
                                <Text style={styles.noOfBeans}>
                                  +{item.noOfBeans}
                                </Text>
                                <Text style={styles.beans}>beans</Text>
                              </View>
                            </View>
                            {index < extraPoints.length - 1 && (
                              <View style={styles.separator}></View>
                            )}
                          </View>
                        );
                      })}
                    </View> */}
                  </View>
                ) : (
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.heading}>
                      Here's what you've earned
                    </Text>

                    <View style={styles.beansRow}>
                      <Text style={styles.textVeryLarge}>
                        {userData?.numberOfBeans}
                      </Text>
                      <Image
                        style={styles.beansGold}
                        source={images.beansGold}
                      />
                      <Image
                        style={styles.rightArrowIconn}
                        source={images.rightArrowIconn}
                      />
                    </View>

                    <TouchableOpacity onPress={handleClaimRewards}>
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#287C76', '#60B0AA']}
                        style={styles.claimRewardsBtnContainer}>
                        <Text style={styles.claimRewardsBtnText}>
                          Claim Rewards
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>

                    {/* <View style={styles.progressCircleContainer}>
                      <View>
                        <Text style={styles.heading}>Weekly Challenge:</Text>
                        <Text style={styles.textRegular}>
                          7 day streak of coffee purchase
                        </Text>
                      </View>
                      <AnimatedCircularProgress
                        size={54}
                        width={7}
                        fill={50}
                        rotation={0}
                        lineCap="round"
                        tintColor="#60B0AA"
                        backgroundColor="#60B0AA33">
                        {fill => (
                          <Text style={styles.ProgressCircleText}>{fill}%</Text>
                        )}
                      </AnimatedCircularProgress>
                    </View> */}

                    <View style={styles.membershipCardContainer}>
                      <Image
                        style={styles.cuppaClubMembershipBg}
                        source={images.cuppaClubMembershipBg}
                      />
                      <View style={styles.membershipCardTextContainer}>
                        <Text style={styles.shareTextWhite}>
                          Cuppa Club Membership
                        </Text>
                        <TouchableOpacity
                          style={styles.shareBtn2}
                          onPress={() => {
                            navigation.navigate('Rewards');
                          }}>
                          <Text style={styles.shareBtnText}>Subscribe</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.moreInfo}
                          onPress={() => {
                            navigation.navigate('Rewards');
                          }}>
                          <Text style={styles.moreInfoText}>more info</Text>
                          <Image
                            style={styles.moreInfoIcon}
                            source={images.moreInfoIcon}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    {/* <View style={styles.getExtraPointsContainerMain}>
                      <Text style={styles.heading}>Get extra points</Text>
                      <View style={styles.separator}></View>
                      {extraPoints.map((item, index) => {
                        return (
                          <View key={index}>
                            <View style={styles.getExtraPointsContainer}>
                              <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>
                                  {item.description}
                                </Text>
                              </View>
                              <View>
                                <Text style={styles.noOfBeans}>
                                  +{item.noOfBeans}
                                </Text>
                                <Text style={styles.beans}>beans</Text>
                              </View>
                            </View>
                            {index < extraPoints.length - 1 && (
                              <View style={styles.separator}></View>
                            )}
                          </View>
                        );
                      })}
                    </View> */}
                  </View>
                )}
              </View>
            )}
            {showContent === 'How it works' && (
              <View style={styles.howItWorksBody}>
                <Text style={styles.heading2}>Welcome!</Text>
                <Text style={styles.textBlackLight}>
                  As a member you’ll collect Cuppa Beans on almost everything
                  you buy, and those beans add up to some delicious rewards.
                  {'\n'}Look out for some surprises and members-only extras!
                </Text>

                <View style={styles.stepContainer}>
                  <Image style={styles.stepImg} source={images.step1Img} />
                  <View style={styles.stepTextContainer}>
                    <Text style={styles.heading2}>Step 1</Text>
                    <Text style={styles.stepTextBlackLight}>
                      Scan your QR at the register when making a purchase, or
                      order ahead for pickup with your Cuppa app.
                    </Text>
                  </View>
                </View>

                <View style={styles.stepContainer}>
                  <Image style={styles.stepImg} source={images.beansGold} />
                  <View style={styles.stepTextContainer}>
                    <Text style={styles.heading2}>Step 2</Text>
                    <Text style={styles.stepTextBlackLight}>
                      Collect Cuppa Beans for every purchase you make.{'\n'}
                      Collect even more beans when you become a member of our
                      Cuppa Club.
                    </Text>
                  </View>
                </View>

                <View style={styles.stepContainer}>
                  <Image style={styles.stepImg} source={images.step3Img} />
                  <View style={styles.stepTextContainer}>
                    <Text style={styles.heading2}>Step 3</Text>
                    <Text style={styles.stepTextBlackLight}>
                      Go to “Claim Rewards” to exchange your Cuppa Beans for
                      great rewards, like free drinks, food, scratch coupons or
                      a personalized thermal mug.
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </ScrollView>
          <View style={Platform.OS == 'ios' && styles.height}></View>
        </View>

        <Modal
          isVisible={showModal}
          onBackButtonPress={() => setShowModal(false)}
          onBackdropPress={() => setShowModal(false)}
          backdropOpacity={0.5}>
          <View style={styles.modalContainer}>
            <View style={styles.modalBottomBody}>
              <Text style={styles.modalBottomHeading}>
                Benefits of Cuppa Club
              </Text>
              <View style={styles.perksContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {membershipPerks.map((item, index) => {
                    return (
                      <View key={index}>
                        <View style={styles.perksItemContainer}>
                          <Image style={styles.itemImg} source={item.image} />
                          <View>
                            <Text style={styles.perksTextBold}>
                              {item.title}
                            </Text>
                            <Text style={styles.perksTextLight}>
                              {item.description}
                            </Text>
                          </View>
                        </View>
                        {index < membershipPerks.length - 1 && (
                          <View style={styles.separator}></View>
                        )}
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={unsubModal}
          onBackButtonPress={() => setUnsubModal(false)}
          onBackdropPress={() => setUnsubModal(false)}
          backdropOpacity={0.5}>
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={() => setUnsubModal(false)}>
            <View style={styles.modalBottomBodyContainer}>
            <View style={styles.modalBottomBody}>
              <View style={styles.toggleRow2}>
                <Text style={styles.modalBottomHeading2}>
                  Are you sure you want to cancel Cuppa Club Membership?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setUnsub(!unsub);
                  }}>
                  {unsub ? (
                    <Image
                      style={styles.toggleIcon}
                      source={images.toggleTrueIcon}
                    />
                  ) : (
                    <Image
                      style={styles.toggleIcon}
                      source={images.toggleFalseIcon}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <Text style={styles.disabledText}>
                Your access to all premium features of Cuppa Club Membership
                will end
              </Text>

              {loader ? (
                <BottomBtnLoader title={'Yes, Cancel'} />
              ) : unsub ? (
                <BottomBtnUser
                  title={'Yes, Cancel'}
                  img={true}
                  onPress={handleCancelMembership}
                />
              ) : (
                <View style={styles.btnContainer}>
                  <Text style={styles.buttonText}>Yes, Cancel</Text>
                  <Image
                    source={
                      unsub ? images.bottomBtnNextIcon : images.disabledBtnIcon
                    }
                    style={styles.bottomBtnNextIcon}
                  />
                </View>
              )}
            </View>
            </View>
          </TouchableOpacity>
        </Modal>

        <Modal
          isVisible={successModal}
          onBackButtonPress={() => {
            setSuccessModal(false);
          }}
          onBackdropPress={() => {
            setSuccessModal(false);
          }}
          backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <Image source={images.reviewSuccess} style={styles.modalCup2} />

            <Text style={styles.qrModalText}>
              You have successfully canceled your subscription to Cuppa Club
              Membership
            </Text>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
                      {/* <ProgressCircle
                        percent={50}
                        radius={30}
                        borderWidth={8}
                        color={colors.teal}
                        shadowColor="#60B0AA22"
                        bgColor="#fff">
                        <Text style={styles.ProgressCircleText}>{'50%'}</Text>
                      </ProgressCircle> */}