import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../components/home/Header";
import tw from "tailwind-react-native-classnames";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/post";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
import { StatusBar } from "expo-status-bar";
import { db } from "../firebase";

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collectionGroup("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, [posts]);

  return (
    <SafeAreaView style={tw`bg-black flex-1 pt-10 `}>
      <StatusBar style="light" />
      <Header navigation={navigation} />
      <Stories posts={posts} />
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
}
