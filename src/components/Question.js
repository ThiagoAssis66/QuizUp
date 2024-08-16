import React from 'react';
import { Text } from 'react-native';
import styles from '../styles/styles';

const Question = ({ text }) => {
  return <Text style={styles.question}>{text}</Text>;
};

export default Question;
