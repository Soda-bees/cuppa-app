import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  scrollViewContainer: {
    width: sizes.screenWidth,
    alignSelf: 'center',
    height: sizes.screenHeight * 0.77,
    marginTop: sizes.screenHeight * 0.02,
    paddingBottom: sizes.screenHeight * 0.03,
  },

  scrollViewBodyContainer: {
    alignItems: 'center',
    marginBottom: sizes.screenHeight * 0.1,
  },

  toggleRow: {
    width: sizes.screenWidth,
    paddingHorizontal: sizes.screenWidth * 0.05,
    borderBottomColor: colors.bgLight,
    borderBottomWidth: 2,
    flexDirection: 'row',
    marginVertical: sizes.screenHeight * 0.01,
  },

  toggleBtnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: sizes.screenHeight * 0.05,
  },

  toggleBtnTextBlack: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.medium,
  },

  toggleBtnTextTeal: {
    fontFamily: 'Satoshi-Medium',
    color: colors.tealMix,
    fontSize: fontSize.medium,
  },

  underline: {
    height: 2,
    backgroundColor: colors.teal,
    width: sizes.screenWidth * 0.24,
    marginTop: 5,
    borderRadius: 2,
  },

  noLine: {
    height: 2,
    width: sizes.screenWidth * 0.24,
    marginTop: 5,
  },

  myRewardsShareBgContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.12,
    overflow: 'hidden',
    marginBottom: sizes.screenHeight * 0.02,
  },

  myRewardsShareBg: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.12,
  },

  myRewardsShareTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: sizes.screenWidth * 0.05,
    right: sizes.screenWidth * 0.05,
  },

  shareTextWhite: {
    fontFamily: 'Satoshi-Bold',
    fontWeight: '500',
    fontSize: fontSize.h6,
    color: colors.white,
    width: sizes.screenWidth * 0.5,
  },

  shareTextWhite2: {
    fontFamily: 'Satoshi-Bold',
    fontWeight: '500',
    fontSize: fontSize.h6,
    color: colors.white,
    width: sizes.screenWidth * 0.5,
    marginTop: 4,
  },

  membershipStatus: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.white,
  },

  shareBtn: {
    backgroundColor: colors.white,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
  },

  shareBtn2: {
    backgroundColor: colors.white,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginVertical: sizes.screenHeight * 0.01,
  },

  shareBtn3: {
    backgroundColor: colors.white,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: sizes.screenHeight * 0.03,
  },

  shareBtnText: {
    fontFamily: 'Satoshi-Bold',
    fontWeight: '500',
    fontSize: fontSize.regular,
    color: colors.black,
  },

  heading: {
    fontFamily: 'Satoshi-Bold',
    fontWeight: '500',
    fontSize: fontSize.h6,
    color: colors.black,
  },

  beansRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: sizes.screenHeight * 0.02,
  },

  textVeryLarge: {
    fontFamily: 'Satoshi-Bold',
    fontWeight: '500',
    fontSize: 56,
    color: colors.black,
  },

  beansGold: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.07,
    resizeMode: 'contain',
    marginLeft: 6,
  },

  rightArrowIconn: {
    height: sizes.screenHeight * 0.025,
    width: sizes.screenHeight * 0.025,
    resizeMode: 'contain',
    marginLeft: 6,
  },

  claimRewardsBtnContainer: {
    paddingVertical: 8,
    paddingHorizontal: sizes.screenWidth * 0.08,
    borderRadius: 6,
    marginBottom: sizes.screenHeight * 0.02,
  },

  claimRewardsBtnText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.white,
  },

  progressCircleContainer: {
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: sizes.screenHeight * 0.02,
    paddingVertical: sizes.screenHeight * 0.015,
    backgroundColor: colors.bgLight,
    borderRadius: 12,
  },

  progressCircleContainer2: {
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: sizes.screenHeight * 0.02,
    paddingVertical: sizes.screenHeight * 0.015,
    backgroundColor: colors.bgLight,
    borderRadius: 12,
    marginBottom: sizes.screenHeight * 0.02,
  },

  ProgressCircleText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.teal,
  },

  textRegular: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.disabledBg2,
    marginTop: 5,
  },

  membershipCardContainer: {
    height: sizes.screenHeight * 0.2,
    width: sizes.screenWidth * 0.9,
    overflow: 'hidden',
    borderRadius: 14,
    marginVertical: sizes.screenHeight * 0.02,
  },

  membershipCardContainer2: {
    height: sizes.screenHeight * 0.2,
    width: sizes.screenWidth * 0.9,
    overflow: 'hidden',
    borderRadius: 14,
    marginBottom: sizes.screenHeight * 0.03,
  },

  cuppaClubMembershipBg: {
    height: sizes.screenHeight * 0.2,
    width: sizes.screenWidth * 0.9,
    borderRadius: 14,
  },

  membershipCardTextContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: sizes.screenWidth * 0.05,
    right: sizes.screenWidth * 0.05,
    justifyContent: 'center',
  },

  moreInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  moreInfoText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.white,
  },

  moreInfoIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    top: 1,
  },

  getExtraPointsContainerMain: {
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.bgLight,
    maxHeight: sizes.screenHeight * 0.3,
    padding: sizes.screenWidth * 0.04,
    borderRadius: 12,
    marginBottom: sizes.screenHeight * 0.04,
  },

  getExtraPointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.large,
    color: colors.black,
  },

  description: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
    width: sizes.screenWidth * 0.5,
  },

  noOfBeans: {
    fontFamily: 'Satoshi-Bold',
    fontWeight: '500',
    fontSize: fontSize.large,
    color: colors.tealMix,
  },

  beans: {
    fontFamily: 'Satoshi-Bold',
    fontWeight: '500',
    fontSize: fontSize.smallM,
    color: colors.black,
  },

  separator: {
    height: 1,
    backgroundColor: colors.disabledBg,
    width: sizes.screenWidth * 0.82,
    marginVertical: sizes.screenHeight * 0.01,
    alignSelf: 'center',
  },

  howItWorksBody: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.1,
  },

  heading2: {
    fontFamily: 'Satoshi-Bold',
    fontWeight: '500',
    fontSize: fontSize.h5,
    color: colors.black,
    marginBottom: 4,
  },

  textBlackLight: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.01,
  },

  stepContainer: {
    padding: sizes.screenWidth * 0.03,
    borderWidth: 2,
    borderColor: colors.tealMix,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: sizes.screenHeight * 0.01,
  },

  stepImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.07,
    marginRight: sizes.screenWidth * 0.03,
  },

  stepTextBlackLight: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.black,
    width: sizes.screenWidth * 0.66,
  },

  //////// Modal

  modalContainer: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
  },

  modalBottomBodyContainer: {
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: sizes.screenHeight * 0.03,
    borderTopRightRadius: sizes.screenHeight * 0.03,
    overflow: 'hidden',
  },

  modalBottomBody: {
    width: sizes.screenWidth,
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.03,
    paddingBottom: sizes.screenHeight * 0.04,
    backgroundColor: colors.white,
  },

  modalBottomHeading: {
    fontFamily: 'Satoshi-Bold',
    fontWeight: '500',
    fontSize: fontSize.h5,
    color: colors.black,
    alignSelf: 'flex-start',
    marginLeft: sizes.screenWidth * 0.05,
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

  perksContainer: {
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    paddingVertical: sizes.screenHeight * 0.02,
    marginVertical: sizes.screenHeight * 0.02,
    borderRadius: 12,
    maxHeight: sizes.screenHeight * 0.52,
  },

  perksItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.8,
  },

  itemImg: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.08,
    resizeMode: 'contain',
    marginRight: sizes.screenWidth * 0.04,
  },

  perksTextBold: {
    fontFamily: 'Satoshi-Bold',
    fontWeight: '500',
    fontSize: fontSize.medium,
    color: colors.black,
    width: sizes.screenWidth * 0.6,
    marginBottom: 4,
  },

  perksTextLight: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.black,
    width: sizes.screenWidth * 0.6,
  },

  height: {
    height: sizes.screenHeight * 0.03,
  },

  toggleIcon: {
    height: 24,
    width: 44,
    resizeMode: 'contain',
  },

  toggleRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
  },

  modalBottomHeading2: {
    fontFamily: 'Satoshi-Bold',
    fontWeight: '500',
    fontSize: fontSize.h6,
    color: colors.black,
    alignSelf: 'flex-start',
    maxWidth: sizes.screenWidth * 0.75,
  },

  disabledText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.disabledBg2,
    maxWidth: sizes.screenWidth * 0.7,
    marginLeft: sizes.screenWidth * 0.05,
    alignSelf: 'flex-start',
    marginTop: 8,
    marginBottom: 16,
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
    backgroundColor: colors.disabledBg2,
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

  modalBody: {
    backgroundColor: colors.white,
    borderRadius: sizes.screenHeight * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: sizes.screenHeight * 0.05,
  },

  modalCup2: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
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
});
