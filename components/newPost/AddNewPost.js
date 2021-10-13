import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { MaterialIcons } from "@expo/vector-icons";
import FormicPostUploader from "./FormicPostUploader";
export default function AddNewPost() {
  return (
    <View>
      <Header />
      <FormicPostUploader />
    </View>
  );
}

const Header = () => (
  <TouchableOpacity
    style={tw`flex-row mb-3 items-center justify-between px-5 border-t border-b border-gray-700 `}
  >
    <MaterialIcons name="keyboard-arrow-left" size={46} color="white" />

    <Text style={tw`text-white text-2xl  mr-28 text-center font-bold`}>
      NEW POST
    </Text>
  </TouchableOpacity>
);
