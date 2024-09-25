import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    paddingHorizontal: sizes.screenWidth * 0.05,
  },

  heading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: '500',
  },

  userDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.03,
  },

  userImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
    borderRadius: sizes.screenHeight * 0.1,
  },

  underlineTealText: {
    marginTop: 5,
    borderBottomWidth: 1,
    alignSelf: 'flex-start',
    borderBottomColor: colors.teal,
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.teal,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },

  nameEmailContainer: {
    marginLeft: sizes.screenWidth * 0.04,
  },

  email: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.disabledBg2,
  },

  navigateBtns: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.bgLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    // marginTop: sizes.screenHeight * 0.02,
    bottom:sizes.screenHeight * 0.12,
    position:'absolute',
    alignSelf:'center',
    borderRadius: 10,
    borderWidth:1,
    borderColor:colors.tealMix
  },

  icon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.04,
    width: sizes.screenHeight * 0.04,
    // marginHorizontal: sizes.screenWidth * 0.03,
    marginRight: sizes.screenWidth * 0.03,
  },

  subHeading: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
  },

  modalContainer: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
  },

  modalBody: {
    height: sizes.screenHeight * 0.25,
    width: sizes.screenWidth,
    paddingLeft: sizes.screenWidth * 0.05,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: sizes.screenHeight * 0.03,
    borderTopRightRadius: sizes.screenHeight * 0.03,
    paddingTop: sizes.screenHeight * 0.03,
  },

  modalHeading: {
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '500',
  },

  modalText: {
    marginVertical: sizes.screenHeight * 0.03,
    fontFamily: 'Satoshi-Regular',
    fontSize: fontSize.regular,
    color: colors.gray,
  },

  modalBtnContainer: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },

  modalBtnWhite: {
    width: sizes.screenWidth * 0.43,
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.05,
    borderWidth: 1,
    borderColor: colors.darkTeal,
    borderRadius: 10,
  },

  modalBtngreen: {
    width: sizes.screenWidth * 0.43,
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.05,
    borderRadius: 8,
  },

  modalBtnWhiteText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
  },

  modalBtnGreenText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.regular,
    color: colors.white,
  },
});
