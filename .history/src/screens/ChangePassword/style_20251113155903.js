import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },

  mainContainerBody: {
    alignItems: 'center',
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.8,
  },

  headerContainer: {
    marginBottom: sizes.screenHeight * 0.03,
  },

  subHeading: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.extraLarge,
    width: sizes.screenWidth * 0.9,
    marginBottom: sizes.screenHeight * 0.025,
    fontWeight: '500',
  },

  inputView: {
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
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
    // height: sizes.screenHeight * 0.05,
    fontWeight: '500',
  },
  inputFieldIOS: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
    // height: sizes.screenHeight * 0.05,
    fontWeight: '500',
    height: sizes.screenHeight * 0.05,
  },

  feather: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: sizes.screenWidth * 0.05,
    justifyContent: 'center',
  },

  bottomBtnContainer: {
    marginBottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,
  },

  btnContainer2: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: 10,
  },

  buttonText2: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.large,
    color: colors.white,
    alignSelf: 'center',
  },

  btnContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.teal,
    marginBottom: sizes.screenHeight * 0.02,
  },

  buttonText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.large,
    color: colors.black,
    alignSelf: 'center',
  },

  errMsg: {
    color: colors.red,
    alignSelf: 'flex-start',
    marginHorizontal: sizes.screenWidth * 0.05,
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
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
  },

  modalText: {
    fontFamily: 'Satoshi-Medium',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.8,
    marginVertical: sizes.screenHeight * 0.02,
  },

  modalHeading: {
    fontFamily: 'Satoshi-Bold',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.h5,
    width: sizes.screenWidth * 0.8,
  },

  reviewBtn: {
    width: sizes.screenWidth * 0.34,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },

  reviewBtnText: {
    fontFamily: 'Satoshi-Bold',
    color: colors.white,
    fontSize: fontSize.regular,
  },
});
