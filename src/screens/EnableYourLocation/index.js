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

export default function EnableYourLocation({navigation}) {
  const handleConfirm = () => {
    navigation.navigate('TabNavigation');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={''} />

        <View style={styles.body}>
          <Text style={styles.heading}>Enable Your Location</Text>
          <Image source={images.enableYourLocationImg} style={styles.bodyImg} />
          <Text style={styles.bodyText}>
            Please enable your GPS location for us to give you the best user
            experience
          </Text>
        </View>

        <View style={Platform.OS == 'android' ? styles.bottomBtnContainer : styles.btnContainerIOS}>
          <BottomBtnUser
            title={'Enable Location'}
            img={true}
            onPress={handleConfirm}
          />

          <TouchableOpacity style={styles.btnContainer} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Not Now</Text>
            <Image
              source={images.bottomBtnNextIcon}
              style={styles.bottomBtnNextIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
