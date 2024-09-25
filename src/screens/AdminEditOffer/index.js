import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {launchImageLibrary} from 'react-native-image-picker';
import {colors, sizes} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
import BottomBtn from '../../components/BottomBtn';

export default function AdminEditOffer({navigation}) {
  const [img, setImg] = useState('');
  const [active, setActive] = useState(false);
  const [title,setTitle] = useState('Free Coffee Just For You')
  const [date,setDate] = useState('27-09-2023')
  const [promo,setPromo] = useState('Yes')
  const [description,setDescription] = useState('Free Coffee on Manhattan Outlet \nOffer Valid til 08/17/2023\nTerms and Conditions Apply ')


  //   const [sizes,setSizes] = useState([])

  const imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        console.log(res.assets[0]);
        const img = res.assets[0];
        setImg(img);
      }
    });
  };

  const [discounts, setDiscounts] = useState([
    {discountName: '', discount: ''},
  ]);

  const handleRemoveDiscount = index => {
    setDiscounts(prevDiscounts => prevDiscounts.filter((_, i) => i !== index));
  };

  const handleAddDiscount = () => {
    setDiscounts(prevDiscounts => [
      ...prevDiscounts,
      {discountName: '', discount: ''},
    ]);
  };

  const handleDiscountNameChange = (index, newDiscountName) => {
    setDiscounts(prevDiscounts => {
      const newDiscounts = [...prevDiscounts];
      newDiscounts[index].discountName = newDiscountName;
      return newDiscounts;
    });
  };

  const handleDiscountChange = (index, newDiscount) => {
    setDiscounts(prevDiscounts => {
      const newDiscounts = [...prevDiscounts];
      newDiscounts[index].discount = `${newDiscount.replace(/%/g, '')}%`;
      return newDiscounts;
    });
  };


  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Coffee Offer'} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.offerContainer}>
            <View style={styles.offerNameContainer}>
              <Image source={images.offer} style={styles.basicIconL} />
              <Text style={styles.coffeeName}>Coffee Offer</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setActive(!active);
              }}>
              <Image
                source={active ? images.btnOn : images.btnOff}
                style={Platform.OS == 'android' ? styles.toggleBtn : styles.toggleBtnIOS}
              />
            </TouchableOpacity>
          </View>
          {img === '' ? (
            <TouchableOpacity
              style={styles.coverView}
              onPress={() => {
                imageGalleryLaunch();
              }}>
              <Image source={images.uploadCover} style={styles.defaultCover} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.coverView}
              onPress={() => {
                imageGalleryLaunch();
              }}>
              <Image source={img} style={styles.userCover} />
            </TouchableOpacity>
          )}
          <Text style={styles.uploadImgText}>Upload Cover</Text>
          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Offer Title</Text>
            <TextInput
              placeholder="Enter Offer Title"
              style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
              placeholderTextColor={colors.disabledBg3}
              // onChangeText={text => setConfirmpassword(text)}
              value={title}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Description</Text>
            <TextInput
              placeholder="Enter Description"
              style={styles.inputField}
              placeholderTextColor={colors.disabledBg3}
              // onChangeText={text => setConfirmpassword(text)}
              value={description}
              multiline
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Valid Till</Text>
            <TextInput
              placeholder="Enter Date"
              style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
              placeholderTextColor={colors.disabledBg3}
              // onChangeText={text => setConfirmpassword(text)}
              value={date}
            />
            <Image source={images.calendar} style={styles.calendar} />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.discountText}>Discount</Text>

            {discounts.map((discount, index) => (
              <View key={index} style={styles.sizesContainer}>
                <TextInput
                  style={Platform.OS == 'android' ? styles.sizesInputField : styles.sizesInputFieldIOS}
                  value={discount.discountName}
                  onChangeText={newDiscountName =>
                    handleDiscountNameChange(index, newDiscountName)
                  }
                />
                <TextInput
                  style={Platform.OS == 'android' ? styles.sizesInputField : styles.sizesInputFieldIOS}
                  value={discount.discount}
                  onChangeText={newDiscount =>
                    handleDiscountChange(index, newDiscount)
                  }
                />
                <TouchableOpacity onPress={() => handleRemoveDiscount(index)}>
                  <Image source={images.remove} style={styles.removeBtn} />
                </TouchableOpacity>
              </View>
            ))}

            <TouchableOpacity
              style={{width: sizes.screenWidth * 0.3}}
              onPress={handleAddDiscount}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.linearAddBtn}>
                <Image source={images.add} style={styles.addBtn} />
                <Text style={styles.linearBtnText}>Add Interval</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={[styles.inputView, styles.categoryInput]}>
            <View>
              <Text style={styles.inputTitle}>Exclusive Promo</Text>
              <TextInput
                placeholder="Enter Promo"
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholderTextColor={colors.disabledBg3}
                value={promo}
              />
            </View>
            <TouchableOpacity>
              <Image source={images.greenUpBtn} style={styles.feather} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={Platform.OS == 'android' ? styles.BottomBtn : styles.BottomBtnIOS}>
          <BottomBtn title={'Save Changes'} navigation={navigation} navigateTo={'Mytabs'}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
