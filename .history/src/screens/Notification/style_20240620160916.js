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

  scrollViewContainer: {
    height: sizes.screenHeight * 0.9,
  },

  notificationContainer: {
    backgroundColor: colors.bgLight,
    marginBottom: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: 14,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },

  notificationImg: {
    height: sizes.screenWidth * 0.18,
    width: sizes.screenWidth * 0.18,
    marginRight: sizes.screenWidth * 0.03,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.62,
  },

  title: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.medium,
    color: colors.black,
    maxWidth: sizes.screenWidth * 0.48,
    fontWeight: '500',
  },

  time: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
  },

  description: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.smallM,
    color: colors.black,
    width: sizes.screenWidth * 0.62,
  },

  noFavoritesText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.tealMix,
    fontSize: fontSize.large,
    marginTop: sizes.screenHeight * 0.4,
    width: sizes.screenWidth * 0.8,
    textAlign: 'center',
  },
});
