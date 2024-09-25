import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, Platform} from 'react-native';
import Header from '../../components/Header';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import {LinearGradient} from 'react-native-linear-gradient';
import {colors, sizes} from '../../services';
import Feather from 'react-native-vector-icons/Feather';

export default function AdminLogin({navigation}) {
  const [password, setPassword] = useState('');
  const [hideSignupPass, setHideSignUpPass] = useState(true);
  const [email, setEmail] = useState('');
  const isUser = false;

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Admin Log In</Text>
        </View>
        <Text style={styles.subHeading}>
          Offering coffee shop owners a platform to enhance their sales with
          Cuppa
        </Text>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            placeholder={'Enter Email'}
            style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
            placeholderTextColor={colors.disabledBg3}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            placeholder={'Enter Password'}
            style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
            placeholderTextColor={colors.disabledBg3}
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
        <TouchableOpacity onPress={() => navigation.navigate('Mytabs')}>
          <View style={styles.signinBtn}>
            <LinearGradient
              colors={[colors.darkTeal, colors.teal]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.LinearGradient}>
              <Text style={styles.btnText}>Sign in</Text>
              <Image source={images.whiteBtn} style={styles.btnImg} />
            </LinearGradient>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword', {isUser})}>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.dividerView}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Sign In with</Text>
          <View style={styles.divider} />
        </View>

        <TouchableOpacity>
          <View style={styles.linkView}>
            <Image source={images.googleBtn} style={Platform.OS == 'android' ? styles.btnImg : styles.btnImgIOS} />
            <Text style={styles.linkText}>Continue with google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.linkView}>
            <Image source={images.facebookBtn} style={Platform.OS == 'android' ? styles.btnImg : styles.btnImgIOS} />
            <Text style={styles.linkText}>Continue with facebook</Text>
          </View>
        </TouchableOpacity>
        <View style={{marginTop: sizes.screenHeight * 0.05}} />
        <View style={styles.bottomSignupView}>
          <Text style={styles.textNormal}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AdminSignup');
            }}>
            <Text style={styles.bottomSignupText}>Sign Up Today!</Text>
          </TouchableOpacity>
        </View>

        
      </View>
    </SafeAreaView>
  );
}
