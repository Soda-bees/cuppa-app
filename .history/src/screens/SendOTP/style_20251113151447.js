import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  mainContainerBody: {
    alignItems: 'center',
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.8,
  },

  body: {
    position: 'absolute',
    // top: 0,
    // bottom: 0,
    top: sizes.screenHeight * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bodyText: {
    fontFamily: 'Satoshi-Medium',
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.medium,
  },

  codeFieldContainer: {
    marginVertical: sizes.screenHeight * 0.03,
  },

  codeFieldRoot: {
    width: sizes.screenWidth * 0.54,
    alignSelf: 'center',
  },

  cell: {
    fontFamily: 'Satoshi-Bold',
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.08,
    lineHeight: sizes.screenHeight * 0.08,
    fontSize: fontSize.h4,
    backgroundColor: colors.bgLight,
    textAlign: 'center',
    color: colors.black,
    borderRadius: 10,
  },
  cellIOS: {
    fontFamily: 'Satoshi-Bold',
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.08,
    lineHeight: sizes.screenHeight * 0.08,
    fontSize: fontSize.h4,
    backgroundColor: colors.bgLight,
    textAlign: 'center',
    color: colors.black,
    borderRadius: 10,
    overflow: 'hidden',
  },

  focusCell: {
    fontFamily: 'Satoshi-Bold',
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.08,
    lineHeight: sizes.screenHeight * 0.08,
    fontSize: fontSize.h4,
    borderWidth: 1,
    borderColor: colors.darkTeal,
    backgroundColor: colors.white,
    textAlign: 'center',
    color: colors.black,
    borderRadius: 10,
  },

  otpTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  forgetText: {
    fontSize: fontSize.medium,
    color: colors.disabledBg2,
    fontFamily: 'Satoshi-Regular',
    fontSize: fontSize.regular,
  },

  number: {
    fontSize: fontSize.medium,
    color: colors.disabledBg2,
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.medium,
  },

  bottomBtnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.04,
  },
  bottomBtn: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.04,
  },
  bottomBtnIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,
  },
  btnContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: 10,
  },

  buttonText: {
    fontFamily: 'Satoshi-Medium',
    width: sizes.screenWidth * 0.6,
    fontSize: fontSize.large,
    color: colors.white,
  },

  bottomBtnNextIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.08,
    width: sizes.screenWidth * 0.08,
  },
  feather: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: sizes.screenWidth * 0.05,
    justifyContent: 'center',
  },

  errMsg: {
    color: colors.red,
    alignSelf: 'flex-start',
    fontSize: fontSize.regular,
    marginTop: sizes.screenHeight * 0.05,
  },
});
