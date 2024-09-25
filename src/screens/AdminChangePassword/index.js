import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import images from '../../services/utilities/images';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../services';
import SettingsHeader from '../../components/SettingsHeader';
import Modal from 'react-native-modal';
import BottomBtn from '../../components/BottomBtn';
import LinearGradient from 'react-native-linear-gradient';

export default function AdminChangePassword({navigation}) {
  const [password, setPassword] = useState('');
  const [hideCurrentPass, setHideCurrentPass] = useState(true);
  const [newpassword, setNewpassword] = useState('');
  const [hideNewPass, setHideNewPass] = useState(true);
  const [confirmpassword, setConfirmpassword] = useState('');
  const [hideConfirmPass, setHideConfirmPass] = useState(true);


  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Change Password'} />
        <Text style={styles.heading}>Create Your New Password</Text>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Current Password</Text>
          <TextInput
            placeholder={'Enter Current Password'}
            style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
            placeholderTextColor={colors.disabledBg3}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={hideCurrentPass}
          />
          <TouchableOpacity
            style={styles.feather}
            onPress={() => setHideCurrentPass(!hideCurrentPass)}>
            <Feather
              name={!hideCurrentPass ? 'eye' : 'eye-off'}
              color={colors.teal}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>New Password</Text>
          <TextInput
            placeholder='Enter New Password'
            style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
            placeholderTextColor={colors.disabledBg3}
            onChangeText={text => setNewpassword(text)}
            value={newpassword}
            secureTextEntry={hideNewPass}
          />
          <TouchableOpacity
            style={styles.feather}
            onPress={() => setHideNewPass(!hideNewPass)}>
            <Feather
              name={!hideNewPass ? 'eye' : 'eye-off'}
              color={colors.teal}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Confirm Password</Text>
          <TextInput
          placeholder='Re-Enter New Password'
            style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
            placeholderTextColor={colors.disabledBg3}
            onChangeText={text => setConfirmpassword(text)}
            value={confirmpassword}
            secureTextEntry={hideConfirmPass}
          />
          <TouchableOpacity
            style={styles.feather}
            onPress={() => setHideConfirmPass(!hideConfirmPass)}>
            <Feather
              name={!hideConfirmPass ? 'eye' : 'eye-off'}
              color={colors.teal}
              size={20}
            />
          </TouchableOpacity>
        </View>

        <View style={Platform.OS == 'android' ? styles.bottomBtn : styles.bottomBtnIOS}>
        <BottomBtn title={'Save Changes'}  navigateTo={'AdminSecurity'} navigation={navigation}/>
        </View>
      </View>
      
    </SafeAreaView>
  );
}
