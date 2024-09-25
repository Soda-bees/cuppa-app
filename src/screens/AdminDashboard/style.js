import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  orderInfoRow: {
    flexDirection: 'row',
    marginVertical: sizes.screenHeight * 0.02,
  },
  orderInfoContainer: {
    backgroundColor: colors.bluishWhite,
    padding: sizes.screenWidth * 0.01,
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginHorizontal: sizes.screenWidth * 0.015,
    borderRadius: sizes.screenWidth * 0.03,
  },
  orderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.37,
    justifyContent: 'space-between',
  },
  orderAmount: {
    color: colors.black,
    fontSize: fontSize.h3,
  },
  cupImg: {
    width: sizes.screenWidth * 0.075,
    height: sizes.screenHeight * 0.035,
  },
  cupImgIOS: {
    resizeMode:'contain',
    width: sizes.screenWidth * 0.08,
    height: sizes.screenHeight * 0.035,
  },
  cupImg2: {
    width: sizes.screenWidth * 0.094,
    height: sizes.screenHeight * 0.035,
    top: sizes.screenHeight * 0.004,
  },
  cupImg2IOS: {
    resizeMode:'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.035,
    top: sizes.screenHeight * 0.004,
  },
  infoBottomText: {
    textAlign: 'right',
    color: colors.black,
  },
  heading: {
    fontSize:fontSize.extraLarge,
    color:colors.black,
    alignSelf:'flex-start',
    marginLeft:sizes.screenWidth*0.02,
    fontWeight:'500',
  },
  orderContainer:{
    backgroundColor:colors.bluishWhite,
    flexDirection:'row',
    width:sizes.screenWidth*0.9,
    marginVertical:sizes.screenHeight*0.01,
    justifyContent:'space-between',
    alignItems:'center',
    padding:sizes.screenWidth*0.03,
    borderRadius:sizes.screenWidth*0.02,
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
  chart:{
    // right:sizes.screenWidth*0.03,
    backgroundColor:colors.bluishWhite,
    padding:sizes.screenWidth*0.03,
    borderRadius:sizes.screenWidth*0.03,
    marginVertical:sizes.screenWidth*0.03,
    width:sizes.screenWidth*0.9
  },
  chartHeading:{
    flexDirection:'row',
    alignSelf:'flex-start',
    width:sizes.screenWidth*0.9,
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:sizes.screenWidth*0.01      
  },
  settingsBtn2:{
    width:sizes.screenWidth*0.07,
    height:sizes.screenHeight*0.035
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
    borderRadius:sizes.screenWidth * 0.03,
    overflow:'hidden'
  },
  scroll:{
    marginBottom:sizes.screenHeight*0.13,
    marginTop:sizes.screenHeight*0.025,

  },
  ratingWindow:{
    backgroundColor:colors.bluishWhite,
    width:sizes.screenWidth*0.9,
    alignSelf:'center',
    borderRadius:sizes.screenWidth*0.03,
    paddingHorizontal:sizes.screenWidth*0.05,
    paddingVertical:sizes.screenWidth*0.05,
    marginVertical:sizes.screenHeight*0.015,
  },
  ratingWindowHeader:{
    color:colors.black,
    fontSize:fontSize.large
  },
  ratingWindowParent:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  ratingSubsection:{
    width:sizes.screenWidth*0.35,
    // marginHorizontal:sizes.screenWidth*0.05,
  },
  ratingProgressView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  avgRating:{
    fontSize:fontSize.h2,
    marginTop:sizes.screenHeight*0.01,
    color:colors.black,
  },
  avgRatingStars:{
    width:sizes.screenWidth*0.25,
    // marginBottom
    marginBottom:sizes.screenHeight*0.01,
  },
  allRatings:{
    color:colors.black
  },
  star:{
    width:sizes.screenWidth*0.04,
    height:sizes.screenHeight*0.02
  },
  chartSales:{
    flexDirection:'row'
  },
  salesTitle:{
    color:colors.black,
    fontSize:fontSize.extraLarge,
    marginLeft:sizes.screenWidth*0.015,
    marginBottom:sizes.screenHeight*0.01
  },
  salesAmount:{
    marginLeft:sizes.screenWidth*0.3,
    color:colors.black,
    fontSize:fontSize.extraLarge,
    fontWeight:'500'
  },
  profit:{
    color:colors.greenIcon,
    marginHorizontal:sizes.screenWidth*0.01
  },
  indicatorImg:{
    width:sizes.screenWidth*0.04,
    height:sizes.screenHeight*0.015,
    marginVertical:sizes.screenHeight*0.004,
    transform: [{ scaleY: -1}],
  },
  outletDropDown:{
    flexDirection:'row',
    borderWidth:sizes.screenWidth*0.002,
    borderRadius:sizes.screenWidth*0.03,
    padding:sizes.screenWidth*0.015,
    borderColor:colors.disabledBg,
    alignItems:'center',
    position: 'absolute',
    left: sizes.screenWidth*0.5,
    top:sizes.screenHeight*0.017,
  },
  outletDropDownIOS:{
    flexDirection:'row',
    borderWidth:sizes.screenWidth*0.002,
    borderRadius:sizes.screenWidth*0.03,
    padding:sizes.screenWidth*0.015,
    borderColor:colors.disabledBg,
    alignItems:'center',
    position: 'absolute',
    left: sizes.screenWidth*0.5,
    top:sizes.screenHeight*0.017,
    width:sizes.screenWidth * 0.35,
    justifyContent:'space-between'
  },
  greenbtnOutlet:{
    width:sizes.screenWidth*0.05,
    height:sizes.screenHeight*0.03,
    marginLeft:sizes.screenWidth*0.12,
    transform: [{ rotate: '180deg' }]
  },
  outletHeader:{
    fontSize:fontSize.small,
    color:colors.disabledBg3
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
    top:sizes.screenHeight*0.017,
  },
  droppedView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:sizes.screenHeight*0.01
    // width:sizes.screenWidth*0.3
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
    marginTop:sizes.screenHeight*0.01
  },
  linearAddBtnIOS:{
    flexDirection:'row',
    width:sizes.screenWidth*0.17,
    alignItems:'center',
    justifyContent:'space-evenly',
    padding:sizes.screenWidth*0.012,
    borderRadius:sizes.screenWidth*0.03,
    // marginHorizontal:sizes.screenWidth*0.01
    marginTop:sizes.screenHeight*0.01
  },

  linearBtnText:{
    color:colors.white,
  },
  outletDivider:{
    width:sizes.screenWidth*0.25,
    borderWidth:sizes.screenWidth*0.001,
    borderColor:colors.disabledBg,
    alignSelf:'center',
    marginVertical:sizes.screenHeight*0.01,

  },
  rewardsSection:{
    backgroundColor:colors.bluishWhite,
    width:sizes.screenWidth*0.9,
    alignSelf:'center',
    borderRadius:sizes.screenWidth*0.03,
    paddingHorizontal:sizes.screenWidth*0.05,
    paddingVertical:sizes.screenWidth*0.05,
    marginVertical:sizes.screenHeight*0.015,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  rewardsSectionIOS:{
    backgroundColor:colors.bluishWhite,
    width:sizes.screenWidth*0.9,
    alignSelf:'center',
    borderRadius:sizes.screenWidth*0.03,
    paddingHorizontal:sizes.screenWidth*0.05,
    paddingVertical:sizes.screenWidth*0.05,
    marginVertical:sizes.screenHeight*0.015,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:sizes.screenHeight * 0.03
  },
  rewardsText:{
    fontSize:fontSize.h5,
    color:colors.black
    // marginVertical:sizes.screenHeight*0.05
  },

  marginBottom:{
    height:sizes.screenHeight * 0.05
  },

});
