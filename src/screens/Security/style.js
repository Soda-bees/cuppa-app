import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  headerContainer: {
    marginBottom: sizes.screenHeight * 0.03,
  },

  toggleRow: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: sizes.screenHeight * 0.03,
  },

  subHeading: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.medium,
  },

  toggleIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.11,
  },

  inputView: {
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
  },

  inputView2: {
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
    zIndex: 10,
  },

  inputTitle: {
    fontFamily: 'Satoshi-Medium',
    marginHorizontal: sizes.screenWidth * 0.01,
    color: colors.disabledBg2,
  },
  inputField: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
    height: sizes.screenHeight * 0.05,
    fontWeight:'500'
  },

  dateIconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    right: sizes.screenWidth * 0.04,
  },

  dateIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.02,
    width: sizes.screenHeight * 0.02,
  },

  dateContainer: {
    marginLeft: sizes.screenWidth * 0.01,
    height: sizes.screenHeight * 0.05,
    justifyContent: 'center',
  },

  date: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight:'500'
  },

  bottomBtnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,
  },

  btnContainer2: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: 10,
  },

  buttonText2: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.large,
    color: colors.white,
    alignSelf: 'center',
  },

  bottomBtnNextIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.08,
    width: sizes.screenWidth * 0.08,
  },

  hr: {
    height: 1,
    width: sizes.screenWidth * 0.9,
    borderRadius: 10,
    marginBottom: sizes.screenHeight * 0.01,
  },

  dropDownContainer: {
    position: 'absolute',
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.9,
    padding: 10,
    borderRadius: sizes.screenWidth * 0.03,
    alignItems: 'center',
    top: sizes.screenHeight * 0.07,
    zIndex: 10,
  },

  optionContainer: {
    width: sizes.screenWidth * 0.8,
    borderWidth: 2,
    borderColor: colors.teal,
    borderRadius: sizes.screenWidth * 0.02,
    height: sizes.screenHeight * 0.05,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingLeft: 10,
    marginVertical: sizes.screenHeight * 0.01,
  },

  option: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.teal,
  },

  rightArrowIconn: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.02,
    width: sizes.screenHeight * 0.02,
  },
});
