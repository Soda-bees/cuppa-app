import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TextInput, View, Platform} from 'react-native';
import SettingsHeader from '../../components/SettingsHeader';
import {colors} from '../../services';
import {styles} from './style';
import images from '../../services/utilities/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BottomBtn from '../../components/BottomBtn';

export default function AdminEditReward({route,navigation}) {
  const {rewardData} = route.params;
  const {rewardName, orders, rewardItem, terms, description} = rewardData;

  const [name, setName] = useState(rewardName);
  const [numOrders, setOrders] = useState(orders);
  const [item, setItem] = useState(rewardItem);
  const [rewardTerms, setRewardTerms] = useState(terms);
  const [rewardDescription, setRewardDescription] = useState(description);
  const [dropdown, setDropdown] = useState(true);
  const handleInputChange = text => {
    const numericValue = text.replace(/^0+|[^0-9]/g, '');
    setOrders(numericValue === '' ? '0' : numericValue);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
    // setItem(coffee)
    // console.log(item,dropdown);
  };
  handleChooseCoffee = coffee => {
    handleDropdown();
    console.log(coffee, '----------->');
    setItem(coffee);
    // setItem(coffee);
    // console.log(coffee, dropdown);
  };

  const coffeeArray = [
    'Cappuccino',
    'Flat White',
    'Espresso',
    'Caramel Latte',
    'Hazelnut Latte',
    'Black Americano',
    'Mocha',
    'Macchiato',
    'Espresso',
  ];

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.marginBot}>
          <SettingsHeader title={'Reward Details'} />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Reward Name</Text>
          <TextInput
            placeholder={'Enter Reward Name'}
            style={styles.inputField}
            placeholderTextColor={colors.disabledBg3}
            // onChangeText={text => setAdminName(text)}
            value={name}
          />
        </View>
        <View style={styles.inputView2}>
          <Text style={styles.inputTitle}>Reward</Text>
          <View style={styles.rewardInputContainer}>
            <View style={styles.rewardView}>
              <Text style={styles.orderInputTitle}>No. of orders</Text>
              <TextInput
                value={orders}
                onChangeText={handleInputChange}
                keyboardType="numeric"
                style={styles.orderInput}
                placeholderTextColor={colors.disabledBg3}
              />
            </View>
            {dropdown ? (
              <TouchableOpacity onPress={handleDropdown}>
                <View style={styles.rewardView}>
                  <Text style={styles.orderInputTitle}>{item}</Text>
                  <Image source={images.downBtn} style={styles.downBtn} />
                </View>
              </TouchableOpacity>
            ) : (
              <>
                <View
                  style={
                    dropdown ? styles.rewardView : styles.rewardViewPressed
                  }>
                  <Text style={styles.orderInputTitle}>Choose Reward</Text>
                  <TouchableOpacity onPress={handleDropdown}>
                    <Image source={images.downBtn} style={styles.upbtn} />
                  </TouchableOpacity>
                  <View style={styles.coffeeDropdownContainer}>
                    {coffeeArray.map((coffee, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => handleChooseCoffee(coffee)}>
                        <View style={styles.coffeeDropdown}>
                          <Text style={styles.coffeeText}>{coffee}</Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Terms & Conditions</Text>
          <TextInput
            placeholder={'Enter Terms & Conditions'}
            style={styles.inputField}
            placeholderTextColor={colors.disabledBg3}
            value={terms}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>How to Complete</Text>
          <TextInput
            placeholder={'Enter Completion Requirements'}
            style={styles.inputField}
            placeholderTextColor={colors.disabledBg3}
            value={description}
          />
        </View>
        <View style={Platform.OS == 'android' ? styles.btnMargin : styles.btnMarginIOS}>
          <BottomBtn title={'Save Changes'} navigation={navigation} navigateTo={'Mytabs'}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
