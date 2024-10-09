import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IntroSlider from '../../screens/IntroSlider';
import AdminSettings from '../../screens/AdminSettings';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import SendOTP from '../../screens/SendOTP';
import CustomerPersonality from '../../screens/CustomerPersonality';
import ThankYou from '../../screens/ThankYou';
import QrCode from '../../screens/QrCode';
import EnableYourLocation from '../../screens/EnableYourLocation';
import Account from '../../screens/Account';
import EditProfile from '../../screens/EditProfile';
import Notifications from '../../screens/Notifications';
import Privacy from '../../screens/Privacy';
import Security from '../../screens/Security';
import ChangePassword from '../../screens/ChangePassword';
import MapVieww from '../../screens/MapVieww';
import AboutCafe from '../../screens/AboutCafe';
import Menu from '../../screens/Menu';
import AddToCart from '../../screens/AddToCart';
import OrderSummary from '../../screens/OrderSummary';
import Checkout from '../../screens/Checkout';
import OrderPlaced from '../../screens/OrderPlaced';
import Event from '../../screens/Event';
import Notification from '../../screens/Notification';
import Favourites from '../../screens/Favourites';
import ClaimRewards from '../../screens/ClaimRewards';
import Rewards from '../../screens/Rewards';
import Subscription from '../../screens/Subscription';
import MembershipCheckout from '../../screens/MembershipCheckout';
import RewardsHistory from '../../screens/RewardsHistory';
import AdminTabNavigation from './AdminTabNavigation';
import UserTabNavigation from './UserTabNavigation';
import ForgotPassword from '../../screens/ForgotPassword';
import ResetPassword from '../../screens/ResetPassword';
import AddCard from '../../screens/AddCard';
import UploadPhoto from '../../screens/UploadPhoto';
import EmailVerification from '../../screens/EmailVerification';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken, setAuthToken} from '../../store/authSlice';
import AllCafes from '../../screens/AllCafes';
import AllDeals from '../../screens/AllDeals';
import AllEvents from '../../screens/AllEvents';
import OrderDetails from '../../screens/OrderDetails';
import Review from '../../screens/Review';
import CardDetails from '../../screens/CardDetails';
import EditCard from '../../screens/EditCard';
import CafeDeals from '../../screens/CafeDeals';
import DealOrderSummary from '../../screens/DealOrderSummary';
import DealCheckout from '../../screens/DealCheckout';
import NavigationService from './NavigationService';
import AdminSignin from '../../screens/AdminSignin';
import AdminScanQr from '../../screens/AdminScanQr';
import AdminQrMain from '../../screens/AdmingQrMain';
import AvailableRewards from '../../screens/AvailableRewards';
import Scanner from '../../screens/Scanner';
import {selectRole, setRole} from '../../store/role';
import Wallet from '../../screens/Wallet';

