import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

import {colors, sizes} from '../../services';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {ProgressBar} from 'react-native-paper';
// import StarRating from 'react-native-star-rating';
import {useSelector} from 'react-redux';
import {selectUserData} from '../../store/userDetails';
import formatToJSON from '../../services/utilities/Jsonlog';
import {Rating} from 'react-native-ratings';

export default function Orders({navigation}) {
  const [orderType, setOrderType] = useState('Active');
  const [rating, setRating] = useState(4);
  const userData = useSelector(selectUserData);

  const [activeOrders, setActiveOrders] = useState(null);
  const [completedOrders, setCompletedOrders] = useState(null);

  useEffect(() => {
    console.log(formatToJSON(userData?.orders[0]));
    const activeOrders = userData?.orders
      ?.filter(
        order =>
          order.status !== 'Completed' &&
          order.status !== 'Cancelled' &&
          order.status !== 'Picked',
      )
      .reverse();

    const completedOrders = userData?.orders
      ?.filter(
        order =>
          order.status === 'Completed' ||
          order.status === 'Picked' ||
          order.status === 'Cancelled',
      )
      .reverse();

    setActiveOrders(activeOrders);
    setCompletedOrders(completedOrders);
  }, [userData]);

  const handleMapView = () => {
    navigation.navigate('MapVieww');
  };

  const handleOrderDetails = orderId => {
    navigation.navigate('OrderDetails', {orderId});
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Orders</Text>
        <View style={styles.btnRow}>
          {orderType === 'Active' ? (
            <TouchableOpacity
              onPress={() => {
                setOrderType('Active');
              }}
              style={styles.btnGradientContainer}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.btnGradient}>
                <Text style={styles.textWhite}>Active</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setOrderType('Active');
              }}
              style={styles.btnGradientContainer}>
              <View style={styles.btnDisabled}>
                <Text style={styles.textBlack}>Active</Text>
              </View>
            </TouchableOpacity>
          )}

          {orderType === 'History' ? (
            <TouchableOpacity
              onPress={() => {
                setOrderType('History');
              }}
              style={styles.btnGradientContainer}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.btnGradient}>
                <Text style={styles.textWhite}>History</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setOrderType('History');
              }}
              style={styles.btnGradientContainer}>
              <View style={styles.btnDisabled}>
                <Text style={styles.textBlack}>History</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {orderType === 'Active' ? (
            <>
              <View>
                <FlatList
                  data={activeOrders}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      style={styles.activeOrdersContainer}
                      onPress={() => {
                        handleOrderDetails(item._id);
                      }}>
                      <View style={styles.imageContainer}>
                        <Image
                          style={styles.image}
                          source={{uri: item?.cafeData?.outletCover}}
                        />
                      </View>
                      <View style={styles.orderRightContainer}>
                        <View style={styles.priceRow}>
                          <Text style={styles.priceRowText}>
                            {item?.cafeData?.outletName}
                          </Text>
                          <Text style={styles.priceRowText}>
                            ${item?.totalAmount}
                          </Text>
                        </View>
                        <Text style={styles.orderText}>
                          {item?.items[0]?.description?.length > 60
                            ? item?.items[0]?.description?.substring(0, 60) +
                              '...'
                            : item?.items[0]?.description}
                        </Text>
                        <View style={styles.deliveryTimeRow}>
                          <View>
                            <ProgressBar
                              progress={item.status == 'Pending' ? 0.5 : 1}
                              color={colors.tealMix}
                              style={styles.progressBar}
                            />
                          </View>
                          <Text style={styles.deliveryTimeText}>
                            {item.status}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                />
              </View>
              <View style={{marginBottom: 36}}>
                <FlatList
                  data={activeOrders}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      style={styles.activeOrdersContainer}
                      onPress={() => {
                        handleOrderDetails(item._id);
                      }}>
                      <View style={styles.imageContainer}>
                        <Image
                          style={styles.image}
                          source={{uri: item?.cafeData?.outletCover}}
                        />
                      </View>
                      <View style={styles.orderRightContainer}>
                        <View style={styles.priceRow}>
                          <Text style={styles.priceRowText}>
                            {item?.cafeData?.outletName}
                          </Text>
                          <Text style={styles.priceRowText}>
                            ${item?.totalAmount}
                          </Text>
                        </View>
                        <Text style={styles.orderText}>
                          {item?.items[0]?.description?.length > 60
                            ? item?.items[0]?.description?.substring(0, 60) +
                              '...'
                            : item?.items[0]?.description}
                        </Text>
                        <View style={styles.deliveryTimeRow}>
                          <View>
                            <ProgressBar
                              progress={item.status == 'Pending' ? 0.5 : 1}
                              color={colors.tealMix}
                              style={styles.progressBar}
                            />
                          </View>
                          <Text style={styles.deliveryTimeText}>
                            {item.status}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </>
          ) : (
            <View>
              <FlatList
                data={completedOrders}
                renderItem={({item, index}) => (
                  <View style={styles.historyOrdersContainer} key={index}>
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.image}
                        source={{uri: item?.cafeData?.outletCover}}
                      />
                    </View>
                    <View style={styles.orderRightContainer}>
                      <View style={styles.priceRow}>
                        <Text style={styles.priceRowText}>
                          {item?.cafeData?.outletName}
                        </Text>
                        <Text style={styles.priceRowText}>
                          ${item?.totalAmount}
                        </Text>
                      </View>
                      <Text style={styles.orderText}>
                        {item?.items[0]?.description?.length > 60
                          ? item?.items[0]?.description?.substring(0, 60) +
                            '...'
                          : item?.items[0]?.description}
                      </Text>
                      <View style={styles.orderHistoryBottomRow}>
                        <View style={styles.orderHistoryBottomRowLeft}>
                          <LinearGradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            colors={['#287C76', '#60B0AA']}
                            style={styles.completedGradient}>
                            <Text style={styles.completedGradientText}>
                              {item.status}
                            </Text>
                          </LinearGradient>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}

          <View style={styles.bottomTabBgSpace}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
