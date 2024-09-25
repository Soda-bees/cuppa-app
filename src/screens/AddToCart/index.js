import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

import {colors, sizes} from '../../services';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authSlice';
import {addToCart} from '../../services/config/API';
import {selectUserData, setUserData} from '../../store/userDetails';
import Modal from 'react-native-modal';

export default function AddToCart({navigation, route}) {
  const {cafe, item} = route.params;
  const token = useSelector(selectAuthToken);
  const user = useSelector(selectUserData);
  const isCafeSame = user?.cart?.some(item => item?.cafeId === cafe?._id);
  const dispatch = useDispatch();

  const [instructions, setInstructions] = useState('');
  const [cartCounter, setCartCounter] = useState(1);
  const [showAllOptions, setShowAllOptions] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSize, setSelectedSize] = useState(0);
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [permissionModal, setPermissionModal] = useState(false);

  const handleSizeSelection = index => {
    setSelectedSize(index);
  };

  function calculateTotalExtraCharges(selectedOptions) {
    let totalExtraCharges = 0;

    selectedOptions.forEach(selectedOption => {
      selectedOption.options.forEach(option => {
        totalExtraCharges += option.extraCharges || 0;
      });
    });

    return totalExtraCharges;
  }

  function compareOptionalKeys(array1, array2) {
    const filteredArray1 = array1.filter(obj => obj.optional === false);
    const filteredArray2 = array2.filter(obj => obj.optional === false);
    return filteredArray1.length === filteredArray2.length;
  }

  const handleCheckBeforeCart = () => {
    if (!compareOptionalKeys(item.specifications, selectedOptions)) {
      setErrorMsg('*Please select all the required fields');
    } else if (user.cart.length === 0) {
      handleAddToCart();
      console.log('user.cart.length === 0', isCafeSame);
    } else if (user.cart.length > 0 && isCafeSame) {
      handleAddToCart();
      console.log('user.cart.length === 0 && isCafeSame', isCafeSame);
    } else if (user.cart.length > 0 && !isCafeSame) {
      setPermissionModal(true);
      console.log('user.cart.length > 0 && !isCafeSame', isCafeSame);
    }
  };

  const handleAddToCart = async () => {
    try {
      setLoader(true);

      const totalExtraCharges = calculateTotalExtraCharges(selectedOptions);
      const sizePrice = item.sizes[selectedSize].price;
      const totalAmount = parseFloat(totalExtraCharges) + parseFloat(sizePrice);
      const body = {
        cafeId: cafe._id,
        name: item.name,
        image: item.image,
        description: item.description,
        size: sizePrice,
        specifications: selectedOptions,
        quantity: cartCounter,
        specialInstructions: instructions,
        amount: totalAmount,
      };

      console.log('body-=-=-=>', JSON.stringify(body));
      const response = await addToCart(body, token);
      if (response.data.success) {
        console.log('response-==--=>', response.data);
        console.log(response.data.user);
        dispatch(setUserData(response.data.user));
        setLoader(false);
        setErrorMsg('');
        navigation.navigate('OrderSummary');
      } else {
        console.log(response.data.message);
        setLoader(false);
        setErrorMsg(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setErrorMsg('');
    }
  };

  const handleIncrement = () => {
    setCartCounter(cartCounter + 1);
  };

  const handleDecrement = () => {
    if (cartCounter > 1) setCartCounter(cartCounter - 1);
  };

  const handleSelectOption = (specificationIndex, optionIndex) => {
    const selectedOption =
      item.specifications[specificationIndex].options[optionIndex];
    const specificationName = item.specifications[specificationIndex].name;
    const isOptional = item.specifications[specificationIndex].optional;
    const allowMultiple = item.specifications[specificationIndex].multiple;

    setSelectedOptions(prevSelectedOptions => {
      let updatedOptions = [...prevSelectedOptions];

      if (!allowMultiple) {
        // Remove all previous selections for this specification
        updatedOptions = updatedOptions.filter(
          option => option.name !== specificationName,
        );
      }

      const existingOptionIndex = updatedOptions.findIndex(
        option => option.name === specificationName,
      );

      // If the option already exists, remove it
      if (existingOptionIndex !== -1) {
        const existingOption = updatedOptions[existingOptionIndex];
        const isOptionSelected = existingOption.options.some(
          opt => opt === selectedOption,
        );

        if (isOptionSelected) {
          existingOption.options = existingOption.options.filter(
            opt => opt !== selectedOption,
          );
          // If no options are left, remove the entire entry
          if (existingOption.options.length === 0) {
            updatedOptions.splice(existingOptionIndex, 1);
          }
        } else {
          existingOption.options.push(selectedOption);
        }
      } else {
        // If the option doesn't exist, add it
        updatedOptions.push({
          name: specificationName,
          options: [selectedOption],
          optional: isOptional, // Add the optional property
        });
      }

      // If the option is not optional and no option is selected, select the current one
      if (
        !isOptional &&
        updatedOptions.every(option => option.name !== specificationName)
      ) {
        updatedOptions.push({
          name: specificationName,
          options: [selectedOption],
          optional: isOptional,
        });
      }

      return updatedOptions;
    });
  };

  const toggleShowOptions = specificationIndex => {
    setShowAllOptions(prevShowOptions => ({
      ...prevShowOptions,
      [specificationIndex]: !prevShowOptions[specificationIndex],
    }));
  };

  return (
    <SafeAreaView>
      {/* <ScrollView> */}
        <View style={styles.mainContainer}>
          <Header
            iconType={'teal'}
            heartIcon={'yes'}
            favourite={false}
            title={cafe.outletName}
            delivery={true}
            deliveryTime={'15 mins'}
          />

          <View style={styles.scrollViewContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.mainCoffeeRow}>
                <View style={styles.mainCoffeeRowLeft}>
                  <Text style={styles.coffeeName}>{item.name}</Text>
                  <Text style={styles.coffeeDescription}>
                    {item.description}
                  </Text>
                </View>
                <Image style={styles.coffeeImg} source={{uri: item.image}} />
              </View>
              {item?.sizes?.map((item, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.sizesRow}>
                    <TouchableOpacity
                      style={styles.optionRow2}
                      onPress={() => handleSizeSelection(index)}>
                      <Image
                        style={styles.selectIcon}
                        source={
                          index === selectedSize
                            ? images.selectedIcon
                            : images.selectIcon
                        }
                      />
                      <Text style={styles.size}>{item.size}</Text>
                    </TouchableOpacity>
                    <Text style={styles.size}>Serves ({item.serving})</Text>
                    <Text style={styles.sizePrice}>{`$ ${item?.price}`}</Text>
                  </TouchableOpacity>
                );
              })}

              <View>
                {item?.specifications?.map(
                  (specification, specificationIndex) => {
                    return (
                      <View
                        style={styles.addOnsMainContainer}
                        key={specificationIndex}>
                        <View style={styles.addOnHeadingRow}>
                          <View>
                            <Text style={styles.addOnHeading}>
                              {specification.name}
                            </Text>
                            {specification.multiple !== true ? (
                              <Text style={styles.selectText}>Select one</Text>
                            ) : (
                              <Text style={styles.selectText}>
                                Select one or more
                              </Text>
                            )}
                          </View>
                          {specification.optional ? (
                            <View style={styles.requiredBtnGrey}>
                              <Text style={styles.requiredTextBlack}>
                                Optional
                              </Text>
                            </View>
                          ) : (
                            <LinearGradient
                              start={{x: 0, y: 0}}
                              end={{x: 1, y: 0}}
                              colors={['#287C76', '#60B0AA']}
                              style={styles.requiredBtn}>
                              <Text style={styles.requiredTextWhite}>
                                Required
                              </Text>
                            </LinearGradient>
                          )}
                        </View>
                        {specification.options &&
                          (specification.options.length > 3 &&
                          !showAllOptions[specificationIndex] ? (
                            <>
                              {specification.options
                                .slice(0, 3)
                                .map((option, optionIndex) => (
                                  <View
                                    style={styles.optionRow}
                                    key={optionIndex}>
                                    <TouchableOpacity
                                      style={styles.optionRow2}
                                      onPress={() =>
                                        handleSelectOption(
                                          specificationIndex,
                                          optionIndex,
                                        )
                                      }>
                                      <Image
                                        style={styles.selectIcon}
                                        source={
                                          selectedOptions.some(
                                            specification =>
                                              specification.name ===
                                                specification.name &&
                                              specification.options.includes(
                                                option,
                                              ),
                                          )
                                            ? images.selectedIcon
                                            : images.selectIcon
                                        }
                                      />
                                      <Text style={styles.optionName}>
                                        {option.name}
                                      </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.optionPrice}>
                                      ${option.extraCharges}
                                    </Text>
                                  </View>
                                ))}
                              <TouchableOpacity
                                style={styles.seeMoreButton}
                                onPress={() =>
                                  toggleShowOptions(specificationIndex)
                                }>
                                <Image
                                  style={styles.dropDownIcon}
                                  source={images.dropDownIcon}
                                />
                                <Text style={styles.seeMoreButtonText}>
                                  View {specification.options.length - 3} more
                                </Text>
                              </TouchableOpacity>
                            </>
                          ) : (
                            <>
                              {specification.options?.map(
                                (option, optionIndex) => (
                                  <View
                                    style={styles.optionRow}
                                    key={optionIndex}>
                                    <TouchableOpacity
                                      style={styles.optionRow2}
                                      onPress={() =>
                                        handleSelectOption(
                                          specificationIndex,
                                          optionIndex,
                                        )
                                      }>
                                      <Image
                                        style={styles.selectIcon}
                                        source={
                                          selectedOptions.some(
                                            specification =>
                                              specification.name ===
                                                specification.name &&
                                              specification.options.includes(
                                                option,
                                              ),
                                          )
                                            ? images.selectedIcon
                                            : images.selectIcon
                                        }
                                      />
                                      <Text style={styles.optionName}>
                                        {option.name}
                                      </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.optionPrice}>
                                      ${option.extraCharges}
                                    </Text>
                                  </View>
                                ),
                              )}
                              {specification.options.length > 3 && (
                                <TouchableOpacity
                                  style={styles.seeMoreButton}
                                  onPress={() =>
                                    toggleShowOptions(specificationIndex)
                                  }>
                                  <Image
                                    style={styles.dropDownIcon}
                                    source={images.dropUpnIcon}
                                  />
                                  <Text style={styles.seeMoreButtonText}>
                                    View less
                                  </Text>
                                </TouchableOpacity>
                              )}
                            </>
                          ))}
                      </View>
                    );
                  },
                )}
              </View>

              <Text style={styles.coffeeName}>Special Instruction</Text>
              <Text style={styles.instructions}>
                Please let us know if you are allergic to anything or if we need
                to avoid anything
              </Text>

              <View style={styles.instructionsContainer}>
                <TextInput
                  placeholder="Your instructions here.."
                  placeholderTextColor={colors.disabledBg2}
                  multiline
                  value={instructions}
                  style={styles.descriptionInput}
                  onChangeText={text => {
                    setInstructions(text);
                  }}
                />
              </View>

              <Text style={styles.errMsg}>{errorMsg}</Text>

              <View style={styles.cartRow}>
                <View style={styles.cartRow}>
                  <TouchableOpacity onPress={handleDecrement}>
                    <Image
                      style={styles.minusBtnIcon}
                      source={images.minusBtnIcon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.cartCounterText}>{cartCounter}</Text>
                  <TouchableOpacity onPress={handleIncrement}>
                    <Image
                      style={styles.minusBtnIcon}
                      source={images.plusBtnIcon}
                    />
                  </TouchableOpacity>
                </View>

                {loader ? (
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}
                    style={styles.btnContainer}>
                    <Text style={styles.buttonText}>Add to cart</Text>
                    <ActivityIndicator color={'white'} size={30} />
                  </LinearGradient>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      handleCheckBeforeCart();
                    }}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#287C76', '#60B0AA']}
                      style={styles.btnContainer}>
                      <Text style={styles.buttonText}>Add to cart</Text>
                      <Image
                        source={images.bottomBtnNextIcon}
                        style={styles.bottomBtnNextIcon}
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={
                  Platform.OS == 'android' ? styles.height : styles.heightIOS
                }
              />
            </ScrollView>
          </View>
        </View>
      {/* </ScrollView> */}

      <Modal
        isVisible={permissionModal}
        onBackButtonPress={() => setPermissionModal(false)}
        onBackdropPress={() => setPermissionModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <Text style={styles.modalHeading}>Add to cart?</Text>
            <Text style={styles.modalText}>
              The items you have in your cart are from a different cafe. By
              adding this item to cart means your previous cart items will be
              removed.
            </Text>
            <View style={styles.modalBtnContainer}>
              <TouchableOpacity
                style={styles.modalBtnWhite}
                onPress={() => {
                  setPermissionModal(false);
                }}>
                <Text style={styles.modalBtnWhiteText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPermissionModal(false);
                  handleAddToCart();
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#287C76', '#60B0AA']}
                  style={styles.modalBtngreen}>
                  <Text style={styles.modalBtnGreenText}>Add To Cart</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
