import React from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import LoginForm from "../components/loginscreen/LoginForm";

export default function LoginScreen({ navigation }) {
  return (
    <View style={tw`flex-1 bg-black  `}>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <View style={tw`items-center mt-28`}>
          <Image
            source={require("../assets/instagram.png")}
            style={tw`h-24 w-24`}
          />
        </View>
        <LoginForm navigation={navigation} />
      </KeyboardAvoidingView>
    </View>
  );
}
