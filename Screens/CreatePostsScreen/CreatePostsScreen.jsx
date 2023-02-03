import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { styles } from "./CreatePostsScreen.styled";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";


const initialState = {
  name: "",
  place: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [state, setState] = useState(initialState);
  const [location, setLocation] = useState(null);
  const [publishBtnColor, setPublishBtnColor] = useState("#f6f6f6");
  const [publishBtnColorText, setPublishBtnColorText] = useState("#BDBDBD");

  useEffect(() => {
    (async () => {
      let { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

const takePhoto = async () => {
    const snap = await camera.takePictureAsync();
    setPublishBtnColor("#FF6C00");
    setPublishBtnColorText("#FFF");
    const loc = await Location.getCurrentPositionAsync();
    setPhoto(snap.uri);
    console.log(loc);
    setLocation(loc.coords);
  };

  const sendPhoto = () => {
    navigation.navigate("DefaultPostsScreen", { photo, state, location });
    setState(initialState);
    setPhoto(null);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Camera style={styles.photoWrap} ref={setCamera}>
          {photo && (
            <View style={styles.takePhotoWrap}>
              <Image
                source={{ uri: photo }}
                style={{ height: 240, width: 360 }}
              />
            </View>
          )}

          <TouchableOpacity style={styles.iconWrap} onPress={takePhoto}>
            <MaterialIcons name="camera-alt" size={30} color="#BDBDBD" />
         </TouchableOpacity>
        </Camera>
        <Text style={styles.text}>Загрузите фото</Text>
        <TextInput
          placeholder="Название..."
          placeholderTextColor="#BDBDBD"
          style={styles.input}
          value={state.name}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, name: value }))
          }
        />
        <TextInput
          placeholder="Местность..."
          placeholderTextColor="#BDBDBD"
          style={{ ...styles.input, marginBottom: 32 }}
           value={state.place}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, place: value }))
          }
        />

        <TouchableOpacity
          onPress={sendPhoto}
          activeOpacity={0.7}
          style={{ ...styles.publishBtn, backgroundColor: publishBtnColor }}
        >
          <Text
            style={{ ...styles.publishBtnText, color: publishBtnColorText }}
          >
            Опубликовать
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
