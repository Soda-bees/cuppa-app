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
    marginTop: sizes.screenHeight * 0.02,
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
    width:sizes.screenWidth*0.5
  },
  inputFieldIOS: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    padding: 0,
    paddingHorizontal: sizes.screenWidth * 0.01,
    paddingBottom: sizes.screenWidth * 0.015,
    width:sizes.screenWidth*0.5,
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
    marginRight:sizes.screenWidth*-0.03
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
  
});
