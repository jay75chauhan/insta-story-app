import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import * as yup from "yup";
import { Formik } from "formik";
import Validator from "email-validator";

const LoginFormSchema = yup.object().shape({
  email: yup.string().email().required("A email is required"),
  password: yup
    .string()
    .required()
    .min(6, "Your password has to have at least 8 characters"),
});

export default function LoginForm() {
  return (
    <View style={tw`mt-10`}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleBlur, handleSubmit, handleChange, values, isValid }) => (
          <>
            <View
              style={tw`border  ${
                values.email.length < 1 || Validator.validate(values.email)
                  ? `border-gray-400`
                  : `border-red-500`
              } p-2 rounded-xl mx-5`}
            >
              <TextInput
                style={tw`text-white text-lg ml-2`}
                placeholderTextColor="#445"
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={tw`border  ${
                1 > values.password.length || values.password.length >= 6
                  ? `border-gray-400`
                  : `border-red-500`
              } p-2 rounded-xl mt-7 mx-5`}
            >
              <TextInput
                style={tw`text-white text-lg ml-2`}
                placeholderTextColor="#445"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={tw`items-end p-2 mr-5 `}>
              <Text style={tw`text-blue-400`}>Forgot Password?</Text>
            </View>
            <View style={tw`mt-6 mx-8`}>
              <Button
                title="Log in"
                onPress={handleSubmit}
                buttonStyle={tw`${
                  isValid ? `bg-blue-500` : `bg-blue-300`
                } rounded-xl   `}
              />
            </View>
            <View style={tw`flex-row justify-center mt-8`}>
              <Text style={tw`text-white`}>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={tw`text-blue-500`}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
