import { View, StyleSheet } from 'react-native';
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
// import LoginScreen from "./Screens/LoginScreen/LoginScreen";

export default function App() {

 
  return (
    <View style={styles.container}>
      {/* <LoginScreen/> */}
      <RegistrationScreen/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});