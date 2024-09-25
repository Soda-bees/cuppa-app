import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {launchImageLibrary} from 'react-native-image-picker';
import {colors, sizes} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
import BottomBtn from '../../components/BottomBtn';

export default function AdminAddItem({navigation}) {
  const [img, setImg] = useState(null);
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

  const [sizePrices, setSizePrices] = useState([{size: '', price: ''}]);

  const handleRemoveSizePrice = index => {
    setSizePrices(prevSizePrices =>
      prevSizePrices.filter((_, i) => i !== index),
    );
  };

  const handleAddInterval = () => {
    setSizePrices(prevSizePrices => [...prevSizePrices, {size: '', price: ''}]);
  };

  const handleSizeChange = (index, newSize) => {
    setSizePrices(prevSizePrices => {
      const newSizes = [...prevSizePrices];
      newSizes[index].size = newSize;
      return newSizes;
    });
  };
  const handlePriceChange = (index, newPrice) => {
    setSizePrices(prevSizePrices => {
      const newPrices = [...prevSizePrices];
      newPrices[index].price = `$${newPrice.replace(/\$/g, '')}`;
      return newPrices;
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Add Menu Item'} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <TouchableOpacity
            style={styles.itemImgContainer}
            onPress={imageGalleryLaunch}>
            <Image
              source={img === null ? images.uploadCover : img}
              style={styles.itemImg}
            />
          </TouchableOpacity>
          <Text style={styles.uploadImgText}>Add Image</Text>
          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Item Name</Text>
            <TextInput
              placeholder="Enter Item Name"
              style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
              placeholderTextColor={colors.disabledBg3}
              // onChangeText={text => setConfirmpassword(text)}
              // value={confirmpassword}
            />
          </View>

          <View style={styles.inputView}>
            <View style={styles.sizesHeader}>
              <Text style={styles.sizesHeaderText}>Size</Text>
              <Text style={styles.sizesHeaderText}>Price</Text>
            </View>

            {sizePrices.map((sizePrice, index) => (
              <View key={index} style={styles.sizesContainer}>
                <TouchableOpacity onPress={() => handleRemoveSizePrice(index)}>
                  <Image source={images.remove} style={styles.removeBtn} />
                </TouchableOpacity>
                <TextInput
                  style={Platform.OS == 'android' ? styles.sizesInputField : styles.sizesInputFieldIOS}
                  value={sizePrice.size}
                  onChangeText={newSize => handleSizeChange(index, newSize)}
                />
                <TextInput
                  style={Platform.OS == 'android' ? styles.sizesInputField : styles.sizesInputFieldIOS}
                  value={sizePrice.price}
                  onChangeText={newPrice => handlePriceChange(index, newPrice)}
                />
              </View>
            ))}

            <TouchableOpacity
              style={{width: sizes.screenWidth * 0.3}}
              onPress={handleAddInterval}>
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
          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Serves</Text>
            <TextInput
              placeholder="Enter Serves Amount"
              style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
              placeholderTextColor={colors.disabledBg3}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Description</Text>
            <TextInput
              placeholder="Enter Description"
              style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
              placeholderTextColor={colors.disabledBg3}
            />
          </View>
          <View style={[styles.inputView, styles.categoryInput]}>
            <View>
              <Text style={styles.inputTitle}>Category</Text>
              <TextInput
                placeholder="Enter Category"
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholderTextColor={colors.disabledBg3}
                // onChangeText={text => setConfirmpassword(text)}
                // value={confirmpassword}
                // secureTextEntry={hideConfirmPass}
              />
            </View>
            <TouchableOpacity

            // onPress={() => setHideConfirmPass(!hideConfirmPass)}
            >
              <Image source={images.greenUpBtn} style={styles.feather} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={Platform.OS == 'android' ? styles.BottomBtn : styles.BottomBtnIOS}>
            <BottomBtn title={'Save'} navigateTo={'Mytabs'} navigation={navigation}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
