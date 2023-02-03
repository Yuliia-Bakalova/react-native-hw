import { StyleSheet } from "react-native";

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
    position: "relative",
    paddingTop: 92,
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25, 
  },


  title: {
    fontFamily: "Roboto-Bold",
    fontWight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    marginBottom: 33,    
    color: "#212121",
    textAlign: "center",
     
    },
  
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: 343,  
    height: 50,
    borderRadius: 8,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    
  },
  password: {
    position: "relative",
  },
  showBtn: {
    position: "absolute",
    right: 16,
    top: 14,
  },

  showText: {
    fontFamily: "Roboto-Regular",
     fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    },
  button: {
    width: 343,
    height: 51,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
    alignItems: "center",
    justifyContent: "center",
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
     marginTop: 16,
  },

});