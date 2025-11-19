import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },

  mapContainer: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.01,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    overflow: 'hidden',
    marginVertical: sizes.screenHeight * 0.01,
  },

  map: {
    height: sizes.screenHeight * 0.24,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  scrollViewContainer: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    // height: sizes.screenHeight * 0.9,
    // marginTop: sizes.screenHeight * 0.02,
  },

  heading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h5,
    color: colors.black,
    marginVertical: sizes.screenHeight * 0.01,
    maxWidth: sizes.screenWidth * 0.8,
    alignSelf: 'flex-start',
    fontWeight: '500',
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: sizes.screenWidth * 0.02,
  },

  itemContainer2: {
    flexDirection: 'row',
    marginVertical: sizes.screenWidth * 0.02,
  },

  payCardsContainer: {
    flexDirection: 'row',
    marginVertical: sizes.screenHeight * 0.01,
  },

  visaImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.15,
    marginRight: 18,
  },

  masterCardImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.1,
    marginRight: 18,
  },

  amexImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.1,
  },

  icon: {
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
    marginRight: sizes.screenWidth * 0.03,
    resizeMode: 'contain',
  },

  nextTealIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon2: {
    height: 38,
    width: 38,
    resizeMode: 'contain',
  },

  icon3: {
    position: 'absolute',
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },

  icon5: {
    position: 'absolute',
  },

  itemHeading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.medium,
    color: colors.black,
    marginBottom: 2,
    fontWeight: '500',
  },

  itemHeadingTeal: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.medium,
    color: colors.teal,
    marginBottom: 2,
    marginRight: 50,
    fontWeight: '500',
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
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.bgLight,
    borderRadius: 10,
    paddingVertical: sizes.screenHeight * 0.015,
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginVertical: sizes.screenHeight * 0.01,
    borderWidth: 2,
    borderColor: colors.bgLight,
  },

  couponRowLeftTeal: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.teal,
    paddingVertical: sizes.screenHeight * 0.015,
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginVertical: sizes.screenHeight * 0.01,
  },

  upiContainer: {
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.bgLight,
    borderRadius: 16,
    paddingVertical: sizes.screenHeight * 0.015,
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginVertical: sizes.screenHeight * 0.01,
  },

  payIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  payIconContainer: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },

  payIconContainerSelected: {
    borderWidth: 2,
    borderColor: colors.lightTeal,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },

  payIcon: {
    height: sizes.screenWidth * 0.24,
    width: sizes.screenWidth * 0.24,
    resizeMode: 'contain',
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
    fontWeight: '500',
  },

  couponHeading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: '500',
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
    fontWeight: '500',
  },

  discountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dashedLine: {
    borderBottomWidth: 3,
    borderStyle: 'dashed',
    borderBottomColor: colors.disabledBg,
    marginVertical: sizes.screenHeight * 0.01,
  },

  textTeal: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.tealMix,
    marginBottom: sizes.screenHeight * 0.02,
  },

  BottomBtnContainer: {position: 'absolute', bottom: sizes.screenHeight * 0.04},

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

  errMsg: {
    color: colors.red,
    marginHorizontal: sizes.screenWidth * 0.05,
    fontSize: fontSize.regular,
    alignSelf: 'flex-start',
  },

  addCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
  },

  iconNoMargin: {
    height: sizes.screenWidth * 0.08,
    width: sizes.screenWidth * 0.08,
    resizeMode: 'contain',
  },

  viewAllContainerMain: {
    height: sizes.screenHeight * 0.065,
    justifyContent: 'center',
  },

  viewAllContainer: {
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenHeight * 0.05,
  },

  viewAllText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.teal,
    fontSize: fontSize.medium,
    fontWeight: '500',
  },

  bottmBtnIOS: {
    marginBottom: sizes.screenHeight * 0.07,
  },
});
