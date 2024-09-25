import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors, sizes} from '../../services';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authSlice';
import {
  addCardDetails,
  removeUserCard,
  selectCard,
} from '../../services/config/API';
import {
  addCardDetailsRedux,
  deleteCardRedux,
  selectCardRedux,
  selectUserData,
} from '../../store/userDetails';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';

export default function CardDetails({navigation}) {
  const token = useSelector(selectAuthToken);
  const userDetails = useSelector(selectUserData);
  const [allCards, setAllCards] = useState(userDetails?.cardDetails);
  const [selectedCard, setSelectedCard] = useState(
    userDetails?.cardDetails?.find(card => card?.selected === true),
  );
  useEffect(() => {
    setAllCards(userDetails?.cardDetails);
    setSelectedCard(
      userDetails?.cardDetails?.find(card => card?.selected === true),
    );
  }, [userDetails]);

  const [dropdownState, setDropdownState] = useState(
    Array(allCards.length).fill(false),
  );

  const dispatch = useDispatch();

  const [ownerName, setOwnerName] = useState('');
  const [cardNumberrr, setCardNumberrr] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cVV, setCVV] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(Array(allCards.length).fill(false));
  const [confirmModa1, setConfirmModa1] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [cardId, setCardId] = useState();

  const formatCardNumber = input => {
    if (input) {
      const numericInput = input.replace(/\D/g, '');
      const chunks = numericInput.match(/.{1,4}/g) || [];
      return chunks.join(' ');
    }
  };

  const formatExpiryDate = input => {
    if (input) {
      const numericInput = input.replace(/\D/g, '');
      const chunks = numericInput.match(/.{1,2}/g) || [];
      return chunks.join('/');
    }
  };

  const maskCardNumber = cardNumber => {
    const lastFourDigits = cardNumber.slice(-4);
    const maskedDigits = cardNumber.slice(0, -4).replace(/\d/g, '*');
    return maskedDigits + lastFourDigits;
  };

  const updateSelectedCard = index => {
    const updatedCards = allCards.map((card, i) => {
      return {
        ...card,
        selected: i === index ? true : false,
      };
    });
    setAllCards(updatedCards);
  };

  const toggleDropdown = index => {
    const updatedDropdownState = dropdownState.map((state, i) =>
      i === index ? !state : (state = false),
    );
    setDropdownState(updatedDropdownState);
  };

  const closeDropdown = () => {
    const updatedDropdownState = dropdownState.map(state => (state = false));
    setDropdownState(updatedDropdownState);
  };

  const handleDeleteCard = async () => {
    setLoader(true);
    try {
      const body = {
        cardId,
      };
      console.log(body);
      const response = await removeUserCard(body, token);
      if (response.data.success) {
        setLoader(false);
        setErrMsg('');
        console.log(response.data.cardId);
        dispatch(deleteCardRedux(response.data.cardId));
        setDeleteModal(true);
      }
    } catch (error) {
      setLoader2(false);
      console.log(error);
      setErrMsg(error);
    }
  };

  const handleSelectCard = async (id, index) => {
    setLoader2(prevLoader => {
      const newLoader = [...prevLoader];
      newLoader[index] = true;
      return newLoader;
    });
    try {
      const body = {
        cardId: id,
      };
      console.log(body);
      const response = await selectCard(body, token);
      if (response.data.success) {
        setLoader2(prevLoader => {
          const newLoader = [...prevLoader];
          newLoader[index] = false;
          return newLoader;
        });
        setErrMsg('');
        console.log(response.data.selectedCard);
        dispatch(selectCardRedux(response.data.selectedCard));
        closeDropdown();
      }
    } catch (error) {
      setLoader2(prevLoader => {
        const newLoader = [...prevLoader];
        newLoader[index] = false;
        return newLoader;
      });
      console.log(error);
      setErrMsg(error);
      closeDropdown();
    }
  };

  const handleEditCafe = card => {
    closeDropdown();
    navigation.navigate('EditCard', {card});
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Card Details'} />

        <TouchableOpacity
          style={Platform.OS == 'android' ? styles.addCardIconContainer : styles.addCardIconContainerIOS}
          onPress={() => navigation.navigate('AddCard')}>
          <Image source={images.addCardIcon} style={styles.addCardIcon} />
        </TouchableOpacity>

        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#287C76', '#60B0AA']}
          style={styles.cardContainer}>
          <View>
            <View style={styles.row}>
              <Text style={styles.textWhiteNormal}>Name</Text>
              <Image style={styles.masterCard2} source={images.masterCard2} />
            </View>
            <Text style={styles.textWhiteLarger}>
              {selectedCard?.ownerName}
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.gap4}>
              <Text style={styles.textWhiteNormal}>Number</Text>
              <Text style={styles.textWhiteNormal}>
                {formatCardNumber(selectedCard?.cardNumber)}
              </Text>
            </View>
            <View style={styles.gap4}>
              <Text style={styles.textWhiteNormal}>Exp</Text>
              <Text style={styles.textWhiteNormal}>
                {formatExpiryDate(selectedCard?.expiryDate)}
              </Text>
            </View>
            <View style={styles.gap4}>
              <Text style={styles.textWhiteNormal}>CVV</Text>
              <Text style={styles.textWhiteNormal}>{selectedCard?.cvv}</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.cardBtnContainer}>
          {allCards?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  item.selected ? styles.bottomBtn2 : styles.bottomBtn,
                  {zIndex: index * -1},
                ]}
                onPress={() => {
                  // updateSelectedCard(index);
                  // setSelectedCard(item);
                  // closeDropdown();

                  handleSelectCard(item._id, index);
                }}>
                <View style={styles.bottomBtnLeft}>
                  <Image style={styles.icon} source={images.masterCardImg} />
                  <Text style={styles.itemHeading}>
                    {maskCardNumber(item?.cardNumber)}
                  </Text>
                </View>

                {loader2[index] ? (
                  <ActivityIndicator color={colors.teal} size={30} />
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      toggleDropdown(index);
                    }}
                    style={styles.editDotsContainer}>
                    <Image style={styles.editDots} source={images.threeDots} />
                  </TouchableOpacity>
                )}

                {dropdownState[index] && item.selected ? (
                  <View style={styles.dd}>
                    <TouchableOpacity
                      style={styles.editBtn}
                      onPress={() => {
                        handleEditCafe(item);
                      }}>
                      <Image style={styles.editBtnIcon} source={images.pen} />
                      <Text style={styles.editBtnText}>Edit</Text>
                    </TouchableOpacity>
                    <View style={styles.separator}></View>
                    <TouchableOpacity
                      style={styles.editBtn}
                      onPress={() => {
                        setCardId(item._id);
                        setConfirmModa1(true);
                      }}>
                      <Image style={styles.editBtnIcon} source={images.trash} />
                      <Text style={styles.editBtnText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </View>
        <Modal isVisible={confirmModa1} backdropOpacity={0.5}>
          <View style={styles.modalContainer}>
            <View style={styles.modalBottomBody}>
              <Text style={styles.modalBottomHeading}>
                Are you sure you want to delete this card from your card list?
              </Text>
              <View style={styles.modalBtnContainer}>
                <TouchableOpacity
                  style={styles.modalBtnWhite}
                  onPress={() => {
                    if (!loader) {
                      setConfirmModa1(false);
                      setCardId();
                      closeDropdown();
                    }
                  }}>
                  <Text style={styles.modalBtnWhiteText}>Cancel</Text>
                </TouchableOpacity>

                {loader ? (
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}
                    style={styles.modalBtngreen}>
                    <ActivityIndicator color={'white'} size={30} />
                  </LinearGradient>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      handleDeleteCard();
                      closeDropdown();
                    }}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#287C76', '#60B0AA']}
                      style={styles.modalBtngreen}>
                      <Text style={styles.modalBtnGreenText}>Delete</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </Modal>

        <Modal isVisible={deleteModal} backdropOpacity={0.5}>
          <View style={styles.modalBody}>
            <Image source={images.reviewSuccess} style={styles.modalCup} />

            <Text style={styles.modalText}>
              Your card has been deleted successfully.
            </Text>

            <TouchableOpacity
              onPress={() => {
                setDeleteModal(false);
                setTimeout(() => {
                  setConfirmModa1(false);
                }, 500);
              }}
              style={styles.reviewBtnContainer}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.reviewBtn}>
                <Text style={styles.reviewBtnText}>Continue</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
