import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {sizes} from '../utilities/sizes';
import {colors} from '../utilities/colors';
import images from '../utilities/images';
import {Image, Text, View, Platform} from 'react-native';
import {fontSize} from '../utilities/fonts';
import Home from '../../screens/Home';
import Orders from '../../screens/Orders';
import RewardsQr from '../../screens/RewardsQr';
import RewardsMain from '../../screens/RewardsMain';
import Account from '../../screens/Account';

const Tab = createBottomTabNavigator();
export default function UserTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          width: sizes.screenWidth,
          height: sizes.screenHeight * 0.09,
          paddingBottom:
            Platform.OS == 'android'
              ? sizes.screenHeight * 0.01
              : sizes.screenHeight * 0.02,
          paddingHorizontal: sizes.screenWidth * 0.04,
          borderTopWidth: 1,
          borderColor: colors.bgLight,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          bottom: 0,
          position: 'absolute',
          elevation: 20,
          shadowColor: colors.black,
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? images.btHomeTeal : images.btHome}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.08,
                height: sizes.screenWidth * 0.08,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? images.btOrdersTeal : images.btOrders}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.08,
                height: sizes.screenWidth * 0.08,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Orders" />
          ),
        }}
      />
      <Tab.Screen
        name="RewardsQr"
        component={RewardsQr}
        options={{
          tabBarLabel: () => {
            false;
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={images.btMainIcon}
              style={{
                resizeMode: 'contain',
                bottom: sizes.screenHeight * 0.025,
                width: sizes.screenWidth * 0.2,
                height: sizes.screenWidth * 0.2,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RewardsMain"
        component={RewardsMain}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? images.btRewardsTeal : images.btRewards}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.08,
                height: sizes.screenWidth * 0.08,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Rewards" />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? images.btAccountTeal : images.btAccount}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.08,
                height: sizes.screenWidth * 0.08,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Account" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const CustomTabLabel = ({focused, label}) => {
  const inactiveColor = colors.black;
  const activeColor = colors.tealMix;
  return (
    <Text
      style={{
        color: focused ? activeColor : inactiveColor,
        fontSize: fontSize.regular,
        fontFamily: 'Satoshi-Medium',
      }}>
      {label}
    </Text>
  );
};
