import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"; 
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import db from "../../firebase/config";
import { styles } from "./CommentsScreen.styled";


const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState(null);
  const photo = route.params.item.photo;
  const postId = route.params.item.id;
  const login = useSelector((state) => state.auth.login);
  const item = route.params.item;

  useEffect(() => {
    getAllPosts();
  }, []);

  const createPost = async () => {
    console.log(item);
    const date = new Date().toLocaleString();
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({ comment, login, date });
    setComment("");
    db.firestore()
      .collection("posts")
      .doc(postId)
      .set({ ...item, commentsCount: allComments.length + 1 });
  };

  const getAllPosts = async () => {
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((data) =>
        setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };
  return (
    <View style={styles.container}>
       <Image source={{ uri: photo }} style={styles.image} />
      <SafeAreaView style={styles.container2}>
        <FlatList
          data={allComments}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.commentContainer}>
                <Text>{item.login}</Text>
                <Text>{item.comment}</Text>
                <Text>{item.date}</Text>
              </View>
              <View style={styles.avatar}></View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <View>
        <TextInput
          value={comment}
          onChangeText={setComment}
          placeholder="Comment.."
          placeholderTextColor="#BDBDBD"
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={createPost}>
          <Feather name="arrow-up" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      </View>
  );
};

export default CommentsScreen;


