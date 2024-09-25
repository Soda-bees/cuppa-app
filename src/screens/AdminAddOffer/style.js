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
    resizeMode:'contain'
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
    paddingHorizontal:sizes.screenWidth*0.02,
    color:colors.black
  },
  sizesInputFieldIOS: {
    backgroundColor: colors.white,
    padding: 0,
    width: sizes.screenWidth * 0.32,
    borderRadius: sizes.screenWidth * 0.01,
    borderWidth: sizes.screenWidth * 0.002,
    borderColor: colors.disabledBg,
    marginLeft: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
    paddingHorizontal:sizes.screenWidth*0.02,
    color:colors.black,
    height:sizes.screenHeight * 0.035
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
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.108,
    marginRight:sizes.screenWidth*0.02,
    resizeMode:"contain"
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
    resizeMode:'contain'
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
  calendar:{
    position:'absolute',
    right:sizes.screenWidth*0.02,
    bottom:sizes.screenWidth*0.045,
    width:sizes.screenWidth*0.07,
    height:sizes.screenHeight*0.035,

  }
});
