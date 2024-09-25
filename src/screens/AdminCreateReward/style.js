import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    alignItems: 'center',
  },
  heading: {
    alignSelf: 'flex-start',
    marginLeft: sizes.screenWidth * 0.1,
    fontSize: fontSize.extraLarge,
    color: colors.black,
    fontWeight: '500',
    marginTop: sizes.screenHeight * 0.04,
  },
  optionHeading: {
    alignSelf: 'flex-start',
    marginLeft: sizes.screenWidth * 0.1,
    fontSize: fontSize.medium,
    color: colors.black,
    marginTop: sizes.screenHeight * 0.01,
  },
  downBtn: {
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.01,
    transform: [{rotate: '180deg'}],
  },
  dropdownView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.85,
    // height: sizes.screenHeight * 0.04,
    marginVertical: sizes.screenWidth * 0.03,
    paddingVertical: sizes.screenWidth * 0.03,
    // paddingHorizontal:sizes.screenWidth*0.1,

    backgroundColor: colors.bluishWhite,
    borderRadius: sizes.screenWidth * 0.03,
    zIndex: 1,
  },
  upbtn: {
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.01,
  },
  dropDownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.75,
  },
  divider: {
    borderWidth: sizes.screenWidth * 0.002,
    width: sizes.screenWidth * 0.8,
    borderColor: colors.disabledBg,
    marginVertical: sizes.screenHeight * 0.015,
  },
  rewardText: {
    color: colors.black,
  },
  InputTitle: {
    color: colors.black,
    fontWeight: '500',
  },
  chosenOption: {
    color: colors.gray,
  },
  btnContainer: {
    position: 'absolute',
    top: sizes.screenHeight * 0.87,
  },
  reviewModalContainer: {
    alignSelf: 'center',
    width: sizes.screenWidth * 0.8,
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.4,
    borderRadius: sizes.screenWidth * 0.03,
    paddingLeft: sizes.screenWidth * 0.1,
  },
  closeBtn: {
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.08,
    position: 'absolute',
    left: sizes.screenWidth * 0.37,
    bottom: sizes.screenHeight * 0.186,
  },
  closeBtnIOS: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.08,
    position: 'absolute',
    left: sizes.screenWidth * 0.37,
    bottom: sizes.screenHeight * 0.186,
  },
  headingModal: {
    marginVertical: sizes.screenWidth * 0.05,
    color: colors.black,
    fontSize: fontSize.h5,
    fontWeight: '500',
  },
  subheadingModal: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '400',
  },
  itemInfo: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    marginBottom: sizes.screenHeight * 0.03,
  },
  createBtnContainer: {
    width: sizes.screenWidth * 0.6,
    height: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  editBtnContainer: {
    width: sizes.screenWidth * 0.6,
    height: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizes.screenWidth * 0.003,
    marginVertical: sizes.screenHeight * 0.01,
  },
  createBtnText: {
    color: colors.white,
    fontWeight: '500',
  },
  editBtnText: {
    color: colors.black,
  },
  coffeeImg: {
    height: sizes.screenHeight * 0.2,
    width: sizes.screenWidth * 0.5,
    bottom: sizes.screenHeight * 0.02,
  },
  congratsModalContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    width: sizes.screenWidth * 0.8,
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.4,
    borderRadius: sizes.screenWidth * 0.03,
  },
  newRewardCreated: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    bottom: sizes.screenHeight * 0.02,
  },
  bottomBtnNextIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
  },

  bottomBtn: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.04,
  },
  bottomBtnIOS: {
    position: 'absolute',
    alignSelf: 'center',
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
    width: sizes.screenWidth * 0.6,
    fontSize: fontSize.large,
    color: colors.white,
  },

  bottomBtnNextIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.08,
    width: sizes.screenWidth * 0.08,
  },
});
