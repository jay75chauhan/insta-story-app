import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../components/Header";
import tw from "tailwind-react-native-classnames";
import Stories from "../components/Stories";
import Post from "../components/Post";
export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-black flex-1 pt-10 `}>
      <Header />
      <Stories />
      <Post />
    </SafeAreaView>
  );
}
