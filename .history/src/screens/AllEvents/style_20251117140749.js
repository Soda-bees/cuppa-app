import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    w,
  },

  headerContainer: {
    marginBottom: sizes.screenHeight * 0.03,
  },

  scrollViewContainer: {
    height: sizes.screenHeight * 0.9,
  },

  toggleRow: {
    width: sizes.screenWidth,
    paddingHorizontal: sizes.screenWidth * 0.05,
    borderBottomColor: colors.bgLight,
    borderBottomWidth: 2,
    flexDirection: 'row',
    marginVertical: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.02,
  },

  toggleBtnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    width: sizes.screenWidth * 0.14,
    marginTop: 5,
    borderRadius: 2,
  },

  noLine: {
    height: 2,
    width: sizes.screenWidth * 0.14,
    marginTop: 5,
  },

  cafeImgContainer: {
    height: sizes.screenHeight * 0.14,
    width: sizes.screenWidth * 0.9,
    borderRadius: 10,
    overflow: 'hidden',
  },

  cafeImg: {
    height: sizes.screenHeight * 0.14,
    width: sizes.screenWidth * 0.9,
  },

  cafeCardRatingContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 30,
    width: 68,
    borderRadius: 30,
    bottom: 10,
    left: 10,
  },

  starIcon: {
    resizeMode: 'contain',
    height: 18,
    width: 18,
  },

  cafeCardRatingText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.white,
    fontSize: fontSize.medium,
  },

  cafeNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.015,
  },

  cafeName: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    marginBottom: 4,
  },

  cafeStatus: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.smallM,
    marginBottom: 4,
  },

  cafeDistance: {
    fontFamily: 'Satoshi-Medium',
    color: colors.tealMix,
    fontSize: fontSize.smallM,
  },

  locationIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationIcon: {
    resizeMode: 'contain',
    height: 22,
    width: 22,
  },

  locationText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
    marginHorizontal: sizes.screenWidth * 0.02,
  },

  favoriteOrderContainer: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    marginVertical: sizes.screenHeight * 0.01,
  },

  favoriteOrderLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  favoriteOrderImg: {
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
    marginRight: sizes.screenWidth * 0.03,
  },

  favoriteOrderTextContainer: {
    width: sizes.screenWidth * 0.5,
    overflow: 'hidden',
  },

  favoriteOrderTitle: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '500',
  },

  favoriteOrderDescription: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
    marginVertical: sizes.screenHeight * 0.005,
  },

  favoriteOrderPrice: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.large,
  },

  favoriteOrderIcon: {
    resizeMode: 'contain',
    width: sizes.screenHeight * 0.045,
    height: sizes.screenHeight * 0.045,
  },

  noFavoritesText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.tealMix,
    fontSize: fontSize.large,
    marginTop: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.8,
    textAlign: 'center',
  },

  dealContainer: {
    borderRadius: 16,
  },

  dealImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.18,
    width: sizes.screenWidth * 0.9,
    marginBottom: 6,
  },

  cafeCardImg: {
    height: sizes.screenHeight * 0.17,
    width: sizes.screenWidth * 0.9,
    borderRadius: 16,
  },

  distanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },

  distanceRow2: {
    alignItems: 'flex-end',
  },
});
