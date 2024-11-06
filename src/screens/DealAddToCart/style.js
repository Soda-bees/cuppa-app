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

  height: {
    height: sizes.screenHeight * 0.12,
  },
  heightIOS: {
    height: sizes.screenHeight * 0.18,
  },

  mainCoffeeRow: {
    alignItems: 'center',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: sizes.screenHeight * 0.03,
  },

  coffeeName: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h5,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.01,
  },

  coffeeDescription: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.disabledBg2,
    width: sizes.screenWidth * 0.55,
  },

  coffeeImg: {
    height: sizes.screenHeight * 0.15,
    width: sizes.screenHeight * 0.15,
    borderRadius: 20,
  },

  scrollViewContainer: {
    width: sizes.screenWidth * 0.9,
  },

  addOnsMainContainer: {
    backgroundColor: colors.bgLight,
    marginVertical: sizes.screenHeight * 0.02,
    padding: 16,
    borderRadius: 12,
  },

  addOnHeadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  addOnHeading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.large,
    color: colors.black,
  },

  selectText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.disabledBg2,
  },

  requiredBtn: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: sizes.screenHeight * 0.1,
  },

  requiredTextWhite: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.white,
  },

  requiredBtnGrey: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: sizes.screenHeight * 0.1,
    backgroundColor: colors.disabledBg,
  },

  requiredTextBlack: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
  },

  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.03,
    justifyContent: 'space-between',
  },
  optionRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  selectIcon: {
    resizeMode: 'contain',
    height: 16,
    width: 16,
    marginRight: sizes.screenWidth * 0.03,
  },

  optionName: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
  },

  optionPrice: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
  },

  instructions: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.disabledBg2,
  },

  instructionsContainer: {
    height: sizes.screenHeight * 0.1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.01,
  },

  descriptionInput: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.black,
  },

  cartRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  minusBtnIcon: {
    resizeMode: 'contain',
    height: 32,
    width: 32,
  },

  cartCounterText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.h6,
    color: colors.black,
    width: sizes.screenWidth * 0.1,
    textAlign: 'center',
  },

  btnContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.065,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: 10,
  },

  buttonText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.large,
    color: colors.white,
  },

  bottomBtnNextIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.08,
    width: sizes.screenWidth * 0.08,
  },

  seeMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },

  dropDownIcon: {
    resizeMode: 'contain',
    height: 16,
    width: 16,
    marginRight: sizes.screenWidth * 0.03,
  },

  seeMoreButtonText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.tealMix,
  },

  sizesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: sizes.screenHeight * 0.01,
  },

  size: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
    width: sizes.screenWidth * 0.2,
  },

  sizePrice: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
    width: sizes.screenWidth * 0.2,
    textAlign: 'right',
  },

  modalContainer: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
  },

  modalBodyConatiner: {
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: sizes.screenHeight * 0.03,
    borderTopRightRadius: sizes.screenHeight * 0.03,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },

  modalBody: {
    height: sizes.screenHeight * 0.28,
    width: sizes.screenWidth,
    paddingLeft: sizes.screenWidth * 0.05,
    backgroundColor: colors.white,
    paddingTop: sizes.screenHeight * 0.03,
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
    fontSize: fontSize.regular,
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

  errMsg: {
    color: colors.red,
    alignSelf: 'flex-start',
    fontSize: fontSize.regular,
    fontWeight: '500',
    marginBottom: sizes.screenHeight * 0.01,
  },

  couponRow: {
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.bgLight,
    borderRadius: 10,
    paddingHorizontal: sizes.screenWidth * 0.03,
    paddingVertical: sizes.screenHeight * 0.01,
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

  itemImg2: {
    height: sizes.screenWidth * 0.2,
    width: sizes.screenWidth * 0.5,
    marginRight: sizes.screenWidth * 0.03,
    resizeMode: 'contain',
  },
});
