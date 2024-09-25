import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';

export default function BottomBtn({
  title,
  img,
  navigation,
  navigateTo,
  onPressFunction,
}) {
  return (
    <TouchableOpacity
      onPress={
        navigateTo
          ? () => {
              navigation.navigate(navigateTo);
            }
          : onPressFunction
      }>
      {img ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#287C76', '#60B0AA']}
          style={styles.btnContainer}>
          <Text style={styles.buttonText}>{title}</Text>
          <Image
            source={images.bottomBtnNextIcon}
            style={styles.bottomBtnNextIcon}
          />
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#287C76', '#60B0AA']}
          style={styles.btnContainer2}>
          <Text style={styles.buttonText2}>{title}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
}
