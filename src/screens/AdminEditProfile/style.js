import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  subHeading: {
    color: colors.black,
    textAlign: 'center',
    width: sizes.screenWidth * 0.85,
    marginVertical: sizes.screenHeight * 0.04,
    fontSize: fontSize.medium,
  },
  inputView: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
  },
  inputViewIOS: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.01,
    paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
    height:sizes.screenHeight * 0.05,
    fontSize:fontSize.medium
  },
  inputTitle: {
    paddingHorizontal: sizes.screenWidth * 0.01,
    color: colors.gray,
    fontWeight: '300',
  },
  inputField: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    bottom: sizes.screenHeight * 0.01,
  },
  headingContainer: {
    marginBottom: sizes.screenHeight * 0.05,
  },
  defaultCover: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.1,
    marginVertical: sizes.screenHeight * 0.04,
    alignSelf: 'center',
    resizeMode:'contain'
  },
  userCover: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.18,
    // marginVertical:sizes.screenHeight*0.04,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.03,
  },
  heading: {
    width: sizes.screenWidth * 0.9,
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h6,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.02,
  },
  coverView: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    // paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
  },
  countryField: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    top: sizes.screenWidth * 0.02,
    left: sizes.screenWidth * 0.01,
    height: sizes.screenHeight * 0.06,
  },
  
  dropdownView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
    // height: sizes.screenHeight * 0.04,
    // marginVertical: sizes.screenWidth * 0.01,
    paddingVertical: sizes.screenWidth * 0.03,
    // paddingHorizontal:sizes.screenWidth*0.1,

    backgroundColor: colors.bluishWhite,
    borderRadius: sizes.screenWidth * 0.03,
    zIndex: 1,
  },
  upbtn: {
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.01,
    transform: [{rotate: '90deg'}],

  },
  dropDownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.8,
  },
  dropDownItemIOS: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.8,
    height:sizes.screenHeight * 0.035
  },
  divider: {
    borderWidth: sizes.screenWidth * 0.002,
    width: sizes.screenWidth * 0.8,
    borderColor: colors.disabledBg,
    marginVertical: sizes.screenHeight * 0.015,
  },
  rewardText: {
    color: colors.black,
    fontWeight: '500',
  },
  rewardTextIOS: {
    color: colors.black,
    fontWeight: '500',
    fontSize:fontSize.medium
  },
  InputTitle: {
    color: colors.black,
    fontWeight: '500',
  },
  InputTitleIOS: {
    color: colors.black,
    fontWeight: '500',
    fontSize:fontSize.medium
  },
  scrollView:{
    marginBottom:sizes.screenHeight*0.06
  },
  BottomBtn:{
    bottom:sizes.screenHeight * 0.1
  },
});
