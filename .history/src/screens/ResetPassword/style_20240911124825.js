import {colors, fontSize, sizes} from '../../services';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  inputView: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.85,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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
    minWidth: sizes.screenWidth * 0.6,
  },
  inputFieldIOS: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    height: sizes.screenHeight * 0.05,
    minWidth: sizes.screenWidth * 0.6,
  },
  heading: {
    color: colors.black,
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.12,
    marginBottom: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.7,
    alignSelf: 'center',
    fontSize: fontSize.medium,
  },
  bottomBtnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.04,
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
  feather: {
    position: 'absolute',
    right: 0,
    height: sizes.screenHeight * 0.065,
    width: sizes.screenHeight * 0.065,
    alignItems: 'center',
    justifyContent: 'center',
  },

  errMsg: {
    color: colors.red,
    alignSelf: 'flex-start',
    marginHorizontal: sizes.screenWidth * 0.05,
    fontSize: fontSize.regular,
  },
});
