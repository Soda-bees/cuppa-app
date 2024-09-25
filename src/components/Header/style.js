import {Dimensions, StyleSheet, View} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import LinearGradient from 'react-native-linear-gradient';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
    justifyContent: 'space-between',
  },

  backIconContainer: {
    borderRadius: sizes.screenHeight * 0.1,
    height: sizes.screenHeight * 0.065,
    width: sizes.screenHeight * 0.065,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.09,
    width: sizes.screenWidth * 0.09,
  },

  backIcon2: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.09,
    width: sizes.screenWidth * 0.09,
    marginRight: sizes.screenWidth * 0.04,
  },

  heading: {
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: '600',
  },

  favouritesIconContainerMain: {
    borderRadius: sizes.screenHeight * 0.1,
    height: sizes.screenHeight * 0.065,
    width: sizes.screenHeight * 0.065,
    justifyContent: 'center',
    alignItems: 'center',
  },

  favouritesIconContainer: {
    height: sizes.screenWidth * 0.09,
    width: sizes.screenWidth * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgLight,
    borderRadius: sizes.screenHeight * 0.1,
  },

  favouritesIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.04,
  },

  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  deliveryIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.06,
    width: sizes.screenWidth * 0.06,
    marginRight: 8,
  },

  deliveryTime: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.disabledBg2,
  },

  header2Left: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  userIconContainer: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.07,
    borderRadius: sizes.screenHeight * 0.1,
    overflow: 'hidden',
  },

  userIcon: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.07,
    borderRadius: sizes.screenHeight * 0.1,
  },
});
