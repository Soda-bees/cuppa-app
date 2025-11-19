import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import Header from '../../components/Header';
import {ActivityIndicator, Image, Platform, Text, View} from 'react-native';
import images from '../../services/utilities/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import {colors, sizes} from '../../services';
import {uploadProfile} from '../../services/config/API';
import BottomBtnUser from '../../components/BottomBtnUser';
import BottomBtnLoader from '../../components/BottomBtnLoader';

export default function UploadPhoto({navigation, route}) {
  const [imgUri, setImgUri] = useState('');
  const [loader, setLoader] = useState(false);
  const [next, setNext] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const {isUser, userData} = route.params;

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
        const img = res.assets[0];
        handleUploadProfile(img);
      }
    });
  };

  const handleUploadProfile = async image => {
    setLoader(true);
    try {
      const img = {
        uri: image.uri,
        type: image.type,
        fileName: image.fileName,
      };
      const formData = new FormData();
      formData.append('profile', {
        uri: img.uri,
        type: img.type,
        name: img.fileName,
      });
      const response = await uploadProfile(formData);
      if (response.status == 200) {
        setImgUri(response?.data?.url);
        userData.profile = response?.data?.url;
        setErrMsg('');
        setLoader(false);
        setNext(true);
      } else {
        setLoader(false);
        console.log(response.data.message);
        setErrMsg(response.data.message);
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
      setErrMsg(error.message);
    }
  };

  const handleConfirm = () => {
    {
      next
        ? navigation.navigate('CustomerPersonality', {isUser, userData})
        : setErrMsg('*please upload a picture to continue');
    }
  };

  return (
    <SafeAreaView
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}
      style={styles.mainContainer}>
      <View style={styles.mainContainerBody}>
        <Header title={'Profile Upload'} />
        <Text style={styles.heading}>
          Kindly add a profile picture to enhance your{' '}
          <Text style={{fontWeight: '600'}}>Cuppa</Text> experience!
        </Text>
        <View style={styles.pfpContainer}>
          <Image
            source={imgUri ? {uri: imgUri} : images.UploadPhoto}
            style={imgUri ? styles.pfpDefault : styles.pfp}
          />
        </View>

        <TouchableOpacity
          style={styles.uploadimgbtn}
          onPress={imageGalleryLaunch}>
          <Image source={images.addImg} style={styles.uploadimgbtnimg} />
          <Text style={styles.uploadImgText}>Upload from Gallery</Text>
        </TouchableOpacity>

        {loader ? (
          <View
            style={
              Platform.OS == 'android'
                ? styles.bottomBtnContainer
                : styles.bottomBtnContainerIOS
            }>
            <BottomBtnLoader title={'Next'} />
          </View>
        ) : (
          <View
            style={
              Platform.OS == 'android'
                ? styles.bottomBtnContainer
                : styles.bottomBtnContainerIOS
            }>
            <Text style={styles.errMsg}>{errMsg}</Text>
            <BottomBtnUser title={'Next'} img={true} onPress={handleConfirm} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
