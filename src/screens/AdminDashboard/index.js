import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, View, TouchableOpacity, Platform} from 'react-native';
import SettingsHeader from '../../components/SettingsHeader';
import images from '../../services/utilities/images';
import {styles} from './style';
import {LineChart} from 'react-native-chart-kit';
import {colors, sizes} from '../../services';
import {ScrollView} from 'react-native-gesture-handler';
// import StarRating from 'react-native-star-rating';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';

export default function AdminDashboard({navigation}) {
  const [orderstoday, setOrderstoday] = useState('1000');
  const [cancelledOrders, setCancelledOrders] = useState('5');
  const [totalreviews, setTotalReviews] = useState(900);
  const [rating, setRating] = useState(4.8);
  const [currentTotalSales, setCurrentTotalSales] = useState();
  const [lastWeekSales, setLastWeekSales] = useState();
  const [ratingFrequency, setRatingFrequency] = useState({
    '0-1': 0,
    '1-2': 0,
    '2-3': 0,
    '3-4': 0,
    '4-5': 0,
  });
  const [outletDropDown, setOutletDropDown] = useState(true);
  const [currentOutlet, setCurrentOutlet] = useState('01');

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `#000000`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional,
  };

  const reviewArray = [
    {
      userData: {
        username: 'john',
      },
      rating: 2.5,
      time: 'Yesterday',
      review: 'The coffee was really good',
    },
    {
      userData: {
        username: 'john',
      },
      rating: 2.7,
      time: 'Yesterday',
      review: 'The coffee was really good',
    },
    {
      userData: {
        username: 'john',
      },
      rating: 4.3,
      time: 'Yesterday',
      review: 'The coffee was really good',
    },
    {
      userData: {
        username: 'john',
      },
      rating: 3,
      time: 'Yesterday',
      review: 'The coffee was really good',
    },
    {
      userData: {
        username: 'john',
      },
      rating: 1.8,
      time: 'Today',
      review: 'The coffee was really good',
    },
    {
      userData: {
        username: 'john',
      },
      rating: 4.5,
      time: '2 Days ago',
      review: 'The coffee was really good',
    },
  ];
  const [orders, setOrders] = useState([
    {
      coffee: 'Latte',
      amount: 2,
      price: 4.5,
      date: 'Oct.24',
      time: '10:30',
      status: 'Ready',
    },
    {
      coffee: 'Espresso',
      amount: 1,
      price: 2.5,
      date: 'Oct.24',
      time: '2:45',
      status: 'Pending',
    },
    // Add more transactions as needed
  ]);

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [1200, 1600, 1700, 2450, 3543, 4512, 6000],
        color: (opacity = 1) => `#4CAD00`, // optional
        strokeWidth: 2, // optional
      },
    ],
    // legend: ["Rainy Days"] // optional
  };
  const calculateAvgRating = () => {
    // Calculate average rating
    const avgRating =
      reviewArray.reduce((sum, review) => sum + review.rating, 0) /
      reviewArray.length;
    return avgRating;
  };

  const outlets = ['Outlet 01', 'Outlet 02'];

  const calculateRatingFrequency = () => {
    const ratingFrequency = {
      '0-1': calculatePercentage(0, 1),
      '1-2': calculatePercentage(1, 2),
      '2-3': calculatePercentage(2, 3),
      '3-4': calculatePercentage(3, 4),
      '4-5': calculatePercentage(4, 5),
    };

    function calculatePercentage(lowerBound, upperBound) {
      const frequency = reviewArray.filter(
        review => review.rating >= lowerBound && review.rating < upperBound,
      ).length;

      return (frequency / reviewArray.length).toFixed(2);
    }
    return ratingFrequency;
  };
  useEffect(() => {
    // setRating(calculateAvgRating().toFixed(2));
    setTotalReviews(reviewArray.length);
    setRatingFrequency(calculateRatingFrequency());
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <SettingsHeader title={'Dashboard'} img={true} />
        {outletDropDown ? (
          <TouchableOpacity
            style={
              Platform.OS == 'android'
                ? styles.outletDropDown
                : styles.outletDropDownIOS
            }
            onPress={() => {
              setOutletDropDown(false);
            }}>
            <View>
              <Text style={styles.outletHeader}>Outlet</Text>
              <Text style={styles.outletNumber}>{currentOutlet}</Text>
            </View>
            <Image source={images.greenUpBtn} style={styles.greenbtnOutlet} />
          </TouchableOpacity>
        ) : (
          <View style={styles.outletDropped}>
            <View style={styles.droppedView}>
              <Text style={styles.outletHeader}>Outlet</Text>
              <Image source={images.greenUpBtn} style={styles.greenbtnOutlet} />
            </View>
            {outlets.map((outlet, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setCurrentOutlet(outlet);
                  setOutletDropDown(true);
                }}>
                <View>
                  <Text style={styles.outletNumber}>{outlet}</Text>
                  <View style={styles.outletDivider} />
                </View>
              </TouchableOpacity>
            ))}

            <TouchableOpacity>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.linearAddBtn}>
                <Text style={styles.linearBtnText}>Add</Text>
                <Image source={images.add} style={styles.addBtn} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <View style={styles.orderInfoRow}>
            <View style={styles.orderInfoContainer}>
              <View style={styles.orderInfo}>
                <Image
                  source={images.orderIcon}
                  style={
                    Platform.OS == 'android' ? styles.cupImg : styles.cupImgIOS
                  }
                />
                <Text style={styles.orderAmount}>{orderstoday}</Text>
              </View>
              <Text style={styles.infoBottomText}>Orders Today</Text>
            </View>
            <View style={styles.orderInfoContainer}>
              <View style={styles.orderInfo}>
                <Image
                  source={images.cancelledOrderIcon}
                  style={
                    Platform.OS == 'android'
                      ? styles.cupImg2
                      : styles.cupImg2IOS
                  }
                />
                <Text style={styles.orderAmount}>{cancelledOrders}</Text>
              </View>

              <Text style={styles.infoBottomText}>Cancelled Orders</Text>
            </View>
          </View>

          <Text style={styles.heading}>Last Three Orders</Text>
          <View>
            {orders.map((order, index) => (
              <View key={index} style={styles.orderContainer}>
                <Text style={styles.coffeeText}>{order.coffee} </Text>
                <View style={styles.orderContainerChild}>
                  <Text style={styles.orderElement}>{order.amount} </Text>
                  <Text style={styles.orderPrice}>${order.price} </Text>
                  <View style={styles.timeView}>
                    <Text style={styles.orderElement}>{order.date} </Text>
                    <Text style={styles.orderTime}>{order.time} </Text>
                  </View>
                  <Text style={styles.orderStatus}>{order.status} </Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.chartHeading}>
            <Text style={styles.heading}>Business Summary</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AdminOrdersOverview');
              }}>
              <Image source={images.settingsBtn2} style={styles.settingsBtn2} />
            </TouchableOpacity>
          </View>

          <View style={styles.chart}>
            <View style={styles.chartSales}>
              <Text style={styles.salesTitle}>Sales</Text>
              <Text style={styles.salesAmount}>21312</Text>
              <Text style={styles.profit}>+192.10</Text>
              <Image source={images.greenArrow} style={styles.indicatorImg} />
            </View>
            <LineChart
              data={data}
              width={sizes.screenWidth * 0.85}
              height={220}
              yAxisInterval={1000}
              chartConfig={chartConfig}
              withVerticalLines={false}
              withHorizontalLines={true}
              withShadow={false}
              fromZero
              // onDataPointClick={() => {}}
              //   withHorizontalLabels={false}
            />
          </View>
          <View style={styles.chartHeading}>
            <Text style={styles.heading}>Ratings & Reviews</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AdminRatingsReview');
              }}>
              <Text
                style={
                  Platform.OS == 'android' ? styles.viewBtn : styles.viewBtnIOS
                }>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ratingWindow}>
            <Text style={styles.ratingWindowHeader}>Rating</Text>
            <View style={styles.ratingWindowParent}>
              <View style={styles.ratingSubsection}>
                <Text style={styles.avgRating}>{rating}</Text>
                <View style={styles.avgRatingStars}>
                  {/* <StarRating
                    emptyStarColor="#ECAC37"
                    fullStarColor="#FCC767"
                    starSize={18}
                    maxStars={5}
                    rating={rating}
                  /> */}
                </View>
                <Text style={styles.allRatings}>
                  All Ratings ({totalreviews > 1000 ? '1000+' : totalreviews}){' '}
                </Text>
              </View>
              <View style={styles.ratingSubsection}>
                <View style={styles.ratingProgressView}>
                  <Text>5</Text>
                  <Image source={images.star} style={styles.star} />
                  <Progress.Bar
                    progress={ratingFrequency['4-5']}
                    width={100}
                    color="gold"
                  />
                </View>
                <View style={styles.ratingProgressView}>
                  <Text>4</Text>
                  <Image source={images.star} style={styles.star} />
                  <Progress.Bar
                    progress={ratingFrequency['3-4']}
                    width={100}
                    color="gold"
                  />
                </View>
                <View style={styles.ratingProgressView}>
                  <Text>3</Text>
                  <Image source={images.star} style={styles.star} />
                  <Progress.Bar
                    progress={ratingFrequency['2-3']}
                    width={100}
                    color="gold"
                  />
                </View>
                <View style={styles.ratingProgressView}>
                  <Text>2</Text>
                  <Image source={images.star} style={styles.star} />
                  <Progress.Bar
                    progress={ratingFrequency['1-2']}
                    width={100}
                    color="gold"
                  />
                </View>
                <View style={styles.ratingProgressView}>
                  <Text>1</Text>
                  <Image source={images.star} style={styles.star} />
                  <Progress.Bar
                    progress={ratingFrequency['0-1']}
                    width={100}
                    color="gold"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.chartHeading}>
            <Text style={styles.heading}>Rewards</Text>
            <TouchableOpacity>
              <Text
                style={
                  Platform.OS == 'android' ? styles.viewBtn : styles.viewBtnIOS
                }>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={
              Platform.OS == 'android'
                ? styles.rewardsSection
                : styles.rewardsSectionIOS
            }>
            <Text style={styles.rewardsText}>No Rewards</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AdminCreateReward')}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={
                  Platform.OS == 'android'
                    ? styles.linearAddBtn
                    : styles.linearAddBtnIOS
                }>
                <Text style={styles.linearBtnText}>Add</Text>
                <Image source={images.add} style={styles.addBtn} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={Platform.OS == 'ios' && styles.marginBottom}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
