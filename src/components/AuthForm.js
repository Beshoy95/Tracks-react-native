import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { NavigationEvents } from "react-navigation";

const Authform = ({
  headerText,
  errorMessage,
  submitButtonText,
  onSubmit,
  clearErrorMessage,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>{headerText} </Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          scrollEnabled={false}
        />
      </Spacer>
      <Spacer>
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          scrollEnabled={false}
        />
      </Spacer>
      <Spacer>
        {errorMessage ? (
          <Text style={styles.errorMessage}> {errorMessage}</Text>
        ) : null}
      </Spacer>
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
      <NavigationEvents onWillBlur={clearErrorMessage} />
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 18,
    color: "red",
    marginLeft: 15,
  },
});

export default Authform;
