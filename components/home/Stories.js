import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { USERS } from "../../data/users";

export default function Stories({ posts }) {
  return (
    <View style={tw`my-3 px-1 rounded-b-3xl`}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={tw`items-center mx-1  `}>
            <Image
              source={{
                uri: story.images,
              }}
              style={[
                tw`w-16 h-16 rounded-full   `,
                { borderColor: "#ff8501", borderWidth: 3 },
              ]}
            />
            <Text style={tw`text-white text-center`}>
              {story.name.length > 8
                ? story.name.slice(0, 8).toLowerCase() + "..."
                : story.name.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
