import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {ColorProperties} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import Signup from '.';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },

  headerContainer: {
    marginBottom: sizes.screenHeight * 0.03,
  },
  subHeading: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    textAlign: 'center',
    width: sizes.screenWidth * 0.8,
    marginVertical: sizes.screenHeight * 0.04,
    fontSize: fontSize.medium,
  },
  inputView: {
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTitle: {
    fontFamily: 'Satoshi-Medium',
    marginHorizontal: sizes.screenWidth * 0.01,
    color: colors.disabledBg2,
  },
  inputField: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
    minWidth: sizes.screenWidth * 0.5,
    // height: sizes.screenHeight * 0.05,
  },
  inputFieldIOS: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
    minWidth: sizes.screenWidth * 0.5,
    height: sizes.screenHeight * 0.05,
  },

  bottomBtnContainer: {
    marginBottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,
  },

  checkField: {
    width: sizes.screenWidth,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.01,
    flexDirection: 'row',
  },

  checkIconContainer: {
    height: sizes.screenHeight * 0.065,
    width: sizes.screenHeight * 0.065,
    borderRadius: sizes.screenHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },

  checkIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
  },

  textContainer: {
    width: sizes.screenWidth * 0.8,
  },

  textBold: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
  },

  textLight: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.medium,
  },

  feather: {
    position: 'absolute',
    right: 0,
    height: sizes.screenHeight * 0.065,
    width: sizes.screenHeight * 0.065,
    alignItems: 'center',
    justifyContent: 'center',
  },

  errMsg: {
    color: colors.red,
    alignSelf: 'flex-start',
    marginHorizontal: sizes.screenWidth * 0.05,
    fontSize: fontSize.regular,
    fontWeight: '500',
  },
});
