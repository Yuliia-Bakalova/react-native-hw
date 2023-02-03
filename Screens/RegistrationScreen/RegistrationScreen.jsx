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
   Image,
} from 'react-native';
import {styles} from "../RegistrationScreen/RegistrationScreen.styled"
import { AntDesign } from "@expo/vector-icons";


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

  const handleSubmit = () => {
    console.log(formData);
    setFormData(initialState);
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
              <Text style={styles.title}>Регистрация</Text>
              <TextInput
                style={{
                  ...styles.input,
                  marginBottom: 16,
                  backgroundColor: inputBgColor,
                  borderColor: inputBorderColor,
                }}
                placeholder="Имя"
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
    value={state.password}
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
                  <Text style={styles.showBtnText}>Показать</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
          {!isShowKeyboard && (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
             onPress={handleSubmit}
              >
                <Text style={styles.btnText}> Зарегистрироваться</Text>
              </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.text}>
                 Уже есть аккаунт? Войти
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



// const RegistrationScreen=() => {
//    const [formData, setFormData] = useState(initialFormData);
//   const [keyboardShown, setKeyboardShown] = useState(false);
//   const [iconName, setIconName] = useState("pluscircleo");
//   const [iconColor, setIconColor] = useState("#FF6C00");
//   const [inputBgColor, setInputBgColor] = useState("#F6F6F6");
//   const [inputBorderColor, setInputBorderColor] = useState("#E8E8E8");
//   const [isHidePassword, setIsHidePassword] = useState(true);

//   const [fontsLoaded] = useFonts({
//       "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
//     "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//  if (!fontsLoaded) {
//     return null;
//   }

//    const navigation = useNavigation();

// const handleSubmit = () => {
//     console.log(formData);

//   navigation.navigate("Home");
//     setFormData(initialFormData);
//   };

//    const onAddPhoto = () => {
//     if (iconName === "pluscircleo") {
//       setIconName("closecircleo");
//       setIconColor("#E8E8E8");
//     } else {
//       setIconName("pluscircleo");
//       setIconColor("#FF6C00");
//     }
//   };

//     const onInputFocus = () => {
//     setKeyboardShown(true);
//     setInputBgColor("#ffffff");
//     setInputBorderColor("#FF6C00");
//   };

//   const onInputBlur = () => {
//     setInputBgColor("#F6F6F6");
//     setInputBorderColor("#E8E8E8");
//   };
//   ///////////////////////////////////////////

//   const keyboardHide = () => {
//     Keyboard.dismiss();
    
//   }






//   return (
//     <TouchableWithoutFeedback onPress={keyboardHide}>
//       <View style={styles.container} onLayout={onLayoutRootView}>
//         <Image
//           style={styles.image}
//           source={require("../../assets/image/bgImage.png")}
//         />
//           <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"}>
//             <View style={styles.wrap}>

// <View style={styles.avatar} />
//               <TouchableOpacity
//                 activeOpacity={0.8}
//                 style={styles.addBtn}
//                 onPress={onAddPhoto}
//               >
//                 <AntDesign name={iconName} size={33} color={iconColor} />
//               </TouchableOpacity>
//               <View
//                 style={{
//                   ...styles.form,
//                   marginBottom: keyboardShown ? 32 : 78,
//                 }}
//               >
//                 <Text style={styles.title}>Регистрация</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Имя"
//                   placeholderTextColor="#BDBDBD"
//                  onFocus={onInputFocus}
//                   onBlur={onInputBlur}
//                   value={formData.name}
//                   onChangeText={(value) =>
//                     setFormData((prevFormData) => ({
//                       ...prevFormData,
//                       name: value,
//                     }))
//                   }
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Адрес электронной почты"
//                   placeholderTextColor="#BDBDBD"
//                  onFocus={onInputFocus}
//                   onBlur={onInputBlur}
//                   value={formData.email}
//                   onChangeText={(value) =>
//                     setFormData((prevFormData) => ({
//                       ...prevFormData,
//                       email: value,
//                     }))
//                   }
//                 />
//                 <View style={styles.password}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Пароль"
//                   placeholderTextColor="#BDBDBD"
//                   secureTextEntry={true}
//                  onFocus={onInputFocus}
//                   onBlur={onInputBlur}
//                   value={formData.password}
//                   onChangeText={(value) =>
//                     setFormData((prevFormData) => ({
//                       ...prevFormData,
//                       password: value,
//                     }))
//                   }
//                 />
//                 <TouchableOpacity
//                     activeOpacity={0.7}
//                     style={styles.showBtn}
//                     onPress={() => {
//                       setIsHidePassword((prevFormData) => !prevFormData);
//                     }}
//                   >
//                     <Text style={styles.showText}>Показать</Text>
//                 </TouchableOpacity>
//                 </View>
                
//                   <TouchableOpacity
//                     style={styles.button}
//                     activeOpacity={0.8}
//                     onPress={handleSubmit}
//                   >
//                     <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                 activeOpacity={0.7}
//                 onPress={() => navigation.navigate("Login")}>
//  <Text style={styles.text}>Уже есть аккаунт? Войти</Text>

//                 </TouchableOpacity>
                 
//               </View>
//             </View>
//           </KeyboardAvoidingView>
        
 
//       <StatusBar style="auto" />
//     </View >
//            </TouchableWithoutFeedback>
//   );
// }


// export default RegistrationScreen;

