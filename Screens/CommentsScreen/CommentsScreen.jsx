import { View, Text, Image,  } from "react-native";
import { styles } from "./CommentsScreen.styled";


const CommentsScreen = ({ route }) => {
  const photo = route.params.item.photo;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: photo }}
        style={{ width: 360, height: 250, borderRadius: 10 }}
      />
      <Text style={styles.comments}> Комментировать</Text>
    </View>
  );
};

export default CommentsScreen;


