import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, Platform} from 'react-native';
import Header from '../../components/Header';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import BottomBtn from '../../components/BottomBtn';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {colors, sizes} from '../../services';
import PhoneInput from 'react-native-phone-number-input';
import {ScrollView} from 'react-native-gesture-handler';

export default function AdminEditProfile({navigation}) {
  const [outletName, setOutletName] = useState('Gloria Jeans Coffee');
  const [email, setEmail] = useState('gloriajeans@example.com');
  const [modalShow, setModalShow] = useState(true);
  const [userImage, setUserImage] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const phoneInput = useRef(null);
  const [value, setValue] = useState('');
  const [contactNo, setContactNo] = useState();

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
        setUserImage(img);
      }
    });
  };

  const outlets = [
    'Outlet 1',
    'Outlet 2',
   
  ];

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Header title={'Edit Profile'} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          {userImage === '' ? (
            <TouchableOpacity
              style={styles.coverView}
              onPress={() => {
                imageGalleryLaunch();
              }}>
              <Image source={images.uploadCover} style={styles.defaultCover} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.coverView}
              onPress={() => {
                imageGalleryLaunch();
              }}>
              <Image source={userImage} style={styles.userCover} />
            </TouchableOpacity>
          )}
          <Text style={styles.heading}>Upload Cover</Text>
          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Coffee Shop Name</Text>
            <TextInput
              placeholder={'Enter Outlet Name'}
              style={Platform.OS == 'android' ? styles.inputField : styles.inputViewIOS}
              onChangeText={text => setOutletName(text)}
              value={outletName}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              placeholder={'Enter Description'}
              style={Platform.OS == 'android' ? styles.inputField : styles.inputViewIOS}
              // onChangeText={text => setShopName(text)}
              value={email}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Contact Number</Text>
            <PhoneInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode="US"
              layout="first"
              withShadow={false}
              autoFocus={false}
              // onChangeFormattedText={text => {
              //   setFormattedValue(text);
              // }}
              withDarkTheme={false}
              flagButtonStyle={{
                backgroundColor: colors.bluishWhite,
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
                placeholderTextColor: colors.disabledBg2,
              }}
              onChangeText={text => {
                setContactNo(text);
              }}
            />
          </View>

          <View style={styles.dropdownView}>
            <View style={styles.dropDownItem}>
              <Text style={Platform.OS == 'android' ? styles.InputTitle : styles.InputTitleIOS}>Outlets</Text>
            </View>
            {outlets.map((item, index) => (
              <View key={index}>
                <View style={styles.divider} />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AdminEditOutlet');
                  }}>
                  <View style={Platform.OS == 'android' ? styles.dropDownItem : styles.dropDownItemIOS}>
                    <Text style={Platform.OS == 'android' ? styles.rewardText : styles.rewardTextIOS}>{item}</Text>
                    <Image source={images.greenUpBtn} style={styles.upbtn} />
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
        {/* <View style={styles.BottomBtn}>
          <BottomBtn
            title={'Save'}
            navigation={navigation}
            navigateTo={'Mytabs'}
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
}
