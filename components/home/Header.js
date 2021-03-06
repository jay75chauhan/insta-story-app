import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { firebase } from "../../firebase";

export default function Header({ navigation }) {
  return (
    <View style={tw`flex-row mt-3 items-center justify-between px-3`}>
      <TouchableOpacity onPress={() => firebase.auth().signOut()}>
        <Image
          style={tw`w-36 h-12`}
          source={require(`../../assets/header-logo.png`)}
        />
      </TouchableOpacity>

      <View style={tw`flex-row`}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <AntDesign
            name="pluscircleo"
            size={28}
            color="white"
            style={tw`ml-4`}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5
            name="heartbeat"
            size={28}
            color="white"
            style={tw`ml-4`}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={[
              tw`absolute z-10 px-1 rounded-full left-7  bottom-5`,
              { backgroundColor: "#FF3250" },
            ]}
          >
            <Text style={tw`text-white font-semibold`}>12</Text>
          </View>
          <AntDesign name="message1" size={28} color="white" style={tw`ml-4`} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
