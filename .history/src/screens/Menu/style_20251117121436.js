import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },

  mainContainerBody: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerContainer: {
    position: 'absolute',
    zIndex: 10,
  },

  cafeImageContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.28,
    overflow: 'hidden',
  },

  cafeImage: {
    width: sizes.screenWidth,
  },

  aboutMainContainer: {
    alignItems: 'center',
    alignItems: 'flex-start',
    marginVertical: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  aboutTextContainer: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.08,
  },

  aboutText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.smallM,
  },

  aboutSeeMoreTextContainer: {},

  aboutSeeMoreText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
  },

  locationHeading: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.h5,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight: '500',
  },

  coffeeRow: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    marginVertical: sizes.screenHeight * 0.01,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  coffeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.7,
  },

  coffee: {
    resizeMode: 'contain',
    height: 24,
    width: 24,
    borderRadius: sizes.screenHeight * 0.1,
    marginRight: sizes.screenWidth * 0.01,
  },

  rewardIcon: {
    position: 'absolute',
    resizeMode: 'contain',
    height: 17,
    width: 17,
    right: 0,
    top: 0,
  },

  coffeeQuantity: {
    fontFamily: 'Satoshi-Medium',
    color: colors.tealMix,
    fontSize: fontSize.large,
  },

  toggleRow: {
    width: sizes.screenWidth * 0.9,
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
    width: sizes.screenWidth * 0.14,
    marginTop: 5,
    borderRadius: 2,
  },

  noLine: {
    height: 2,
    width: sizes.screenWidth * 0.14,
    marginTop: 5,
  },

  menuContainerMain: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    flexWrap: 'wrap',
    gap: sizes.screenWidth * 0.04,
    paddingBottom: sizes.screenHeight * 0.05,
    paddingTop: sizes.screenHeight * 0.01,
  },

  menuImg: {
    height: sizes.screenWidth * 0.43,
    width: sizes.screenWidth * 0.43,
  },

  menuNameContainer: {
    position: 'absolute',
    backgroundColor: colors.white,
    bottom: 14,
    left: 14,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: sizes.screenHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuNameText: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '500',
  },

  itemRightContainer: {
    justifyContent: 'space-evenly',
  },

  itemNameText: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '500',
  },

  itemPriceText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.teal,
    fontSize: fontSize.medium,
  },

  readMoreBtn: {
    width: sizes.screenWidth * 0.24,
    height: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  readMoreBtnText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.white,
    fontSize: fontSize.smallM,
  },

  eventSeparator: {
    height: 1,
    backgroundColor: colors.disabledBg,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  nameRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  nameHeading: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.h4,
    fontWeight: '500',
  },

  openContainer: {
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.18,
    height: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenHeight * 0.05,
  },

  openText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.tealMix,
    fontSize: fontSize.medium,
  },

  cafeCardContainer: {
    flexDirection: 'row',
    paddingHorizontal: sizes.screenWidth * 0.04,
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
    height: 16,
    width: 16,
    marginLeft: sizes.screenWidth * 0.04,
    marginRight: sizes.screenWidth * 0.01,
    top: 2,
  },

  ratingText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
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
    alignItems: 'flex-start',
    width: sizes.screenWidth * 0.9,
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
    marginHorizontal: sizes.screenWidth * 0.02,
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

  /////////////////////

  menuBody: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.02,
    backgroundColor: colors.bgLight,
    marginBottom: sizes.screenHeight * 0.02,
    padding: sizes.screenHeight * 0.01,
  },
  menuBodyIOS: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.02,
    backgroundColor: colors.bgLight,
    marginBottom: sizes.screenHeight * 0.08,
    padding: sizes.screenHeight * 0.02,
  },

  heading: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.h5,
    fontWeight: '500',
  },

  menuContainer: {
    width: sizes.screenWidth * 0.8,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: sizes.screenHeight * 0.02,
  },

  menuSubContainer: {
    flexDirection: 'row',
  },

  itemImgContainer: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.08,
    overflow: 'hidden',
    borderRadius: 16,
    marginRight: 10,
  },

  itemImg: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.08,
  },

  itemRightContainer: {
    justifyContent: 'space-evenly',
  },

  addBtn: {
    height: sizes.screenHeight * 0.04,
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    right: 0,
    borderRadius: 20,
  },

  addBtnText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.medium,
  },

  bottomBtnContainer: {
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,
  },

  errMsg: {
    color: colors.red,
    alignSelf: 'flex-start',
    marginHorizontal: sizes.screenWidth * 0.05,
    fontSize: fontSize.regular,
    fontWeight: '500',
    marginBottom: sizes.screenHeight * 0.02,
  },
});
