import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },

  headerContainer: {
    marginBottom: sizes.screenHeight * 0.03,
  },

  appIcon: {
    height: sizes.screenWidth * 0.3,
    width: sizes.screenWidth * 0.3,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.3,
    marginVertical: sizes.screenHeight * 0.02,
  },

  outletCover: {
    height: sizes.screenHeight * 0.25,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    borderRadius: 24,
    marginVertical: sizes.screenHeight * 0.02,
  },

  disabledText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.large,
    alignSelf: 'center',
  },

  cafeName: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.h4,
    fontWeight: '500',
    alignSelf: 'center',
  },

  ratingContainer: {
    width: sizes.screenWidth * 0.68,
    alignSelf: 'center',
    marginVertical: 8,
    alignItems: 'center',
  },
  profileContainerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    alignSelf: 'flex-start',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profile: {
    height: 60,
    width: 60,
    borderRadius: 60,
    marginRight: 10,
  },

  userName: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '500',
  },

  instructionsContainer: {
    height: sizes.screenHeight * 0.1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.9,
  },

  descriptionInput: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.black,
    maxWidth: sizes.screenWidth * 0.84,
    marginLeft: sizes.screenWidth * 0.02,
  },

  bottomBtnContainer: {
    // position: 'absolute',
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,
  },

  errMsg: {
    width: sizes.screenWidth * 0.9,
    marginLeft: sizes.screenWidth * 0.05,
    color: colors.error,
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

  deleteBtn: {
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },

  deleteIcon: {
    height: 24,
    width: 24,
  },

  modalContainer: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
  },

  modalBottomBodyContainer: {
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: sizes.screenHeight * 0.03,
    borderTopRightRadius: sizes.screenHeight * 0.03,
    backgroundColor: colors.white,
    overflow: 'hidden',
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
