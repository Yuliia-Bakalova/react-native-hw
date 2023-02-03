import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { styles } from "./ProfileScreen.styled";
import { AntDesign, Feather } from "@expo/vector-icons";



const ProfileScreen = () => {
  const image = require("../../assets/image/bgImage.png");

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.wrap}>
        <View />
        <Image
          style={styles.avatar}
          source={require("../../assets/image/User2.png")}
        />
        <TouchableOpacity activeOpacity={0.8} style={styles.addBtn}>
          <AntDesign name="closecircleo" size={30} color="#8b0000" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.exitBtn}>
          <Feather name="log-out" size={27} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={styles.title}>Natali Romanova</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

