import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

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
    height: sizes.screenHeight * 0.8,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },

  backIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.08,
    width: sizes.screenWidth * 0.08,
  },

  heading: {
    width: sizes.screenWidth * 0.74,
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.035,
  },

  bottomBtnContainer: {
    marginBottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,
  },

  indicator: {
    height: 5,
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.bgLight,
    borderRadius: 5,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
  },

  indicatorGradient1: {
    height: 5,
    borderRadius: 5,
    width: sizes.screenWidth * 0.225,
  },

  indicatorGradient2: {
    height: 5,
    borderRadius: 5,
    width: sizes.screenWidth * 0.45,
  },

  indicatorGradient3: {
    height: 5,
    borderRadius: 5,
    width: sizes.screenWidth * 0.675,
  },

  indicatorGradient4: {
    height: 5,
    borderRadius: 5,
    width: sizes.screenWidth * 0.9,
  },

  question: {
    width: sizes.screenWidth * 0.9,
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h5,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.03,
  },

  answerContainer: {
    backgroundColor: colors.bgLight,
    height: sizes.screenHeight * 0.07,
    justifyContent: 'center',
    paddingLeft: sizes.screenWidth * 0.03,
    width: sizes.screenWidth * 0.9,
    marginBottom: sizes.screenHeight * 0.02,
    borderRadius: 8,
  },

  answerText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.black,
  },

  answerContainer2: {
    height: sizes.screenHeight * 0.07,
    justifyContent: 'center',
    paddingLeft: sizes.screenWidth * 0.03,
    width: sizes.screenWidth * 0.9,
    marginBottom: sizes.screenHeight * 0.02,
    borderRadius: 8,
  },

  answerText2: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.white,
  },
});
