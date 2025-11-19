import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
export const styles = StyleSheet.create({
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
  btnContainer2: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: 10,
  },
  buttonText2: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.large,
    color: colors.white,
    alignSelf: 'center',
  },
});
