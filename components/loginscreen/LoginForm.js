import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
export default function LoginForm() {
  return (
    <View style={tw`mt-12`}>
      <View style={tw`border border-gray-300 p-2 rounded-xl mx-5`}>
        <TextInput
          style={tw`text-white text-lg ml-2`}
          placeholderTextColor="#445"
          placeholder="Phone number, username or email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
      </View>
      <View style={tw`border border-gray-300 p-2 rounded-xl mt-7 mx-5`}>
        <TextInput
          style={tw`text-white text-lg ml-2`}
          placeholderTextColor="#445"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
        />
      </View>
      <View style={tw`mt-10 mx-20`}>
        <Button title="Log in" />
      </View>
    </View>
  );
}
