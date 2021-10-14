import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { MaterialIcons } from "@expo/vector-icons";
import FormicPostUploader from "./FormicPostUploader";
export default function AddNewPost({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <FormicPostUploader navigation={navigation} />
    </View>
  );
}

const Header = ({ navigation }) => (
  <View
    onPress={() => navigation.goBack()}
    style={tw`flex-row mb-3 items-center justify-between px-5 border-t border-b border-gray-700 `}
  >
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <MaterialIcons name="keyboard-arrow-left" size={46} color="white" />
    </TouchableOpacity>

    <Text style={tw`text-white text-2xl  mr-28 text-center font-bold`}>
      NEW POST
    </Text>
  </View>
);
