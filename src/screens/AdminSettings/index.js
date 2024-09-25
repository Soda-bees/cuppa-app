import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Settings,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import SettingsHeader from '../../components/SettingsHeader';
import images from '../../services/utilities/images';
import {styles} from './style';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
import {useDispatch} from 'react-redux';
import {setAuthToken} from '../../store/authSlice';
import {setRole} from '../../store/role';

export default function AdminSettings({navigation}) {
  const [name, setName] = useState('Havana Cafe');
  const [email, setEmail] = useState('havana_cafe@examplemail.com');
  const [userIcon, setUserIcon] = useState(images.cafeImg1);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalshow(!modalShow);
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Settings'} iconType={'green'} />
        <View style={styles.userDetailsContainer}>
          <Image style={styles.userImg} source={userIcon} />

          <View style={styles.nameEmailContainer}>
            <Text style={styles.heading}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>

        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          style={styles.navigateBtns}>
          <Image style={styles.icon} source={images.editProfileIcon} />
          <Text style={styles.subHeading}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
          style={styles.navigateBtns}>
          <Image style={styles.icon} source={images.securityIcon} />
          <Text style={styles.subHeading}>Security</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            setShowModal(true);
          }}
          style={styles.navigateBtns}>
          <Image style={styles.icon} source={images.logoutIcon} />
          <Text style={styles.subHeading}>Logout</Text>
        </TouchableOpacity>
        <Modal
          isVisible={showModal}
          onBackButtonPress={() => setShowModal(false)}
          onBackdropPress={() => setShowModal(false)}
          backdropOpacity={0.5}>
          <View style={styles.modalContainer}>
            <View style={styles.modalBody}>
              <Text style={styles.modalHeading}>Logging Out?</Text>
              <Text style={styles.modalText}>
                Thanks for stopping by. See you again soon!
              </Text>
              <View style={styles.modalBtnContainer}>
                <TouchableOpacity
                  style={styles.modalBtnWhite}
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  <Text style={styles.modalBtnWhiteText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setShowModal(false);
                    dispatch(setAuthToken(''));
                    dispatch(setRole(''));
                  }}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}
                    style={styles.modalBtngreen}>
                    <Text style={styles.modalBtnGreenText}>Logout</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
