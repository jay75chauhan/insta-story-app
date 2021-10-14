import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import tw from "tailwind-react-native-classnames";
import AddNewPost from "../components/newPost/AddNewPost";
export default function NewPostScreen({ navigation }) {
  return (
    <SafeAreaView style={tw`flex-1 bg-black pt-14`}>
      <StatusBar style="light" />
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
}
