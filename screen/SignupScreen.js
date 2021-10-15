import React from "react";
import { View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import SignupForm from "../components/signupScreen/SignupForm";
export default function SignupScreen() {
  return (
    <View style={tw`flex-1 bg-black  `}>
      <View style={tw`items-center mt-20`}>
        <Image
          source={require("../assets/instagram.png")}
          style={tw`h-28 w-28`}
        />
      </View>
      <SignupForm />
    </View>
  );
}
