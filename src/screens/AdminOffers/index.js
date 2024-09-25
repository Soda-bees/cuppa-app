import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SettingsHeader from '../../components/SettingsHeader';
import {Image, ScrollView, Text, View, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../services';
import images from '../../services/utilities/images';
import BottomBtn from '../../components/BottomBtn';

export default function AdminOffers({navigation}) {
  const data = [
    {name: 'Coffee Offer'},
    {name: 'Exclusive Offer'},
    {name: 'Limited Time Offer'},
    {name: 'Coffee Offer'},
    {name: 'Coffee Offer'},
    // Add more data objects as needed
  ];

  const discountData = [
    {
      title: 'Discover',
      subTitle: 'A world of coffee delights',
      offer: 'You get a free coffee',
      imageUrl: images.coffeeImg,
      validDate: '08/17/2023',
      details: [
        'Free Coffee on Manhattan Outlet',
        'Offer Valid till 08/17/2023',
        'Terms and Conditions apply',
      ],
    },
    {
      title: 'Discover',
      subTitle: 'A world of coffee delights',
      offer: 'You get a free coffee',
      imageUrl: images.coffeeImg,
      validDate: '08/17/2023',
      details: [
        'Free Coffee on Manhattan Outlet',
        'Offer Valid till 08/17/2023',
        'Terms and Conditions apply',
      ],
    },
    {
      title: 'Discover',
      subTitle: 'A world of coffee delights',
      offer: 'You get a free coffee',
      imageUrl: images.coffeeImg,
      validDate: '08/17/2023',
      details: [
        'Free Coffee on Manhattan Outlet',
        'Offer Valid till 08/17/2023',
        'Terms and Conditions apply',
      ],
    },
    // Add more discount data as needed
  ];

  const [activeBtnSelected, setActiveBtnSelected] = useState(true);
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <SettingsHeader title={'Offers'} img={true} alignMiddle={false} />
        <View style={styles.buttonField}>
          {activeBtnSelected ? (
            <>
              <TouchableOpacity style={styles.btnContainer}>
                <LinearGradient
                  colors={[colors.darkTeal, colors.teal]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.LinearGradient}>
                  <Text style={[styles.btn, styles.selectedBtn]}>Current</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => {
                  setActiveBtnSelected(!activeBtnSelected);
                }}>
                <Text style={styles.btn}>Past</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => {
                  setActiveBtnSelected(!activeBtnSelected);
                }}>
                <Text style={styles.btn}>Current</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnContainer}>
                <LinearGradient
                  colors={[colors.darkTeal, colors.teal]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.LinearGradient}>
                  <Text style={[styles.btn, styles.selectedBtn]}>Past</Text>
                </LinearGradient>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View
          style={
            activeBtnSelected
              ? styles.scrollViewContainer
              : styles.scrollViewContainerLarger
          }>
          <ScrollView>
            {activeBtnSelected ? (
              <View>
                {data.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      navigation.navigate('AdminEditOffer');
                    }}>
                    <View style={styles.offerContainer}>
                      <View style={styles.offerNameContainer}>
                        <Image
                          source={images.offer}
                          style={styles.basicIconL}
                        />
                        <Text style={styles.coffeeName}>{item.name}</Text>
                      </View>
                      <Image
                        source={images.greenUpBtn}
                        style={styles.greenBtn}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <>
                {discountData.map((data, index) => (
                  <View key={index} style={styles.discountContainer}>
                    <View style={styles.discountContainer1}>
                      <View style={styles.discountTextContainer}>
                        <Text style={styles.h1}>{data.title}</Text>
                        <Text style={styles.h2}>{data.subTitle}</Text>
                        <Text style={styles.h3}>{data.offer}</Text>
                      </View>
                      <Image source={data.imageUrl} style={styles.coffeeimg} />
                    </View>
                    <View>
                      <View style={styles.dateRow}>
                        <Text style={styles.h4}>Free Coffee Just For You</Text>
                        <Text style={styles.date}>
                          Valid Till {data.validDate}
                        </Text>
                      </View>
                      <View style={styles.list}>
                        {data.details.map((detail, index) => (
                          <View key={index} style={styles.listContainer}>
                            <View style={styles.dot} />
                            <Text style={styles.listContainerText}>
                              {detail}
                            </Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>
                ))}
              </>
            )}
          </ScrollView>
        </View>
        {activeBtnSelected && (
          <View
            style={
              Platform.OS == 'android' ? styles.BottomBtn : styles.BottomBtnIOS
            }>
            <BottomBtn
              title={'Create Offer'}
              navigateTo={'AdminAddOffer'}
              navigation={navigation}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
