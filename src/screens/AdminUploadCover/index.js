import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, Platform} from 'react-native';
import Header from '../../components/Header';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import BottomBtn from '../../components/BottomBtn';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CountryPicker from 'react-native-country-picker-modal';
import {colors} from '../../services';
import BottomButton from '../../components/BottomButton';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

export default function AdminUploadCover({navigation}) {
  const [startTimeHour, setStartTimeHour] = useState('00');
  const [startTimeMinutes, setStartTimeMinutes] = useState('00');
  const [startTime, setStartTime] = useState('AM');
  const [closingTimeHour, setClosingTimeHour] = useState('00');
  const [closingTimeMinutes, setClosingTimeMinutes] = useState('00');
  const [closingTime, setClosingTime] = useState('AM');

  const [startTimeHourFinal, setStartTimeHourFinal] = useState('00');
  const [startTimeMinutesFinal, setStartTimeMinutesFinal] = useState('00');
  const [startTimeFinal, setStartTimeFinal] = useState('AM');
  const [closingTimeHourFinal, setClosingTimeHourFinal] = useState('00');
  const [closingTimeMinutesFinal, setClosingTimeMinutesFinal] = useState('00');
  const [closingTimeFinal, setClosingTimeFinal] = useState('AM');

  const [outletName, setOutletName] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [userImage, setUserImage] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [focusedTimeInput, setFocusedTimeInput] = useState(null);
  const [description, setDescription] = useState('')

  const setTime = () => {
    setClosingTimeFinal(closingTime);
    setClosingTimeHourFinal(closingTimeHour);
    setClosingTimeMinutesFinal(closingTimeMinutes);
    setStartTimeMinutesFinal(startTimeMinutes);
    setStartTimeHourFinal(startTimeHour);
    setStartTimeFinal(startTime);
    setModalShow(false);
  };
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
        setUserImage(img);
      }
    });
  };
  const handleInputChange = (text, setFunction, maxValue) => {
    // Ensure the input is a number
    const numericValue = parseInt(text, 10);

    // Check if the numeric value is within the specified range
    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= maxValue) {
      // Format the input with a leading zero if it's a single digit
      const formattedValue =
        numericValue < 10 ? `0${numericValue}` : `${numericValue}`;
      setFunction(formattedValue);
    } else {
      // If the value is outside the range, set it to an empty string or handle it accordingly
      setFunction('00');
    }
  };

  const [focusedInput, setFocusedInput] = useState('');

  const handleFocus = inputType => {
    setFocusedInput(inputType);
  };

  const [daysOfWeek, setDaysOfWeek] = useState([
    {day: 'Sunday', selected: false},
    {day: 'Monday', selected: false},
    {day: 'Tuesday', selected: false},
    {day: 'Wednesday', selected: false},
    {day: 'Thursday', selected: false},
    {day: 'Friday', selected: false},
    {day: 'Saturday', selected: false},
  ]);

  const toggleSelected = index => {
    setDaysOfWeek(prevDays => {
      const updatedDays = [...prevDays];
      updatedDays[index].selected = !updatedDays[index].selected;
      return updatedDays;
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Header title={'Set-Up Outlet'} />
        </View>
        {userImage === '' ? (
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
            <Image source={userImage} style={styles.userCover} />
          </TouchableOpacity>
        )}
        <Text style={styles.heading}>Upload Cover</Text>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Outlet Name</Text>
          <TextInput
            placeholder={'Enter Outlet Name'}
            style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
            onChangeText={text => setOutletName(text)}
            value={outletName}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Description</Text>
          <TextInput
            placeholder={'Enter Description'}
            style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
            onChangeText={text => setDescription(text)}
            value={description}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setModalShow(!modalShow);
          }}>
          <View style={styles.inputView}>
            <Text style={styles.inputTitle}>Time</Text>
            <View style={styles.timeInputView}>
              <Text style={styles.timeFinal}>
                {startTimeHourFinal}:{startTimeMinutesFinal} {startTimeFinal} -{' '}
                {closingTimeHourFinal}:{closingTimeMinutesFinal} {closingTime}
              </Text>
              <Image source={images.timeIcon} style={styles.timeIcon}/>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Enter Location</Text>
          <View style={styles.countryField}>
            <CountryPicker
              withFilter
              withCountryNameButton
              withAlphaFilter
              withCallingCode={false} // Set this to false
              onSelect={country => setSelectedCountry(country)}
              placeholder={selectedCountry?.name}
              style={styles.inputTitle}
            />
          </View>
        </View>
        <View style={Platform.OS == 'android' ? styles.bottomBtn : styles.bottomBtnIOS}>
          {/* <TouchableOpacity onPress={() =>navigation.navigate('Mytabs') }> */}
          {/* <Text>hello</Text> */}
          <BottomBtn img={true} title={'Get Started'} navigation={navigation} navigateTo={'Mytabs'}/>
          {/* </TouchableOpacity> */}
        </View>
      </View>
      <Modal isVisible={modalShow}>
        <View style={styles.modal}>
          <View style={styles.divider} />
          <Text style={styles.modalHeader}>Timings</Text>
          <View style={styles.modalInputView}>
            <Text style={styles.inputTitle}>Day</Text>
            <View style={styles.daysView}>
              {daysOfWeek.map((day, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => toggleSelected(index)}
                  style={[day.selected && styles.selectedDay,Platform.OS == 'android' ? styles.day : styles.dayIOS]}>
                  <Text style={styles.dayText}>{day.day.charAt(0)}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.inputTitle}>Opening Time</Text>
            <View style={styles.timeRow}>
              <TextInput
                style={[
                  Platform.OS == 'android' ? styles.timeInput : styles.timeInputIOS,
                  focusedInput === 'startHour' && styles.focusedTimeInput,
                ]}
                value={startTimeHour}
                onChangeText={text =>
                  handleInputChange(text, setStartTimeHour, 12)
                }
                keyboardType="numeric"
                onFocus={() => handleFocus('startHour')}
              />
              <Text style={styles.semicolon}>:</Text>
              <TextInput
                style={[
                  Platform.OS == 'android' ? styles.timeInput : styles.timeInputIOS,
                  focusedInput === 'startMinutes' && styles.focusedTimeInput,
                ]}
                value={startTimeMinutes}
                onChangeText={text =>
                  handleInputChange(text, setStartTimeMinutes, 60)
                }
                keyboardType="numeric"
                onFocus={() => handleFocus('startMinutes')}
              />
              {startTime === 'AM' ? (
                <View style={styles.timeView}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}>
                    <TouchableOpacity
                      onPress={() => {
                        setStartTime('AM');
                      }}>
                      <Text style={[styles.timeViewText, styles.timeSelected]}>
                        AM
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                  <TouchableOpacity
                    onPress={() => {
                      setStartTime('PM');
                    }}>
                    <Text style={styles.timeViewText}>PM</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.timeView}>
                  <TouchableOpacity
                    onPress={() => {
                      setStartTime('AM');
                    }}>
                    <Text style={styles.timeViewText}>AM</Text>
                  </TouchableOpacity>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}>
                    <TouchableOpacity
                      onPress={() => {
                        setStartTime('PM');
                      }}>
                      <Text style={[styles.timeViewText, styles.timeSelected]}>
                        PM
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              )}
            </View>
            <Text style={styles.inputTitle}>Closing Time</Text>
            <View style={styles.timeRow}>
              <TextInput
                value={closingTimeHour}
                style={[
                  Platform.OS == 'android' ? styles.timeInput : styles.timeInputIOS,
                  focusedInput === 'closingHour' && styles. focusedTimeInput,
                ]}
                onChangeText={text =>
                  handleInputChange(text, setClosingTimeHour, 12)
                }
                keyboardType="numeric"
                onFocus={() => handleFocus('closingHour')}
              />
              <Text style={styles.semicolon}>:</Text>
              <TextInput
                value={closingTimeMinutes}
                style={[
                  Platform.OS == 'android' ? styles.timeInput : styles.timeInputIOS,
                  focusedInput === 'closingMinutes' && styles.focusedTimeInput,
                ]}
                onChangeText={text =>
                  handleInputChange(text, setClosingTimeMinutes, 59)
                }
                keyboardType="numeric"
                onFocus={() => handleFocus('closingMinutes')}
              />
              {closingTime === 'AM' ? (
                <View style={styles.timeView}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}>
                    <TouchableOpacity
                      onPress={() => {
                        setClosingTime('AM');
                      }}>
                      <Text style={[styles.timeViewText, styles.timeSelected]}>
                        AM
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                  <TouchableOpacity
                    onPress={() => {
                      setClosingTime('PM');
                    }}>
                    <Text style={styles.timeViewText}>PM</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.timeView}>
                  <TouchableOpacity
                    onPress={() => {
                      setClosingTime('AM');
                    }}>
                    <Text style={styles.timeViewText}>AM</Text>
                  </TouchableOpacity>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#287C76', '#60B0AA']}>
                    <TouchableOpacity
                      onPress={() => {
                        setClosingTime('PM');
                      }}>
                      <Text style={[styles.timeViewText, styles.timeSelected]}>
                        PM
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              )}
            </View>
            <View style={styles.bottomButtons}>
              <TouchableOpacity
                onPress={() => {
                  setModalShow(false);
                }}>
                <Text style={Platform.OS == 'android' ? styles.cancelBtn : styles.cancelBtnIOS}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={setTime}>
                <Text style={Platform.OS == 'android' ? styles.okBtn : styles.okBtnIOS}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
