import { Text, View, Image, StyleSheet } from "react-native";
import { styles } from "./PostsScreen.styled";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrap}>
        <Image source={require("../../assets/image/User.png")} />
        <View style={styles.textWrap}>
          <Text style={styles.name}>Natali Romanova </Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;

