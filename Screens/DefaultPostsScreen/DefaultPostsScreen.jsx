import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Text, View, Image, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import db from "../../firebase/config";
import { styles } from "../DefaultPostsScreen/DefaultPostsScreen.styled";


const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const email = useSelector((state) => state.auth.email);
  const login = useSelector((state) => state.auth.login);

  const getAllPost = async () => {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  useEffect(() => {
 getAllPost();
  }, []);
  console.log(posts);
  return (
    <View style={styles.container}>
      <View style={styles.profileWrap}>
        <Image source={require("../../assets/image/User.png")} />
        <View style={styles.textWrap}>
           <Text style={styles.name}>{login} </Text>
          <Text style={styles.email}>{email}</Text>
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
            <Text style={styles.postName}>{item.description}</Text>
            <View style={styles.postLabel}>
              <TouchableOpacity
                style={styles.comments}
                onPress={() =>
                  navigation.navigate("Comments", {
                    item,
                  })
                }
              >
               <Feather
                  name="message-circle"
                  size={24}
                  color={item.commentsCount ? "#FF6C00" : "#BDBDBD"}
                />
                <Text
                  style={{
                    ...styles.commentsCount,
                    color: item.commentsCount ? "#212121" : "#BDBDBD",
                  }}
                >
                  {item.commentsCount ? item.commentsCount : 0}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.place}
               onPress={() =>
                  navigation.navigate("Map", {
                    location: item.location,
                    placeName: item.place,
                  })
                }
              >
                <Feather name="map-pin" size={24} color="#BDBDBD" />
                 <Text style={styles.placeText}>{item.place}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DefaultPostsScreen;