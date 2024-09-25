import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {Image, Text, View, Platform} from 'react-native';
import SettingsHeader from '../../components/SettingsHeader';
import Header from '../../components/Header';
// import { ProgressChart } from 'react-native-chart-kit'
import images from '../../services/utilities/images';
// import StarRating from 'react-native-star-rating';
import * as Progress from 'react-native-progress';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default function AdminRatingsReview() {
  const [totalreviews, setTotalReviews] = useState(900);
  const [rating, setRating] = useState(4.8);
  const [booleanArray, setBooleanArray] = useState([false]);

  useEffect(() => {
    setBooleanArray(Array(reviewerData.length).fill(false));
    console.log(booleanArray);
  }, []);

  const updateBooleanValue = index => {
    setBooleanArray(prevArray => {
      const newArray = [...prevArray]; // Create a copy of the array to avoid mutating state directly
      newArray[index] = !newArray[index]; // Update the value at the specified index
      return newArray;
    });
  };

  const [ratingFrequency, setRatingFrequency] = useState({
    '0-1': 0.3,
    '1-2': 0.2,
    '2-3': 0.7,
    '3-4': 0.9,
    '4-5': 0.5,
  });

  const reviewerData = [
    {
      name: 'Mark',
      rating: '4',
      time: 'Yesterday',
      review: 'the coffee was really good',
    },
    {
      name: 'John',
      rating: '3',
      time: 'Yesterday',
      review: 'the coffee was really good',
    },
    {
      name: 'Dave',
      rating: '2',
      time: 'Yesterday',
      review: 'the coffee was really good',
    },
    {
      name: 'Dave',
      rating: '2',
      time: 'Yesterday',
      review: 'the coffee was really good',
    },
    {
      name: 'Dave',
      rating: '2',
      time: 'Yesterday',
      review: 'the coffee was really good',
    },
    {
      name: 'Dave',
      rating: '2',
      time: 'Yesterday',
      review: 'the coffee was really good',
    },
    {
      name: 'Dave',
      rating: '2',
      time: 'Yesterday',
      review: 'the coffee was really good',
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Ratings & Review'} />

        <View style={styles.ratingWindow}>
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
        <Text style={styles.heading}>All Reviews</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ScrollView}>
          {reviewerData.map((value, index) => (
            <View key={index} style={styles.reviewContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.reviewerName}>{value.name}</Text>
                <TouchableOpacity
                  onPress={() => {
                    updateBooleanValue(index);
                  }}>
                  <Image source={images.reply} style={styles.replyImg} />
                </TouchableOpacity>
              </View>
              <View style={styles.ratingContainer}>
                <View style={styles.avgRatingStars}>
                  <StarRating
                    emptyStarColor="#ECAC37"
                    fullStarColor="#FCC767"
                    starSize={18}
                    maxStars={5}
                    rating={value.rating}
                  />
                </View>
                <View style={styles.dot} />
                <Text style={styles.ratingTime}>{value.time}</Text>
              </View>
              <Text style={styles.reviewText}>{value.review}</Text>
              {booleanArray[index] && (
                <View>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}
                    style={styles.replyContainer}>
                    <TextInput
                      multiline
                      style={
                        Platform.OS == 'android'
                          ? styles.replyInput
                          : styles.replyInputIOS
                      }
                    />
                    <TouchableOpacity
                      onPress={() => {
                        updateBooleanValue(index);
                      }}>
                      <Image source={images.arrow} style={styles.arrowImg} />
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
