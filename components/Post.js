import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

export default function Post() {
  return (
    <View>
      <Divider />
      <Text style={tw`text-white`}>hiii</Text>
    </View>
  );
}
