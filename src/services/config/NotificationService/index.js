import React from 'react';
import messaging from '@react-native-firebase/messaging';
import formatToJSON from '../FormatToJason';
import notifee from '@notifee/react-native';
import NavigationService from '../NavigationService';

// Function to request user permission for notifications
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

// Function to get the FCM token
const getFcmToken = async () => {
  try {
    // Register the device for remote messages (iOS only)
    if (Platform.OS === 'ios') {
      await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true);
    }
    // Get the FCM token
    const token = await messaging().getToken();
    console.log('Notification token Login=', token);
    return token;
  } catch (error) {
    console.log('Error in generating token:', error);
  }
};

async function onDisplayNotification(body, title) {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    // title: 'Notification Title',
    // body: 'Main body content of the notification',
    title: title,
    body: body,
    android: {
      channelId,
      // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });
}

export async function notificationListeners() {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Received FCM Background Message:', remoteMessage);
  });

  const unsubscribe = messaging().onMessage(async remoteMessage => {
    console.log('Received FCM Message in foreground:', remoteMessage);
    console.log(remoteMessage.notification.body);
    onDisplayNotification(
      remoteMessage.notification.body,
      remoteMessage.notification.title,
    );
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage,
    );
    const screen = 'Notification'; // default to Notification screen
    setTimeout(() => {
      NavigationService.navigate(screen, {data: remoteMessage.data});
    }, 2000);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage,
        );
        const screen = 'Notification'; // default to Notification screen
        setTimeout(() => {
          NavigationService.navigate(screen, {data: remoteMessage.data});
        }, 2000);
      }
    });

  return unsubscribe;
}
