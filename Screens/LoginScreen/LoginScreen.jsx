import {useState} from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "../LoginScreen/LoginScreen.styled";

const initialFormData = {
    email: "",
    password: "",
  };

  const LoginScreen = ({ navigation }) => {
  const image = require("../../assets/image/bgImage.png");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [inputBgColor, setInputBgColor] = useState("#F6F6F6");
  const [inputBorderColor, setInputBorderColor] = useState("#E8E8E8");
  const [isHidePassword, setIsHidePassword] = useState(true);

  const handleSubmit = () => {
    console.log(formData);
    setFormData(initialFormData);
    navigation.navigate("Home");
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
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View
          style={{ ...styles.wrap, paddingBottom: isShowKeyboard ? 0 : 111 }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={{ marginBottom: isShowKeyboard ? 32 : 43 }}>
              <Text style={styles.title}>Войти</Text>
              <TextInput
                style={{
                  ...styles.input,
                  marginBottom: 16,
                  backgroundColor: inputBgColor,
                  borderColor: inputBorderColor,
                }}
                placeholder="Адрес электронной почты"
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
                 placeholder="Пароль"
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
                  <Text style={styles.showText}>Показать</Text>
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
                 <Text style={styles.buttonTitle}> Войти </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={styles.text}>Нет аккаунта? Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
              )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;

