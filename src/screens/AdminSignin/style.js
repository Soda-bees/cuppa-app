import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  margin: {
    height: sizes.screenHeight * 0.15,
  },

  subHeading: {
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
    height: sizes.screenHeight * 0.05
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
    marginVertical: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.04,
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
    width: sizes.screenWidth * 0.9,
    paddingVertical: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.03,
    marginVertical: sizes.screenHeight * 0.01,
    borderWidth: 1.1,
    borderColor: colors.disabledBg,
  },

  btnImg: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
    marginLeft: sizes.screenWidth * 0.04,
  },
  linkText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.medium,
    textAlign: 'center',
    width: sizes.screenWidth * 0.75,
  },
  bottomSignupView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textNormal: {
    fontFamily: 'Satoshi-Medium',
    color: colors.grayBorder,
    fontSize: fontSize.medium,
  },

  bottomSignupTextContainer: {
    height: sizes.screenHeight * 0.065,
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