const Stack = createStackNavigator();
export default function MainNavigator() {
  const authToken = useSelector(selectAuthToken);
  const role = useSelector(selectRole);
  console.log(role);
  console.log('auth token redux-=-=', authToken);
  return (
    <NavigationContainer
      ref={ref => NavigationService.setTopLevelNavigator(ref)}>
      {!authToken ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="IntroSlider" component={IntroSlider} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="SendOTP" component={SendOTP} />
          <Stack.Screen
            name="EnableYourLocation"
            component={EnableYourLocation}
          />
          <Stack.Screen
            name="CustomerPersonality"
            component={CustomerPersonality}
          />
          <Stack.Screen name="ThankYou" component={ThankYou} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen
            name="EmailVerification"
            component={EmailVerification}
          />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="QrCode" component={QrCode} />
          <Stack.Screen name="AdminSignin" component={AdminSignin} />
        </Stack.Navigator>
      ) : role === 'user' ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="TabNavigation" component={UserTabNavigation} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          {/* <Stack.Screen
      name="EmailVerification"
      component={EmailVerification}
    /> */}
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="Privacy" component={Privacy} />
          <Stack.Screen name="Security" component={Security} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="MapVieww" component={MapVieww} />
          <Stack.Screen name="AboutCafe" component={AboutCafe} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="AddToCart" component={AddToCart} />
          <Stack.Screen name="OrderSummary" component={OrderSummary} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
          <Stack.Screen name="Event" component={Event} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Favourites" component={Favourites} />
          <Stack.Screen name="ClaimRewards" component={ClaimRewards} />
          <Stack.Screen name="QrCode" component={QrCode} />
          <Stack.Screen name="Rewards" component={Rewards} />
          <Stack.Screen name="Subscription" component={Subscription} />
          <Stack.Screen
            name="MembershipCheckout"
            component={MembershipCheckout}
          />
          <Stack.Screen name="RewardsHistory" component={RewardsHistory} />
          <Stack.Screen name="AllCafes" component={AllCafes} />
          <Stack.Screen name="AllDeals" component={AllDeals} />
          <Stack.Screen name="AllEvents" component={AllEvents} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="Review" component={Review} />
          <Stack.Screen name="CardDetails" component={CardDetails} />
          <Stack.Screen name="EditCard" component={EditCard} />
          <Stack.Screen name="CafeDeals" component={CafeDeals} />
          <Stack.Screen name="DealOrderSummary" component={DealOrderSummary} />
          <Stack.Screen name="DealCheckout" component={DealCheckout} />
          <Stack.Screen name="Wallet" component={Wallet} />

        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AdminScanQr" component={AdminScanQr} />
          <Stack.Screen name="AdminQrMain" component={AdminQrMain} />
          <Stack.Screen name="AvailableRewards" component={AvailableRewards} />
          <Stack.Screen name="AdminSettings" component={AdminSettings} />
          <Stack.Screen name="Scanner" component={Scanner} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

// const AuthStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="IntroSlider" component={IntroSlider} />
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Signup" component={Signup} />
//       <Stack.Screen name="SendOTP" component={SendOTP} />
//       <Stack.Screen name="EnableYourLocation" component={EnableYourLocation} />
//       <Stack.Screen
//         name="CustomerPersonality"
//         component={CustomerPersonality}
//       />
//       <Stack.Screen name="ThankYou" component={ThankYou} />
//       <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//       <Stack.Screen name="EmailVerification" component={EmailVerification} />
//       <Stack.Screen name="ResetPassword" component={ResetPassword} />
//       <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
//       <Stack.Screen name="ChangePassword" component={ChangePassword} />
//       <Stack.Screen name="QrCode" component={QrCode} />
//       <Stack.Screen name="AdminSignin" component={AdminSignin} />
//       <Stack.Screen name="AdminScanQr" component={AdminScanQr} />
//       <Stack.Screen name="AdminQrMain" component={AdminQrMain} />
//       <Stack.Screen name="AvailableRewards" component={AvailableRewards} />
//       <Stack.Screen name="AdminSettings" component={AdminSettings} />
//       <Stack.Screen name="Scanner" component={Scanner} />
//     </Stack.Navigator>
//   );
// };

// const AppStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="TabNavigation" component={UserTabNavigation} />
//       <Stack.Screen name="IntroSlider" component={IntroSlider} />
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Signup" component={Signup} />
//       <Stack.Screen name="SendOTP" component={SendOTP} />
//       <Stack.Screen name="EnableYourLocation" component={EnableYourLocation} />
//       <Stack.Screen
//         name="CustomerPersonality"
//         component={CustomerPersonality}
//       />
//       <Stack.Screen name="ThankYou" component={ThankYou} />
//       <Stack.Screen name="Account" component={Account} />
//       <Stack.Screen name="EditProfile" component={EditProfile} />
//       <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//       <Stack.Screen name="EmailVerification" component={EmailVerification} />
//       <Stack.Screen name="AddCard" component={AddCard} />
//       <Stack.Screen name="Privacy" component={Privacy} />
//       <Stack.Screen name="Security" component={Security} />
//       <Stack.Screen name="ChangePassword" component={ChangePassword} />
//       <Stack.Screen name="MapVieww" component={MapVieww} />
//       <Stack.Screen name="AboutCafe" component={AboutCafe} />
//       <Stack.Screen name="Menu" component={Menu} />
//       <Stack.Screen name="AddToCart" component={AddToCart} />
//       <Stack.Screen name="OrderSummary" component={OrderSummary} />
//       <Stack.Screen name="Checkout" component={Checkout} />
//       <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
//       <Stack.Screen name="Event" component={Event} />
//       <Stack.Screen name="Notification" component={Notification} />
//       <Stack.Screen name="Favourites" component={Favourites} />
//       <Stack.Screen name="ClaimRewards" component={ClaimRewards} />
//       <Stack.Screen name="QrCode" component={QrCode} />
//       <Stack.Screen name="Rewards" component={Rewards} />
//       <Stack.Screen name="Subscription" component={Subscription} />
//       <Stack.Screen name="MembershipCheckout" component={MembershipCheckout} />
//       <Stack.Screen name="RewardsHistory" component={RewardsHistory} />
//       <Stack.Screen name="AllCafes" component={AllCafes} />
//       <Stack.Screen name="AllDeals" component={AllDeals} />
//       <Stack.Screen name="AllEvents" component={AllEvents} />
//       <Stack.Screen name="OrderDetails" component={OrderDetails} />
//       <Stack.Screen name="Review" component={Review} />
//       <Stack.Screen name="CardDetails" component={CardDetails} />
//       <Stack.Screen name="EditCard" component={EditCard} />
//       <Stack.Screen name="CafeDeals" component={CafeDeals} />
//       <Stack.Screen name="DealOrderSummary" component={DealOrderSummary} />
//       <Stack.Screen name="DealCheckout" component={DealCheckout} />
//     </Stack.Navigator>
//   );
// };
