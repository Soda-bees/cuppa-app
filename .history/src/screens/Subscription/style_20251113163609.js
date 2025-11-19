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

  inputContainer: {
    backgroundColor: colors.bgLight,
    paddingVertical: 4,
    paddingHorizontal: sizes.screenWidth * 0.02,
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.03,
    borderRadius: 10,
    overflow: 'hidden',
  },

  inputTitle: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.regular,
    marginLeft: sizes.screenWidth * 0.01,
  },

  inputField: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.05,
  },

  expiryAndCvvContainer: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    marginVertical: sizes.screenHeight * 0.02,
  },

  inputContainer2: {
    backgroundColor: colors.bgLight,
    paddingVertical: 4,
    paddingHorizontal: sizes.screenWidth * 0.02,
    width: sizes.screenWidth * 0.42,
    borderRadius: 10,
    overflow: 'hidden',
  },

  inputTitle2: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.regular,
    marginLeft: sizes.screenWidth * 0.01,
  },

  inputField2: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.36,
    height: sizes.screenHeight * 0.05,
  },

  payBtnContainer: {
    width: sizes.screenWidth * 0.9,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    paddingHorizontal: sizes.screenWidth * 0.05,
  },

  payBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: sizes.screenHeight * 0.02,
  },

  payIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginRight: sizes.screenWidth * 0.02,
  },

  payBtnText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.large,
  },

  separator: {
    height: 1,
    backgroundColor: colors.disabledBg,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
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
