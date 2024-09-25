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
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    textAlign: 'center',
    width: sizes.screenWidth * 0.8,
    marginVertical: sizes.screenHeight * 0.04,
    fontSize: fontSize.medium,
  },
  inputView: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.04,
    marginBottom: sizes.screenHeight * 0.01,
  },
  inputTitle: {
    fontFamily: 'Satoshi-Medium',
    marginHorizontal: sizes.screenWidth * 0.01,
    color: colors.disabledBg2,
  },
  inputField: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
    height: sizes.screenHeight * 0.06,
    fontWeight:'500'
  },
  bottomBtnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.06,
  },
  checkField: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginVertical: sizes.screenHeight * 0.01,
  },
  checkIconContainer: {
    position: 'absolute',
  },
  checkIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
  },
  checkIconIOS: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.025,
    width: sizes.screenHeight * 0.025,
  },
  textBold: {
    fontFamily: 'Satoshi-Bold',
    marginLeft: sizes.screenWidth * 0.08,
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight:'500'
  },
  textLight: {
    fontFamily: 'Satoshi-Medium',
    marginLeft: sizes.screenWidth * 0.08,
    color: colors.disabledBg2,
    fontSize: fontSize.small,
    marginTop: sizes.screenWidth * 0.01,
    marginBottom: sizes.screenWidth * 0.05,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginVertical: sizes.screenHeight * 0.03,
  },

  heading: {
    width: sizes.screenWidth * 0.9,
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight:'500'
  },
  countryField:{
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    top:sizes.screenWidth*0.02,
    left:sizes.screenWidth*0.01,
    height: sizes.screenHeight * 0.06,
    fontWeight:'500'
  },
  feather: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: sizes.screenWidth * 0.05,
    justifyContent: 'center',

  },
  scroll:{
    height:sizes.screenHeight*0.75
  },
  bottomBtn:{
    position:'absolute',
    alignSelf:'center',
    bottom:sizes.screenHeight*0.04
  },
  bottomBtnIOS:{
    position:'absolute',
    alignSelf:'center',
    bottom:sizes.screenHeight*0.11
  },
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
  feather: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: sizes.screenWidth * 0.05,
    justifyContent: 'center',
  },

  paddingBottom:{
    marginBottom:sizes.screenHeight * 0.02
  }

});