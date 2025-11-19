import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  heading: {
    color: colors.black,
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.15,
    marginBottom: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.7,
    alignSelf: 'center',
    fontSize: fontSize.medium,
  },
  pfpContainer: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenWidth * 0.03,
    height: sizes.screenHeight * 0.25,
  },

  pfp: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.14,
  },
  pfpDefault: {
    width: sizes.screenHeight * 0.14,
    height: sizes.screenHeight * 0.14,
    borderRadius: sizes.screenWidth * 0.2,
  },
  uploadimgbtnimg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
  },
  uploadimgbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.4,
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.02,
    height: sizes.screenHeight * 0.065,
  },
  uploadImgText: {
    color: colors.darkTeal,
  },

  bottomBtn: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0,
  },
  bottomBtnIOS: {
    top: sizes.screenHeight * 0.21,
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

  errMsg: {
    color: colors.red,
    fontSize: fontSize.regular,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
});
