import { StyleSheet } from "react-native-web"; 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    position: "absolute",
    width: "100%",
    top: 0,
  },

  wrap: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    height: 600,
    paddingHorizontal: 16,
  },
  avatar: {
    zIndex: 1,
    position: "absolute",
    top: -55,
    left: 135,

    height: 120,
    width: 120,
    borderRadius: 16,
  },

  title: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    fontWight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginTop: 92,
    marginBottom: 32,
  },

  addBtn: {
    zIndex: 2,
    position: "absolute",
    top: 21,
    left: 238,
  },
  exitBtn: {
    zIndex: 2,
    position: "absolute",
    top: 25,
    right: 10,
  },
});