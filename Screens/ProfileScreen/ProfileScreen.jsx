import { Text, View, TouchableOpacity, Image,  FlatList, } from "react-native";
import { styles } from "./ProfileScreen.styled";
import { AntDesign, Feather } from "@expo/vector-icons";
import { authSingOutUser  } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "../../firebase/config";

const ProfileScreen = ({ navigation }) => {
  const [userPosts, setUserPosts] = useState([]);
  const image = require("../../assets/image/bgImage.png");
 const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    getUserPosts();
  }, []);

  getUserPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .where("userId", "==", userId)
      .onSnapshot((data) =>
        setUserPosts(data.docs.map((doc) => ({ ...doc.data() })))
      );
  };

  const signOut = () => {
    dispatch(authSingOutUser ());
  };
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.wrap}>
       
        <Image
          style={styles.avatar}
          source={require("../../assets/image/User2.png")}
        />
        <TouchableOpacity
          onPress={signOut}
          activeOpacity={0.8}
          style={styles.exitBtn}
        >
          <AntDesign name="closecircleo" size={30} color="#8b0000" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.exitBtn}>
          <Feather name="log-out" size={27} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={styles.title}>Natali Romanova</Text>
         <FlatList
          data={userPosts}
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
                  onPress={() => navigation.navigate("Comments", { item })}
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
    </View>
  );
};

export default ProfileScreen;

