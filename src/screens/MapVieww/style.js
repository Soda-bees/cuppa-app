import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  viewAllRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  viewAllHeading: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.h5,
    fontWeight: '500',
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
  },

  cafeCardContainer: {
    flexDirection: 'row',
    paddingHorizontal: sizes.screenWidth * 0.04,
    minWidth: sizes.screenWidth,
  },

  cafeCard: {
    padding: 10,
    borderRadius: 16,
    backgroundColor: colors.bgLight,
    marginHorizontal: 4,
  },

  cafeCardImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.18,
    width: sizes.screenWidth * 0.6,
    borderRadius: 14,
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

  cafeName: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.large,
    marginVertical: 8,
    fontWeight: '500',
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
    fontSize: fontSize.medium,
  },

  distanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.01,
  },

  statusText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.medium,
  },

  distanceText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.teal,
    fontSize: fontSize.medium,
  },

  map: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
  },

  headerContainer: {
    position: 'absolute',
  },

  ScrollViewContainer: {
    position: 'absolute',
    backgroundColor: colors.white,
    bottom: 0,
    paddingBottom: sizes.screenHeight * 0.04,
  },
  ScrollViewContainerIOS: {
    position: 'absolute',
    backgroundColor: colors.white,
    bottom: 0,
    paddingBottom: sizes.screenHeight * 0.1,
  },
});
