import React from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import styles from '../styles/styles';

const CustomModal = ({ visible, score, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>Fim do Quiz!</Text>
        <Text style={styles.modalText}>Você Acertou!</Text>
        <Text style={styles.modalScore}>{score}</Text>
        <Pressable
          style={[styles.button, styles.modalButton]}
          onPress={onClose}>
          <Text style={styles.buttonText}>Tentar Novamente</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default CustomModal;
