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

  headerContainer: {
    position: 'absolute',
    zIndex: 10,
  },

  cafeImageContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.3,
    overflow: 'hidden',
  },

  cafeImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.3,
  },

  exclusiveTextContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderColor: colors.disabledBg2,
    bottom: 15,
    right: 15,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: sizes.screenHeight * 0.1,
  },

  exclusiveText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.white,
    fontSize: fontSize.smallM,
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

  menuContainer: {
    height: sizes.screenWidth * 0.43,
    width: sizes.screenWidth * 0.43,
    overflow: 'hidden',
    borderRadius: 12,
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
  },

  upcomingEventsContainerMain: {
    borderRadius: sizes.screenHeight * 0.02,
    backgroundColor: colors.bgLight,
    marginBottom: sizes.screenHeight * 0.02,
  },

  upcomingEventsContainer: {
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 16,
  },

  eventImgContainer: {
    height: sizes.screenHeight * 0.12,
    width: sizes.screenHeight * 0.12,
    overflow: 'hidden',
    borderRadius: 16,
    marginRight: 10,
  },

  eventImg: {
    height: sizes.screenHeight * 0.12,
    width: sizes.screenHeight * 0.12,
  },

  eventRightContainer: {
    justifyContent: 'space-between',
  },

  eventNameText: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
  },

  eventDateText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
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
    left: sizes.screenWidth * 0.05,
    right: sizes.screenWidth * 0.05,
  },

  nameRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.005,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  nameHeading: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.h4,
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
  },

  locationIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
  },

  locationIconRow2: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dateAndTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    marginVertical: 12,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    resizeMode: 'contain',
    height: 22,
    width: 22,
    marginRight: 4,
  },

  dateText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.regular,
  },

  punchLineText: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
  },

  descriptionText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.regular,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
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

  bottomBtnContainer: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.11,
  },

  btnContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: 10,
  },

  buttonText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.white,
  },

  registerContainer: {
    backgroundColor: colors.white,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },

  registerText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.black,
  },

  bottomBtnNextIcon: {
    resizeMode: 'contain',
    height: 18,
    width: 18,
    marginLeft: 6,
  },

  modalBody: {
    backgroundColor: colors.white,
    borderRadius: sizes.screenHeight * 0.02,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: sizes.screenHeight * 0.03,
  },

  modalCup: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.16,
    width: sizes.screenHeight * 0.16,
  },

  modalText: {
    fontFamily: 'Satoshi-Bold',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.8,
  },

  modalTextHeading: {
    fontFamily: 'Satoshi-Bold',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.h5,
    width: sizes.screenWidth * 0.8,
    marginVertical: sizes.screenHeight * 0.01,
  },

  modalTextNormal: {
    fontFamily: 'Satoshi-Medium',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.8,
    marginVertical: sizes.screenHeight * 0.01,
  },

  btnContainerModal: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.76,
    height: sizes.screenHeight * 0.055,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: 8,
    marginVertical: sizes.screenHeight * 0.02,
  },

  buttonTextModal: {
    fontFamily: 'Satoshi-Bold',
    width: sizes.screenWidth * 0.6,
    fontSize: fontSize.large,
    color: colors.white,
  },

  bottomBtnNextIconModal: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
  },
});
