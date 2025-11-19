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

  subHeading: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.9,
    marginBottom: sizes.screenHeight * 0.02,
    fontWeight: '500',
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

  inputView3: {
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
    zIndex: 15,
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
    fontWeight: '500',
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
    fontWeight: '500',
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
    paddingVertical: 10,
    borderBottomLeftRadius: sizes.screenWidth * 0.03,
    borderBottomRightRadius: sizes.screenWidth * 0.03,
    alignItems: 'center',
    top: sizes.screenHeight * 0.068,
    zIndex: 10,
  },

  optionContainer: {
    width: sizes.screenWidth * 0.84,
    borderBottomWidth: 1,
    borderColor: colors.teal,
    height: sizes.screenHeight * 0.05,
    justifyContent: 'center',
    marginVertical: sizes.screenHeight * 0.01,
  },

  option: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.black,
  },

  textLight: {
    fontFamily: 'Satoshi-Regular',
    fontSize: fontSize.smallM,
    color: colors.black,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
  },

  scrollBody: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionIOS: {
    marginBottom: 100,
  },
  heading: {
    fontSize: sizes.medium,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.black,
  },
  subHeading: {
    fontSize: sizes.medium,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.black,
  },
  text: {
    fontFamily: 'Satoshi-Regular',
    fontSize: fontSize.smallM,
    marginBottom: 5,
    color: colors.black,
  },
  listItem: {
    fontFamily: 'Satoshi-Regular',
    fontSize: fontSize.smallM,
    color: colors.black,
    width: sizes.screenWidth * 0.9,
    marginBottom: 5,
  },
});
