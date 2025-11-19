import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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

  membershipContainer: {
    paddingLeft: sizes.screenWidth * 0.05,
    borderRadius: 12,
    marginVertical: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.2,
    justifyContent: 'center',
  },

  separator: {
    height: 1,
    backgroundColor: colors.disabledBg,
    width: sizes.screenWidth * 0.8,
    marginVertical: 12,
    alignSelf: 'center',
  },

  separator2: {
    height: 1,
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  heading2: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h5,
    color: colors.black,
    marginBottom: 4,
    fontWeight: '500',
  },

  textBlackLight: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.medium,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight: '500',
  },

  textBlackLightSmall: {
    fontFamily: 'Satoshi-Medium',
    fontSize: 12,
    color: colors.black,
    width: sizes.screenWidth * 0.5,
  },

  membershipCup: {
    position: 'absolute',
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.26,
    width: sizes.screenWidth * 0.33,
    bottom: 0,
    right: 0,
  },

  perksContainer: {
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    paddingVertical: sizes.screenHeight * 0.01,
    marginTop: sizes.screenHeight * 0.02,
    borderRadius: 12,
    maxHeight: sizes.screenHeight * 0.52,
  },

  perksItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.8,
  },

  itemImg: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.07,
    resizeMode: 'contain',
    marginRight: sizes.screenWidth * 0.04,
  },

  perksTextBold: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.large,
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

  bottomBtnContainer: {
    marginBottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.11,
  },

  modalContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },

  modalBodyContainer: {
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: sizes.screenHeight * 0.03,
    borderTopRightRadius: sizes.screenHeight * 0.03,
    overflow: 'hidden',
  },

  modalBottomBody: {
    width: sizes.screenWidth,
    paddingTop: sizes.screenWidth * 0.05,
    backgroundColor: colors.white,
    // position: 'absolute',
    // bottom: 0,
    // borderTopLeftRadius: sizes.screenHeight * 0.03,
    // borderTopRightRadius: sizes.screenHeight * 0.03,
    paddingTop: sizes.screenHeight * 0.03,
    paddingBottom: sizes.screenHeight * 0.13,
    alignItems: 'center',
  },

  modalBottomHeading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '500',
  },

  modalBottomTextBody: {
    paddingVertical: sizes.screenHeight * 0.03,
    borderWidth: 2,
    borderColor: colors.tealMix,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: 12,
    paddingLeft: sizes.screenWidth * 0.06,
    backgroundColor: '#60B0AA44',
  },

  modalTextBold: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: '500',
  },

  modalTextBoldLarge: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h1,
    color: colors.black,
    fontWeight: '500',
  },

  modalTextLight: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.black,
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.005,
  },

  cupaClubModalImg: {
    position: 'absolute',
    top: sizes.screenHeight * 0.04,
    right: 0,
    height: sizes.screenHeight * 0.06,
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.21,
  },
});
