import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import * as yup from "yup";
import { Formik } from "formik";
import validUrl from "valid-url";
import { db, firebase } from "../../firebase";

const PLACEHOLDER_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUl4ztVC9GRwkDkENsJD_oX-hcY_xrAri_QHgu8CVckAwNJi0qAMWKHfeaxSFwb55WNA&usqp=CAU";

const uploadPostSchema = yup.object().shape({
  imageUrl: yup.string().url().required("A URL is required"),
  caption: yup.string().max(2200, "Caption has reached the character"),
});

export default function FormicPostUploader({ navigation }) {
  const [thumbnailsUrl, setThumbnailsUrl] = useState(PLACEHOLDER_URL);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState();

  useEffect(() => {
    setCurrentLoggedInUser({
      username: firebase.auth().currentUser.displayName,
      profilePicture: firebase.auth().currentUser.photoURL,
    });
  }, []);

  console.log(currentLoggedInUser);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);

        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleSubmit,
        handleChange,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={tw`my-5 mx-2 flex-row justify-between border-b border-gray-500 pb-10 `}
          >
            <Image
              source={{ uri: validUrl.isUri(thumbnailsUrl || PLACEHOLDER_URL) }}
              style={{ width: 110, height: 110, borderRadius: 10 }}
            />
            <View
              style={tw`flex-1 ml-4 border border-gray-900 rounded-xl p-2 h-32`}
            >
              <TextInput
                style={tw` text-white text-lg `}
                placeholder="Write a caption... "
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <TextInput
            onChange={(e) => setThumbnailsUrl(e.nativeEvent.text)}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            style={tw` text-white p-2 text-lg mx-2 border border-gray-800 rounded-xl`}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={tw`text-red-600 mx-6`}>{errors.imageUrl}</Text>
          )}
          <View style={tw`mx-28 mt-8 `}>
            <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
          </View>
        </>
      )}
    </Formik>
  );
}
