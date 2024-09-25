import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  bottomBtnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.04,
  },

  errMsg: {
    color: colors.error,
    alignSelf: 'flex-start',
    marginLeft: sizes.screenWidth * 0.05,
    marginBottom: 10,
  },

  cardContainer: {
    height: sizes.screenHeight * 0.25,
    width: sizes.screenWidth * 0.9,
    borderRadius: 13,
    paddingHorizontal: sizes.screenWidth * 0.05,
    paddingVertical: sizes.screenHeight * 0.02,
    justifyContent: 'space-between',
    marginVertical: sizes.screenHeight * 0.03,
  },

  row: {
    width: sizes.screenWidth * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textWhiteNormal: {
    fontFamily: 'Satoshi-Regular',
    fontSize: fontSize.medium,
    color: colors.white,
  },

  textWhiteLarger: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.h5,
    color: colors.white,
  },

  masterCard2: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
  },

  gap4: {
    gap: 4,
  },

  cardBtnContainer: {
    width: sizes.screenWidth * 0.9,
  },

  bottomBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.bgLight,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.bgLight,
    marginVertical: sizes.screenHeight * 0.01,
    padding: 6,
    height: sizes.screenHeight * 0.065,
  },

  bottomBtn2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.bgLight,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.disabledBg2,
    marginVertical: sizes.screenHeight * 0.01,
    padding: 6,
    height: sizes.screenHeight * 0.065,
  },

  bottomBtnLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
    marginRight: sizes.screenWidth * 0.03,
    resizeMode: 'contain',
  },

  itemHeading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.medium,
    color: colors.black,
    marginBottom: 2,
    fontWeight: '500',
  },

  editDotsContainer: {
    padding: 4,
  },

  editDots: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },

  dd: {
    position: 'absolute',
    backgroundColor: colors.disabledBg,
    borderRadius: 7,
    right: 16,
    top: 36,
    // padding: 6,
    alignItems: 'center',
  },

  separator: {
    height: 1,
    backgroundColor: colors.disabledBg2,
    width: 72,
  },

  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
    height: 36,
    width: 80,
  },

  editBtnIcon: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
    marginRight: 4,
  },

  editBtnText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
  },

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

  addCardIconContainer: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.05,
    right: sizes.screenWidth * 0.05,
  },
  addCardIconContainerIOS: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.1,
    right: sizes.screenWidth * 0.05,
  },

  addCardIcon: {
    height: 50,
    width: 50,
  },
  
});
