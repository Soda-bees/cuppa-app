import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  subHeading: {
    // fontFamily: 'Satoshi-Medium',
    color: colors.black,
    textAlign: 'center',
    width: sizes.screenWidth * 0.95,
    marginVertical: sizes.screenHeight * 0.05,
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

  forgotPassContainer: {
    height: sizes.screenHeight * 0.065,
    justifyContent: 'center',
  },

  forgotPass: {
    fontFamily: 'Satoshi-Medium',
    color: colors.grayBorder,
    fontSize: fontSize.medium,
  },
  dividerText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,

    fontSize: fontSize.medium,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: sizes.screenHeight * 0.01,
  },
  divider: {
    width: sizes.screenWidth * 0.28,
    height: 1,
    backgroundColor: colors.black,
    marginHorizontal: sizes.screenWidth * 0.05,
    borderColor: colors.black,
  },

  linkView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
    paddingVertical: 10,
    borderRadius: sizes.screenWidth * 0.03,
    marginVertical: sizes.screenHeight * 0.01,
    borderWidth: 1.1,
    borderColor: colors.disabledBg,
    paddingHorizontal: sizes.screenWidth * 0.04,
  },

  btnImg: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
  },
  linkText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.medium,
    textAlign: 'center',
    maxWidth: sizes.screenWidth * 0.65,
  },
  bottomSignupView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: sizes.screenHeight * 0.01,
  },

  textNormal: {
    fontFamily: 'Satoshi-Medium',
    color: colors.grayBorder,
    fontSize: fontSize.medium,
  },

  bottomSignupTextContainer: {
    justifyContent: 'center',
  },

  bottomSignupText: {
    fontFamily: 'Satoshi-Bold',
    color: colors.teal,
    fontSize: fontSize.medium,
    fontWeight: '600',
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
    marginHorizontal: sizes.screenWidth * 0.05,
    fontSize: fontSize.regular,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
});
