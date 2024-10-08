import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  headerContainer: {
    marginBottom: sizes.screenHeight * 0.03,
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

  hr: {
    height: 1,
    width: sizes.screenWidth * 0.9,
    borderRadius: 4,
    backgroundColor: colors.disabledBg,
    marginVertical: 12,
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
  },

  dateAndTimeContainer: {},

  dateAndTime: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.disabledBg2,
  },

  statusContainer: {
    width: sizes.screenWidth * 0.34,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.large,
    color: colors.white,
  },

  scrollViewContainer: {
    maxHeight: sizes.screenHeight * 0.72,
  },

  menuContainer: {
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
  },

  menuImg: {
    height: sizes.screenWidth * 0.4,
    width: sizes.screenWidth * 0.4,
    borderRadius: 12,
  },

  nameAndAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },

  name: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.large,
    alignSelf: 'center',
    marginVertical: 6,
  },

  amount: {
    color: colors.disabledBg2,
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
  },

  description: {
    width: sizes.screenWidth * 0.9,
    color: colors.disabledBg2,
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
  },

  row: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  height: {
    height: sizes.screenHeight * 0.02,
  },

  menuRight: {},

  modalContainer: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
  },

  modalBottomBodyConatiner:{
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: sizes.screenHeight * 0.03,
    borderTopRightRadius: sizes.screenHeight * 0.03,
    backgroundColor: colors.white,
    overflow: 'hidden'
  },

  modalBottomBody: {
    width: sizes.screenWidth,
    paddingLeft: sizes.screenWidth * 0.05,
    backgroundColor: colors.white,
    paddingTop: sizes.screenHeight * 0.04,
    paddingBottom: sizes.screenHeight * 0.05,
  },

  modalBottomHeading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '500',
    marginBottom: sizes.screenHeight * 0.04,
    textAlign: 'center',
    maxWidth: sizes.screenWidth * 0.9,
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

  errMsg: {
    width: sizes.screenWidth * 0.9,
    color: colors.error,
    marginBottom: 4,
  },
});
