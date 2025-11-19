import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  body: {
    width: sizes.screenWidth,
    alignItems: 'center',
    height: sizes.screenHeight * 0.7,
    justifyContent: 'center',
  },

  bodyIOS: {
    width: sizes.screenWidth,
    alignItems: 'center',
    height: sizes.screenHeight * 0.7,
    justifyContent: 'center',
    // backgroundColor:'red'
  },

  letsGetStartedImg1: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.8,
    height: sizes.screenWidth * 0.8,
  },

  letsGetStartedImg4: {
    resizeMode: 'contain',
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.75,
    position: 'absolute',
    top: -10,
  },

  textBoldBlack: {
    fontFamily: 'Satoshi-Bold',
    textAlign: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.88,
    fontSize: fontSize.large,
    color: colors.black,
    position: 'absolute',
    bottom: 0,
  },

  textBoldBlack2: {
    fontFamily: 'Satoshi-Bold',
    textAlign: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.6,
    fontSize: fontSize.large,
    color: colors.black,
    position: 'absolute',
    bottom: 0,
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

  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  dotActive: {
    marginHorizontal: 4,
    color: colors.black,
    fontSize: fontSize.large,
  },
  dot: {
    marginHorizontal: 4,
    color: colors.disabledBg2,
    opacity: 0.6,
    fontSize: fontSize.large,
  },

  wrapDot: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: sizes.screenHeight * 0.14,
  },
  wrapDotIOS: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.25,
  },
  wrap: {
    width: sizes.screenWidth * 0.96,
  },

  bold: {
    fontWeight: '500',
  },
});
