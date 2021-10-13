import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import tw from "tailwind-react-native-classnames";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";

const Post = ({ post }) => {
  return (
    <View style={tw`mb-5 border-t-2 border-gray-800 rounded-xl`}>
      {/* <Divider
        width={1}
        orientation="vertical"
        style={{ backgroundColor: "#1c1c1c" }}
      /> */}

      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
      <Likes post={post} />
      <Caption post={post} />
      <CommentSection post={post} />
      <Comments post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={tw`flex-row justify-between m-3 items-center`}>
    <View style={tw`flex-row items-center`}>
      <Image
        source={{
          uri: post.profile_picture,
        }}
        style={[
          tw`h-10 w-10 rounded-full `,
          { borderColor: "#ff8501", borderWidth: 2 },
        ]}
      />
      <Text style={tw`text-white text-lg ml-3 font-semibold`}>{post.user}</Text>
    </View>
    <TouchableOpacity>
      <Entypo name="dots-three-horizontal" size={24} color="white" />
    </TouchableOpacity>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 300 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={[tw`rounded-xl mx-0.5`, { height: "100%", resizeMode: "cover" }]}
    />
  </View>
);

const PostFooter = () => (
  <View style={tw`flex-row justify-between mt-3 mx-3  items-center`}>
    <View style={tw`flex-row items-center`}>
      <TouchableOpacity>
        <AntDesign name="hearto" size={27} color="white" style={tw`mr-4`} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="comment" size={26} color="white" style={tw`mr-3`} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="md-paper-plane-outline" size={27} color="white" />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Feather name="bookmark" size={30} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);

const Likes = ({ post }) => (
  <Text style={tw`text-white mt-1 mx-3 font-bold text-lg  `}>
    {post.likes.toLocaleString("en")} likes
  </Text>
);

const Caption = ({ post }) => (
  <Text style={tw`text-white  mx-3 mt-0.5 `}>
    <Text style={tw`text-white text-base font-bold `}>{post.user}</Text>
    <Text style={tw`text-white text-base`}> {post.caption}</Text>
  </Text>
);

const CommentSection = ({ post }) => (
  <View>
    {!!post.comments.length && (
      <Text style={tw`text-gray-400 mx-3 mt-0.5 text-base`}>
        View {post.comments.length > 1 ? "all" : " "} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <View style={tw` mx-3  `}>
    {post.comments.map((comment, index) => (
      <View style={tw`  mt-0.5 `} key={index}>
        <Text>
          <Text style={tw`text-gray-200 text-sm font-bold `}>
            {comment.user}
          </Text>
          <Text style={tw`text-gray-200 text-sm`}> {comment.comment}</Text>
        </Text>
      </View>
    ))}
  </View>
);

export default Post;
