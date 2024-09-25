import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function BottomButton({title, onPress}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
