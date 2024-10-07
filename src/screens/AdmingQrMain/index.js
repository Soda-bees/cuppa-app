import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../services/utilities/images';
import {styles} from './style';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/userDetails';

export default function AdminQrMain({navigation}) {

  const userData = useSelector(selectUserData)
  console.log(userData?.outletName);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.textBold}>{userData.outletName}</Text>
            <Text style={styles.textLight}>
              Uncover cafe treasures effortlessly.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AdminSettings');
            }}>
            <Image style={styles.settingsBtn} source={images.settingsBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.qrContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Scanner', {scanner: 'Reward'});
            }}>
            <Image style={styles.newQrImg} source={images.newQrImg} />
          </TouchableOpacity>
          <Text style={styles.textBold}>Rewards QR Scanner</Text>
          <Text style={styles.textMedium}>
            Allows users to claim rewards using the beans they have earned.
          </Text>
        </View>
        <View style={styles.qrContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Scanner', {scanner: 'Stamp'});
              // navigation.navigate('AvailableRewards');
            }}>
            <Image style={styles.newQrImg} source={images.newQrImg} />
          </TouchableOpacity>
          <Text style={styles.textBold}>Stamps QR Scanner</Text>
          <Text style={styles.textMedium}>
            Enables users to earn stamps for each visit to the cafe.
          </Text>
        </View>

        <Text style={styles.textLightSmall}>
          Indulge in the flavors of your city’s best coffee spots with Cuppa.
          Our QR code scanner lets you discover hidden gems and beloved classics
          effortlessly.
        </Text>
      </View>
    </SafeAreaView>
  );
}
