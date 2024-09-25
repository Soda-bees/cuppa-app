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
    // margin:sizes.screenWidth*0.02,
    color:colors.white,
    borderRadius:sizes.screenWidth*0.3,
    // paddingHorizontal:sizes.screenWidth*0.01
},
  LinearGradient:{
    borderRadius:sizes.screenWidth*0.03,
  },
  LinearGradient2:{
    borderRadius:sizes.screenWidth*0.02,
    marginTop:sizes.screenHeight*0.01,
    marginTop:sizes.screenHeight*0.03,
    width:sizes.screenWidth*0.3
  },
  LinearGradient2IOS:{
    borderRadius:sizes.screenWidth*0.02,
    marginTop:sizes.screenHeight*0.01,
    marginTop:sizes.screenHeight*0.03,
    width:sizes.screenWidth*0.23
  },
  btnContainer:{
    backgroundColor:colors.bluishWhite,
    borderRadius:sizes.screenWidth*0.03,
    marginRight:sizes.screenWidth*0.04,
  },
  
  scrollViewContainer:{
    height:sizes.screenHeight*0.68,
    
  },
  itemContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: sizes.screenHeight * 0.01,
    backgroundColor:colors.bluishWhite,
    borderRadius:sizes.screenWidth*0.03,
    width:sizes.screenWidth*0.9,
    alignSelf:'center'
  },
  itemIcon: {
    width: sizes.screenWidth * 0.3,
    height:sizes.screenHeight*0.15,
    borderRadius:sizes.screenWidth*0.06,
    marginRight: sizes.screenWidth * 0.02,
  },
  itemText: {
    color: colors.black,
    fontSize: fontSize.extraLarge,
  },
  itemPrice: {
    color: colors.disabledBg3,
    marginRight: sizes.screenWidth * 0.01,
  },
  basicIcon: {
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.02,
    marginLeft: sizes.screenWidth * 0.01,
  },
  flexRow: {
    flexDirection: 'row',
  },
  divider: {
    width: sizes.screenWidth * 0.88,
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.002,
    // marginTop:sizes.screenHeight*0.01,
    alignSelf: 'center',
    marginVertical: sizes.screenHeight * 0.003,
  },
  addBtn:{
    width:sizes.screenWidth*0.03,
    height:sizes.screenHeight*0.015,
  },
  divider2:{
    width:sizes.screenWidth*0.8,
    backgroundColor:colors.disabledBg,
    height:sizes.screenHeight*0.002,
    // marginTop:sizes.screenHeight*0.01,
    alignSelf:'center'
  },
  addBtnContainer:{
    alignSelf:'center'
  },
  itemName:{
    color:colors.black,
    fontSize:fontSize.extraLarge
  },
  addBtnModal:{
    // alignSelf:'center',
    // marginRight:sizes.screenWidth*0.03,
    backgroundColor:colors.white,
    color:colors.black,
    padding:sizes.screenWidth*0.015,
    borderRadius:sizes.screenWidth*0.05,
    paddingHorizontal:sizes.screenWidth*0.045,
    fontWeight:'500'
  },
  rowspacebetween:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:sizes.screenHeight*0.01,
    marginHorizontal:sizes.screenWidth*0.025
  },
  itemInfo:{
    alignSelf:'center',
    marginLeft:sizes.screenWidth*0.01
  },
  timeInputView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',

  },
  BottomBtn:{
    // top:sizes.screenHeight*0.02
  },
  BottomBtnIOS:{
    bottom:sizes.screenHeight * 0.05,
    // top:sizes.screenHeight*0.02
  },

  marginIOS:{
    marginBottom:sizes.screenHeight * 0.05
  },
});
