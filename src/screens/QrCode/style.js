import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  body: {
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.05,
  },

  heading: {
    width: sizes.screenWidth * 0.7,
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: '600',
  },

  bodyText: {
    fontFamily: 'Satoshi-Medium',
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.medium,
    marginVertical: sizes.screenHeight * 0.03,
  },

  bodyText2: {
    fontFamily: 'Satoshi-Medium',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.medium,
  },

  touchableTextCOntainer: {
    height: sizes.screenHeight * 0.065,
    justifyContent: 'center',
  },

  bodyTextBold: {
    fontFamily: 'Satoshi-Black',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.teal,
    fontSize: fontSize.medium,
    fontWeight: '600',
  },

  bodyImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.36,
    width: sizes.screenHeight * 0.36,
    marginVertical: sizes.screenHeight * 0.03,
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bottomBtnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,
  },

  modalBody: {
    backgroundColor: colors.white,
    borderRadius: sizes.screenHeight * 0.02,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: sizes.screenHeight * 0.03,
  },

  modalCup: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.16,
    width: sizes.screenHeight * 0.16,
    // width: sizes.screenHeight * 0.16,
  },

  modalText: {
    fontFamily: 'Satoshi-Bold',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.8,
  },

  modalTextHeading: {
    fontFamily: 'Satoshi-Bold',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.h5,
    width: sizes.screenWidth * 0.8,
    marginVertical: sizes.screenHeight * 0.01,
  },

  modalTextNormal: {
    fontFamily: 'Satoshi-Medium',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.8,
    marginVertical: sizes.screenHeight * 0.01,
  },

  btnContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.76,
    height: sizes.screenHeight * 0.055,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: 8,
    marginVertical: sizes.screenHeight * 0.02,
  },

  buttonText: {
    fontFamily: 'Satoshi-Bold',
    width: sizes.screenWidth * 0.6,
    fontSize: fontSize.large,
    color: colors.white,
  },

  bottomBtnNextIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
  },

  /////Bottom Modal Code

  modalContainer: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
  },

  modalBottomBody: {
    width: sizes.screenWidth,
    paddingLeft: sizes.screenWidth * 0.05,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: sizes.screenHeight * 0.03,
    borderTopRightRadius: sizes.screenHeight * 0.03,
    paddingTop: sizes.screenHeight * 0.03,
    paddingBottom: sizes.screenHeight * 0.04,
  },

  modalBottomHeading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h5,
    color: colors.black,
  },

  modalBottomText: {
    marginVertical: sizes.screenHeight * 0.03,
    fontFamily: 'Satoshi-Regular',
    fontSize: fontSize.regular,
    color: colors.gray,
    width: sizes.screenWidth * 0.9,
  },

  modalBtnContainer: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  modalBtnWhite: {
    width: sizes.screenWidth * 0.43,
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.05,
    borderWidth: 1,
    borderColor: colors.darkTeal,
    borderRadius: 10,
  },

  modalBtngreen: {
    width: sizes.screenWidth * 0.43,
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.05,
    borderRadius: 8,
  },

  modalBtnWhiteText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
  },

  modalBtnGreenText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.white,
  },
});
