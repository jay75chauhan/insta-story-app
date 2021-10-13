import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import tw from "tailwind-react-native-classnames";
import AddNewPost from "../components/newPost/AddNewPost";
export default function NewPostScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-black pt-10`}>
      <AddNewPost />
    </SafeAreaView>
  );
}
