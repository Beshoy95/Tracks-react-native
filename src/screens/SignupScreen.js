import React, { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import constants from "expo-constants";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      enabled={Platform.OS === "ios" ? true : false}
    >
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
        clearErrorMessage={clearErrorMessage}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account ? Sign In instead !"
      />
    </KeyboardAvoidingView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: constants.statusBarHeight,
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default SignupScreen;
