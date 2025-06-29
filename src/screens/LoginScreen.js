import React, { useEffect } from "react";
import { View, Button, StyleSheet } from "react-native";
import * as GoogleSignIn from "expo-auth-session/providers/google";
import { useAuthRequest } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ navigation }) {
  const [request, response, promptAsync] = GoogleSignIn.useAuthRequest({
    expoClientId: "YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      navigation.replace("Home");
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={() => promptAsync()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
