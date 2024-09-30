import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export const QuestionsModal = (props) => {
  const showSurvey = props.showSurvey != undefined ? props.showSurvey : false;
  //   const [modalVisible, setModalVisible] = useState(showSurvey);

  const questions = [
    "What is your name?",
    "How old are you?",
    "What is your favorite color?",
    "Where do you live?",
  ];

  return (
    <View style={styles.container}>
      {/* Button to open the modal */}

      {/* Modal Popup */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSurvey}
        onRequestClose={() => {
          props.onClose(!showSurvey);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* <TouchableOpacity
              style={styles.closeButton}
              onPress={() => props.onClose(!showSurvey)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.closeButton}
              style={{
                height: 20,
                width: 20,
                alignSelf: "flex-end",
              }}
              onPress={() => props.onClose(!showSurvey)}
            >
              <Image
                style={{
                  backgroundColor: "red",
                  height: 20,
                  width: 20,
                  marginHorizontal: 5,
                  marginTop: 2,
                  alignSelf: "flex-end",
                }}
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Answer the questions:</Text>
            {/* Display the questions */}
            {questions.map((question, index) => (
              <Text key={index} style={styles.questionText}>
                {index + 1}. {question}
              </Text>
            ))}
            {/* Close modal button */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default QuestionsModal;
