import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#fff",
  },
   image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontWight: 500,
    fontSize: 30,
     lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 33,
     marginTop: 92,
  },
  wrap: {
      position: "relative",
    paddingTop: 92,
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25, 
  },
  form: {
    marginHorizontal: 16,
    paddingTop: 32,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    height: 50,
    width: 343,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 16,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    
  
  },
   password: {
    position: "relative",
  },
  button: {
     width: 343,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  buttonTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  text: {
     fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
   textAlign: "center",
    color: "#1B4371",
  },
   avatar: {
    zIndex: 1,
    position: "absolute",
    top: -55,
    left: 135,
    backgroundColor: "#f6f6f6",
    height: 120,
    width: 120,
    borderRadius: 16,
  },
   
     addBtn: {
    zIndex: 2,
    position: "absolute",
    top: 21,
    left: 238,
  },
    showBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },

   showText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
    lineHeight: 19,
  },

});