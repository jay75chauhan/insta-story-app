import React from "react";
import { View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import LoginForm from "../components/loginscreen/LoginForm";

export default function LoginScreen() {
  return (
    <View style={tw`flex-1 bg-black  `}>
      <View style={tw`items-center mt-28`}>
        <Image
          source={require("../assets/instagram.png")}
          style={tw`h-32 w-32`}
        />
      </View>
      <LoginForm />
    </View>
  );
}
