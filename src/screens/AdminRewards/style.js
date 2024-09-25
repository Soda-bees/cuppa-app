import {StyleSheet} from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  buttonField:{
    flexDirection:'row',
    marginLeft:sizes.screenWidth*0.05,
    marginVertical:sizes.screenHeight*0.02,

  },
  btn:{
    margin:sizes.screenWidth*0.02,
    // backgroundColor:colors.bluishWhite,
    borderRadius:sizes.screenWidth*0.3,
    paddingHorizontal:sizes.screenWidth*0.01,
    color:colors.black             
  },
  selectedBtn:{
    margin:sizes.screenWidth*0.02,
    color:colors.white,
    borderRadius:sizes.screenWidth*0.3,
    paddingHorizontal:sizes.screenWidth*0.01
},
  LinearGradient:{
    borderRadius:sizes.screenWidth*0.03,
  },
  btnContainer:{
    backgroundColor:colors.bluishWhite,
    borderRadius:sizes.screenWidth*0.03,
    marginRight:sizes.screenWidth*0.04,
    // paddingHorizontal:sizes.screenWidth*0.03

  },
  rewardView:{
    flexDirection:'row',
    alignItems:'center',
    width:sizes.screenWidth*0.9,
    alignSelf:'center',
    backgroundColor:colors.lightTeal,
    borderRadius:sizes.screenWidth*0.03,
    paddingHorizontal:sizes.screenWidth*0.04,
    paddingVertical:sizes.screenWidth*0.02,
    marginVertical:sizes.screenHeight*0.012,
    justifyContent:'space-between',
  },
  rewardIcon:{
    width:sizes.screenWidth*0.16,
    height:sizes.screenHeight*0.08
  },
  rewardName:{
    fontSize:fontSize.h5,
    color:colors.black,
    fontWeight:'500'
  },
  rewardDescription:{
    color:colors.black,

  },
  scrollViewContainer:{
    height:sizes.screenHeight*0.63,
    // backgroundColor:'red',
    marginBottom:sizes.screenHeight*0.03
  },

  bottonbtnIOS:{
    bottom:sizes.screenHeight * 0.03
  },
});
