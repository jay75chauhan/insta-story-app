import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../components/home/Header";
import tw from "tailwind-react-native-classnames";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/post";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-black flex-1 pt-10 `}>
      <StatusBar />
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
}
