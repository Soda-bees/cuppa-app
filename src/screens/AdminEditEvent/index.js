import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {launchImageLibrary} from 'react-native-image-picker';
import {colors, sizes} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
import BottomBtn from '../../components/BottomBtn';
import Modal from 'react-native-modal';
import CalendarPicker from 'react-native-calendar-picker';

export default function AdminEditEvent({navigation}) {
  const [img, setImg] = useState('');
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [modalShowCalendar, setModalShowCalendar] = useState(false);
  const [modalCreatedEvent, setModalCreatedEvent] = useState(false);
  const [date, setDate] = useState();
  const [eventType, setEventType] = useState();
  const [registration, setRegistration] = useState('Yes');
  const [registrationNumber, setRegistrationNumber] = useState('09348');
  const [startTimeHour, setStartTimeHour] = useState('08');
  const [startTimeMinutes, setStartTimeMinutes] = useState('00');
  const [startTime, setStartTime] = useState('AM');
  const [closingTimeHour, setClosingTimeHour] = useState('00');
  const [closingTimeMinutes, setClosingTimeMinutes] = useState('00');
  const [closingTime, setClosingTime] = useState('AM');
  const [focusedInput, setFocusedInput] = useState('');

  const [startTimeHourFinal, setStartTimeHourFinal] = useState('08');
  const [startTimeMinutesFinal, setStartTimeMinutesFinal] = useState('00');
  const [startTimeFinal, setStartTimeFinal] = useState('AM');
  const [closingTimeHourFinal, setClosingTimeHourFinal] = useState('11');
  const [closingTimeMinutesFinal, setClosingTimeMinutesFinal] = useState('59');
  const [closingTimeFinal, setClosingTimeFinal] = useState('PM');

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleCreatedEvent = () => {
    setModalCreatedEvent(!modalCreatedEvent);
  };

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  const setTime = () => {
    setClosingTimeFinal(closingTime);
    setClosingTimeHourFinal(closingTimeHour);
    setClosingTimeMinutesFinal(closingTimeMinutes);
    setStartTimeMinutesFinal(startTimeMinutes);
    setStartTimeHourFinal(startTimeHour);
    setStartTimeFinal(startTime);
    setModalShow(false);
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

  const handleFocus = inputType => {
    setFocusedInput(inputType);
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

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Edit Event'} />

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
            <Text style={styles.inputTitle}>Event Name</Text>
            <TextInput
              placeholder="Enter Event Name"
              style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
              placeholderTextColor={colors.disabledBg3}
              // onChangeText={text => setConfirmpassword(text)}
              value={title}
            />
          </View>

          <TouchableOpacity
            style={styles.inputView}
            onPress={() => setModalShowCalendar(true)}>
            <Text style={styles.inputTitle}>Date</Text>
            <TextInput
              placeholder="Select Date"
              style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
              placeholderTextColor={colors.disabledBg3}
              // onChangeText={text => setConfirmpassword(text)}
              value={
                selectedStartDate
                  ? selectedStartDate.toString().slice(0, 15)
                  : ''
              }
              editable={false}
            />
            <Image source={images.calendar} style={styles.calendarImg} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalShow(!modalShow);
            }}>
            <View style={styles.inputView}>
              <Text style={styles.inputTitle}>Time</Text>
              <View style={styles.timeInputView}>
                <Text style={styles.timeFinal}>
                  {startTimeHourFinal}:{startTimeMinutesFinal} {startTimeFinal}{' '}
                  - {closingTimeHourFinal}:{closingTimeMinutesFinal}{' '}
                  {closingTime}
                </Text>
                <Image source={images.timeIcon} style={Platform.OS == 'android' ? styles.timeIcon : styles.timeIconIOS} />
              </View>
            </View>
          </TouchableOpacity>

          <View style={[styles.inputView, styles.categoryInput]}>
            <View>
              <Text style={styles.inputTitle}>Event Type</Text>
              <TextInput
                placeholder="Enter Type"
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholderTextColor={colors.disabledBg3}
                value={eventType}
              />
            </View>
            <TouchableOpacity>
              <Image source={images.greenUpBtn} style={styles.feather} />
            </TouchableOpacity>
          </View>
          <View style={[styles.inputView, styles.categoryInput]}>
            <View>
              <Text style={styles.inputTitle}>Registration</Text>
              <TextInput
                // placeholder=""
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholderTextColor={colors.disabledBg3}
                value={registration}
              />
            </View>
            <TouchableOpacity>
              <Image source={images.greenUpBtn} style={styles.feather} />
            </TouchableOpacity>
          </View>
          <View style={[styles.inputView, styles.categoryInput]}>
            <View>
              <Text style={styles.inputTitle}>Registration Number</Text>
              <TextInput
                placeholder="Enter Registration Number"
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholderTextColor={colors.disabledBg3}
                value={registrationNumber}
              />
            </View>
          </View>
        </ScrollView>
        <View style={Platform.OS == 'android' ? styles.BottomBtn : styles.BottomBtnIOS}>
          <BottomBtn
            title={'Edit Event'}
            onPressFunction={handleCreatedEvent}
          />
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
                  style={[day.selected && styles.selectedDay, styles.day]}>
                  <Text style={styles.dayText}>{day.day.charAt(0)}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.inputTitle}>Opening Time</Text>
            <View style={styles.timeRow}>
              <TextInput
                style={[
                  styles.timeInput,
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
                  styles.timeInput,
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
                  styles.timeInput,
                  focusedInput === 'closingHour' && styles.focusedTimeInput,
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
                  styles.timeInput,
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
                <Text style={styles.cancelBtn}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={setTime}>
                <Text style={styles.okBtn}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={modalShowCalendar}
        onBackdropPress={() => setModalShowCalendar(false)}>
        <View style={styles.calendar}>
          <View style={[styles.flexrow, styles.spaceBetween]}>
            <Text style={styles.heading}>Selected Date:</Text>
            <Text style={styles.heading}>
              {selectedStartDate
                ? selectedStartDate.toString().slice(0, 15)
                : ''}
            </Text>
          </View>
          <CalendarPicker onDateChange={onDateChange} />
        </View>
      </Modal>
      <Modal isVisible={modalCreatedEvent} onBackdropPress={handleCreatedEvent}>
        <View style={styles.modalEventCreated}>
          <View style={styles.modalSection1}>
            <View style={styles.divider} />
            <View style={styles.congratsRow}>
              <Image source={images.calendarGreen} style={styles.basicIconL} />
              <Text style={styles.headingCalendarModal}>Congratulations!</Text>
            </View>
          </View>
          <Text style={styles.eventCreatedText}>Event Edited Successfully!</Text>

          <BottomBtn img title={'Go To Event'} navigation={navigation} navigateTo={'AdminEvents'}/>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
