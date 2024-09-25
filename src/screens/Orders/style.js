import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  heading: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    marginVertical: sizes.screenHeight * 0.02,
    fontSize: fontSize.h4,
    marginLeft: sizes.screenWidth * 0.05,
    fontWeight: '500',
  },

  btnRow: {
    marginLeft: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  btnGradientContainer: {
    height: sizes.screenHeight * 0.065,
    justifyContent: 'center',
  },

  btnGradient: {
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  btnDisabled: {
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.bgLight,
  },

  textWhite: {
    fontFamily: 'Satoshi-Medium',
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '500',
  },

  textBlack: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.medium,
  },

  activeOrdersContainer: {
    padding: 10,
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.tealMix,
    borderRadius: 12,
    justifyContent: 'space-between',
    marginVertical: sizes.screenHeight * 0.01,
  },

  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  image: {
    height: sizes.screenWidth * 0.21,
    width: sizes.screenWidth * 0.21,
  },

  orderRightContainer: {
    width: sizes.screenWidth * 0.62,
    height: sizes.screenWidth * 0.2,
  },

  priceRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  priceRowText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '500',
  },

  orderText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
  },

  deliveryTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.6,
    position: 'absolute',
    bottom: 0,
  },

  progressBar: {
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.45,
    height: 3,
    borderRadius: 10,
  },

  deliveryTimeText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
  },

  bottomTabBgSpace: {
    height: sizes.screenHeight * 0.14,
    marginBottom:12
  },

  historyOrdersContainer: {
    padding: 10,
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    // alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'space-between',
    marginVertical: sizes.screenHeight * 0.01,
    backgroundColor: colors.bgLight,
  },

  orderHistoryBottomRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.6,
    bottom: 0,
  },

  orderHistoryBottomRowLeft: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.3,
    justifyContent: 'space-between',
  },

  heartIcon: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },

  completedGradient: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenHeight * 0.1,
    marginTop: 4,
  },

  completedGradientText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.white,
    fontSize: fontSize.smallM,
  },

  orderHistoryBottomRowRight: {
    alignItems: 'flex-end',
  },
});
