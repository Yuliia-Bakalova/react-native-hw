import { useState,  useCallback, } from "react";
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
 StyleSheet
} from "react-native";
// import { styles } from "../LoginScreen/LoginScreen.styles";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const initialFormData = {
    email: "",
    password: "",
  };


export default   function LoginScreen  ()  {
  const image = require("../../assets/image/bgImage.png");
  const [formData, setFormData] = useState(initialFormData);
const [keyboardShown, setKeyboardShown] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [inputBgColor, setInputBgColor] = useState("#F6F6F6");
  const [inputBorderColor, setInputBorderColor] = useState("#E8E8E8");
  
  const [fontsLoaded] = useFonts({
      "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

 if (!fontsLoaded) {
    return null;
  }

 
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

     const onInputFocus = () => {
    setKeyboardShown(true);
    setInputBgColor("#ffffff");
    setInputBorderColor("#FF6C00");
  };

  const onInputBlur = () => {
    setInputBgColor("#F6F6F6");
    setInputBorderColor("#E8E8E8");
  };



  const toggleSecureText = () => {
    setIsHidePassword(!isHidePassword);
  };

 

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
       <ImageBackground source={image} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.wrap,
                paddingBottom: keyboardShown ? 20 : 143,
              }}
            >
              <Text style={styles.title}>Войти</Text>
              <View style={{ marginBottom: 16 }}>
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
              </View>
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
                  onPress={toggleSecureText}
                >
                  <Text style={styles.showText}>Показать</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonTitle}>Войти</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.text}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );

};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },

    wrap: {
    position: "relative",
    paddingTop: 92,
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25, 
  },


  title: {
    fontFamily: "Roboto-Bold",
    fontWight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    marginBottom: 33,    
    color: "#212121",
    textAlign: "center",
     
    },
  
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: 343,  
    height: 50,
    borderRadius: 8,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    
  },
  password: {
    position: "relative",
  },
  showBtn: {
    position: "absolute",
    right: 16,
    top: 14,
  },

  showText: {
    fontFamily: "Roboto-Regular",
     fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    },
  button: {
    width: 343,
    height: 51,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },

  text: {
    fontFamily: "Roboto",
    fontSize: 16,
      lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
     marginTop: 16,
  },

});