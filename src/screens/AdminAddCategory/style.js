import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";


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
      inputFieldIOS: {
        color: colors.black,
        fontSize: fontSize.medium,
        fontWeight: '500',
        padding: 0,
        paddingHorizontal: sizes.screenWidth * 0.01,
        paddingBottom: sizes.screenWidth * 0.015,
        height:sizes.screenHeight * 0.05
      },
      
      toggleBtn:{
        height:sizes.screenHeight*0.03,
        width:sizes.screenWidth*0.108,
      },
      toggleBtnIOS:{
        resizeMode:"contain",
        width:sizes.screenWidth * 0.1,
        height:sizes.screenHeight * 0.03,
      },
      activeMenu:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:sizes.screenHeight*0.01
      },
      addBtn:{
        width:sizes.screenWidth*0.03,
        height:sizes.screenHeight*0.015,
      },
      linearAddBtn:{
        flexDirection:'row',
        width:sizes.screenWidth*0.17,
        alignItems:'center',
        justifyContent:'space-evenly',
        padding:sizes.screenWidth*0.015,
        borderRadius:sizes.screenWidth*0.04,
        // marginHorizontal:sizes.screenWidth*0.01
        marginTop:sizes.screenHeight*0.01
    
      },
      linearBtnText:{
        color:colors.white,
      },
      addItems:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:sizes.screenWidth*0.03,
        alignItems:'center',
        marginVertical:sizes.screenHeight*0.01
      },
      BottomBtn:{
        position:'absolute',
        bottom:sizes.screenHeight*0.05,
        alignSelf:'center',
      },
      BottomBtnIOS:{
        position:'absolute',
        bottom:sizes.screenHeight*0.11,
        alignSelf:'center',
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
        alignSelf:'center',
        
      },
      divider:{
        width:sizes.screenWidth*0.15,
        backgroundColor:colors.disabledBg,
        height:sizes.screenHeight*0.005,
        marginTop:sizes.screenHeight*0.01,
        alignSelf:'center'
      },
      divider2:{
        width:sizes.screenWidth*0.8,
        backgroundColor:colors.disabledBg,
        height:sizes.screenHeight*0.002,
        // marginTop:sizes.screenHeight*0.01,
        alignSelf:'center'
      },
      modalHeading:{
        color:colors.black,
        marginLeft:sizes.screenWidth*0.07,
        fontSize:fontSize.large,
        marginTop:sizes.screenHeight*0.02,
        fontWeight:'500',
      },
      itemContainer:{
        backgroundColor:colors.bluishWhite,
        width:sizes.screenWidth*0.85,
        alignSelf:'center',
        marginTop:sizes.screenHeight*0.02,
        borderTopLeftRadius:sizes.screenWidth*0.03,
        borderTopRightRadius:sizes.screenWidth*0.03
      },
      modalParent:{
        width:sizes.screenWidth,
        height:sizes.screenHeight,
        alignSelf:'center',
        // backgroundColor:'red',
        justifyContent:'flex-end',
        // backgroundColor:'red',
        marginTop:sizes.screenHeight*0.4,

      },
      itemIcon:{
        width:sizes.screenWidth*0.12,
        height:sizes.screenHeight*0.06,
        marginRight:sizes.screenWidth*0.02
      },
      rowspacebetween:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:sizes.screenHeight*0.01,
        marginHorizontal:sizes.screenWidth*0.025
      },
      addBtnModal:{
        alignSelf:'center',
        marginRight:sizes.screenWidth*0.03,
        backgroundColor:colors.white,
        color:colors.black,
        padding:sizes.screenWidth*0.015,
        borderRadius:sizes.screenWidth*0.05,
        paddingHorizontal:sizes.screenWidth*0.045,
        fontWeight:'500'
      },
      addBtnContainer:{
        alignSelf:'center'
      },
      itemInfo:{
        alignSelf:'center',
        marginLeft:sizes.screenWidth*0.01
      },
      itemName:{
        color:colors.black,
        fontSize:fontSize.large
      },
      itemPrice:{
        color:colors.greenIcon
      },
      scrollView:{
        width:sizes.screenWidth*1,
        alignSelf:'center',
        // height:sizes.screenHeight,
        // marginTop:sizes.screenHeight*0.4,
        // backgroundColor:'red'
      },
      scrollViewcontainer:{
        // height:sizes.screenHeight,

      }

      
})