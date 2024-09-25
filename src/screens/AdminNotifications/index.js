import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View, Platform} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import images from '../../services/utilities/images';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function AdminNotifications() {
  const [genNotifs, setGenNotifs] = useState(false);
  const [sound, setSound] = useState(false);
  const [vibrate, setVibrate] = useState(false);
  const [appupdates, setAppupdates] = useState(false);
  const [notifType, setNotifType] = useState('Push Notification & Email');
  const [avoidNotifType, setAvoidNotifType] = useState('Messages');

  const toggleState = (state, setState) => {
    setState(!state);
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Notifications'} />
        <View style={styles.spacing} />
        <View style={styles.toggleOption}>
          <Text style={styles.optionText}>General Notifications</Text>
          <TouchableOpacity
            onPress={() => toggleState(genNotifs, setGenNotifs)}>
            <Image
              source={genNotifs ? images.btnOn : images.btnOff}
              style={
                Platform.OS == 'android'
                  ? styles.toggleBtn
                  : styles.toggleBtnIOS
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.toggleOption}>
          <Text style={styles.optionText}>Sound</Text>
          <TouchableOpacity onPress={() => toggleState(sound, setSound)}>
            <Image
              source={sound ? images.btnOn : images.btnOff}
              style={
                Platform.OS == 'android'
                  ? styles.toggleBtn
                  : styles.toggleBtnIOS
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.toggleOption}>
          <Text style={styles.optionText}>Vibrate</Text>
          <TouchableOpacity onPress={() => toggleState(vibrate, setVibrate)}>
            <Image
              source={vibrate ? images.btnOn : images.btnOff}
              style={
                Platform.OS == 'android'
                  ? styles.toggleBtn
                  : styles.toggleBtnIOS
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.toggleOption}>
          <Text style={styles.optionText}>App Updates</Text>
          <TouchableOpacity
            onPress={() => toggleState(appupdates, setAppupdates)}>
            <Image
              source={appupdates ? images.btnOn : images.btnOff}
              style={
                Platform.OS == 'android'
                  ? styles.toggleBtn
                  : styles.toggleBtnIOS
              }
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={
            Platform.OS == 'android' ? styles.notifView : styles.notifViewIOS
          }>
          <View>
            <Text
              style={
                Platform.OS == 'android'
                  ? styles.subHeading
                  : styles.subHeadingIOS
              }>
              Recieve Notifications Via
            </Text>
            <Text style={styles.notifOption}>{notifType}</Text>
          </View>
          <Image
            source={images.greenUpBtn}
            style={Platform.OS == 'android' ? styles.upbtn : styles.upbtnIOS}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            Platform.OS == 'android' ? styles.notifView : styles.notifViewIOS
          }>
          <View>
            <Text
              style={
                Platform.OS == 'android'
                  ? styles.subHeading
                  : styles.subHeadingIOS
              }>
              Do not recieve notifications
            </Text>
            <Text style={styles.notifOption}>{avoidNotifType}</Text>
          </View>
          <Image
            source={images.greenUpBtn}
            style={Platform.OS == 'android' ? styles.upbtn : styles.upbtnIOS}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
