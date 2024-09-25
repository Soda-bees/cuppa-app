import {StyleSheet} from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    paddingHorizontal: sizes.screenWidth * 0.05,

  },
  searchBar:{
    flexDirection:'row',
    backgroundColor:colors.bluishWhite,
    borderRadius:sizes.screenWidth*0.02,
    padding:sizes.screenWidth*0.03,
    alignItems:'center',
    width:sizes.screenWidth*0.5

  },
  basicIcon:{
    width:sizes.screenWidth*0.04,
    height:sizes.screenHeight*0.02,
    marginLeft:sizes.screenWidth*0.01
  },
  basicIconL:{
    width:sizes.screenWidth*0.06,
    height:sizes.screenHeight*0.03,
  },
  searchInput:{
    marginLeft:sizes.screenWidth*0.01,
    padding:0,
    width:sizes.screenWidth*0.3,
    color:colors.black
  },
  outletDropDown:{
    flexDirection:'row',
    borderWidth:sizes.screenWidth*0.002,
    borderRadius:sizes.screenWidth*0.03,
    padding:sizes.screenWidth*0.015,
    borderColor:colors.disabledBg,
    alignItems:'center',
    // position: 'absolute',
    // left: sizes.screenWidth*0.5,
    // top:sizes.screenWidth*0.01,
  },
  greenbtnOutlet:{
    width:sizes.screenWidth*0.05,
    height:sizes.screenHeight*0.03,
    marginLeft:sizes.screenWidth*0.12,
    transform: [{ rotate: '180deg' }]
  },
  outletHeader:{
    fontSize:fontSize.small
  },
  outletNumber:{
    fontSize:fontSize.smallM,
    color:colors.black
  },
  outletDropped:{
    backgroundColor:colors.bluishWhite,
    padding:sizes.screenWidth*0.02,
    borderRadius:sizes.screenWidth*0.03,
    borderWidth:sizes.screenWidth*0.003,
    borderColor:colors.disabledBg,
    width:sizes.screenWidth*0.4,
    position:'absolute',
    zIndex:1,
    left: sizes.screenWidth*0.45,
    // top:sizes.screenHeight*0.002,
  },
  outletDroppedIOS:{
    backgroundColor:colors.bluishWhite,
    padding:sizes.screenWidth*0.02,
    borderRadius:sizes.screenWidth*0.03,
    borderWidth:sizes.screenWidth*0.003,
    borderColor:colors.disabledBg,
    width:sizes.screenWidth*0.4,
    position:'absolute',
    zIndex:1,
    left: sizes.screenWidth*0.5,
    // top:sizes.screenHeight*0.002,
  },
  outletDropped2:{
    backgroundColor:colors.bluishWhite,
    padding:sizes.screenWidth*0.02,
    borderRadius:sizes.screenWidth*0.03,
    borderWidth:sizes.screenWidth*0.003,
    borderColor:colors.disabledBg,
    width:sizes.screenWidth*0.35,
    position:'absolute',
    zIndex:1,
    left: sizes.screenWidth*0.45,
    top:sizes.screenHeight*0.07,
  },
  outletDropped3:{
    backgroundColor:colors.bluishWhite,
    padding:sizes.screenWidth*0.02,
    borderRadius:sizes.screenWidth*0.03,
    borderWidth:sizes.screenWidth*0.003,
    borderColor:colors.disabledBg,
    width:sizes.screenWidth*0.35,
    position:'absolute',
    zIndex:1,
    bottom:sizes.screenHeight*0.17,
    right:sizes.screenWidth*0.035,

  },
  droppedView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:sizes.screenHeight*0.01,
  },
  addBtn:{
    width:sizes.screenWidth*0.03,
    height:sizes.screenHeight*0.015,
  },
  linearAddBtn:{
    flexDirection:'row',
    width:sizes.screenWidth*0.15,
    alignItems:'center',
    justifyContent:'space-evenly',
    padding:sizes.screenWidth*0.01,
    borderRadius:sizes.screenWidth*0.03,
    // marginHorizontal:sizes.screenWidth*0.01
    // marginTop:sizes.screenHeight*0.03
    // top:sizes.screenHeight*0.03
  },
  linearAddBtn2:{
    flexDirection:'row',
    width:sizes.screenWidth*0.18,
    alignItems:'center',
    justifyContent:'space-evenly',
    paddingVertical:sizes.screenWidth*0.015,
    paddingHorizontal:sizes.screenWidth*0.03,
    borderRadius:sizes.screenWidth*0.01,
  },
  linearAddBtn2IOS:{
    flexDirection:'row',
    width:sizes.screenWidth*0.2,
    alignItems:'center',
    justifyContent:'space-evenly',
    paddingVertical:sizes.screenWidth*0.025,
    paddingHorizontal:sizes.screenWidth*0.015,
    borderRadius:sizes.screenWidth*0.01,
  },

  
  outletDivider:{
    width:sizes.screenWidth*0.25,
    borderWidth:sizes.screenWidth*0.001,
    borderColor:colors.disabledBg,
    alignSelf:'center',
    marginVertical:sizes.screenHeight*0.01,

  },
  outletDivider2:{
    width:sizes.screenWidth*0.2,
    borderWidth:sizes.screenWidth*0.001,
    borderColor:colors.disabledBg,
    alignSelf:'center',
    marginVertical:sizes.screenHeight*0.01,
  },
  linearBtnText:{
    color:colors.white,
  },
  searchBarParent:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:sizes.screenHeight*0.015,
    zIndex:1
  },
  flexRow:{
    flexDirection:'row'
  },
  category:{
    flexDirection:'row',
    backgroundColor:colors.bluishWhite,
    borderRadius:sizes.screenWidth*0.02,
    padding:sizes.screenWidth*0.03,
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:sizes.screenHeight*0.01,
    zIndex: 10
    // width:sizes.screenWidth*0.5
  },
  itemsCenter:{
    alignItems:'center'
  },
  greenBtnDown:{
    transform: [{ rotate: '180deg' }]
  },

  itemContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:sizes.screenHeight*0.01,
    // backgroundColor:colors.red
  },
  itemIcon:{
    width:sizes.screenWidth*0.12,
    height:sizes.screenHeight*0.06,
    marginRight:sizes.screenWidth*0.02
  },
  itemText:{
    color:colors.black,
    fontSize:fontSize.large,
  },
  itemPrice:{
    color:colors.greenIcon,
    marginRight:sizes.screenWidth*0.01
  },
  bottomAddBtn:{
    position:'absolute',
    bottom:sizes.screenHeight*0.14,
    right:sizes.screenWidth*0.05
  },
  bottomAddBtnIOS:{
    position:'absolute',
    bottom:sizes.screenHeight*0.17,
    right:sizes.screenWidth*0.05
  },
  scrollView:{
    marginBottom:sizes.screenHeight*0.13,
  },
  spacebetween:{
    justifyContent:'flex-start'
  },
  optionText:{
    color:colors.black,
    fontSize:fontSize.medium,
    marginLeft:sizes.screenWidth*0.01,
  },
  itemArray:{
    // bottom:sizes.screenHeight*0.17
  },
  BottomBtn:{
    marginBottom:sizes.screenHeight*0.01
  },
  divider:{
    width:sizes.screenWidth*0.88,
    backgroundColor:colors.disabledBg,
    height:sizes.screenHeight*0.002,
    // marginTop:sizes.screenHeight*0.01,
    alignSelf:'center',
    marginVertical:sizes.screenHeight*0.01
  },
  greyText:{
    color:colors.disabledBg3
  }
});
