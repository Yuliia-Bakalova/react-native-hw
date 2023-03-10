import { StyleSheet } from "react-native-web"; 

 export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
     paddingTop: 32,
    paddingBottom: 15,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  image: {
    width: 360,
    height: 250,
    borderRadius: 10,
    marginBottom: 32,
  },
  container2: {
    flex: 1,
  },
  commentContainer: {
    width: 300,
    height: 103,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginHorizontal: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#F6F6F6",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  comments: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Roboto-Regular",
   },
  avatar: {
    width: 30,
    height: 30,
    backgroundColor: "#e8e8e8",
    borderRadius: 50,
  },
  input: {
    fontFamily: "Roboto-Regular",
    height: 50,
    borderRadius: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    paddingLeft: 15,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    position: "relative",
  },
  sendBtn: {
    position: "absolute",
    width: 37,
    height: 37,
    borderRadius: 50,
    backgroundColor: "#ff6c00",
    top: 6,
    left: 315,
    alignItems: "center",
    justifyContent: "center",
  },
});