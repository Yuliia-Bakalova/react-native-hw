import { useEffect, useState } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../DefaultPostsScreen/DefaultPostsScreen.styled";
const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(posts);
  return (
    <View style={styles.container}>
      <View style={styles.profileWrap}>
        <Image source={require("../../assets/image/User.png")} />
        <View style={styles.textWrap}>
          <Text style={styles.name}>Natali Romanova </Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.postWrap}>
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200, borderRadius: 10 }}
            />
            <Text style={styles.postName}>{item.state.name}</Text>
            <View style={styles.postLabel}>
              <TouchableOpacity
                style={styles.comments}
                onPress={() => navigation.navigate("Comments", { item })}
              >
                <Feather name="message-circle" size={24} color="#BDBDBD" />
                <Text style={styles.commentsCount}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.place}
                onPress={() => navigation.navigate("Map", { item })}
              >
                <Feather name="map-pin" size={24} color="#BDBDBD" />
                <Text style={styles.placeText}>{item.state.place}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DefaultPostsScreen;