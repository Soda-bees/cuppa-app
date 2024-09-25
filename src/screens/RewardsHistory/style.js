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
    width: sizes.screenWidth * 0.58,
    fontWeight:'500'
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

  rewardsContainer: {
    backgroundColor: colors.bgLight,
    marginTop: sizes.screenHeight * 0.02,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: sizes.screenHeight * 0.015,
    paddingHorizontal: sizes.screenWidth * 0.03,
    width: sizes.screenWidth * 0.9,
  },

  textLight: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
  },

  textBlackBold: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
    marginVertical: 2,
    fontWeight:'500'
  },

  textBlackLight: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.smallM,
  },

  beansContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  beansGold: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
    resizeMode: 'contain',
    marginRight: sizes.screenWidth * 0.01,
  },

  beanstext: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight:'500'
  },
});
