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

  body: {
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.05,
  },

  heading: {
    width: sizes.screenWidth * 0.7,
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: '600',
  },

  bodyText: {
    fontFamily: 'Satoshi-Medium',
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.medium,
    marginVertical: sizes.screenHeight * 0.03,
  },

  bodyText2: {
    fontFamily: 'Satoshi-Medium',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.medium,
  },

  bodyTextBold: {
    fontFamily: 'Satoshi-Black',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '600',
  },

  bodyImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.36,
    width: sizes.screenHeight * 0.36,
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },

  bottomBtnContainer: {
    marginBottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,
  },
});
