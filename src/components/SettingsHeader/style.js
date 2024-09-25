import {Dimensions, StyleSheet, View} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import LinearGradient from 'react-native-linear-gradient';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.02,
    alignItems: 'center',
    alignSelf: 'center',
  },

  heading: {
    // width: sizes.screenWidth * 0.7,
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: '500',
  },
  backIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.08,
    width: sizes.screenWidth * 0.08,
  },
});
