import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    alignItems: 'center',
    zIndex:-1
  },
  inputView: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.04,
    marginBottom: sizes.screenHeight * 0.01,
    zIndex:-2
  },
  inputView2: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.9,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.04,
    marginBottom: sizes.screenHeight * 0.01,
    zIndex:1
  },
  inputTitle: {
    fontFamily: 'Satoshi-Medium',
    marginHorizontal: sizes.screenWidth * 0.01,
    color: colors.disabledBg2,
  },
  inputField: {
    fontFamily: 'Satoshi-Bold',
    color: colors.black,
    fontSize: fontSize.medium,
    height: sizes.screenHeight * 0.06,
  },
  rewardView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.04,
    marginVertical: sizes.screenWidth * 0.03,
    // marginHorizontal:sizes.screenWidth*0.02,
    paddingHorizontal: sizes.screenHeight * 0.01,
    backgroundColor: colors.white,
    borderWidth: sizes.screenWidth * 0.001,
    borderColor: colors.gray,
    borderRadius: sizes.screenWidth * 0.01,
    zIndex:1,
  },
  rewardViewPressed:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.04,
    marginVertical: sizes.screenWidth * 0.03,
    // marginHorizontal:sizes.screenWidth*0.02,
    paddingHorizontal: sizes.screenHeight * 0.01,
    backgroundColor: colors.white,
    borderWidth: sizes.screenWidth * 0.001,
    borderBottomWidth:0,
    borderColor: colors.gray,
    borderRadius: sizes.screenWidth * 0.01,
    zIndex:1,

  },
  orderInput: {
    // height:sizes.screenHeight*0.04,
    padding: 0,
    // top:sizes.screenHeight*0.01
    alignSelf: 'center',
    textAlign: 'right',
    // backgroundColor:'red'
    width: sizes.screenWidth * 0.14,
    color:colors.black
  },
  orderInputTitle: {
    padding: 0,
    color:colors.disabledBg3
  },
  rewardInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  downBtn: {
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.01,
  },
  upbtn: {
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.01,
    transform: [{rotate: '180deg'}],
  },
  marginBot:{
    marginBottom:sizes.screenHeight*0.03
  },
  coffeeDropdownContainer:{
    flexDirection:'column',
    position:'absolute',
    top:sizes.screenHeight*0.039,
    // top:sizes.screenHeight*0.055,
    // left:sizes.screenWidth*0.44,
    backgroundColor: colors.white,
    borderWidth: sizes.screenWidth * 0.001,
    borderColor: colors.gray,
    borderTopWidth:0
  },
  coffeeDropdown: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.04,
    paddingHorizontal: sizes.screenHeight * 0.01,
    // backgroundColor: colors.white,
    // borderWidth: sizes.screenWidth * 0.001,
    // borderColor: colors.gray,
    zIndex:1
  },
  coffeeText:{
    fontWeight:'500',
    color:colors.black
  },
  btnMargin:{
    marginTop:sizes.screenHeight*0.39
  },
  btnMarginIOS:{
    marginTop:sizes.screenHeight*0.35
  }

});
