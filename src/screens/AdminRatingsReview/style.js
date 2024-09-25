import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    paddingHorizontal:sizes.screenWidth*0.05
  },
  ratingWindow: {
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.03,
    paddingHorizontal: sizes.screenWidth * 0.05,
    paddingVertical: sizes.screenWidth * 0.05,
    marginVertical: sizes.screenHeight * 0.02,
  },
  ratingWindowHeader: {
    color: colors.black,
    fontSize: fontSize.large,
  },
  ratingWindowParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingSubsection: {
    width: sizes.screenWidth * 0.35,
    // marginHorizontal:sizes.screenWidth*0.05,
  },
  ratingProgressView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avgRating: {
    fontSize: fontSize.h2,
    marginTop: sizes.screenHeight * 0.01,
    color: colors.black,
  },
  avgRatingStars: {
    width: sizes.screenWidth * 0.25,
    // marginBottom
    marginBottom: sizes.screenHeight * 0.01,
  },
  allRatings: {
    color: colors.disabledBg3,
  },
  star: {
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.02,
  },
  heading: {
    fontSize:fontSize.extraLarge,
    color:colors.black,
    alignSelf:'flex-start',
    // marginLeft:sizes.screenWidth*0.05,
    fontWeight:'500',
    marginBottom:sizes.screenHeight*0.01
  },
  nameContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:sizes.screenHeight*0.005
  },
  reviewContainer:{
    backgroundColor: colors.bluishWhite,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.03,
    paddingHorizontal: sizes.screenWidth * 0.05,
    paddingVertical: sizes.screenWidth * 0.05,
    marginVertical: sizes.screenHeight * 0.01,
  },
  replyImg:{
    width:sizes.screenWidth*0.06,
    height:sizes.screenHeight*0.03
  },
  ratingContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  dot:{
    width:sizes.screenWidth*0.01,
    height:sizes.screenHeight*0.005,
    backgroundColor:colors.disabledBg3,
    marginHorizontal:sizes.screenWidth*0.02,
    bottom:sizes.screenHeight*0.004
  },
  ratingTime:{
    bottom:sizes.screenHeight*0.005,
    color:colors.disabledBg2
  },
  reviewText:{
    color:colors.black
  },
  reviewerName:{
    color:colors.black,
    fontSize:fontSize.medium,
    fontWeight:"500"
  },
  replyContainer:{
    flexDirection:'row',
    alignItems:'center',
    borderRadius:sizes.screenWidth*0.03,
    marginTop:sizes.screenHeight*0.01
  },
  arrowImg:{
    width:sizes.screenWidth*0.04,
    height:sizes.screenHeight*0.018,

  },
  replyInput:{
    // height:sizes.screenWidth*0.1,
    width:sizes.screenWidth*0.7,
    marginLeft:sizes.screenWidth*0.02,
    color:colors.white,
  },
  replyInputIOS:{
    // height:sizes.screenWidth*0.1,
    width:sizes.screenWidth*0.7,
    marginLeft:sizes.screenWidth*0.02,
    color:colors.white,
    height:sizes.screenWidth * 0.09,
    paddingTop:sizes.screenHeight * 0.01
  },
  ScrollView:{
    marginBottom:sizes.screenHeight*0.04
  },
});
