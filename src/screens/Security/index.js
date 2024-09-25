import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, Platform} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';

export default function Security({navigation}) {
  const [rememberLogin, setRememberLogin] = useState(false);
  const [faceId, setFaceId] = useState(false);
  const [touchId, settouchId] = useState(false);

  const handleChanges = () => {
    navigation.navigate('Account');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header title={'Security'} />
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.subHeading}>Remember login details</Text>
          <TouchableOpacity
            onPress={() => {
              setRememberLogin(!rememberLogin);
            }}>
            <Image
              style={styles.toggleIcon}
              source={
                rememberLogin ? images.toggleTrueIcon : images.toggleFalseIcon
              }
            />
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity
          style={styles.toggleRow}
          onPress={() => {
            navigation.navigate('');
          }}>
          <Text style={styles.subHeading}>Google Authenticator</Text>
          <Image
            style={styles.rightArrowIconn}
            source={images.rightArrowIconn}
          />
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.toggleRow}
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}>
          <Text style={styles.subHeading}>Change Password</Text>
          <Image
            style={styles.rightArrowIconn}
            source={images.rightArrowIconn}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleChanges}
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#287C76', '#60B0AA']}
            style={styles.btnContainer2}>
            <Text style={styles.buttonText2}>Done</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
