import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Keyboard,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors, sizes} from '../../services';
import PhoneInput from 'react-native-phone-number-input';
import DatePicker from 'react-native-date-picker';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserData, setUserData} from '../../store/userDetails';
import {selectAuthToken} from '../../store/authSlice';
import {updateUserDetails, uploadProfile} from '../../services/config/API';
import BottomBtnLoader from '../../components/BottomBtnLoader';
import {launchImageLibrary} from 'react-native-image-picker';
import {ActivityIndicator} from 'react-native-paper';

export default function EditProfile({navigation}) {
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  const user = useSelector(selectUserData);
  console.log(user);

  const [userName, setUserName] = useState(user?.userName);
  const [email, setEmail] = useState('jake_gracia11@examplemail.com');
  const [dob, setDob] = useState('');
  const [contactNo, setContactNo] = useState(user.phoneNumber);
  const [countryCode, setCountryCode] = useState(user.countryCode);
  const [userIcon, setUserIcon] = useState(user.profile);

  const [value, setValue] = useState(user.phoneNumber);
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [loaderImg, setLoaderImg] = useState(false);
  const [loader, setLoader] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  const extractDate = dateString => {
    if (!dateString) {
      return null;
    }

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
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
        const img = res.assets[0];
        handleUploadProfile(img);
      }
    });
  };

  const handleUploadProfile = async image => {
    setLoaderImg(true);
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
        setUserIcon(response?.data?.url);
        userData.profile = response?.data?.url;
        setLoaderImg(false);
      } else {
        setLoaderImg(false);
        console.log(response.message);
      }
    } catch (error) {
      setLoaderImg(false);
      console.log(error);
    }
  };

  const handleChanges = async () => {
    setLoader(true);

    try {
      const body = {
        userName,
        phoneNumber:
          phoneInput?.current?._reactInternals?.stateNode?.state?.number,
        countryCode:
          phoneInput?.current?._reactInternals?.stateNode?.state?.countryCode,
        dateOfBirth: date,
        profile: userIcon,
      };
      console.log(body);
      const response = await updateUserDetails(body, token);
      if (response.data.success) {
        console.log(
          '===============',
          JSON.stringify(response?.data.updatedData),
        );
        const user = response?.data.updatedData;
        setLoader(false);
        setErrorMsg('');
        dispatch(setUserData(user));
        navigation.navigate('TabNavigation');
      } else {
        setErrorMsg(response.data.message);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);

      setLoader(false);
    }
  };
  return (
    <SafeAreaView
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}
      style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainContainerBody}>
          <View style={styles.headerContainer}>
            <Header title={'Edit Profile'} />
          </View>
          <View style={styles.userDetailsContainer}>
            {loaderImg ? (
              <View style={styles.loader}>
                <ActivityIndicator color={colors.grayBg2} size={30} />
              </View>
            ) : (
              <Image style={styles.userImg} source={{uri: userIcon}} />
            )}
          </View>
          <TouchableOpacity
            onPress={imageGalleryLaunch}
            style={styles.marginBottom}>
            <Text style={styles.underlineTealText}>Edit Picture</Text>
          </TouchableOpacity>

          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Username</Text>
            <TextInput
              placeholder={'Enter Your Name'}
              style={styles.inputField}
              placeholderTextColor={colors.disabledBg3}
              onChangeText={text => setUserName(text)}
              value={userName}
            />
          </View>

          {/* <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            placeholder={'Enter Your Email'}
            placeholderTextColor={colors.disabledBg3}
            style={styles.inputField}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View> */}

          {/* <TouchableOpacity
          style={styles.inputView}
          onPress={() => {
            setOpen(true);
          }}>
          <View>
            <Text style={styles.inputTitle}>Date of Birth</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{extractDate(date)}</Text>
            </View>
            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"
              title="Select Date of Birth"
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <View style={styles.dateIconContainer}>
            <Image style={styles.dateIcon} source={images.dateIcon} />
          </View>
        </TouchableOpacity> */}

          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Contact Number</Text>

            <PhoneInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode={user?.countryCode !== '' ? user?.countryCode : 'US'}
              layout="first"
              withShadow={false}
              autoFocus={false}
              onChangeFormattedText={text => {
                setValue(text);
              }}
              withDarkTheme={false}
              placeholder={contactNo}
              flagButtonStyle={{
                backgroundColor: colors.bgLight,
                height: sizes.screenHeight * 0.07,
                width: sizes.screenHeight * 0.07,
              }}
              containerStyle={{
                height: sizes.screenHeight * 0.07,
              }}
              textInputStyle={{
                height: sizes.screenHeight * 0.07,
                color: colors.black,
              }}
              textInputProps={{
                placeholderTextColor: colors.black,
              }}
              onChangeText={text => {
                setContactNo(text);
              }}
            />
          </View>

          <Text style={styles.errMsg}>{errorMsg}</Text>

          {loader ? (
            <View
              style={
                Platform.OS == 'android'
                  ? styles.bottomBtnContainer
                  : styles.bottomBtnContainerIOS
              }>
              <BottomBtnLoader />
            </View>
          ) : (
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
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
