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
import Modal from 'react-native-modal';
export default function AdminEvents({navigation}) {
  const data = [
    {name: 'Coffee Offer'},
    {name: 'Exclusive Offer'},
    {name: 'Limited Time Offer'},
    {name: 'Coffee Offer'},
    {name: 'Coffee Offer'},
    // Add more data objects as needed
  ];

  const items = [
    {name: 'Name of Events', date: '27 Jan 2023', image: images.event},
    {name: 'Name of Events', date: '27 Jan 2023', image: images.event},
    {name: 'Name of Events', date: '27 Jan 2023', image: images.event},
    {name: 'Name of Events', date: '27 Jan 2023', image: images.event},

    // Add more items as needed
  ];

  const [activeBtnSelected, setActiveBtnSelected] = useState(true);
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <SettingsHeader title={'Events'} img={true} alignMiddle={false} />
        <View style={styles.buttonField}>
          {activeBtnSelected ? (
            <>
              <TouchableOpacity style={styles.btnContainer}>
                <LinearGradient
                  colors={[colors.darkTeal, colors.teal]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.LinearGradient}>
                  <Text style={[styles.btn, styles.selectedBtn]}>Upcoming</Text>
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
                <Text style={styles.btn}>Upcoming</Text>
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
        <View style={styles.scrollViewContainer}>
          <ScrollView>
            {activeBtnSelected ? (
              <View style={styles.itemContainer}>
                {items.map((item, index) => (
                  <View key={index}>
                    <View  style={styles.rowspacebetween}>
                      <View style={styles.rowspacebetween}>
                        <Image source={item.image} style={styles.itemIcon} />
                        <View style={styles.itemInfo}>
                          <Text style={styles.itemName}>{item.name}</Text>
                          <Text style={styles.itemPrice}>{item.date}</Text>
                          <TouchableOpacity onPress={()=>navigation.navigate('AdminEditEvent')}>
                            <LinearGradient
                              colors={[colors.darkTeal, colors.teal]}
                              start={{x: 0, y: 0}}
                              end={{x: 1, y: 0}}
                              style={Platform.OS == 'android' ? styles.LinearGradient2 : styles.LinearGradient2IOS}>
                              <Text style={[styles.btn, styles.selectedBtn]}>
                                Edit Details
                              </Text>
                            </LinearGradient>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    {index != items.length - 1 && (
                      <View style={styles.divider2} />
                    )}
                  </View>
                ))}
              </View>
            ) : (
              <View style={styles.itemContainer}>
                {items.map((item, index) => (
                  <View key={index}>
                    <View key={index} style={styles.rowspacebetween}>
                      <View style={styles.rowspacebetween}>
                        <Image source={item.image} style={styles.itemIcon} />
                        <View style={styles.itemInfo}>
                          <Text style={styles.itemName}>{item.name}</Text>
                          <Text style={styles.itemPrice}>{item.date}</Text>
                        </View>
                      </View>
                    </View>
                    {index != items.length - 1 && (
                      <View style={styles.divider2} />
                    )}
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        <View style={Platform.OS == 'ios' && styles.marginIOS}></View>
        </View>
        <View style={Platform.OS == 'android' ? styles.BottomBtn : styles.BottomBtnIOS}>
          <BottomBtn
            title={'Create Event'}
            navigateTo={'AdminAddEvent'}
            navigation={navigation}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
