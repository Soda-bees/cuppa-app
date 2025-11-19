import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TextInput, TouchableOpacity, Platform} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors, fontSize, sizes} from '../../services';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import BottomBtnUser from '../../components/BottomBtnUser';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {selectUserData} from '../../store/userDetails';

export default function Rewards({navigation}) {
  const user = useSelector(selectUserData);

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

  const [showModal, setShowModal] = useState(false);

  const handleNext = () => {
    // navigation.navigate('Checkout');
    setShowModal(true);
  };

  const handleModal = () => {
    navigation.navigate('Subscription');
    setShowModal(false);
  };

  return (
    <SafeAreaView
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}
      style={styles.mainContainer}>
      <View style={styles.mainContainerBody}>
        <Header
          headerType={'Rewards'}
          favourite={false}
          title={'Rewards'}
          userIcon={user.profile}
          iconType={'green'}
        />

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#5DADA799', '#2A7F7833']}
          style={styles.membershipContainer}>
          <Text style={styles.heading2}>Cuppa Club Membership</Text>
          <Text style={styles.textBlackLight}>Where every sip counts!</Text>
          <Text style={styles.textBlackLightSmall}>
            Join our exclusive membership program and embark on a delightful
            journey of perks and privileges.
          </Text>
          <Image style={styles.membershipCup} source={images.membershipCup} />
        </LinearGradient>

        <View style={styles.separator2}></View>

        <View style={styles.perksContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {membershipPerks.map((item, index) => {
              return (
                <View key={index}>
                  <View style={styles.perksItemContainer}>
                    <Image style={styles.itemImg} source={item.image} />
                    <View>
                      <Text style={styles.perksTextBold}>{item.title}</Text>
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
      <View
        style={
          Platform.OS == 'android'
            ? styles.bottomBtnContainer
            : styles.bottomBtnContainerIOS
        }>
        <BottomBtnUser
          title={'View Plan Details'}
          img={true}
          onPress={handleNext}
        />
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
          <View style={styles.modalBodyContainer}>
            <View style={styles.modalBottomBody}>
              <View style={styles.modalBottomTextBody}>
                <Text style={styles.modalTextBold}>
                  $<Text style={styles.modalTextBoldLarge}>7.99</Text>/mo.
                </Text>
                <Text style={styles.modalTextLight}>
                  With our Cuppa Club membership, every visit and interaction is
                  a celebration of coffee and community.
                </Text>
                <Text style={styles.modalTextBold}>
                  -join our community today!
                </Text>
                <Image
                  style={styles.cupaClubModalImg}
                  source={images.cupaClubModalImg}
                />
              </View>

              <View style={styles.bottomBtnContainerModal}>
                <BottomBtnUser
                  title={'Subscribe Now'}
                  img={true}
                  onPress={handleModal}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}
