import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from "../RegistrationScreen/RegistrationScreen.styled"
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { authSingUpUser  } from "../../redux/auth/authOperations";

const initialFormData = {
  name: '',
  email: '',
  password: ''
}

const RegistrationScreen = ({ navigation }) => {
  const image = require("../../assets/image/bgImage.png");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [inputBgColor, setInputBgColor] = useState("#F6F6F6");
  const [inputBorderColor, setInputBorderColor] = useState("#E8E8E8");
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [iconName, setIconName] = useState("pluscircleo");
  const [iconColor, setIconColor] = useState("#FF6C00");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log(formData);
    setFormData(initialFormData);
    dispatch(authSingUpUser(formData));
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
 };

  const onInputFocus = () => {
    setIsShowKeyboard(true);
    setInputBgColor("#ffffff");
    setInputBorderColor("#FF6C00");
  };
  const onInputBlur = () => {
    setInputBgColor("#F6F6F6");
    setInputBorderColor("#E8E8E8");
  };
  const onAddPhoto = () => {
    if (iconName === "pluscircleo") {
      setIconName("closecircleo");
      setIconColor("#E8E8E8");
    } else {
      setIconName("pluscircleo");
      setIconColor("#FF6C00");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
     <Image source={image} style={styles.image} />
        <View
          style={{ ...styles.wrap, paddingBottom: isShowKeyboard ? 0 : 45 }}
        >
          <View style={styles.avatar} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.addBtn}
            onPress={onAddPhoto}
          >
            <AntDesign name={iconName} size={33} color={iconColor} />
          </TouchableOpacity>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
    <View style={{ marginBottom: isShowKeyboard ? 32 : 43 }}>
              <Text style={styles.title}>??????????????????????</Text>
              <TextInput
                style={{
                  ...styles.input,
                  marginBottom: 16,
                  backgroundColor: inputBgColor,
                  borderColor: inputBorderColor,
                }}
                placeholder="??????"
                placeholderTextColor="#BDBDBD"
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                value={formData.login}
                onChangeText={(value) =>
                  setFormData((prevState) => ({ ...prevState, login: value }))
                }
              />
              <TextInput
                style={{
                  ...styles.input,
                  marginBottom: 16,
                  backgroundColor: inputBgColor,
                  borderColor: inputBorderColor,
                }}
                placeholder="?????????? ?????????????????????? ??????????"
                placeholderTextColor="#BDBDBD"
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                value={formData.email}
                onChangeText={(value) =>
                  setFormData((prevState) => ({ ...prevState, email: value }))
                }
              />
              <View>
                <TextInput
                  secureTextEntry={isHidePassword}
                  style={{
                    ...styles.input,
                     backgroundColor: inputBgColor,
                    borderColor: inputBorderColor,
                    position: "relative",
                  }}
     placeholder="????????????"
                  placeholderTextColor="#BDBDBD"
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
    value={formData.password}
                  onChangeText={(value) =>
                     setFormData((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                />
     <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.showBtn}
                  onPress={() => {
                    setIsHidePassword((prevState) => !prevState);
                  }}
     >
                  <Text style={styles.showText}>????????????????</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
          {!isShowKeyboard && (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
             onPress={handleSubmit}
              >
                <Text style={styles.buttonTitle}> ????????????????????????????????????</Text>
              </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.text}>
                 ?????? ???????? ??????????????? ??????????
                </Text>
              </TouchableOpacity>
            </View>
             )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RegistrationScreen;

