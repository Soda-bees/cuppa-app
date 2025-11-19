import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },

  scrollViewContainer: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    height: sizes.screenHeight * 0.85,
    marginTop: sizes.screenHeight * 0.02,
    paddingBottom: sizes.screenHeight * 0.03,
  },

  heading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h5,
    color: colors.black,
    marginVertical: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.02,
  },
  heading2: {
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: '600',
  },

  closeBtn: {
    height: 32,
    width: 32,
    resizeMode: 'contain',
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: sizes.screenWidth * 0.02,
  },

  itemImg: {
    height: sizes.screenWidth * 0.16,
    width: sizes.screenWidth * 0.16,
    borderRadius: 14,
    marginRight: sizes.screenWidth * 0.03,
  },

  nameAndQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemHeading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h6,
    color: colors.black,
    width: sizes.screenWidth * 0.6,
    marginBottom: 6,
  },

  itemHeading2: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h6,
    color: colors.black,
    marginBottom: 6,
  },

  itemAddOns: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
    width: sizes.screenWidth * 0.6,
  },

  crossIconn: {
    resizeMode: 'contain',
    height: 32,
    width: 32,
    borderRadius: 32,
  },

  eventSeparator: {
    height: 1,
    backgroundColor: colors.disabledBg,
    width: sizes.screenWidth * 0.9,
  },

  couponRow: {
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.bgLight,
    borderRadius: 10,
    paddingVertical: sizes.screenHeight * 0.015,
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginVertical: sizes.screenHeight * 0.01,
  },

  couponRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  coupon: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginRight: sizes.screenWidth * 0.03,
  },

  couponText: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.large,
    color: colors.white,
  },

  couponHeading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.large,
    color: colors.black,
  },

  couponPercentage: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: sizes.screenHeight * 0.01,
  },

  textBold: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.medium,
    color: colors.black,
  },

  discountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dashedLine: {
    // borderBottomWidth: 3,
    // borderStyle: 'dotted',
    // borderBottomColor: colors.disabledBg,
    // marginVertical: sizes.screenHeight * 0.01,
    width: '100%',
    height: 3,
    marginVertical: sizes.screenHeight * 0.01,
  },

  textTeal: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.tealMix,
    marginBottom: sizes.screenHeight * 0.02,
  },

  BottomBtnContainer: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
  },
  BottomBtnContainerIOS: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.11,
  },

  height: {
    marginBottom: sizes.screenHeight * 0.06,
  },

  modalContainer: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
  },

  modalBodyContainer: {
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: sizes.screenHeight * 0.03,
    borderTopRightRadius: sizes.screenHeight * 0.03,
    overflow: 'hidden',
  },

  modalBody: {
    height: sizes.screenHeight * 0.25,
    width: sizes.screenWidth,
    paddingLeft: sizes.screenWidth * 0.05,
    backgroundColor: colors.white,
    paddingTop: sizes.screenHeight * 0.03,
  },

  modalBody2: {
    height: sizes.screenHeight * 0.25,
    width: sizes.screenWidth,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: sizes.screenHeight * 0.03,
    borderTopRightRadius: sizes.screenHeight * 0.03,
    paddingTop: sizes.screenHeight * 0.03,
    alignItems: 'center',
  },

  modalHeading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '500',
  },

  modalText: {
    marginVertical: sizes.screenHeight * 0.03,
    fontFamily: 'Satoshi-Regular',
    fontSize: fontSize.medium,
    color: colors.gray,
  },

  modalBtnContainer: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },

  modalBtnContainer2: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
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
