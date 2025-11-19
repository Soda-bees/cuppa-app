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

  membershipCardContainer2: {
    height: sizes.screenHeight * 0.2,
    width: sizes.screenWidth * 0.9,
    overflow: 'hidden',
    borderRadius: 14,
    marginBottom: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.03,
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

  membershipStatus: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.white,
  },

  shareTextWhite2: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h6,
    color: colors.white,
    width: sizes.screenWidth * 0.5,
    marginVertical: 8,
    fontWeight: '500',
  },

  shareBtn3: {
    backgroundColor: colors.white,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 50,
    alignSelf: 'flex-start',
    marginVertical: sizes.screenHeight * 0.01,
  },

  shareBtnText: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.regular,
    color: colors.black,
    fontWeight: '500',
  },

  payBtnContainer: {
    width: sizes.screenWidth * 0.9,
    borderRadius: 12,
    paddingHorizontal: sizes.screenWidth * 0.05,
    backgroundColor: colors.bgLight,
    marginBottom: sizes.screenHeight * 0.03,
  },

  payBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: sizes.screenHeight * 0.02,
    justifyContent: 'space-between',
  },

  payBtnText: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '500',
  },

  termsSection: {
    width: sizes.screenWidth * 0.9,
  },

  textBgBold: {
    fontFamily: 'Satoshi-Bold',
    color: colors.disabledBg2,
    fontSize: fontSize.large,
    fontWeight: '500',
  },

  termsRow: {
    flexDirection: 'row',
    marginTop: sizes.screenHeight * 0.01,
  },

  dot: {
    height: 6,
    width: 6,
    backgroundColor: colors.disabledBg2,
    borderRadius: 8,
    marginTop: 11,
    marginHorizontal: sizes.screenWidth * 0.02,
  },

  termsText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.disabledBg2,
    width: sizes.screenWidth * 0.8,
  },

  bottomBtnContainer: {
    marginBottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,
  },

  modalContainer: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
  },

  modalContainerIOS: {
    height: sizes.screenHeight * 0.3,
    width: sizes.screenWidth,
    alignSelf: 'center',
    top: sizes.screenHeight * 0.35,
  },
  modalBottomBody: {
    width: sizes.screenWidth,
    alignItems: 'center',
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
    alignSelf: 'flex-start',
    marginLeft: sizes.screenWidth * 0.05,
    fontWeight: '500',
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
    fontSize: fontSize.medium,
    color: colors.black,
    width: sizes.screenWidth * 0.6,
    marginBottom: 4,
    fontWeight: '500',
  },

  perksTextLight: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.black,
    width: sizes.screenWidth * 0.6,
  },

  separator: {
    height: 1,
    backgroundColor: colors.disabledBg,
    width: sizes.screenWidth * 0.82,
    marginVertical: sizes.screenHeight * 0.01,
    alignSelf: 'center',
  },

  errMsg: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.error,
    marginBottom: 8,
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
