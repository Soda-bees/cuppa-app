import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View, Platform} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import images from '../../services/utilities/images';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function AdminSecurity({navigation}) {
  const [rememberLogin, setRememberLogin] = useState(false);
  const [touchid, setTouchid] = useState(false);
  const [vibrate, setVibrate] = useState(false);
  const [faceid, setFaceid] = useState(false);
  const [notifType, setNotifType] = useState('Push Notification & Email');
  const [avoidNotifType, setAvoidNotifType] = useState('Messages');


  const toggleState = (state, setState) => {
    setState(!state);
  };  

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Security'} />
        <View style={styles.spacing} />
        {/* <View style={styles.toggleOption}>
          <Text style={styles.optionText}>Face ID</Text>
          <TouchableOpacity onPress={() => toggleState(faceid, setFaceid)}>
            <Image source={faceid ? images.btnOn : images.btnOff} style={styles.toggleBtn} />
          </TouchableOpacity>
        </View> */}
        <View style={styles.toggleOption}>
          <Text style={styles.optionText}>Remember Login Details</Text>
          <TouchableOpacity onPress={() => toggleState(rememberLogin, setRememberLogin)}>
            <Image source={rememberLogin ? images.btnOn : images.btnOff} style={Platform.OS == 'android' ? styles.toggleBtn : styles.toggleBtnIOS} />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.toggleOption}>
          <Text style={styles.optionText}>Touch ID</Text>
          <TouchableOpacity onPress={() => toggleState(touchid, setTouchid)}>
            <Image source={touchid ? images.btnOn : images.btnOff} style={styles.toggleBtn} />
          </TouchableOpacity>
        </View> */}
        <TouchableOpacity style={styles.notifView} onPress={()=>{navigation.navigate('AdminChangePassword')}}>
            <View>
                <Text style={styles.notifOption}>Change Password</Text>
            </View>
            <Image source={images.greenUpBtn} style={styles.upbtn}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
