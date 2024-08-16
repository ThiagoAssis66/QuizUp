import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, Animated, Easing, Modal, Pressable } from 'react-native';




import Question from './Question'
import AnswerButton from './AnswerButton'
import CustomModal from './Modal'
import { shuffle } from '../utils/shuffle'
import { validateQuestions } from '../utils/validateQuestions'
import styles from '../styles/styles'
import questions from '../data/questions.json'


const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timer, setTimer] = useState(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;

  if (!validateQuestions(questions)) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Erro: Dados de perguntas inválidos!</Text>
      </View>
    );
  }

  const startQuiz = () => {
    const shuffled = shuffle([...questions]);
    const questionsWithShuffledAnswers = shuffled.map((question) => ({
      ...question,
      answers: shuffle([...question.answers]),
    }));

    setShuffledQuestions(questionsWithShuffledAnswers);
    setCurrentQuestionIndex(0);
    setTimeLeft(60);

    const newTimer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(newTimer);
          setModalVisible(true);
          setCurrentQuestionIndex(null);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    setTimer(newTimer);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        slideAnim.setValue(100);
      });
    } else {
      setModalVisible(true);
      setCurrentQuestionIndex(null);
    }
  };

  const restartQuiz = () => {
    clearInterval(timer);
    setModalVisible(false);
    setScore(0);
    setShuffledQuestions([]);
    setCurrentQuestionIndex(null);
    setTimeLeft(60);
    fadeAnim.setValue(0);
    slideAnim.setValue(100);
  };

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  if (currentQuestionIndex === null) {
    return (
      <View style={styles.containerHome}>       
       
        <Text style={styles.title}>Bem-vindo ao Quiz!</Text>       
          <Pressable onPress={startQuiz} style={styles.startButton}>
            <Text style={styles.startButtonText}>Iniciar</Text>
          </Pressable>
          <Pressable onPress={startQuiz} style={styles.startButton}>
            <Text style={styles.startButtonText}>Resultado</Text>
          </Pressable>
      </View>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        Tempo {Math.floor(timeLeft / 60)}:
        {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
      </Text>
      <Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
        <Question text={currentQuestion.question} />
        <FlatList
          data={currentQuestion.answers}
          keyExtractor={(item) => item.text}
          renderItem={({ item }) => (
            <AnswerButton
              text={item.text}
              onPress={() => handleAnswer(item.isCorrect)}
            />
          )}
        />
      </Animated.View>
      <CustomModal
        visible={modalVisible}
        score={score}
        onClose={restartQuiz}
      />
    </View>
  );
};

export default Index;
