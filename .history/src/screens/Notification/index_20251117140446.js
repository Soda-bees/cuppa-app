import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  PermissionsAndroid,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserData, setUserData} from '../../store/userDetails';
import {formatDistanceToNow, toDate} from 'date-fns';
import {notificationStatus, signIn} from '../../services/config/API';
import {selectAuthToken} from '../../store/authSlice';
import {
  requestUserPermission,
  notificationListeners,
} from '../../services/config/NotificationService';
import {sizes} from '../../services';

export default function Notification({navigation}) {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const token = useSelector(selectAuthToken);

  console.log(userData.notifications);

  const [notification, setNotification] = useState(
    userData.notifications ? [...userData.notifications].reverse() : [],
  );

  const formatTimeAgo = createdAt => {
    const currentDate = new Date();
    const timestamp = new Date(createdAt);
    const timeDifference = Math.abs(currentDate - timestamp);

    const minutes = Math.floor(timeDifference / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) {
      return `${minutes}m ago`;
    } else if (hours < 24) {
      return `${hours}h ago`;
    } else {
      return `${days}d ago`;
    }
  };

  const handleNotificationStatus = async () => {
    try {
      const response = await notificationStatus(token);
      console.log(response.data.updatedUser.notifications);
      dispatch(setUserData(response.data.updatedUser));
    } catch (error) {}
  };

  useEffect(() => {
    handleNotificationStatus();
    notificationPermission();
  }, []);
  const notificationPermission = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      )
        .then(res => {
          console.log('res===>', res);
          if (!!res && res === 'granted') {
            requestUserPermission();
            notificationListeners();
          }
          notificationListeners();
        })
        .catch(error => {
          console.log('error in get permission in app.js');
        });
    } else {
    }
  };

  return (
    <SafeAreaView
      style={styles.mainContainer}
      edges={Platform.OS === 'ios' ? ['top'] : ['top', 'bottom']}>
      <View>
        <View style={styles.headerContainer}>
          <Header title={'Notifications'} />
        </View>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={
              Platform.OS == 'ios' && {marginBottom: sizes.screenHeight * 0.1}
            }>
            {notification.length === 0 ? (
              <Text style={styles.noFavoritesText}>
                You don't have any notifications yet!
              </Text>
            ) : (
              <>
                <FlatList
                  data={notification}
                  renderItem={({item, index}) => (
                    <View style={styles.notificationContainer}>
                      <Image
                        style={styles.notificationImg}
                        source={images.notificationImg}
                      />
                      <View style={styles.notificationTextContainer}>
                        <View style={styles.row}>
                          <Text style={styles.title}>{item.title}</Text>
                          <Text style={styles.time}>
                            {formatTimeAgo(item.createdAt)}
                          </Text>
                        </View>
                        <Text style={styles.description}>{item.body}</Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                />
                <FlatList
                  data={notification}
                  renderItem={({item, index}) => (
                    <View style={styles.notificationContainer}>
                      <Image
                        style={styles.notificationImg}
                        source={images.notificationImg}
                      />
                      <View style={styles.notificationTextContainer}>
                        <View style={styles.row}>
                          <Text style={styles.title}>{item.title}</Text>
                          <Text style={styles.time}>
                            {formatTimeAgo(item.createdAt)}
                          </Text>
                        </View>
                        <Text style={styles.description}>{item.body}</Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                />
                <FlatList
                  data={notification}
                  renderItem={({item, index}) => (
                    <View style={styles.notificationContainer}>
                      <Image
                        style={styles.notificationImg}
                        source={images.notificationImg}
                      />
                      <View style={styles.notificationTextContainer}>
                        <View style={styles.row}>
                          <Text style={styles.title}>{item.title}</Text>
                          <Text style={styles.time}>
                            {formatTimeAgo(item.createdAt)}
                          </Text>
                        </View>
                        <Text style={styles.description}>{item.body}</Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                />
              </>
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
