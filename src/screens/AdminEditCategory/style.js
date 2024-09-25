import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    paddingHorizontal: sizes.screenWidth * 0.05,
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
  toggleBtn: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.108,
  },
  toggleBtnIOS: {
    resizeMode:'contain',
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.108,
  },
  activeMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: sizes.screenHeight * 0.01,
  },
  addBtn: {
    width: sizes.screenWidth * 0.03,
    height: sizes.screenHeight * 0.015,
  },
  linearAddBtn: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.17,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: sizes.screenWidth * 0.015,
    borderRadius: sizes.screenWidth * 0.04,
    // marginHorizontal:sizes.screenWidth*0.01
    marginTop: sizes.screenHeight * 0.01,
  },
  linearBtnText: {
    color: colors.white,
  },
  addItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: sizes.screenWidth * 0.03,
    alignItems: 'center',
    marginVertical: sizes.screenHeight * 0.01,
  },
  BottomBtn: {
    position: 'absolute',
    top: sizes.screenHeight * 0.88,
    alignSelf: 'center',
  },
  BottomBtnIOS: {
    position: 'absolute',
    // top: sizes.screenHeight * 0.9,
    bottom: sizes.screenHeight * 0.11,
    alignSelf: 'center',
  },
  modalContainer: {
    width: sizes.screenWidth,
    // height:sizes.screenHeight*0.3,
    paddingBottom: sizes.screenHeight * 0.02,
    backgroundColor: colors.white,
    // alignSelf:'flex-end',
    // bottom:sizes.screenHeight*0,
    borderTopLeftRadius: sizes.screenWidth * 0.04,
    borderTopEndRadius: sizes.screenWidth * 0.04,
    alignSelf: 'center',
  },
  heading: {
    fontSize: fontSize.extraLarge,
    color: colors.black,
    alignSelf: 'flex-start',
    // marginLeft: sizes.screenWidth * 0.05,
    fontWeight: '500',
  },
  chartHeading: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: sizes.screenWidth * 0.03,
  },
  viewBtn: {
    backgroundColor: colors.bluishWhite,
    color: colors.darkTeal,
    paddingVertical: sizes.screenWidth * 0.015,
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.05,
  },
  viewBtnIOS: {
    backgroundColor: colors.bluishWhite,
    color: colors.darkTeal,
    paddingVertical: sizes.screenWidth * 0.015,
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.04,
    overflow:'hidden'
  },
  itemsCenter: {
    alignItems: 'center',
  },
  greenBtnDown: {
    transform: [{rotate: '180deg'}],
  },
  
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: sizes.screenHeight * 0.01,
    zIndex:1
    // backgroundColor:colors.red
  },
  itemIcon: {
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.06,
    marginRight: sizes.screenWidth * 0.02,
  },
  itemText: {
    color: colors.black,
    fontSize: fontSize.extraLarge,
  },
  itemPrice: {
    color: colors.greenIcon,
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
  // divider: {
  //   width: sizes.screenWidth * 0.15,
  //   backgroundColor: colors.disabledBg,
  //   height: sizes.screenHeight * 0.005,
  //   marginTop: sizes.screenHeight * 0.01,
  //   alignSelf: 'center',
  // },

  divider: {
    width: sizes.screenWidth * 0.88,
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.002,
    // marginTop:sizes.screenHeight*0.01,
    alignSelf: 'center',
    marginVertical: sizes.screenHeight * 0.003,
  },
  ScrollView: {
    // height:sizes.screenHeight*0.7
    marginBottom: sizes.screenHeight * 0.13,
  },
  outletDropped2: {
    backgroundColor: colors.bluishWhite,
    padding: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    borderWidth: sizes.screenWidth * 0.003,
    borderColor: colors.disabledBg,
    width: sizes.screenWidth * 0.35,
    position: 'absolute',
    zIndex: 1,
    left: sizes.screenWidth * 0.5,
    top: sizes.screenHeight * 0.06,
  },
  itemsCenter: {
    alignItems: 'center',
  },
  spacebetween: {
    justifyContent: 'flex-start',
  },
  basicIconL:{
    width:sizes.screenWidth*0.06,
    height:sizes.screenHeight*0.03,
  },
  optionText:{
    color:colors.black,
    fontSize:fontSize.medium,
    marginLeft:sizes.screenWidth*0.01,
  },
  outletDivider2:{
    width:sizes.screenWidth*0.25,
    borderWidth:sizes.screenWidth*0.002,
    borderColor:colors.disabledBg,
    alignSelf:'center',
    marginVertical:sizes.screenHeight*0.01,
  },

  margin:{
    marginBottom:sizes.screenHeight * 0.06
  },
 
});
