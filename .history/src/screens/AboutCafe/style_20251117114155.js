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

  aboutMainContainer: {
    alignItems: 'center',
    alignItems: 'flex-start',
    marginVertical: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  aboutTextContainer: {
    width: sizes.screenWidth * 0.9,
    maxHeight: sizes.screenHeight * 0.08,
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

  // aboutTextContainer: {
  //   flex: 1,
  //   padding: 16,
  // },

  locationHeading: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.h5,
    marginVertical: sizes.screenHeight * 0.005,
    fontWeight: '500',
    width: sizes.screenWidth * 0.9,
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

  coffeeRow: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.01,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  coffeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.7,
    // gap:4
  },

  coffee: {
    height: 24,
    width: 24,
    borderRadius: sizes.screenHeight * 0.1,
    marginRight: sizes.screenWidth * 0.01,
  },

  rewardIconContainer: {
    position: 'absolute',
    right: -4,
    top: 0,
  },

  rewardIcon: {
    resizeMode: 'contain',
    height: 17,
    width: 17,
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
    marginBottom: sizes.screenHeight * 0.01,
  },

  toggleBtnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: sizes.screenHeight * 0.04,
  },

  toggleBtn: {
    height: sizes.screenHeight * 0.065,
    justifyContent: 'flex-end',
  },

  toggleBtnTextBlack: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '500',
    marginBottom: 6,
  },

  toggleBtnTextTeal: {
    fontFamily: 'Satoshi-Medium',
    color: colors.tealMix,
    fontSize: fontSize.large,
    fontWeight: '500',
    marginBottom: 6,
  },

  underline: {
    height: 2,
    backgroundColor: colors.teal,
    width: sizes.screenWidth * 0.16,
    borderRadius: 2,
  },

  noLine: {
    height: 2,
    width: sizes.screenWidth * 0.16,
  },

  menuContainerMain: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    flexWrap: 'wrap',
    gap: sizes.screenWidth * 0.04,
    paddingBottom: sizes.screenHeight * 0.05,
    paddingTop: sizes.screenHeight * 0.01,
  },
  menuContainerMainIOS: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    flexWrap: 'wrap',
    gap: sizes.screenWidth * 0.04,
    // paddingBottom: sizes.screenHeight * 0.12,
    marginBottom: sizes.screenHeight * 0.12,
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
    fontWeight: '500',
  },

  upcomingEventsContainerMain: {
    borderRadius: sizes.screenHeight * 0.02,
    backgroundColor: colors.bgLight,
    marginBottom: sizes.screenHeight * 0.15,
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
    fontWeight: '500',
  },

  eventDateText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
  },

  readMoreBtnContainer: {},

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
    marginVertical: 8,
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

  claimedContainer: {
    backgroundColor: colors.bgLight,
    paddingHorizontal: 10,
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

  openText2: {
    fontFamily: 'Satoshi-Medium',
    color: colors.tealMix,
    fontSize: fontSize.regular,
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
    width: sizes.screenWidth * 0.9,
  },

  locationIconRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
  },

  locationRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationIcon: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },

  locationText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.medium,
    marginHorizontal: sizes.screenWidth * 0.02,
    maxWidth: sizes.screenWidth * 0.7,
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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.94,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.01,
    justifyContent: 'space-between',
  },

  backIconContainer: {
    height: sizes.screenHeight * 0.065,
    width: sizes.screenHeight * 0.065,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenHeight * 0.1,
  },

  backIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.09,
    width: sizes.screenWidth * 0.09,
  },

  favouritesIconContainer: {
    height: sizes.screenWidth * 0.09,
    width: sizes.screenWidth * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgLight,
    borderRadius: sizes.screenHeight * 0.1,
  },

  favouritesIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.05,
  },

  modalContainer: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
  },

  modalBottomBodyContainer: {
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: sizes.screenHeight * 0.03,
    borderTopRightRadius: sizes.screenHeight * 0.03,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },

  modalBottomBody: {
    width: sizes.screenWidth,
    backgroundColor: colors.white,
    paddingTop: sizes.screenWidth * 0.05,
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
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#60B0AA44',
  },

  modalTextBold: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: '500',
    maxWidth: sizes.screenWidth * 0.9,
    marginLeft: sizes.screenWidth * 0.05,
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

  bottomBtnContainer: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
  },

  reviewContainer: {
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 16,
    minHeight: sizes.screenHeight * 0.15,
  },

  nameDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: sizes.screenWidth * 0.58,
  },

  createdAtText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
    marginTop: 4,
  },

  comment: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.disabledBg2,
  },

  reviewImgContainer: {
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
    overflow: 'hidden',
    borderRadius: 1600,
    marginRight: 10,
  },

  reviewImg: {
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
  },

  reviewImg2: {
    height: sizes.screenWidth * 0.11,
    width: sizes.screenWidth * 0.11,
    borderRadius: 100,
    overflow: 'hidden',
  },

  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
  },

  rating: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
  },

  reviewBtnContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: sizes.screenHeight * 0.05,
    right: sizes.screenWidth * 0.05,
  },
  reviewBtnContainerIOS: {
    position: 'absolute',
    zIndex: 1,
    bottom: sizes.screenHeight * 0.09,
    right: sizes.screenWidth * 0.05,
  },

  pencil: {
    resizeMode: 'contain',
    height: 16,
    width: 16,
    marginRight: 8,
  },

  reviewBtn: {
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: 6,
  },

  reviewBtnDisabled: {
    width: sizes.screenWidth * 0.34,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: colors.disabledBg2,
  },

  reviewBtnText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.white,
    fontSize: 14,
  },

  noReviews: {
    fontFamily: 'Satoshi-Medium',
    color: colors.tealMix,
    fontSize: fontSize.medium,
  },

  rewardModalBody: {
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.9,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: sizes.screenHeight * 0.04,
  },

  rewardModalTextBody: {
    paddingVertical: sizes.screenHeight * 0.02,
    borderWidth: 1,
    borderColor: colors.tealMix,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#60B0AA44',
    paddingHorizontal: sizes.screenWidth * 0.05,
    marginVertical: 4,
  },

  rewardModalTextBold: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.tealMix,
    fontWeight: '500',
    maxWidth: sizes.screenWidth * 0.8,
    textAlign: 'center',
  },

  rewardItemImgContainer: {
    height: sizes.screenHeight * 0.12,
    width: sizes.screenHeight * 0.12,
    borderRadius: 12,
    overflow: 'hidden',
  },

  rewardItemImg: {
    height: sizes.screenHeight * 0.12,
    width: sizes.screenHeight * 0.12,
  },

  rewardItemName: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: '500',
    marginVertical: 6,
  },

  rewardItemDescription: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.black,
    marginBottom: 12,
    textAlign: 'center',
    maxWidth: sizes.screenWidth * 0.76,
  },

  redeemBtnContainer: {
    marginTop: sizes.screenHeight * 0.02,
  },
  modalBody: {
    backgroundColor: colors.white,
    borderRadius: sizes.screenHeight * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: sizes.screenHeight * 0.05,
  },

  qrModalText: {
    fontFamily: 'Satoshi-Bold',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.teal,
    fontSize: fontSize.h6,
    marginTop: sizes.screenHeight * 0.02,
    maxWidth: sizes.screenWidth * 0.8,
  },

  modalCup2: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
  },

  textBlack: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.smallM,
    marginTop: 6,
  },

  reviewReplyLeftRow: {
    flexDirection: 'row',
    gap: 6,
  },

  catalogueContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.3,
  },
  catalogueItem: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catalogueImage: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.3,
  },
  catalogueVideo: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dateAndTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    marginTop: 6,
  },

  icon: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
    marginRight: 8,
  },

  dateText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.medium,
  },

  // catalogueContainer: {
  //   marginVertical: 10,
  //   flexDirection: 'row',
  //   gap: 10,
  // },

  // catalogueItem: {
  //   borderRadius: 8,
  //   overflow: 'hidden',
  // },

  // catalogueImage: {
  //   width: 150,
  //   height: 150,
  //   borderRadius: 8,
  // },

  // catalogueVideo: {
  //   width: 150,
  //   height: 150,
  //   borderRadius: 8,
  // },
});
