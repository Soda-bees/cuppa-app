import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
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
    fontWeight:'300'
  },
  inputField: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    padding:0,
    paddingHorizontal: sizes.screenWidth * 0.01,
    paddingBottom:sizes.screenWidth*0.015
  },
  inputFieldIOS: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    padding:0,
    paddingHorizontal: sizes.screenWidth * 0.01,
    paddingBottom:sizes.screenWidth*0.015,
    height:sizes.screenHeight * 0.05
  },

  btnImg: {
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.02,
  },
  feather: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: sizes.screenWidth * 0.05,
    justifyContent: 'center',

  },
  heading:{
    width: sizes.screenWidth * 0.85,
    textAlign: 'left',
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h5,
    color: colors.black,
    marginTop:sizes.screenHeight*0.05,
    marginBottom:sizes.screenHeight*0.02
  },
  bottomBtn:{
    marginTop:sizes.screenHeight*0.43
  },
  bottomBtnIOS:{
    marginTop:sizes.screenHeight*0.39
  },
  modalContainer:{
    width:sizes.screenWidth,
    height:sizes.screenHeight*0.1,
    backgroundColor:colors.white,
    // alignSelf:'center',
    bottom:0
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
