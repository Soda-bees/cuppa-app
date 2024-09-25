import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import { AbstractChart } from 'react-native-chart-kit';

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
  subHeading: {
    fontFamily: 'Satoshi-Medium',
    color: colors.black,
    textAlign: 'center',
    width: sizes.screenWidth * 0.8,
    marginVertical: sizes.screenHeight * 0.04,
    fontSize: fontSize.medium,
  },
  inputView: {
    backgroundColor: colors.bgLight,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
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
    height: sizes.screenHeight * 0.05,
    fontWeight:'500'
  },

  dateIconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    right: sizes.screenWidth * 0.04,
  },

  dateIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.04,
    width: sizes.screenHeight * 0.04,
  },

  dateContainer: {
    marginLeft: sizes.screenWidth * 0.01,
    height: sizes.screenHeight * 0.05,
    justifyContent: 'center',
  },

  date: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight:'500'
  },

  bottomBtnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,
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

  bottomBtnNextIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.08,
    width: sizes.screenWidth * 0.08,
  },

  errMsg: {
    color: colors.red,
    alignSelf: 'flex-start',
    marginHorizontal: sizes.screenWidth * 0.05,
    fontSize: fontSize.regular
  },

  userDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.03,
    borderRadius: sizes.screenHeight * 0.1,
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
    justifyContent: 'center',
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
    textDecorationLine:'underline',
    fontWeight:'500'
  },

  nameEmailContainer: {
    marginLeft: sizes.screenWidth * 0.04,
  },

  email: {
    fontFamily: 'Satoshi-Medium',
    fontSize: fontSize.medium,
    color: colors.disabledBg2,
  },

  marginBottom:{
    marginBottom: sizes.screenHeight*0.05
  }
,
  loader:{
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
    borderRadius: sizes.screenHeight * 0.1,
    backgroundColor: '#00000044',
    position: 'absolute',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
