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

export default function OrderPlaced({navigation}) {
  const handleConfirm = () => {
    navigation.navigate('Home');
  };
  const [showModal1, setShowModal1] = useState(false);

  const handleModal = () => {
    setShowModal1(true);
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.body}>
          <Text style={styles.heading}>
            Your Order Has Been Placed! &#128512;
          </Text>
          <Image source={images.orderPlacedImg} style={styles.bodyImg} />
        </View>

        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          {/* <BottomBtnUser
            title={'Track Progress'}
            img={true}
            onPress={handleModal}
          /> */}

          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => {
              handleConfirm();
            }}>
            <Text style={styles.buttonText}>Home</Text>
            <Image
              source={images.bottomBtnNextIcon}
              style={styles.bottomBtnNextIcon}
            />
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={showModal1}
          onBackButtonPress={() => setShowModal1(false)}
          onBackdropPress={() => setShowModal1(false)}
          backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <Image source={images.modalCup} style={styles.modalCup} />
            <Text style={styles.modalText}>
              On the order button, you may track the progress of your purchase.
              Cheers :)
            </Text>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
