import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, Platform} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';

export default function Notifications({navigation}) {
  const [gNotification, setGNotification] = useState(false);
  const [sound, setSound] = useState(false);
  const [vibrate, setVibrate] = useState(false);
  const [appUpdates, setAppUpdates] = useState(false);
  const [notiDropDown, setNotiDropDown] = useState(false);
  const [slectedOpt1, setSlectedOpt1] = useState('');

  const [msgDropDown, setMsgDropDown] = useState(false);
  const [slectedOpt2, setSlectedOpt2] = useState('');

  const handleSelectedOpt1 = selectedAns => {
    setSlectedOpt1(selectedAns);
    setNotiDropDown(false);
    console.log(slectedOpt1);
  };

  const handleSelectedOpt2 = selectedAns => {
    setSlectedOpt2(selectedAns);
    setMsgDropDown(false);
    console.log(slectedOpt2);
  };

  const handleChanges = () => {
    navigation.navigate('Account')
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header title={'Notifications'} />
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.subHeading}>General Notifications</Text>
          <TouchableOpacity
            onPress={() => {
              setGNotification(!gNotification);
            }}>
            <Image
              style={styles.toggleIcon}
              source={
                gNotification ? images.toggleTrueIcon : images.toggleFalseIcon
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.subHeading}>Sound</Text>
          <TouchableOpacity
            onPress={() => {
              setSound(!sound);
            }}>
            <Image
              style={styles.toggleIcon}
              source={sound ? images.toggleTrueIcon : images.toggleFalseIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.subHeading}>Vibrate</Text>
          <TouchableOpacity
            onPress={() => {
              setVibrate(!vibrate);
            }}>
            <Image
              style={styles.toggleIcon}
              source={vibrate ? images.toggleTrueIcon : images.toggleFalseIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.subHeading}>App Updates</Text>
          <TouchableOpacity
            onPress={() => {
              setAppUpdates(!appUpdates);
            }}>
            <Image
              style={styles.toggleIcon}
              source={
                appUpdates ? images.toggleTrueIcon : images.toggleFalseIcon
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputView2}>
          <TouchableOpacity
            onPress={() => {
              setNotiDropDown(!notiDropDown);
            }}>
            <View>
              <Text style={styles.inputTitle}>Receive Notifications Via</Text>
              <View style={styles.dateContainer}>
                <Text style={styles.date}>Push Notifications & Email</Text>
              </View>
            </View>
            <View style={styles.dateIconContainer}>
              <Image
                style={styles.dateIcon}
                source={notiDropDown ? images.dropUpnIcon : images.dropDownIcon}
              />
            </View>
          </TouchableOpacity>

          {notiDropDown && (
            <View style={styles.dropDownContainer}>
              {/* <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.hr}></LinearGradient> */}
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => {
                  handleSelectedOpt1('Option 1');
                }}>
                <Text style={styles.option}>Option 1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => {
                  handleSelectedOpt1('Option 2');
                }}>
                <Text style={styles.option}>Option 2</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.inputView}>
          <TouchableOpacity
            onPress={() => {
              setMsgDropDown(!msgDropDown);
            }}>
            <View>
              <Text style={styles.inputTitle}>
                Do Not Receive Notifications
              </Text>
              <View style={styles.dateContainer}>
                <Text style={styles.date}>Messages</Text>
              </View>
            </View>
            <View style={styles.dateIconContainer}>
              <Image
                style={styles.dateIcon}
                source={msgDropDown ? images.dropUpnIcon : images.dropDownIcon}
              />
            </View>
          </TouchableOpacity>

          {msgDropDown && (
            <View style={styles.dropDownContainer}>
              {/* <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.hr}></LinearGradient> */}
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => {
                  handleSelectedOpt2('Option 3');
                }}>
                <Text style={styles.option}>Option 1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => {
                  handleSelectedOpt2('Option 4');
                }}>
                <Text style={styles.option}>Option 2</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

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
            <Text style={styles.buttonText2}>Save Changes</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
