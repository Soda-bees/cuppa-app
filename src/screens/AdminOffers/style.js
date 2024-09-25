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
    color:colors.black,
    borderRadius:sizes.screenWidth*0.3,
    paddingHorizontal:sizes.screenWidth*0.03
  },
  selectedBtn:{
    margin:sizes.screenWidth*0.02,
    color:colors.white,
    borderRadius:sizes.screenWidth*0.3,
    paddingHorizontal:sizes.screenWidth*0.03
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
  
  scrollViewContainer:{
    height:sizes.screenHeight*0.66,
    // backgroundColor:'red',
    // marginBottom:sizes.screenHeight*0.03
  },
  scrollViewContainerLarger:{
    height:sizes.screenHeight*0.72,
    // backgroundColor:'red',
    // marginBottom:sizes.screenHeight*0.03
  },
  offerContainer:{
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.85,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingVertical: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.03,
    marginVertical: sizes.screenHeight * 0.01,
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
    fontSize:fontSize.medium,
    fontWeight:'500'
  },
  coffeeimg:{
    width:sizes.screenWidth*0.4,
    height:sizes.screenHeight*0.12,
    resizeMode:'contain',
    right:sizes.screenWidth*0.03
  },
  discountContainer:{
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.85,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingVertical:0,
    borderRadius: sizes.screenWidth * 0.03,
    marginVertical: sizes.screenHeight * 0.01,
    alignSelf: 'center',
    // flexDirection:'row',
    justifyContent:'space-between',
    // alignItems:'center'
  },
  discountContainer1:{
    backgroundColor: colors.lightTeal,
    width: sizes.screenWidth * 0.85,
    paddingLeft: sizes.screenWidth * 0.05,
    // paddingVertical: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.03,
    // marginVertical: sizes.screenHeight * 0.01,
    alignSelf: 'center',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  h1:{
    color:colors.black,
    fontSize:fontSize.h3,
    fontWeight:'500',
    marginTop:sizes.screenHeight*0.03

  },
  h2:{
    color:colors.black,
    fontSize:fontSize.large,
    width:sizes.screenWidth*0.4,
    // marginTop:sizes.screenHeight*0.01,
    // bottom:sizes.screenHeight*0.01
    fontWeight:'500'
  },
  h3:{
    color:colors.black,
    fontSize:fontSize.medium,
    marginBottom:sizes.screenHeight*0.03,
  },
  discountTextContainer:{
    marginLeft:sizes.screenWidth*0.03,

  },
  dot:{
    width:sizes.screenWidth*0.015,
    height:sizes.screenHeight*0.007,
    backgroundColor:colors.black,
    borderRadius:sizes.screenWidth*0.1,
    marginRight:sizes.screenWidth*0.02
  },
  listContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:sizes.screenWidth*0.02
  },
  dateRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:sizes.screenHeight*0.01,
    marginHorizontal:sizes.screenWidth*0.02
  },
  h4:{
    color:colors.black,
    fontWeight:'500'
  },
  date:{
    color:colors.
    disabledBg3,
    fontSize:fontSize.small
  },
  listContainerText:{
    color:colors.black
  },
  list:{
    marginBottom:sizes.screenWidth*0.03
  },
  BottomBtn:{
    // marginTop:sizes.screenWidth*0.02
  },
  BottomBtnIOS:{
    bottom:sizes.screenWidth*0.06
  },


});
