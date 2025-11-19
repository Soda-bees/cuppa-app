import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
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
    marginTop: sizes.screenHeight * 0.08,
  },

  bodyText: {
    fontFamily: 'Satoshi-Medium',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.medium,
  },

  bodyImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.36,
    width: sizes.screenHeight * 0.36,
    marginTop: sizes.screenHeight * 0.1,
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

  btnContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.teal,
    marginTop: sizes.screenHeight * 0.02,
  },

  buttonText: {
    fontFamily: 'Satoshi-Medium',
    width: sizes.screenWidth * 0.6,
    fontSize: fontSize.large,
    color: colors.black,
  },

  bottomBtnNextIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.08,
    width: sizes.screenWidth * 0.08,
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
});
