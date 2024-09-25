import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {removeAuthToken} from '../../store/authSlice';
import {selectUserData} from '../../store/userDetails';

export default function Account({navigation}) {
  const user = useSelector(selectUserData);

  const dispatch = useDispatch();

  const [name, setName] = useState('Jake Gracia');
  const [email, setEmail] = useState('jake_gracia11@examplemail.com');
  const [userIcon, setUserIcon] = useState(images.userImg);
  const [showModal, setShowModal] = useState(false);

  const handleSignIn = () => {
    navigation.navigate('');
  };

  const handleLogout = () => {
    setShowModal(false);
    navigation.navigate('Login');
  };

  const imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        console.log(res.assets[0]);
        const img = res.assets[0];
        setUserIcon(img);
      }
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Account</Text>
        <View style={styles.userDetailsContainer}>
          <Image style={styles.userImg} source={{uri: user?.profile}} />

          <View style={styles.nameEmailContainer}>
            <Text style={styles.heading}>{user?.userName}</Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>
        </View>
        {/* <TouchableOpacity onPress={imageGalleryLaunch}>
          <Text style={styles.underlineTealText}>Edit Picture</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          style={styles.navigateBtns}>
          <Image style={styles.icon} source={images.editProfileIcon} />
          <Text style={styles.subHeading}>Edit Profile</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notifications');
          }}
          style={styles.navigateBtns}>
          <Image style={styles.icon} source={images.notificationIcon} />
          <Text style={styles.subHeading}>Notifications</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
          style={styles.navigateBtns}>
          <Image style={styles.icon} source={images.securityIcon} />
          <Text style={styles.subHeading}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Privacy');
          }}
          style={styles.navigateBtns}>
          <Image style={styles.icon} source={images.privacyIcon} />
          <Text style={styles.subHeading}>Privacy Policy</Text>
        </TouchableOpacity>

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
                    dispatch(removeAuthToken());
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
