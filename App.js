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

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
    LogBox.ignoreAllLogs();
  }, []);

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}
