import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, Platform} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtnUser from '../../components/BottomBtnUser';
import {colors, sizes} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function CustomerPersonality({navigation, route}) {
  const [qa, setQa] = useState([
    {
      question: 'How often do you visit local coffee shop?',
      answer1: {answer: 'Never', selected: false},
      answer2: {answer: 'Rarely (once a month or less)', selected: false},
      answer3: {answer: 'Sometimes (few times a month)', selected: false},
      answer4: {answer: 'Often (once a week or more)', selected: false},
      answer5: {answer: 'Daily', selected: false},
    },
    {
      question: 'What do you enjoy most about visiting a coffee shop?',
      answer1: {answer: 'The coffee', selected: false},
      answer2: {answer: 'The opportunity to socialize', selected: false},
      answer3: {answer: 'The ability to work or study', selected: false},
      answer4: {answer: 'The convenience', selected: false},
      answer5: {answer: 'The atmosphere', selected: false},
    },
    {
      question: 'What type of coffee do you enjoy the most?',
      answer1: {answer: 'Espresso', selected: false},
      answer2: {answer: 'Americano', selected: false},
      answer3: {answer: 'Macchiato', selected: false},
      answer4: {answer: 'Cappuccino', selected: false},
      answer5: {answer: 'Mocha', selected: false},
    },
    {
      question: 'How do you take your coffee? Black or white?',
      answer1: {answer: 'Black', selected: false},
      answer2: {answer: 'With cream and sugar', selected: false},
      answer3: {answer: 'With sugar', selected: false},
      answer4: {answer: 'With milk and no sugar', selected: false},
      answer5: {answer: 'With cream and no sugar', selected: false},
    },
  ]);
  const [answer, setAnswer] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const {isUser, userData} = route.params;

  const handleTrue = selectedAnswer => {
    const updatedQa = [...qa];
    const currentQuestion = updatedQa[currentIndex];

    Object.keys(currentQuestion).forEach(key => {
      if (
        key.startsWith('answer') &&
        currentQuestion[key].answer === selectedAnswer
      ) {
        currentQuestion[key].selected = true;
      } else if (key.startsWith('answer')) {
        currentQuestion[key].selected = false;
      }
    });

    setQa(updatedQa);
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      navigation.goBack();
    }
  };

  const getSelectedQuestionsAndAnswers = qaArray => {
    return qaArray.map(question => {
      const selectedAnswer = Object.entries(question)
        .filter(([key, value]) => key.startsWith('answer') && value.selected)
        .map(([key, value]) => value.answer)[0];

      return {
        question: question.question,
        answer: selectedAnswer || null,
      };
    });
  };

  const isAnySelected = qa.map(question => {
    return Object.values(question).some(answer => {
      return answer.selected === true;
    });
  });

  const handleConfirm = () => {
    if (isAnySelected[currentIndex]) {
      if (currentIndex < 3) {
        setCurrentIndex(() => currentIndex + 1);
      } else {
        const survey = getSelectedQuestionsAndAnswers(qa);
        userData.userSurvey = survey;
        console.log(userData);
        navigation.navigate('ThankYou', {isUser, userData});
      }
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <Image style={styles.backIcon} source={images.backIcon} />
          </TouchableOpacity>
          <Text style={styles.heading}>Customer Personality</Text>
        </View>

        <View style={styles.indicator}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#287C76', '#60B0AA']}
            style={
              currentIndex === 0
                ? styles.indicatorGradient1
                : currentIndex === 1
                ? styles.indicatorGradient2
                : currentIndex === 2
                ? styles.indicatorGradient3
                : styles.indicatorGradient4
            }></LinearGradient>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.question}>{qa[currentIndex].question}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleTrue(qa[currentIndex].answer1.answer);
            }}>
            {qa[currentIndex].answer1.selected ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.answerContainer2}>
                <Text style={styles.answerText2}>
                  {qa[currentIndex].answer1.answer}
                </Text>
              </LinearGradient>
            ) : (
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>
                  {qa[currentIndex].answer1.answer}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleTrue(qa[currentIndex].answer2.answer);
            }}>
            {qa[currentIndex].answer2.selected ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.answerContainer2}>
                <Text style={styles.answerText2}>
                  {qa[currentIndex].answer2.answer}
                </Text>
              </LinearGradient>
            ) : (
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>
                  {qa[currentIndex].answer2.answer}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleTrue(qa[currentIndex].answer3.answer);
            }}>
            {qa[currentIndex].answer3.selected ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.answerContainer2}>
                <Text style={styles.answerText2}>
                  {qa[currentIndex].answer3.answer}
                </Text>
              </LinearGradient>
            ) : (
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>
                  {qa[currentIndex].answer3.answer}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleTrue(qa[currentIndex].answer4.answer);
            }}>
            {qa[currentIndex].answer4.selected ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.answerContainer2}>
                <Text style={styles.answerText2}>
                  {qa[currentIndex].answer4.answer}
                </Text>
              </LinearGradient>
            ) : (
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>
                  {qa[currentIndex].answer4.answer}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleTrue(qa[currentIndex].answer5.answer);
            }}>
            {qa[currentIndex].answer5.selected ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#287C76', '#60B0AA']}
                style={styles.answerContainer2}>
                <Text style={styles.answerText2}>
                  {qa[currentIndex].answer5.answer}
                </Text>
              </LinearGradient>
            ) : (
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>
                  {qa[currentIndex].answer5.answer}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          <BottomBtnUser title={'Next'} img={true} onPress={handleConfirm} />
        </View>
      </View>
    </SafeAreaView>
  );
}
