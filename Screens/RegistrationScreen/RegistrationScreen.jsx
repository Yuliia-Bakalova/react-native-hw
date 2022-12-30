import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./RegistrationScreen.styled";

const initialFormData = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [formData, setFormData] = useState(initialFormData);
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [iconName, setIconName] = useState("pluscircleo");
  const [iconColor, setIconColor] = useState("#FF6C00");
  const [inputBgColor, setInputBgColor] = useState("#F6F6F6");
  const [inputBorderColor, setInputBorderColor] = useState("#E8E8E8");
  const [isHidePassword, setIsHidePassword] = useState(true);

   const keyboardHide = () => {
    setKeyboardShown(false);
    Keyboard.dismiss();

  };
  
  const handleSubmit = () => {
    setKeyboardShown(false);
    Keyboard.dismiss();
    console.log(formData);
    setFormData(initialFormData);
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

    const onInputFocus = () => {
    setKeyboardShown(true);
    setInputBgColor("#ffffff");
    setInputBorderColor("#FF6C00");
  };

  const onInputBlur = () => {
    setInputBgColor("#F6F6F6");
    setInputBorderColor("#E8E8E8");
  };

  return (
       <TouchableWithoutFeedback onPress={keyboardHide}>
    <View style={styles.container}>
   
        <ImageBackground
          style={styles.image}
          source={require("../../assets/image/bgImage.png")}
        >
          <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <View style={styles.wrap}>

<View style={styles.avatar} />
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.addBtn}
                onPress={onAddPhoto}
              >
                <AntDesign name={iconName} size={33} color={iconColor} />
              </TouchableOpacity>
              <View
                style={{
                  ...styles.form,
                  marginBottom: keyboardShown ? 32 : 78,
                }}
              >
                <Text style={styles.title}>Регистрация</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Имя"
                  placeholderTextColor="#BDBDBD"
                 onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  value={formData.name}
                  onChangeText={(value) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      name: value,
                    }))
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Адрес электронной почты"
                  placeholderTextColor="#BDBDBD"
                 onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  value={formData.email}
                  onChangeText={(value) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      email: value,
                    }))
                  }
                />
                <View style={styles.password}>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={true}
                 onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  value={formData.password}
                  onChangeText={(value) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      password: value,
                    }))
                  }
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.showBtn}
                    onPress={() => {
                      setIsHidePassword((prevFormData) => !prevFormData);
                    }}
                  >
                    <Text style={styles.showText}>Показать</Text>
                </TouchableOpacity>
                </View>
                
                  <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
                </TouchableOpacity>
                <TouchableOpacity>
 <Text style={styles.text}>Уже есть аккаунт? Войти</Text>

                </TouchableOpacity>
                 
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
 
      <StatusBar style="auto" />
    </View >
           </TouchableWithoutFeedback>
  );
}







