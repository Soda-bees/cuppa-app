import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';
import {colors, sizes} from '../../services';
import PhoneInput from 'react-native-phone-number-input';
import CountryPicker from 'react-native-country-picker-modal';
import LinearGradient from 'react-native-linear-gradient';

export default function Signup({navigation}) {
  const [shopName, setShopName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  // const [hideSignupPass, setHideSignUpPass] = useState(true);
  const [check1, setCheck1] = useState(false);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const isUser = false;
  const [password, setPassword] = useState('');
  const [hideSignupPass, setHideSignUpPass] = useState(true);
  const [confirmpassword, setConfirmPassword] = useState('');
  const [hideConfirmPass, setHideConfirmPass] = useState(true);

  const handleConfirm = () => {
    navigation.navigate('');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Sign Up</Text>
        </View>

        <View style={styles.scroll}>
          <ScrollView>
            <View style={styles.inputView}>
              <Text style={styles.inputTitle}>Name</Text>
              <TextInput
                placeholder={'Enter Name'}
                style={styles.inputField}
                placeholderTextColor={colors.disabledBg3}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputTitle}>Coffee Shop Name</Text>
              <TextInput
                placeholder={'Enter Coffee Shop Name'}
                style={styles.inputField}
                placeholderTextColor={colors.disabledBg3}
                onChangeText={text => setAdminName(text)}
                value={adminName}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                placeholder={'Enter Email'}
                placeholderTextColor={colors.disabledBg3}
                style={styles.inputField}
                onChangeText={text => setEmail(text)}
                value={email}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                placeholder={'Enter Password'}
                placeholderTextColor={colors.disabledBg3}
                style={styles.inputField}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={hideSignupPass}
              />
              <TouchableOpacity
                style={styles.feather}
                onPress={() => setHideSignUpPass(!hideSignupPass)}>
                <Feather
                  name={!hideSignupPass ? 'eye' : 'eye-off'}
                  color={colors.teal}
                  size={24}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputTitle}>Confirm Password</Text>
              <TextInput
                placeholder={'Re-Enter Password'}
                placeholderTextColor={colors.disabledBg3}
                style={styles.inputField}
                onChangeText={text => setConfirmPassword(text)}
                value={confirmpassword}
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

            <View style={styles.inputView}>
              <Text style={styles.inputTitle}>Contact Number</Text>
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="US"
                layout="first"
                withShadow={false}
                autoFocus={false}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
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
            <View style={styles.inputView}>
              <Text style={styles.inputTitle}>Enter Location</Text>
              <View style={styles.countryField}>
                <CountryPicker
                  withFilter
                  withCountryNameButton
                  withAlphaFilter
                  withCallingCode={false} // Set this to false
                  onSelect={country => setSelectedCountry(country)}
                  placeholder={selectedCountry?.name}
                  style={styles.inputTitle}
                />
              </View>
            </View>

            <View style={styles.checkField}>
              <TouchableOpacity
                style={styles.checkIconContainer}
                onPress={() => {
                  setCheck1(!check1);
                }}>
                <Image
                  style={Platform.OS == 'android' ? styles.checkIcon : styles.checkIconIOS}
                  source={check1 ? images.checkboxTrue : images.checkboxFalse}
                />
              </TouchableOpacity>
              <Text style={styles.textBold}>I accept the Terms of Use </Text>
              <Text style={styles.textLight}>
                By joining, I agree to Cuppa@ Rewards Terms, the application
                Terms, and have read the Privacy Statement.
              </Text>
            </View>
            <View style={Platform.OS == 'ios' && styles.paddingBottom}></View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={
            Platform.OS == 'android' ? styles.bottomBtn : styles.bottomBtnIOS
          }
          onPress={() =>
            navigation.navigate('AdminEmailVerification', {isUser})
          }>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#287C76', '#60B0AA']}
            style={styles.btnContainer}>
            <Text style={styles.buttonText}>Next</Text>
            <Image
              source={images.bottomBtnNextIcon}
              style={styles.bottomBtnNextIcon}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
