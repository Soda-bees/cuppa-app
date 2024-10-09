import React, {useEffect, useState} from 'react';
import {
  LogBox,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Text,
  Linking,
  Alert,
} from 'react-native';
import MainNavigator from './src/services/config/navigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import Geolocation from '@react-native-community/geolocation';
import socket from './src/services/config/Socket';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
    LogBox.ignoreAllLogs();
  }, []);

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  const PUBLISH_KEY = 'pk_test_51Q0i3SFWqbkEzf6rhMiTwrzirJFjPqfNVrorak6wVpD9GazCAsvC2GHrE2KSpTIdN06l3428lIyS1KmGxzcMvhvu00by6KVvm9'

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StripeProvider publishableKey={PUBLISH_KEY}>
        <MainNavigator />
        </StripeProvider>
      </PersistGate>
    </Provider>
  );
}
