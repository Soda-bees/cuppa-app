import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SettingsHeader from '../../components/SettingsHeader';
import {Image, Platform, ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../services';
import images from '../../services/utilities/images';
import BottomBtn from '../../components/BottomBtn';

export default function AdminRewards({navigation}) {
  const rewardsArray = [
    {
      rewardName: 'Buy 5 Get 1 Free',
      orders: '5',
      rewardItem: 'Espresso',
      terms: 'Valid for next purchase',
      description: 'Order 5 Coffees Get 1 Free',
    },
    {
      rewardName: 'Buy 6 Get 1 Free',
      orders: '6',
      rewardItem: 'Mocha',
      terms: 'Limited to specific products',
      description: 'Order 6 Coffees Get 1 Free',
    },
    {
      rewardName: 'Buy 7 Get 1 Free',
      orders: '7',
      rewardItem: 'Macchiato',
      terms: 'Membership renewal required',
      description: 'Order 7 Coffees Get 1 Free',
    },
    {
      rewardName: 'Buy 7 Get 1 Free',
      orders: '7',
      rewardItem: 'Macchiato',
      terms: 'Membership renewal required',
      description: 'Order 7 Coffees Get 1 Free',
    },
    {
      rewardName: 'Buy 7 Get 1 Free',
      orders: '7',
      rewardItem: 'Macchiato',
      terms: 'Membership renewal required',
      description: 'Order 7 Coffees Get 1 Free',
    },

    // Add more objects as needed
  ];

  const [activeBtnSelected, setActiveBtnSelected] = useState(true);
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <SettingsHeader title={'Rewards'} img={true} alignMiddle={false} />
        <View style={styles.buttonField}>
          {activeBtnSelected ? (
            <>
              <TouchableOpacity style={styles.btnContainer}>
                <LinearGradient
                  colors={[colors.darkTeal, colors.teal]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.LinearGradient}>
                  <Text style={[styles.btn, styles.selectedBtn]}>Active</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => {
                  setActiveBtnSelected(!activeBtnSelected);
                }}>
                <Text style={styles.btn}>All</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => {
                  setActiveBtnSelected(!activeBtnSelected);
                }}>
                <Text style={styles.btn}>Active</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnContainer}>
                <LinearGradient
                  colors={[colors.darkTeal, colors.teal]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.LinearGradient}>
                  <Text style={[styles.btn, styles.selectedBtn]}>All</Text>
                </LinearGradient>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.scrollViewContainer}>
          <ScrollView>
            {rewardsArray.map((reward, index) => (
              <View key={index}>
                <TouchableOpacity
                  style={styles.rewardView}
                  onPress={() => {
                    navigation.navigate('AdminEditReward', {
                      rewardData: reward,
                    });
                  }}>
                  <View>
                    <Text style={styles.rewardName}>{reward.rewardName}</Text>
                    <Text style={styles.rewardDescription}>
                      {reward.description}
                    </Text>
                  </View>
                  <Image source={images.trophyIcon} style={styles.rewardIcon} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={Platform.OS == 'ios' && styles.bottonbtnIOS}>
          <BottomBtn
            title={'Create Reward'}
            navigateTo={'AdminCreateReward'}
            navigation={navigation}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
