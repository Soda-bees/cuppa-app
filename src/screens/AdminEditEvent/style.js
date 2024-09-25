import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  itemImg: {
    width: sizes.screenWidth * 0.5,
    height: sizes.screenHeight * 0.2,
    alignSelf: 'center',
    resizeMode: 'contain',
    // backgroundColor:'red',
    marginTop: sizes.screenHeight * 0.03,
  },
  itemImgContainer: {
    width: sizes.screenWidth * 0.5,
    height: sizes.screenHeight * 0.23,
    alignSelf: 'center',
  },
  uploadImgText: {
    color: colors.black,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.01,
    fontSize: fontSize.extraLarge,
    fontWeight: '500',
  },
  inputView: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.85,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.03,
    marginVertical: sizes.screenHeight * 0.01,
    alignSelf: 'center',
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
    padding: 0,
    paddingHorizontal: sizes.screenWidth * 0.01,
    paddingBottom: sizes.screenWidth * 0.015,
  },
  inputFieldIOS: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    padding: 0,
    paddingHorizontal: sizes.screenWidth * 0.01,
    paddingBottom: sizes.screenWidth * 0.015,
    height:sizes.screenHeight * 0.05
  },
  sizesHeader: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.43,
    justifyContent: 'space-between',
    alignSelf: 'center',
    // marginRight:sizes.screenWidth*0.05,
    right: sizes.screenWidth * 0.07,
    marginBottom: sizes.screenHeight * 0.02,
  },
  sizesHeaderText: {
    color: colors.black,
    fontSize: fontSize.large,
  },
  sizesInputField: {
    backgroundColor: colors.white,
    padding: 0,
    width: sizes.screenWidth * 0.32,
    borderRadius: sizes.screenWidth * 0.01,
    borderWidth: sizes.screenWidth * 0.002,
    borderColor: colors.disabledBg,
    marginLeft: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
    paddingHorizontal:sizes.screenWidth*0.02
  },
  sizesContainer: {
    flexDirection: 'row',
  },
  removeBtn: {
    width: sizes.screenWidth * 0.08,
    height: sizes.screenHeight * 0.04,
    marginLeft:sizes.screenWidth*0.02
  },
  addBtn: {
    width: sizes.screenWidth * 0.03,
    height: sizes.screenHeight * 0.015,
  },
  linearAddBtn: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: sizes.screenWidth * 0.015,
    borderRadius: sizes.screenWidth * 0.02,
    // marginHorizontal:sizes.screenWidth*0.01
    // marginTop:sizes.screenHeight*0.01
    margin: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.015,
    paddingHorizontal: sizes.screenWidth * 0.02,
  },
  linearBtnText: {
    color: colors.white,
  },
  flexrow:{
    flexDirection:'row'
  },
  scrollView:{
    marginBottom:sizes.screenHeight*0.01
  },
  categoryInput:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  feather:{
    width:sizes.screenWidth*0.08,
    height:sizes.screenHeight*0.04,
    transform: [{rotate:'180deg'}]
  },
  BottomBtn:{
    marginBottom:sizes.screenHeight*0.05,
    // padding:0
  },
  BottomBtnIOS:{
    marginBottom:sizes.screenHeight*0.11,
    // padding:0
  },
  offerContainer:{
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.85,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingVertical: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    alignSelf: 'center',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  offerNameContainer:{
    flexDirection:"row",
    alignItems:'center',
    width:sizes.screenWidth*0.4
  },
  basicIconL:{
    width:sizes.screenWidth*0.1,
    height:sizes.screenHeight*0.05,
  },
  greenBtn:{
    width:sizes.screenWidth*0.07,
    height:sizes.screenHeight*0.035,
    transform: [{rotate:'90deg'}]
  },
  coffeeName:{
    color:colors.black,
    marginLeft:sizes.screenWidth*0.02,
    fontSize:fontSize.large
  },
  toggleBtn: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.108,
    marginRight:sizes.screenWidth*0.02
  },
  toggleBtnIOS: {
    resizeMode:'contain',
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.108,
    marginRight:sizes.screenWidth*0.02
  },
  coverView: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.85,
    paddingHorizontal: sizes.screenWidth * 0.02,
    // paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    marginVertical: sizes.screenHeight * 0.02,
    alignSelf:'center',

  },
  defaultCover: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.1,
    marginVertical: sizes.screenHeight * 0.04,
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  userCover: {
    width: sizes.screenWidth * 0.85,
    height: sizes.screenHeight * 0.18,
    // marginVertical:sizes.screenHeight*0.04,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.03,
  },
  discountText:{
    color:colors.disabledBg3,
    marginLeft:sizes.screenWidth*0.03,
    marginBottom:sizes.screenHeight*0.01,

  },
  calendarImg:{
    position:'absolute',
    right:sizes.screenWidth*0.02,
    bottom:sizes.screenWidth*0.045,
    width:sizes.screenWidth*0.07,
    height:sizes.screenHeight*0.035,

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
    bottom:sizes.screenHeight*0.01
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
  },
  dayText:{
    fontSize:fontSize.extraLarge,
    textAlign:'center',
    top:sizes.screenHeight*0.003,
    color:colors.disabledBg3
  },
  bottomButtons:{
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  cancelBtn:{
    color:colors.gray,
    marginHorizontal:sizes.screenWidth*0.05,
  },
  okBtn:{
    color:colors.teal
  },
  timeFinal:{
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    bottom: sizes.screenHeight * 0.01,
    marginHorizontal:sizes.screenHeight*0.005,
    marginVertical:sizes.screenHeight*0.015
  },
  timeInputView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',

  },
  timeIcon:{
    height:sizes.screenHeight*0.03,
    width:sizes.screenWidth*0.06,
    marginHorizontal:sizes.screenWidth*0.01,
    bottom:sizes.screenHeight*0.012    
  },
  timeIconIOS:{
    resizeMode:"contain",
    width:sizes.screenWidth*0.07,
    height:sizes.screenHeight*0.03,
    marginHorizontal:sizes.screenWidth*0.01,
    bottom:sizes.screenHeight*0.012    
  },
  calendar:{
    backgroundColor:colors.white,
    width:sizes.screenWidth,
    alignSelf:'center',
    paddingVertical:sizes.screenHeight*0.03,
    position:'absolute',
    bottom:0,
    borderTopLeftRadius:sizes.screenWidth*0.06,
    borderTopRightRadius:sizes.screenWidth*0.06,
  },
  heading:{
    color:colors.black,
    marginHorizontal:sizes.screenWidth*0.04,
    fontWeight:'500',
    marginBottom:sizes.screenHeight*0.01
  },
  spaceBetween:{
    justifyContent:'space-between'
  },
  modalSection1:{
    backgroundColor:colors.bluishWhite,
    borderTopLeftRadius:sizes.screenWidth*0.06,
    borderTopRightRadius:sizes.screenWidth*0.06,
  },
  modalEventCreated:{
    backgroundColor:colors.white,
    width:sizes.screenWidth,
    alignSelf:'center',
    // paddingVertical:sizes.screenHeight*0.01,
    marginTop:sizes.screenHeight*0.73,
    borderTopLeftRadius:sizes.screenWidth*0.06,
    borderTopRightRadius:sizes.screenWidth*0.06,
    paddingBottom:sizes.screenHeight*0.02
  },
  congratsRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:sizes.screenHeight*0.03
  },
  headingCalendarModal:{
    color:colors.black,
    fontSize:fontSize.h5,
    fontWeight:'500',
    marginLeft:sizes.screenWidth*0.02
  },
  eventCreatedText:{
    alignSelf:'center',
    marginVertical:sizes.screenHeight*0.02,
    color:colors.black,
    fontSize:fontSize.medium,
    fontWeight:'500',
  }
});
