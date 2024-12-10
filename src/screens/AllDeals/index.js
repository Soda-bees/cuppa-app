import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {sizes} from '../../services';
import {useSelector} from 'react-redux';
import {selectUserData} from '../../store/userDetails';
import {selectOutlets} from '../../store/outletsSlice';
import {selectAuthToken} from '../../store/authSlice';
import {getAllDeals} from '../../services/config/API';

export default function AllDeals({navigation, route}) {
  const {deals} = route.params;
  const userData = useSelector(selectUserData);
  const token = useSelector(selectAuthToken);

  const cafe = useSelector(selectOutlets);
  const [allDeals, setAllDeals] = useState(deals);
  // const handleGetAllDeals = async () => {
  //   try {
  //     const response = await getAllDeals(token);
  //     console.log(
  //       '==========================Deals=========================',
  //       response?.data?.deals,
  //     );
  //     await setAllDeals(response?.data?.deals);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   handleGetAllDeals();
  // }, []);

  console.log(allDeals, 'delasssssssssssssssssssssssssssss');

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header title={'Exclusive Deals'} />
        </View>

        <View style={styles.toggleRow}></View>

        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.dealContainerFlex}>
              {allDeals
                ?.slice()
                .reverse()
                .map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.dealContainer}
                      onPress={() => {
                        navigation.navigate('CafeDeals', {
                          deal: item,
                        });
                      }}>
                      <Image
                        style={styles.dealImg}
                        source={{uri: item.coverPhoto}}
                      />
                    </TouchableOpacity>
                  );
                })}
            </View>
          </ScrollView>
          {/* <View style={{height: sizes.screenHeight * 0.15}}></View> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
