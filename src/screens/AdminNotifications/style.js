import {StyleSheet} from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  toggleOption:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:sizes.screenWidth*0.85,
    marginVertical:sizes.screenHeight*0.02
  },
  toggleBtn:{
    height:sizes.screenHeight*0.03,
    width:sizes.screenWidth*0.108,
  },
  toggleBtnIOS:{
    resizeMode:"contain",
    height:sizes.screenHeight*0.03,
    width:sizes.screenWidth*0.108,
  },
  optionText:{
    color:colors.black,
    fontSize:fontSize.h6,
  },
  spacing:{
    marginTop:sizes.screenHeight*0.02
  },
  notifView:{
    flexDirection:'row',
    width:sizes.screenWidth*0.9,
    justifyContent:'space-between',
    backgroundColor:colors.bluishWhite,
    alignItems:'center',
    padding:sizes.screenWidth*0.03,
    borderRadius:sizes.screenWidth*0.03,
    marginVertical:sizes.screenHeight*0.005
  },
  notifViewIOS:{
    flexDirection:'row',
    width:sizes.screenWidth*0.9,
    justifyContent:'space-between',
    backgroundColor:colors.bluishWhite,
    alignItems:'center',
    padding:sizes.screenWidth*0.03,
    borderRadius:sizes.screenWidth*0.03,
    marginVertical:sizes.screenHeight*0.005,
    height:sizes.screenHeight * 0.08,
    // paddingVertical:sizes.screenHeight * 0.02
  },
  upbtn: {
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.012,
    transform: [{rotate: '90deg'}],
  },
  upbtnIOS: {
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.012,
    transform: [{rotate: '90deg'}],
    marginTop:sizes.screenHeight * 0.02
  },
  subHeading:{
    color:colors.disabledBg2,
  },
subHeadingIOS:{
    color:colors.disabledBg2,
    marginBottom:sizes.screenHeight * 0.01
  },

  notifOption:{
    color:colors.black,
    fontSize:fontSize.medium,
  }
});
