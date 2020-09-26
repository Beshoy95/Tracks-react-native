import React, { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import constants from "expo-constants";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      enabled={Platform.OS === "ios" ? true : false}
    >
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
        clearErrorMessage={clearErrorMessage}
      />
      <NavLink
        text="Don't have an account ? Go back to Sign up ."
        routeName="Signup"
      />
    </KeyboardAvoidingView>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
