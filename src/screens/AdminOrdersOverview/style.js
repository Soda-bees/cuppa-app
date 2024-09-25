import {StyleSheet} from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  chartHeading:{
    flexDirection:'row',
    alignSelf:'flex-start',
    width:sizes.screenWidth*0.9,
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:sizes.screenWidth*0.02      
  },
  heading: {
    fontSize:fontSize.extraLarge,
    color:colors.black,
    alignSelf:'flex-start',
    // marginLeft:sizes.screenWidth*0.05,
    fontWeight:'500',
    marginBottom:sizes.screenHeight*0.01
  },
  viewBtn:{
    backgroundColor:colors.bluishWhite,
    color:colors.darkTeal,
    paddingVertical:sizes.screenWidth*0.015,
    paddingHorizontal:sizes.screenWidth*0.03,
    borderRadius:sizes.screenWidth*0.05
  },
  viewBtnIOS:{
    backgroundColor:colors.bluishWhite,
    color:colors.darkTeal,
    paddingVertical:sizes.screenWidth*0.015,
    paddingHorizontal:sizes.screenWidth*0.03,
    borderRadius:sizes.screenWidth*0.03,
    overflow:'hidden'
  },
  header:{
    flexDirection:'row',
    width:sizes.screenWidth*0.9,
    paddingHorizontal:sizes.screenWidth*0.04,
    paddingVertical:sizes.screenHeight*0.01,
    justifyContent:'space-between',
    borderRadius:sizes.screenWidth*0.03,
    marginVertical:sizes.screenHeight*0.02
  },
  headerSubview:{
    flexDirection:'row',
    width:sizes.screenWidth*0.6,
    justifyContent:'space-between'
  },
  headerText:{
    color:colors.white,

  },
  orderContainer:{
    backgroundColor:colors.bluishWhite,
    flexDirection:'row',
    width:sizes.screenWidth*0.9,
    marginVertical:sizes.screenHeight*0.01,
    justifyContent:'space-between',
    alignItems:'center',
    padding:sizes.screenWidth*0.03,
    borderRadius:sizes.screenWidth*0.03,
  },
  orderContainerChild:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:sizes.screenWidth*0.55
  },
  orderElement:{
    color:colors.black
  },
  orderPrice:{
    color:colors.darkTeal
  },
  coffeeText:{
    fontSize:fontSize.medium,
    color:colors.black,
    fontWeight:'500'
  },
  orderTime:{
    color:colors.disabledBg2
  },
  orderStatus:{
    color:colors.black,
    width:sizes.screenWidth*0.17,
    textAlign:'right'
  },
  timeView:{
    alignItems:'center'
  },
  scrollView:{
    marginBottom:sizes.screenHeight*0.04
  },
  modalContainer:{
    width:sizes.screenWidth,
    // height:sizes.screenHeight*0.3,
    paddingBottom:sizes.screenHeight*0.02,
    backgroundColor:colors.white,
    // alignSelf:'flex-end',
    // bottom:sizes.screenHeight*0,
    borderTopLeftRadius:sizes.screenWidth*0.04,
    borderTopEndRadius:sizes.screenWidth*0.04,
    top:sizes.screenHeight*0.025
  },
  modalContainerIOS:{
    width:sizes.screenWidth,
    // height:sizes.screenHeight*0.3,
    paddingBottom:sizes.screenHeight*0.03,
    backgroundColor:colors.white,
    // alignSelf:'flex-end',
    // bottom:sizes.screenHeight*0,
    borderTopLeftRadius:sizes.screenWidth*0.04,
    borderTopEndRadius:sizes.screenWidth*0.04,
    top:sizes.screenHeight*0.025
  },
  modalParent:{
    width:sizes.screenWidth,
    height:sizes.screenHeight,
    alignSelf:'center',
    // backgroundColor:'red',
    justifyContent:'flex-end'
  },
  modalHeader:{
    // height:sizes.screenHeight*0.12,
    backgroundColor:colors.bluishWhite,
    borderTopLeftRadius:sizes.screenWidth*0.04,
    borderTopEndRadius:sizes.screenWidth*0.04,
  },
  modalHeading:{
    fontSize:fontSize.extraLarge,
    color:colors.black,
    alignSelf:'center',
    // marginLeft:sizes.screenWidth*0.05,
    fontWeight:'600',
    marginTop:sizes.screenHeight*0.02,
  },
  modalpickupinfo:{
    flexDirection:'row',
    alignSelf:'center',
    width:sizes.screenWidth*0.38,
    justifyContent:'space-between',
    marginBottom:sizes.screenHeight*0.03,
    alignItems:'center'
  },
  basicIcon:{
    width:sizes.screenWidth*0.05,
    height:sizes.screenHeight*0.025,
  },
  basicIconIOS:{
    width:sizes.screenWidth*0.04,
    height:sizes.screenHeight*0.025,
    resizeMode:"contain",
  },
  basicIconL:{
    width:sizes.screenWidth*0.06,
    height:sizes.screenHeight*0.03,
  },
  textGray:{
    color:colors.disabledBg3
  },
  divider:{
    width:sizes.screenWidth*0.15,
    backgroundColor:colors.disabledBg,
    height:sizes.screenHeight*0.005,
    marginTop:sizes.screenHeight*0.01,
    alignSelf:'center'
  },
  infoRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:sizes.screenWidth*0.05,
    marginTop:sizes.screenHeight*0.02
  },
  flexRow:{
    flexDirection:'row',
  },
  itemText:{
    color:colors.black,
    marginLeft:sizes.screenWidth*0.02
  },
  amountText:{
    color:colors.black,
    fontWeight:'600',
    marginLeft:sizes.screenWidth*0.02
  },
  greenText:{
    color:colors.greenIcon
  },
  bottomBtnContainer:{
    position:'absolute',
    alignSelf:'center',
    bottom:sizes.screenHeight*0.05,
    // backgroundColor:'red'
  },
  bottomBtnContainerIOS:{
    position:'absolute',
    alignSelf:'center',
    bottom:sizes.screenHeight*0.11,
    // backgroundColor:'red'
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
    marginLeft:sizes.screenWidth*0.01
  },

  marginBottom:{
    marginBottom:sizes.screenHeight * 0.13
  },

});
