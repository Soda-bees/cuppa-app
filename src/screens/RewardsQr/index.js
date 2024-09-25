import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import Modal from 'react-native-modal';
import {colors, sizes} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import {useSelector} from 'react-redux';
import {selectUserData} from '../../store/userDetails';

export default function RewardsQr({navigation}) {
  const [showModal5, setShowModal5] = useState(false);

  const user = useSelector(selectUserData);

  const [userData, setUserData] = useState(user?._id);

  const handleConfirm = () => {
    navigation.navigate('EnableYourLocation');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={''} />

        <View style={styles.body}>
          <Text style={styles.heading}>Scan To Claim Your Cuppa Stamp</Text>
          <TouchableOpacity
            onPress={() => {
              setShowModal5(true);
            }}>
            {/* <Image source={images.freeCoffeeImg} style={styles.bodyImg} /> */}
            <QRCode size={sizes.screenWidth * 0.6} value={userData} />
          </TouchableOpacity>
        </View>

        <Modal
          isVisible={showModal5}
          onBackButtonPress={() => setShowModal5(false)}
          onBackdropPress={() => setShowModal5(false)}
          backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <Image source={images.modalCup} style={styles.modalCup} />
            <Text style={styles.modalTextLight}>
              Thank you for redeeming your free coffee! We hope it adds an extra
              kick of joy to your day.
            </Text>
            <Text style={styles.modalText}>Enjoy every sip!!</Text>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
