import {View, Text, SafeAreaView, Image, Touchable} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function SettingsHeader({title, img, alignMiddle}) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.header,
        alignMiddle
          ? {justifyContent: 'center'}
          : {justifyContent: 'space-between'},
      ]}>
      {img ? (
        <>
          <Text style={styles.heading}>{title}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AdminSettings');
            }}>
            <Image style={styles.backIcon} source={images.settingsBtn} />
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.heading}>{title}</Text>
      )}
    </View>
  );
}
