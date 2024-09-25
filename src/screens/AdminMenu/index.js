import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import SettingsHeader from '../../components/SettingsHeader';
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Platform,
} from 'react-native';
import images from '../../services/utilities/images';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeProvider} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors, sizes} from '../../services';

export default function AdminMenu({navigation}) {
  const [outletDropDown, setOutletDropDown] = useState(true);
  const [currentOutlet, setCurrentOutlet] = useState('01');
  const [addBtnDropdown, setAddBtnDropdown] = useState(false);
  const outlets = ['Outlet 01', 'Outlet 02'];
  const [booleanArray, setBooleanArray] = useState([false]);
  const [booleanArrayDropDown, setBooleanArrayDropDown] = useState([false]);

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

    // Add more items as needed
  ];

  useEffect(() => {
    setBooleanArray(Array(categoryNames.length).fill(false));
    setBooleanArrayDropDown(Array(categoryNames.length).fill(false));

    console.log(booleanArray);
  }, []);

  const updateBooleanValue = index => {
    setBooleanArray(prevArray => {
      const newArray = [...prevArray]; // Create a copy of the array to avoid mutating state directly
      newArray[index] = !newArray[index]; // Update the value at the specified index
      return newArray;
    });
  };

  const openDropDown = index => {
    setBooleanArrayDropDown(prevArray => {
      const newArray = prevArray.map((value, i) =>
        i === index ? !value : false,
      );
      return newArray;
    });
  };

  const categoryNames = ['Espresso', 'Snacks', 'Juices'];

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <SettingsHeader title={'Menu'} img />
        <View style={styles.searchBarParent}>
          <View style={styles.searchBar}>
            <Image source={images.search} style={styles.basicIcon} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={colors.disabledBg3}
              style={[styles.searchInput]}
            />
          </View>
          {outletDropDown ? (
            <TouchableOpacity
              style={styles.outletDropDown}
              onPress={() => {
                setOutletDropDown(false);
              }}>
              <View>
                <Text style={[styles.outletHeader, styles.greyText]}>
                  Outlet
                </Text>
                <Text style={styles.outletNumber}>{currentOutlet}</Text>
              </View>
              <Image source={images.greenUpBtn} style={styles.greenbtnOutlet} />
            </TouchableOpacity>
          ) : (
            <View
              style={
                Platform.OS == 'android'
                  ? styles.outletDropped
                  : styles.outletDroppedIOS
              }>
              <View style={styles.droppedView}>
                <Text style={styles.outletHeader}>Outlet</Text>
                <TouchableOpacity
                  onPress={() => setOutletDropDown(!outletDropDown)}>
                  <Image
                    source={images.greenUpBtn}
                    style={styles.greenbtnOutlet}
                  />
                </TouchableOpacity>
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
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={{minHeight: sizes.screenHeight * 0.85}}>
            {categoryNames.map((categoryName, index) => (
              <View key={index} style={{zIndex: -index}}>
                <View style={[styles.category, {zIndex: -index}]}>
                  <Text style={styles.greyText}>{categoryName}</Text>
                  <View style={[styles.flexRow, styles.itemsCenter]}>
                    <TouchableOpacity
                      onPress={() => {
                        updateBooleanValue(index);
                      }}>
                      <Image
                        source={images.greenUpBtn}
                        style={[
                          styles.basicIconL,
                          !booleanArray[index] && styles.greenBtnDown,
                        ]}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        openDropDown(index);
                      }}>
                      <Image
                        source={images.threeDots}
                        style={styles.basicIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  {booleanArrayDropDown[index] && (
                    <View style={[styles.outletDropped2]}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('AdminEditCategory');
                          openDropDown(index);
                        }}>
                        <View
                          style={[
                            styles.flexRow,
                            styles.itemsCenter,
                            styles.spacebetween,
                          ]}>
                          <Image
                            source={images.pen}
                            style={styles.basicIconL}
                          />
                          <Text style={styles.optionText}>Edit</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.outletDivider2} />
                      <TouchableOpacity
                        onPress={() => {
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

                {booleanArray[index] && (
                  <View
                    style={[
                      styles.itemArray,
                      // index === 0 ? {zIndex: -1} : {zIndex: -index * 2},
                    ]}>
                    {data.map((item, index) => (
                      <View key={index}>
                        <View style={[styles.itemContainer]}>
                          <View style={[styles.flexRow, styles.itemsCenter]}>
                            <Image source={item.icon} style={styles.itemIcon} />
                            <Text style={styles.itemText}>{item.name}</Text>
                          </View>
                          <View style={[styles.flexRow, styles.itemsCenter]}>
                            <Text style={styles.itemPrice}>{item.price}</Text>
                            <Image
                              source={item.dotsIcon}
                              style={styles.basicIcon}
                            />
                          </View>
                        </View>

                        {index != data.length - 1 && (
                          <View style={styles.divider} />
                        )}
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        </ScrollView>

        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomAddBtn
              : styles.bottomAddBtnIOS
          }>
          <TouchableOpacity
            onPress={() => {
              setAddBtnDropdown(true);
            }}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#287C76', '#60B0AA']}
              style={
                Platform.OS == 'android'
                  ? styles.linearAddBtn2
                  : styles.linearAddBtn2IOS
              }>
              <Image source={images.add} style={styles.addBtn} />
              <Text style={styles.linearBtnText}>Add</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {addBtnDropdown && (
          <View style={[styles.outletDropped3]}>
            <TouchableOpacity
              onPress={() => {
                setAddBtnDropdown(false);
                navigation.navigate('AdminAddItem');
              }}>
              <View
                style={[
                  styles.flexRow,
                  styles.itemsCenter,
                  styles.spacebetween,
                ]}>
                <Image
                  source={images.papercupblack}
                  style={styles.basicIconL}
                />
                <Text style={styles.optionText}>Item</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.outletDivider2} />
            <TouchableOpacity
              onPress={() => {
                setAddBtnDropdown(false);
                navigation.navigate('AdminAddCategory');
              }}>
              <View
                style={[
                  styles.flexRow,
                  styles.itemsCenter,
                  styles.spacebetween,
                ]}>
                <Image source={images.category} style={styles.basicIconL} />
                <Text style={styles.optionText}>Category</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
