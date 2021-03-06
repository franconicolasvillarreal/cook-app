import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { BigButton, CommonTextInput, CustomModal } from "./commons";
import { Device, CommonStyles } from "../constants";
import { useDispatch } from "react-redux";
import { updateModal } from "../store/actions/modal.actions";
import { signIn } from "../store/actions/user.actions";

export const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleEmailInputChange = (email) => setEmailInput(email);
  const handlePasswordInputChange = (password) => setPasswordInput(password);

  const handleSignIn = () => {
    if (!emailInput) {
      console.log("ERROR");
      dispatch(
        updateModal({
          texts: {
            title: "Error",
            text: "Email cannot be empty!",
            confirm: "Retry",
          },
          visibility: true,
        })
      );
      return;
    }
    if (!passwordInput) {
      console.log("ERROR");
      dispatch(
        updateModal({
          texts: {
            title: "Error",
            text: "Password cannot be empty!",
            confirm: "Retry",
          },
          visibility: true,
        })
      );
      return;
    }

    dispatch(
      signIn({
        email: emailInput.trim(),
        password: passwordInput.trim(),
      })
    );
  };
  const handleSignUp = () => navigation.navigate("SignUp");

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={CommonStyles.titleStyles}>Welcome!</Text>
      </View>

      <View style={styles.inputsContainer}>
        <CommonTextInput
          placeholder="Email"
          onInputChange={handleEmailInputChange}
          validations={{
            isEmail: true,
            required: true,
          }}
          errorMessage="You must enter a valid email"
        />
        <CommonTextInput
          placeholder="Password"
          onInputChange={handlePasswordInputChange}
          validations={{
            required: true,
          }}
          isSecureTextEntry={true}
          errorMessage="Password is required"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <BigButton text="Sign In" onPress={handleSignIn} />
        <BigButton
          text="I'm not registered yet"
          type="secondary"
          onPress={handleSignUp}
        />
      </View>

      <CustomModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Device.windowHeight,
    marginTop: 30,
    flexDirection: "column",
  },
  titleContainer: {
    marginVertical: 50,
    alignContent: "center",
    alignItems: "center",
  },
  inputsContainer: {
    flex: 6,
  },
  buttonsContainer: {
    flex: 3,
  },
});

export default SignIn;
