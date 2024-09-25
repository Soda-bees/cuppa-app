import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import Header from '../../components/Header';
import {colors, sizes} from '../../services';
import images from '../../services/utilities/images';
import LinearGradient from 'react-native-linear-gradient';
import BottomBtn from '../../components/BottomBtn';
import Modal from 'react-native-modal';
export default function AdminAddCategory({navigation}) {
  const [active, setActive] = useState(false);
  const [modal, setmodal] = useState(false);

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

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Add Category'} />
        <View style={{marginTop: sizes.screenHeight * 0.05}} />
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Category Name</Text>
          <TextInput
            placeholder=""
            style={
              Platform.OS == 'android'
                ? styles.inputField
                : styles.inputFieldIOS
            }
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
        <View style={styles.addItems}>
          <Text>Add items to this category</Text>
          <TouchableOpacity
            onPress={() => {
              setmodal(!modal);
            }}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#287C76', '#60B0AA']}
              style={styles.linearAddBtn}>
              <Image source={images.add} style={styles.addBtn} />
              <Text style={styles.linearBtnText}>Add</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={
            Platform.OS == 'android' ? styles.BottomBtn : styles.BottomBtnIOS
          }>
          <BottomBtn
            title={'Save'}
            navigateTo={'Mytabs'}
            navigation={navigation}
          />
        </View>
      </View>
      <Modal
        isVisible={modal}
        onBackdropPress={() => {
          setmodal(!modal);
        }}
        style={styles.scrollViewcontainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <TouchableOpacity
            onPress={() => {
              setmodal(!modal);
            }}>
            <View style={styles.modalParent}>
              <View style={styles.modalContainer}>
                <View style={styles.divider} />
                <Text style={styles.modalHeading}>Item List</Text>
                <View style={styles.itemContainer}>
                  {items.map((item, index) => (
                    <View key={index}>
                      <View key={index} style={styles.rowspacebetween}>
                        <View style={styles.rowspacebetween}>
                          <Image source={item.image} style={styles.itemIcon} />
                          <View style={styles.itemInfo}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>
                              ${item.price.toFixed(2)}
                            </Text>
                          </View>
                        </View>
                        <TouchableOpacity
                          style={styles.addBtnContainer}
                          onPress={() => {
                            setmodal(!modal);
                          }}>
                          <Text style={styles.addBtnModal}>Add</Text>
                        </TouchableOpacity>
                      </View>
                      {index != items.length - 1 && (
                        <View style={styles.divider2} />
                      )}
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
}
