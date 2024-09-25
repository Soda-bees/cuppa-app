import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  subHeading: {
    color: colors.black,
    textAlign: 'center',
    width: sizes.screenWidth * 0.85,
    marginVertical: sizes.screenHeight * 0.04,
    fontSize: fontSize.medium,
  },
  inputView: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.85,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
  },
  inputTitle: {
    paddingHorizontal: sizes.screenWidth * 0.01,
    color: colors.gray,
    fontWeight: '300',
  },
  inputField: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
  },
  inputFieldIOS: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    height:sizes.screenHeight * 0.05
  },

  btnImg: {
    width: sizes.screenWidth * 0.08,
    height: sizes.screenHeight * 0.04,
  },

  btnImgIOS: {
    resizeMode:'contain',
    width: sizes.screenWidth * 0.08,
    height: sizes.screenHeight * 0.04,
  },

  btnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    marginLeft: sizes.screenWidth * 0.01,
  },
  LinearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.85,
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingVertical: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.01,
  },
  forgotPass: {
    fontFamily: 'Satoshi-Medium',
    color: colors.grayBorder,
    marginVertical: sizes.screenHeight * 0.02,
    fontSize: fontSize.medium,
  },
  dividerText: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,

    fontSize: fontSize.medium,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: sizes.screenHeight * 0.02,
  },
  divider: {
    width: sizes.screenWidth * 0.28,
    height: 1,
    backgroundColor: colors.black,
    marginHorizontal: sizes.screenWidth * 0.05,
    borderColor: colors.black,
  },

  linkView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.85,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingVertical: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.03,
    // borderWidth: sizes.screenWidth * 0.03,

    marginTop: sizes.screenHeight * 0.02,
    borderWidth: 1.1,
    borderColor: colors.disabledBg,
  },
  linkText: {
    marginLeft: sizes.screenWidth * 0.16,
    fontSize: fontSize.medium,
    color: colors.black,
  },
  bottomSignupView: {
    flexDirection: 'row',
    // marginTop:sizes.screenHeight*0.05
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },
  
  heading: {
    width: sizes.screenWidth * 0.9,
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight:'500'
  },
  feather: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: sizes.screenWidth * 0.05,
    justifyContent: 'center',
  },
  bottomSignupView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.01,
  },
  
  textNormal: {
    fontFamily: 'Satoshi-Medium',
    color: colors.grayBorder,
    fontSize: fontSize.medium,
  },
  // bottomSignupText: {
  //   marginLeft: sizes.screenWidth * 0.01,
  //   color: colors.darkTeal,
  //   fontWeight: '500',
  // },

  bottomSignupText: {
    fontFamily: 'Satoshi-Bold',
    marginLeft: sizes.screenWidth * 0.01,
    color: colors.teal,
    fontSize: fontSize.medium,
    fontWeight:'600'
  },
});
