import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import * as yup from "yup";
import { Formik } from "formik";
import Validator from "email-validator";

const SignupFormSchema = yup.object().shape({
  email: yup.string().email().required("A email is required"),
  username: yup.string().required().min(2, "A username is required"),
  password: yup
    .string()
    .required()
    .min(6, "Your password has to have at least 8 characters"),
});

export default function SignupForm() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}
