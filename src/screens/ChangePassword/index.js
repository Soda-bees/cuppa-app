import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, Platform} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../services';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {updatePassword} from '../../services/config/API';
import {useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authSlice';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import Modal from 'react-native-modal';

export default function ChangePassword({navigation}) {
  const token = useSelector(selectAuthToken);

  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  const [newPass, setNewPass] = useState('');
  const [hideNewPass, setHideNewPass] = useState(true);

  const [confirmPass, setConfirmPass] = useState('');
  const [hideConfirmPass, setHideConfirmPass] = useState(true);

  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [showModal1, setShowModal1] = useState(false);

  const navigationn = useNavigation();

  const handleCancel = () => {
    navigationn.goBack();
  };

  const handleSaveChanges = async () => {
    setLoader(true);
    try {
      if (!password || !newPass || !confirmPass) {
        setErrorMsg('*All fields are required');
        setLoader(false);
      } else {
        if (newPass.length < 8 && confirmPass.length < 8) {
          setErrorMsg('*Password must contain at least 8 characters');
          setLoader(false);
        } else {
          if (newPass !== confirmPass) {
            setErrorMsg("*Your new password doesn't match");
            setLoader(false);
          } else {
            const body = {
              password,
              newPassword: newPass,
            };
            const response = await updatePassword(body, token);
            console.log(JSON.stringify(response));
            if (response.data.success) {
              setErrorMsg('');
              setLoader(false);
              setShowModal1(true);
            } else {
              setErrorMsg(response.data.message);
              setLoader(false);
            }
          }
        }
      }
    } catch (error) {
      console.log(error.message);
      setLoader(false);
      setErrorMsg('');
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header title={'Change Password'} />
        </View>

        <Text style={styles.subHeading}>Create New Password</Text>

        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Current Password</Text>
          <TextInput
            placeholder={'Enter Current Password'}
            style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
            placeholderTextColor={colors.disabledBg3}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={hidePass}
          />

          <TouchableOpacity
            style={styles.feather}
            onPress={() => setHidePass(!hidePass)}>
            <Feather
              name={!hidePass ? 'eye' : 'eye-off'}
              color={colors.teal}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>New Password</Text>
          <TextInput
            placeholder={'Enter New Password'}
            style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
            placeholderTextColor={colors.disabledBg3}
            onChangeText={text => setNewPass(text)}
            value={newPass}
            secureTextEntry={hideNewPass}
          />

          <TouchableOpacity
            style={styles.feather}
            onPress={() => setHideNewPass(!hideNewPass)}>
            <Feather
              name={!hideNewPass ? 'eye' : 'eye-off'}
              color={colors.teal}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Enter Confirm Password</Text>
          <TextInput
            placeholder={'Confirm Password'}
            style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
            placeholderTextColor={colors.disabledBg3}
            onChangeText={text => setConfirmPass(text)}
            value={confirmPass}
            secureTextEntry={hideConfirmPass}
          />

          <TouchableOpacity
            style={styles.feather}
            onPress={() => setHideConfirmPass(!hideConfirmPass)}>
            <Feather
              name={!hideConfirmPass ? 'eye' : 'eye-off'}
              color={colors.teal}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.errMsg}>{errorMsg}</Text>
        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <TouchableOpacity style={styles.btnContainer} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          {loader ? (
            <BottomBtnLoader />
          ) : (
            <TouchableOpacity onPress={handleSaveChanges}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.btnContainer2}>
                <Text style={styles.buttonText2}>Save Changes</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Modal isVisible={showModal1} backdropOpacity={0.5}>
        <View style={styles.modalBody}>
          <Image source={images.reviewSuccess} style={styles.modalCup} />

          <Text style={styles.modalText}>
            Your password has been updated successfully.
          </Text>

          <TouchableOpacity
            onPress={() => {
              setShowModal1(false);
              navigation.navigate('TabNavigation');
            }}
            style={styles.reviewBtnContainer}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#287C76', '#60B0AA']}
              style={styles.reviewBtn}>
              <Text style={styles.reviewBtnText}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
