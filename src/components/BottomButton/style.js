import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  btn: {
    width: sizes.screenWidth * 0.84,
    height: sizes.screenHeight * 0.07,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.btnColor2,
    position: 'absolute',
    top: sizes.screenHeight * 0.85,
    alignSelf: 'center',
  },

  title: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.white,
    fontSize: fontSize.large,
    textAlign: 'center',
    fontWeight: '700',
  },
});
