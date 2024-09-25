import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {colors, sizes} from '../../services';
import images from '../../services/utilities/images';
import LinearGradient from 'react-native-linear-gradient';
import BottomBtn from '../../components/BottomBtn';
import Modal from 'react-native-modal';
export default function AdminEditCategory({navigation}) {
  const [active, setActive] = useState(false);
  const [modal, setmodal] = useState(false);
  const [booleanArrayDropDown, setBooleanArrayDropDown] = useState([false]);

  useEffect(() => {
    setBooleanArrayDropDown(Array(items.length).fill(false));
  }, []);
  const items = [
    {name: 'Cappuccino', price: 2.45, image: images.cappacino},
    {name: 'Cappuccino', price: 2.45, image: images.cappacino},
    {name: 'Cappuccino', price: 2.45, image: images.cappacino},
    {name: 'Cappuccino', price: 2.45, image: images.cappacino},
    {name: 'Cappuccino', price: 2.45, image: images.cappacino},
    {name: 'Cappuccino', price: 2.45, image: images.cappacino},
    {name: 'Cappuccino', price: 2.45, image: images.cappacino},
    // Add more items as needed
  ];
  const data = [
    {
      name: 'Cappuccino',
      price: '$3.45',
      icon: images.cappacino,
      dotsIcon: images.threeDots,
    },
    {
      name: 'Flat White',
      price: '$3.45',
      icon: images.cappacino,
      dotsIcon: images.threeDots,
    },

    {
      name: 'Caramel Latte',
      price: '$3.45',
      icon: images.cappacino,
      dotsIcon: images.threeDots,
    },
    {
      name: 'Caramel Latte',
      price: '$3.45',
      icon: images.cappacino,
      dotsIcon: images.threeDots,
    },
    {
      name: 'Caramel Latte',
      price: '$3.45',
      icon: images.cappacino,
      dotsIcon: images.threeDots,
    },
    {
      name: 'Caramel Latte',
      price: '$3.45',
      icon: images.cappacino,
      dotsIcon: images.threeDots,
    },
    {
      name: 'Caramel Latte',
      price: '$3.45',
      icon: images.cappacino,
      dotsIcon: images.threeDots,
    },

    // Add more items as needed
  ];
  const openDropDown = index => {
    setBooleanArrayDropDown(prevArray => {
      const newArray = prevArray.map((value, i) =>
        i === index ? !value : false,
      );
      return newArray;
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Edit Category'} />
        <View style={{marginTop: sizes.screenHeight * 0.03}} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ScrollView}>
          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Category Name</Text>
            <TextInput
              placeholder=""
              style={styles.inputField}
              placeholderTextColor={colors.disabledBg3}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Position</Text>
            <TextInput
              placeholder=""
              style={styles.inputField}
              placeholderTextColor={colors.disabledBg3}
            />
          </View>
          <View style={[styles.inputView, styles.activeMenu]}>
            <Text style={[styles.inputTitle, styles.inputField]}>
              Active on Menu
            </Text>
            <TouchableOpacity
              onPress={() => {
                setActive(!active);
              }}>
              <Image
                source={active ? images.btnOn : images.btnOff}
                style={
                  Platform.OS == 'android'
                    ? styles.toggleBtn
                    : styles.toggleBtnIOS
                }
              />
            </TouchableOpacity>
          </View>

          <View style={styles.chartHeading}>
            <Text style={styles.heading}>Items in this Category</Text>
            <TouchableOpacity>
              <Text
                style={
                  Platform.OS == 'android' ? styles.viewBtn : styles.viewBtnIOS
                }>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          {data.map((item, index) => (
            <View key={index}>
              <View style={[styles.itemContainer]}>
                <View style={[styles.flexRow, styles.itemsCenter]}>
                  <Image source={item.icon} style={styles.itemIcon} />
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
                <View style={[styles.flexRow, styles.itemsCenter]}>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                  <TouchableOpacity onPress={() => openDropDown(index)}>
                    <Image source={item.dotsIcon} style={styles.basicIcon} />
                  </TouchableOpacity>
                </View>
                {booleanArrayDropDown[index] && (
                  <View style={[styles.outletDropped2]}>
                    <TouchableOpacity
                      onPress={() => {
                        // navigation.navigate('AdminEditCategory');
                        openDropDown(index);
                      }}>
                      <View
                        style={[
                          styles.flexRow,
                          styles.itemsCenter,
                          styles.spacebetween,
                        ]}>
                        <Image source={images.pen} style={styles.basicIconL} />
                        <Text style={styles.optionText}>Edit</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.outletDivider2} />
                    <TouchableOpacity
                      onPress={() => {
                        // navigation.navigate('AdminEditCategory');
                        openDropDown(index);
                      }}>
                      <View
                        style={[
                          styles.flexRow,
                          styles.itemsCenter,
                          styles.spacebetween,
                        ]}>
                        <Image
                          source={images.updownArrows}
                          style={styles.basicIconL}
                        />
                        <Text style={styles.optionText}>Move</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.outletDivider2} />
                    <TouchableOpacity
                      onPress={() => {
                        // navigation.navigate('AdminEditCategory');
                        openDropDown(index);
                      }}>
                      <View
                        style={[
                          styles.flexRow,
                          styles.itemsCenter,
                          styles.spacebetween,
                        ]}>
                        <Image
                          source={images.trash}
                          style={styles.basicIconL}
                        />
                        <Text style={styles.optionText}>Remove</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </View>

              {index != data.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </ScrollView>
        <View style={Platform.OS == 'ios' && styles.margin}></View>
        <View
          style={
            Platform.OS == 'android' ? styles.BottomBtn : styles.BottomBtnIOS
          }>
          <BottomBtn
            title={'Save'}
            navigation={navigation}
            navigateTo={'Mytabs'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
