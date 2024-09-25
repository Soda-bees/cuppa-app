import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';

export default function RewardsHistory({navigation}) {
  const [notification, setNotification] = useState([
    {
      image: images.notificationImg,
      title: 'Exclisive rewards!',
      description:
        'Get your membership today and start enjoying discounts and special offers.',
      time: '8h',
    },
    {
      image: images.notificationImg,
      title: 'Discover new coffee shops!',
      description:
        'Check out our latest updates and explore unique flavors and brewing techniques.',
      time: '8h',
    },
    {
      image: images.notificationImg,
      title: 'Loyalty points!',
      description:
        'Unlock exciting rewards and freebies by being an active member of our coffee.',
      time: '8h',
    },
  ]);

  const [rewards, setRewards] = useState([
    {
      givenAt: '22 Mar 2023, 07:18 pm',
      title: 'Free coffee redeemed',
      expiresOn: '22 Apr 2023',
      beans: '-100',
    },
    {
      givenAt: '22 Mar 2023, 07:18 pm',
      title: '2x Free coffee',
      expiresOn: '22 Apr 2023',
      beans: '+200',
    },
    {
      givenAt: '22 Mar 2023, 07:18 pm',
      title: '2x Free coffee',
      expiresOn: '22 Apr 2023',
      beans: '-100',
    },
  ]);

  const handleChanges = () => {};

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header title={'Rewards History'} />
        </View>
        <View style={styles.scrollViewContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {rewards.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.rewardsContainer}>
                  <View>
                    <Text style={styles.textLight}>{item.givenAt}</Text>
                    <Text style={styles.textBlackBold}>{item.title}</Text>
                    <Text style={styles.textLight}>
                      Expires
                      <Text style={styles.textBlackLight}>
                        {' '}
                        {item.expiresOn}
                      </Text>
                    </Text>
                  </View>

                  <View style={styles.beansContainer}>
                    <Image style={styles.beansGold} source={images.beansGold} />
                    <Text style={styles.beanstext}>{item.beans}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
