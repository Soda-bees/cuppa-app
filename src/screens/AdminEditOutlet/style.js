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
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
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
    bottom: sizes.screenHeight * 0.01,
  },
  inputFieldIOS: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    // bottom: sizes.screenHeight * 0.01,
    height:sizes.screenHeight * 0.05
  },
  headingContainer: {
    marginBottom: sizes.screenHeight * 0.05,
  },
  defaultCover: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.1,
    marginVertical: sizes.screenHeight * 0.04,
    alignSelf: 'center',
  },
  userCover: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.18,
    // marginVertical:sizes.screenHeight*0.04,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.03,
  },
  heading: {
    width: sizes.screenWidth * 0.7,
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
    fontSize: fontSize.h6,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.02,
  },
  coverView: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    // paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
  },
  countryField: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    top: sizes.screenWidth * 0.02,
    left: sizes.screenWidth * 0.01,
    height: sizes.screenHeight * 0.06,
  },
  timeInputView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',

  },
  bottomBtn:{
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.06,
  },
  timeIcon:{
    height:sizes.screenHeight*0.03,
    width:sizes.screenWidth*0.06,
    marginHorizontal:sizes.screenWidth*0.02,
    bottom:sizes.screenHeight*0.012    
  },
  timeIconIOS:{
    height:sizes.screenHeight*0.03,
    width:sizes.screenWidth*0.06,
    marginHorizontal:sizes.screenWidth*0.02,
    bottom:sizes.screenHeight*0.012  ,
    resizeMode:'contain'  
  },
  
  modal:{
    height:sizes.screenHeight*0.75,
    backgroundColor:colors.white,
    width:sizes.screenWidth,
    alignSelf:'center',
    marginTop:sizes.screenHeight*0.52,
    borderRadius:sizes.screenWidth*0.06
    // justifyContent:'flex-end'
  },
  timeRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  divider:{
    borderWidth:sizes.screenWidth*0.003,
    backgroundColor:colors.disabledBg,
    borderColor:colors.disabledBg,
    width:sizes.screenWidth*0.2,
    alignSelf:'center',
    marginVertical:sizes.screenHeight*0.02
  },
  modalInputView:{
    backgroundColor:colors.bluishWhite,
    width:sizes.screenWidth*0.9,
    padding:sizes.screenWidth*0.05,
    alignSelf:'center',
    borderRadius:sizes.screenWidth*0.04
  },
  timeInput:{
    fontSize:fontSize.h1,
    backgroundColor:colors.white,
    paddingHorizontal:sizes.screenWidth*0.03,
    marginHorizontal:sizes.screenWidth*0.02,
    marginVertical:sizes.screenHeight*0.02,
    width:sizes.screenWidth*0.28,
    borderRadius:sizes.screenWidth*0.02,
    color:colors.black,
    fontFamily: 'Satoshi',
    textAlign:'center',
    // fontWeight:'400'
  },

  timeInputIOS:{
    fontSize:fontSize.h1,
    backgroundColor:colors.white,
    paddingHorizontal:sizes.screenWidth*0.03,
    marginHorizontal:sizes.screenWidth*0.02,
    marginVertical:sizes.screenHeight*0.02,
    width:sizes.screenWidth*0.28,
    borderRadius:sizes.screenWidth*0.02,
    color:colors.black,
    fontFamily: 'Satoshi',
    textAlign:'center',
    height:sizes.screenHeight * 0.09
    // fontWeight:'400'
  },
  focusedTimeInput:{
    borderWidth:sizes.screenWidth*0.003,
    borderColor:colors.darkTeal
  },
  semicolon:{
    fontSize:fontSize.h1, 
  },
  timeView:{
    backgroundColor:colors.white,
    alignItems:'center',
    borderWidth:sizes.screenWidth*0.005,
    borderRadius:sizes.screenWidth*0.02,
    borderColor:colors.disabledBg2
  },
  timeViewText:{
    fontSize:fontSize.medium,
    padding:sizes.screenWidth*0.017,
    color:colors.gray,
    marginHorizontal:sizes.screenWidth*0.01
  },
  timeSelected:{
    color:colors.white
  },
  modalHeader:{
    marginLeft:sizes.screenWidth*0.05,
    color:colors.black,
    fontSize:fontSize.extraLarge,
    bottom:sizes.screenHeight*0.01,
    fontWeight:'600'
  },
  daysView:{
    flexDirection:'row',
    alignSelf:'center',
    marginVertical:sizes.screenHeight*0.01
  },
  selectedDay:{
    backgroundColor:'#abd3d0'
  },
  day:{
    marginHorizontal:sizes.screenWidth*0.015,
    borderRadius:sizes.screenWidth*0.05,
    width:sizes.screenWidth*0.086,
    height:sizes.screenHeight*0.043,
    color:colors.black
  },
  dayIOS:{
    marginHorizontal:sizes.screenWidth*0.015,
    borderRadius:sizes.screenWidth*0.05,
    width:sizes.screenWidth*0.09,
    padding:sizes.screenWidth * 0.012,
    height:sizes.screenHeight*0.045,
    color:colors.black
  },
  dayText:{
    fontSize:fontSize.extraLarge,
    textAlign:'center',
    top:sizes.screenHeight*0.003
  },
  bottomButtons:{
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  cancelBtn:{
    color:colors.gray,
    marginHorizontal:sizes.screenWidth*0.05,
  },
  cancelBtnIOS:{
    color:colors.gray,
    marginHorizontal:sizes.screenWidth*0.05,
    fontSize:fontSize.medium
  },
  okBtn:{
    color:colors.teal
  },
  okBtnIOS:{
    color:colors.teal,
    fontSize:fontSize.medium
  },
  timeFinal:{
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    bottom: sizes.screenHeight * 0.01,
    marginHorizontal:sizes.screenHeight*0.005,
    marginVertical:sizes.screenHeight*0.015
  }
});
