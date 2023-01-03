import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./CreatePostsScreen.styled";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const CreatePostsScreen = () => {
  const keyboardHide = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.photoWrap}>
          <View style={styles.iconWrap}>
            <MaterialIcons name="camera-alt" size={30} color="#BDBDBD" />
          </View>
        </View>
        <Text style={styles.text}>Upload photo</Text>
        <TextInput
          placeholder="Name..."
          placeholderTextColor="#BDBDBD"
          style={styles.input}
        />
        <TextInput
          placeholder="Place..."
          placeholderTextColor="#BDBDBD"
          style={{ ...styles.input, marginBottom: 32 }}
        />

        <TouchableOpacity activeOpacity={0.7} style={styles.publishBtn}>
          <Text style={styles.publishBtnText}>Publish</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
