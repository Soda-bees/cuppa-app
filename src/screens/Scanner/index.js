import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../services/utilities/images';
import {styles} from './style';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authSlice';
import {getUserDetails, giveStamp, signIn} from '../../services/config/API';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';

export default function Scanner({navigation, route}) {
  const {scanner} = route.params;
  console.log(scanner);
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);
  const [loader, setLoader] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [notEligibleModal, setNotEligibleModal] = useState(false);
  const [notEligibleModalText, setNotEligibleModalText] = useState('');

  const token = useSelector(selectAuthToken);

  const handleGetUserDetails = async userId => {
    setLoader(true);
    try {
      const body = {
        userId,
      };
      const response = await getUserDetails(token, body);
      console.log(response?.data?.userDetails);
      const userData = response?.data?.userDetails;
      navigation.navigate('AvailableRewards', {userData});
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const handleGiveStamp = async userId => {
    setLoader(true);
    try {
      const body = {
        userId,
      };
      const response = await giveStamp(token, body);
      console.log(response?.data);
      if (response?.data?.success) {
        setSuccessModal(true);
        setNotEligibleModalText('');
      } else {
        if (response?.status == '403') {
          setNotEligibleModal(true);
          setNotEligibleModalText(response?.data?.message);
        }
      }
    } catch (error) {
      console.log(error);

      setNotEligibleModalText('');
    } finally {
      setLoader(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {scanner === 'Reward' ? (
        <Text style={styles.headerText}>
          Scan to Grant a Reward to the User
        </Text>
      ) : (
        <Text style={styles.headerText}>
          Scan to Record a Stamp for the User
        </Text>
      )}
      <QRCodeScanner
        onRead={data => {
          if (!loader && !successModal) {
            if (scanner === 'Reward') {
              handleGetUserDetails(data.data);
            } else {
              handleGiveStamp(data.data);
            }
          }
        }}
        flashMode={flashMode}
        reactivate
        reactivateTimeout={10000}
      />
      {loader ? (
        <View
          style={{
            height: sizes.screenHeight,
            width: sizes.screenWidth,
            backgroundColor: '#00000088',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator
            color={colors.disabledBg2}
            size={sizes.screenWidth * 0.16}
          />
        </View>
      ) : null}

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
        backdropOpacity={0.6}>
        <View style={styles.modalBody}>
          <Image source={images.reviewSuccess} style={styles.modalCup2} />

          <Text style={styles.qrModalText}>
            New stamp has been given to the user.
          </Text>
        </View>
      </Modal>

      <Modal
        isVisible={notEligibleModal}
        onBackButtonPress={() => {
          setNotEligibleModal(false);
          navigation.navigate('AdminQrMain');
        }}
        onBackdropPress={() => {
          setNotEligibleModal(false);
          navigation.navigate('AdminQrMain');
        }}
        backdropOpacity={0.6}>
        <View style={styles.modalBody}>
          <Image source={images.oops} style={styles.modalCup2} />

          <Text style={styles.qrModalText}>
            {/* New stamp has been given to the user. */}
            {notEligibleModalText}
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
