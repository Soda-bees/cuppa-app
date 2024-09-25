import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';
export default function BottomBtnLoader({title}) {
  return (
    <>
      {title ? (
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#165F5A', '#287C76']}
          style={styles.btnContainer}>
          <Text style={styles.buttonText}>{title}</Text>
          <ActivityIndicator color={'white'} size={36} />
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#165F5A', '#287C76']}
          style={styles.btnContainer2}>
          <ActivityIndicator color={'white'} size={36} />
        </LinearGradient>
      )}
    </>
  );
}
