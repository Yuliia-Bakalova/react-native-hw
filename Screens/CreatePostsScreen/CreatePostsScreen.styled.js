import { StyleSheet } from "react-native-web"; 

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    paddingVertical: 32,
    backgroundColor: "#ffffff",
  },
  photoWrap: {
    width: 360,
    height: 240,
    backgroundColor: "#F6F6F6",
    borderColor: "E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  iconWrap: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 32,
  },
  input: {
    height: 50,
    width: 343,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  publishBtn: {
    width: 343,
    height: 51,
    backgroundColor: "#f6f6f6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  publishBtnText: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },
});


