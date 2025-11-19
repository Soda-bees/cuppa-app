import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, Platform} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtnUser from '../../components/BottomBtnUser';
import Modal from 'react-native-modal';
import {colors, sizes} from '../../services';
import LinearGradient from 'react-native-linear-gradient';

export default function QrCode({navigation}) {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    navigation.navigate('EnableYourLocation');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={''} />

        <View style={styles.body}>
          <Text style={styles.heading}>Scan To Claim Your Free Coffee</Text>
          <TouchableOpacity>
            <Image source={images.freeCoffeeImg} style={styles.bodyImg} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.bodyText2}>Save it for later?</Text>
            <TouchableOpacity
              onPress={() => {
                setShowModal(true);
              }}
              style={styles.touchableTextCOntainer}>
              <Text style={styles.bodyTextBold}> Click here </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <BottomBtnUser title={'Explore'} img={true} onPress={handleConfirm} />
        </View>

        <Modal
          isVisible={showModal}
          onBackButtonPress={() => setShowModal(false)}
          onBackdropPress={() => setShowModal(false)}
          backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <Image source={images.modalCup} style={styles.modalCup} />
            <Text style={styles.modalText}>
              Your free coffee is now saved in the reward section. Enjoy :)
            </Text>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
