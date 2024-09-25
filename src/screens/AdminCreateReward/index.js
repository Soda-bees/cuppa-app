import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import SettingsHeader from '../../components/SettingsHeader';
import {styles} from './style';
import images from '../../services/utilities/images';
import BottomBtn from '../../components/BottomBtn';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {sizes} from '../../services';

export default function AdminCreateReward({navigation}) {
  const [dropdown, setDropdown] = useState(true);
  const [dropdown2, setDropdown2] = useState(true);
  const [reward, setReward] = useState();
  const [stamps, setStamps] = useState();
  const [reviewModal, setReviewModal] = useState(false);
  const [congratsModal, setCongratsModal] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handleDropdown2 = () => {
    setDropdown2(!dropdown2);
  };

  const handleChooseReward = reward => {
    handleDropdown2();
    setReward(reward);
  };

  const handleChooseStamps = stamps => {
    handleDropdown();
    setStamps(stamps);
  };

  const handleReviewModal = () => {
    setReviewModal(!reviewModal);
  };

  const handleCongratsModal = () => {
    setReviewModal(false);
  };

  const handleCongratulation = () => {
    setTimeout(() => {
      setCongratsModal(true);
      // setReviewModal(false);
      console.log(setCongratsModal, 'wallllaaaaaahhh');
    }, 500);
  };

  const navigateToRewards = () => {
    setReviewModal(true);
    // console.log('test')
    setReward();
    setStamps();
    setCongratsModal(false);
    navigation.navigate('Mytabs');
  };

  const rewards = ['Tea / Coffee', 'Latte', 'Donut / Muffin', 'Bagel'];
  const stampAmount = ['10', '15', '20', '25'];

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <SettingsHeader alignMiddle={true} title={'Rewards'} />
        <Text style={styles.heading}>Create a Reward</Text>
        <Text style={styles.optionHeading}>
          How many stamps to collect reward?
        </Text>

        {dropdown ? (
          <TouchableOpacity onPress={handleDropdown}>
            <View style={styles.dropdownView}>
              <View style={styles.dropDownItem}>
                <Text style={styles.chosenOption}>
                  {stamps ? stamps : 'Enter number of stamps'}
                </Text>
                <Image source={images.greenUpBtn} style={styles.downBtn} />
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity onPress={handleDropdown}>
              <View
                style={dropdown ? styles.dropdownView : styles.dropdownView}>
                <View style={styles.dropDownItem}>
                  <Text style={styles.InputTitle}>Enter Number of Stamps</Text>
                  <Image source={images.greenUpBtn} style={styles.upbtn} />
                </View>
                {stampAmount.map((item, index) => (
                  <View key={index}>
                    <View style={styles.divider} />
                    <TouchableOpacity onPress={() => handleChooseStamps(item)}>
                      <View style={styles.dropDownItem}>
                        <Text style={styles.rewardText}>{item}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          </>
        )}

        <Text style={styles.optionHeading}>
          What reward would you like to offer?
        </Text>

        {dropdown2 ? (
          <TouchableOpacity onPress={handleDropdown2}>
            <View style={styles.dropdownView}>
              <View style={styles.dropDownItem}>
                <Text style={styles.chosenOption}>
                  {reward ? reward : 'Choose Reward'}
                </Text>
                <Image source={images.greenUpBtn} style={styles.downBtn} />
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity onPress={handleDropdown2}>
              <View
                style={dropdown ? styles.dropdownView : styles.dropdownView}>
                <View style={styles.dropDownItem}>
                  <Text style={styles.InputTitle}>Choose Reward</Text>
                  <Image source={images.greenUpBtn} style={styles.upbtn} />
                </View>
                {rewards.map((item, index) => (
                  <View key={index}>
                    <View style={styles.divider} />
                    <TouchableOpacity onPress={() => handleChooseReward(item)}>
                      <View style={styles.dropDownItem}>
                        <Text style={styles.rewardText}>{item}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity
          style={
            Platform.OS == 'android' ? styles.bottomBtn : styles.bottomBtnIOS
          }
          onPress={() => handleReviewModal()}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#287C76', '#60B0AA']}
            style={styles.btnContainer}>
            <Text style={styles.buttonText}>Next</Text>
            <Image
              source={images.bottomBtnNextIcon}
              style={styles.bottomBtnNextIcon}
            />
          </LinearGradient>
        </TouchableOpacity>
        {/* <View style={styles.btnContainer}>
          <BottomBtn
            title={'Next'}
            img={true}
            onPress={handleReviewModal}
          />
        </View> */}

        <Modal isVisible={reviewModal}>
          <View style={styles.reviewModalContainer}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={handleReviewModal}>
              <Image
                source={images.closeBtn}
                style={
                  Platform.OS == 'android'
                    ? styles.closeBtn
                    : styles.closeBtnIOS
                }
              />
            </TouchableOpacity>
            <Text style={styles.headingModal}>Review</Text>
            <Text style={styles.subheadingModal}>
              Number of stamps to collect
            </Text>
            <Text style={styles.itemInfo}>{stamps}</Text>
            <Text style={styles.subheadingModal}>Reward</Text>
            <Text style={styles.itemInfo}>{reward}</Text>

            <TouchableOpacity
              onPress={() => {
                handleCongratulation();
                setReviewModal(false);
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.createBtnContainer}>
                <Text style={styles.createBtnText}>Create</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleReviewModal}
              style={styles.editBtnContainer}>
              <Text style={styles.editBtnText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal isVisible={congratsModal}>
          <View style={styles.congratsModalContainer}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setCongratsModal(!congratsModal)}>
              <Image
                source={images.closeBtn}
                style={
                  Platform.OS == 'android'
                    ? styles.closeBtn
                    : styles.closeBtnIOS
                }
              />
            </TouchableOpacity>

            <Text style={styles.headingModal}>Congratulations!</Text>
            <Image source={images.coffeeImg} style={styles.coffeeImg} />
            <Text style={styles.newRewardCreated}>
              New Reward Created Successfully!
            </Text>
            <TouchableOpacity onPress={navigateToRewards}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={[
                  styles.createBtnContainer,
                  {
                    justifyContent: 'space-between',
                    paddingHorizontal: sizes.screenWidth * 0.03,
                  },
                ]}>
                <Text style={styles.createBtnText}>Rewards</Text>
                <Image
                  source={images.bottomBtnNextIcon}
                  style={styles.bottomBtnNextIcon}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
