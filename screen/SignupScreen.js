import React from "react";
import { View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import SignupForm from "../components/signupScreen/SignupForm";
export default function SignupScreen({ navigation }) {
  return (
    <View style={tw`flex-1 bg-black  `}>
      <View style={tw`items-center mt-24`}>
        <Image
          source={require("../assets/instagram.png")}
          style={tw`h-24 w-24`}
        />
      </View>
      <SignupForm navigation={navigation} />
    </View>
  );
}
