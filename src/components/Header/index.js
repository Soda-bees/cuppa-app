import {View, Text, SafeAreaView, Image, Touchable} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {AccessibilityInfo, AccessibilityLabel} from 'react-native';
import {sizes} from '../../services';

export default function Header({
  headerType,
  iconType,
  title,
  heartIcon,
  favourite,
  delivery,
  deliveryTime,
  userIcon,
}) {
  const navigation = useNavigation();

  return (
    <View>
      {headerType === 'Rewards' ? (
        <View style={styles.header}>
          <View style={styles.header2Left}>
            {iconType === 'green' && (
              <TouchableOpacity
                accessibilityLabel="Go to back screen button"
                style={styles.backIconContainer}
                onPress={navigation.goBack}>
                <Image
                  accessibilityLabel="Go to back screen icon"
                  style={styles.backIcon2}
                  source={
                    iconType === 'white'
                      ? images.backIconWhite
                      : images.backIcon
                  }
                />
              </TouchableOpacity>
            )}

            <Text style={styles.heading}>{title}</Text>
          </View>
          <View style={styles.userIconContainer}>
            <Image style={styles.userIcon} source={{uri: userIcon}} />
          </View>
        </View>
      ) : (
        <View style={styles.header}>
          <TouchableOpacity
            accessibilityLabel="Go to back screen button"
            style={styles.backIconContainer}
            onPress={navigation.goBack}>
            <Image
              accessibilityLabel="Go to back screen icon"
              style={styles.backIcon}
              source={
                iconType === 'white' ? images.backIconWhite : images.backIcon
              }
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.heading}>{title}</Text>

            {delivery === true && (
              <View style={styles.deliveryContainer}>
                <Image
                  source={images.deliveryIcon}
                  style={styles.deliveryIcon}
                />
                <Text style={styles.deliveryTime}>{deliveryTime}</Text>
              </View>
            )}
          </View>
          <View style={{width: sizes.screenHeight * 0.065}}>
            {heartIcon === 'yes' && (
              <TouchableOpacity style={styles.favouritesIconContainerMain}>
                <View style={styles.favouritesIconContainer}>
                  <Image
                    style={styles.favouritesIcon}
                    source={
                      favourite ? images.favouritesIcon : images.heartIcon
                    }
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
}
