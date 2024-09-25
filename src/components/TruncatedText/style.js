import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  aboutText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.regular,
  },

  aboutSeeMoreText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.disabledBg2,
    fontSize: fontSize.regular,
    paddingTop: 20,
  },
});
