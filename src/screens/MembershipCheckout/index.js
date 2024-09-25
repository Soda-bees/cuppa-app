import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, Platform} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtnUser from '../../components/BottomBtnUser';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserData, setUserData} from '../../store/userDetails';
import {selectAuthToken} from '../../store/authSlice';
import {joinMembership} from '../../services/config/API';
import BottomBtnLoader from '../../components/BottomBtnLoader';

export default function MembershipCheckout({navigation}) {
  const [clubMember, setClubMember] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [loader, setLoader] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const userData = useSelector(selectUserData);
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();

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

  const handlejoinMembership = async () => {
    setLoader(true);
    try {
      const response = await joinMembership(token);
      if (response?.data?.success) {
        console.log(
          '==========================Updated User Data=========================',
          response?.data?.updatedUser,
        );
        dispatch(setUserData(response?.data?.updatedUser));
        setLoader(false);
        setErrMsg('');
        setSuccessModal(true);
      } else {
        setLoader(false);
        setErrMsg(response?.data?.message);
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
      setErrMsg(error);
    }
  };

  const handleViewBenefits = () => {
    setShowModal(true);
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Checkout'} />
        <View style={styles.membershipCardContainer2}>
          <Image
            style={styles.cuppaClubMembershipBg}
            source={images.cuppaClubMembershipBg}
          />
          <View style={styles.membershipCardTextContainer}>
            <Text style={styles.membershipStatus}>Membership status</Text>
            <Text style={styles.shareTextWhite2}>Cuppa Club Member</Text>
            <TouchableOpacity
              style={styles.shareBtn3}
              onPress={() => {
                handleViewBenefits();
              }}>
              <Text style={styles.shareBtnText}>View benefits</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.payBtnContainer}>
          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payBtnText}>Plan</Text>
            <Text style={styles.payBtnText}>Monthly</Text>
          </TouchableOpacity>

          <View style={styles.separator}></View>

          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payBtnText}>Price</Text>
            <Text style={styles.payBtnText}>$7.99</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.termsSection}>
          <Text style={styles.textBgBold}>Terms</Text>

          <View style={styles.termsRow}>
            <View style={styles.dot}></View>
            <Text style={styles.termsText}>
              <Text style={styles.textBgBold}>$7.99</Text> will be billed
              monthly
            </Text>
          </View>

          <View style={styles.termsRow}>
            <View style={styles.dot}></View>
            <Text style={styles.termsText}>
              Subscription can be canceled at any time.
            </Text>
          </View>

          <View style={styles.termsRow}>
            <View style={styles.dot}></View>
            <Text style={styles.termsText}>
              You will be automatically charged next month on same date.
            </Text>
          </View>
        </View>

        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <Text style={styles.errMsg}>{errMsg}</Text>

          {loader ? (
            <BottomBtnLoader title={'Join us'} />
          ) : (
            <BottomBtnUser
              title={'Join us'}
              img={true}
              onPress={handlejoinMembership}
            />
          )}
        </View>
        <Modal
          isVisible={showModal}
          onBackButtonPress={() => setShowModal(false)}
          onBackdropPress={() => setShowModal(false)}
          backdropOpacity={0.5}>
          <View
            style={
              Platform.OS == 'android'
                ? styles.modalContainer
                : styles.modalContainerIOS
            }>
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
          isVisible={successModal}
          onBackButtonPress={() => {
            setSuccessModal(false);
            navigation.navigate('RewardsMain');
          }}
          onBackdropPress={() => {
            setSuccessModal(false);
            navigation.navigate('RewardsMain');
          }}
          backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <Image source={images.reviewSuccess} style={styles.modalCup2} />

            <Text style={styles.qrModalText}>
              You have successfully subscribed to Cuppa Club Membership
            </Text>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
