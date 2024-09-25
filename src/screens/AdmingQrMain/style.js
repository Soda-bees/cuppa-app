import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.05,
  },

  textBold: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.large,
  },

  textLight: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.regular,
  },

  settingsBtn: {
    height: 36,
    width: 36,
    resizeMode: 'contain',
  },

  qrContainer: {
    borderWidth: 3,
    borderStyle: 'dashed',
    borderRadius: 20,
    borderColor: colors.lightTeal,
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
  },

  newQrImg: {
    width: sizes.screenWidth * 0.36,
    height: sizes.screenWidth * 0.36,
    marginTop: sizes.screenHeight * 0.01,
  },

  textMedium: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.medium,
    textAlign: 'center',
    maxWidth: sizes.screenWidth * 0.8,
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.03,
  },

  textLightSmall: {
    fontFamily: 'Satoshi-Medium',
    color: colors.lightGray2,
    fontSize: fontSize.smallM,
    width: sizes.screenWidth * 0.8,
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.05,
  },
});
