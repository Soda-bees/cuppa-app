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
import {signUp} from '../../services/config/API';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken, setAuthToken} from '../../store/authSlice';
import messaging from '@react-native-firebase/messaging';

export default function AdminScanQr({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.body}>
          <Image style={styles.scanQrImg} source={images.scanQrImg} />

          <View style={styles.textContainer}>
            <Text style={styles.bodyText2}>
              Scan <Text style={styles.bodyTextBold}>QR Codes</Text> to access
              exclusive offers, menus, and more!
            </Text>
          </View>
        </View>

        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <BottomBtnUser
            title={"Let's get started"}
            img={true}
            onPress={() => {
              navigation.navigate('AdminQrMain');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
