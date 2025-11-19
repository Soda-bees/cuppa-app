import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },

  availableRewardsContainer: {
    width: sizes.screenWidth * 0.9,
    padding: sizes.screenWidth * 0.04,
    backgroundColor: colors.bgLight,
    borderRadius: 12,
    marginBottom: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.04,
  },

  availableRewardsContainer2: {
    width: sizes.screenWidth * 0.9,
    padding: sizes.screenWidth * 0.04,
    backgroundColor: colors.bgLight,
    borderRadius: 12,
    marginBottom: sizes.screenHeight * 0.02,
  },

  availableRewardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  numberOfRewards: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: sizes.screenWidth * 0.03,
  },

  numberOfRewardsText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.white,
    fontSize: fontSize.medium,
  },

  heading: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.h6,
    marginVertical: 4,
    fontWeight: '500',
  },

  dropDownIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },

  availableRewardsScrollViewContainer: {
    maxHeight: sizes.screenHeight * 0.25,
  },

  rewardsContainer: {
    backgroundColor: colors.white,
    marginTop: sizes.screenHeight * 0.02,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: sizes.screenHeight * 0.01,
    paddingHorizontal: sizes.screenWidth * 0.03,
  },

  textLight: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
  },

  textLight2: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
    maxWidth: sizes.screenWidth * 0.5,
  },

  textBlackBold: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
    marginVertical: 2,
    fontWeight: '500',
  },

  textBlackBold2: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
  },

  textBlackLight: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.smallM,
  },

  itemImgSmall: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.08,
  },

  itemImgSmall2: {
    height: sizes.screenWidth * 0.2,
    width: sizes.screenWidth * 0.2,
    borderRadius: 9,
  },

  /////ready to win

  RewardsScrollViewContainer: {
    height: sizes.screenHeight * 0.3,
  },

  RewardsScrollViewContainerLarge: {
    maxHeight: sizes.screenHeight * 0.54,
  },

  itemsInRow: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  rewardsContainer2: {
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.22,
    width: sizes.screenWidth * 0.39,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.grayBg,
    alignItems: 'center',
    paddingVertical: sizes.screenHeight * 0.02,
    justifyContent: 'space-between',
  },

  itemImgLarge: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
  },

  beansContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.grayBg,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: sizes.screenHeight * 0.05,
  },

  beansGold: {
    resizeMode: 'contain',
    height: 18,
    width: 18,
    marginRight: 5,
  },

  //////////////Modal

  modalBody: {
    backgroundColor: colors.white,
    borderRadius: sizes.screenHeight * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: sizes.screenHeight * 0.05,
  },

  qrModalText: {
    fontFamily: 'Satoshi-Bold',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.teal,
    fontSize: fontSize.h6,
    marginTop: sizes.screenHeight * 0.02,
    maxWidth: sizes.screenWidth * 0.8,
  },

  modalCup: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.16,
    width: sizes.screenHeight * 0.16,
  },

  modalText: {
    fontFamily: 'Satoshi-Bold',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.8,
    fontWeight: '500',
  },

  modalTextHeading: {
    fontFamily: 'Satoshi-Bold',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.h5,
    width: sizes.screenWidth * 0.8,
    marginVertical: sizes.screenHeight * 0.01,
    fontWeight: '500',
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

  modalContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },

  modalBottomBodyConatiner: {
    position: 'absolute',
    bottom: -30,
    borderTopLeftRadius: sizes.screenHeight * 0.03,
    borderTopRightRadius: sizes.screenHeight * 0.03,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },

  modalBottomBody: {
    width: sizes.screenWidth,
    paddingLeft: sizes.screenWidth * 0.05,
    backgroundColor: colors.white,
    paddingTop: sizes.screenHeight * 0.03,
    paddingBottom: sizes.screenHeight * 0.04,
  },

  modalBottomHeading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '500',
    maxWidth: sizes.screenWidth * 0.88,
  },

  modalBottomText: {
    marginVertical: sizes.screenHeight * 0.03,
    fontFamily: 'Satoshi-Regular',
    fontSize: fontSize.regular,
    color: colors.gray,
    width: sizes.screenWidth * 0.9,
  },

  modalBottomText2: {
    marginTop: sizes.screenHeight * 0.03,
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

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  beansGold2: {
    height: 26,
    width: 26,
    resizeMode: 'contain',
    marginLeft: 6,
  },

  errMsg: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.error,
    marginBottom: 8,
  },

  modalCup2: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
  },
});
