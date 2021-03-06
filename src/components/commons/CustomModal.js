import React from "react";
import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors, Device } from "../../constants";
import { updateModal } from "../../store/actions/modal.actions";

export const CustomModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal);
  return (
    <Modal
      animationType="slide"
      visible={modalState.visibility}
      transparent={true}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{modalState.texts.title}</Text>
        <Text style={styles.text}>{modalState.texts.text}</Text>
        <View style={styles.pressablesContainer}>
          <Pressable style={styles.pressable}>
            <Text style={styles.pressableText}></Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() =>
              dispatch(
                updateModal({
                  texts: {
                    title: "",
                    text: "",
                    confirm: "",
                  },
                  visibility: false,
                })
              )
            }
          >
            <Text style={styles.pressableText}>{modalState.texts.confirm}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: Device.windowHeight / 4,
    marginTop: (Device.windowHeight / 4) * 3,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
    marginHorizontal: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
    flexDirection: "column",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 22,
    flex: 1,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: Colors.complementary,
    textAlign: "center",
    width: "100%",
  },
  pressablesContainer: {
    flex: 1,
    flexDirection: "row",
  },
  pressable: {
    flex: 1,
    padding: 15,
    width: "100%",
  },
  pressableText: {
    textAlign: "center",
    color: Colors.primary,
    fontFamily: "Roboto-Medium",
    fontSize: 18,
  },
});

export default CustomModal;
