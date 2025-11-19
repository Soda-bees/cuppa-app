import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },

  mainContainer2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  homeLoaderBg: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    resizeMode: 'contain',
  },

  subHeading: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    textAlign: 'center',
    width: sizes.screenWidth * 0.8,
    marginVertical: sizes.screenHeight * 0.04,
    fontSize: fontSize.medium,
  },

  bottomTabBgSpace: {
    height: sizes.screenHeight * 0.14,
  },
  bottomTabBgSpaceIOS: {
    height: sizes.screenHeight * 0.17,
  },

  searchRow: {
    width: sizes.screenWidth * 0.94,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.01,
  },

  searchRowLeft: {
    backgroundColor: colors.bgLight,
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.62,
    borderRadius: sizes.screenHeight * 0.1,
    paddingHorizontal: sizes.screenWidth * 0.03,
  },

  searchIcon: {
    resizeMode: 'contain',
    height: 24,
    width: 24,
  },

  searchField: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.large,
    color: colors.black,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.4,
  },
  searchFieldIOS: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.large,
    color: colors.black,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.4,
    marginLeft: sizes.screenWidth * 0.02,
  },

  row: {
    flexDirection: 'row',
    gap: sizes.screenWidth * 0.03,
  },

  notificationIconContainer: {
    backgroundColor: colors.bgLight,
    height: sizes.screenHeight * 0.063,
    width: sizes.screenHeight * 0.063,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenHeight * 0.1,
  },

  notificationDot: {
    height: 14,
    width: 14,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.bgLight,
    backgroundColor: colors.error,
    position: 'absolute',
    top: 12,
    right: 12,
  },

  notificationIcon: {
    height: 26,
    width: 26,
    resizeMode: 'contain',
  },

  viewAllRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  viewAllHeading: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.h5,
    fontWeight: '500',
  },
  viewAllHeadingIOS: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: '600',
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

  cafeCardContainer: {
    flexDirection: 'row',
    paddingHorizontal: sizes.screenWidth * 0.04,
  },

  cafeCardContainer2: {
    flexDirection: 'row',
    paddingHorizontal: sizes.screenWidth * 0.05,
    gap: 10,
  },

  cafeCard: {
    padding: 10,
    borderRadius: 16,
    backgroundColor: colors.bgLight,
    marginHorizontal: 4,
  },

  cafeCardImg: {
    // resizeMode: 'contain',
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
    backdropFilter: 10,
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

  dealContainer: {
    borderRadius: 16,
    overflow: 'hidden',
  },

  dealImg: {
    // resizeMode: 'contain',
    height: sizes.screenHeight * 0.17,
    width: sizes.screenWidth * 0.9,
  },

  mapContainer: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.01,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    overflow: 'hidden',
  },

  map: {
    height: sizes.screenHeight * 0.24,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  loading: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.medium,
  },

  mapViewContainerMain: {
    height: sizes.screenHeight * 0.065,
    justifyContent: 'center',
  },

  mapViewContainer: {
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.24,
    height: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenHeight * 0.05,
  },

  locationHeading2: {
    fontFamily: 'Satoshi-Medium',
    color: colors.tealMix,
    fontSize: fontSize.large,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight: '500',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },
});
