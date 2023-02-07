import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import Home from "../Screens/Home/Home";
import RegistrationScreen from "../Screens/RegistrationScreen/RegistrationScreen";
import { authStateChangeUser } from "../redux/auth/authOperations";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import db from "../firebase/config";
import PostsScreen from "../Screens/PostsScreen/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const MainTab = createBottomTabNavigator();

const AuthStack = createStackNavigator();

const useRoute = (isAuth) => {
    if(!isAuth){
      return <AuthStack.Navigator>
      <AuthStack.Screen options={{
        headerShown: false,
       }}
       name='Login' component={LoginScreen} />
      <AuthStack.Screen options={{
        headerShown: false,
       }}
      name='Register' component={RegistrationScreen} />
     </AuthStack.Navigator>
    }
    return <MainTab.Navigator initialRouteName='Posts'
    screenOptions={{
        tabBarstyle: {
            height: 80,
            paddingHorizontal: 60,
            paddingTop: 9,
            paddingBottom: 25,
        },
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "#124250",
        tabBarShowLabel: false,
    }}>
    <MainTab.Screen options={{
         headerShown: false, tabBarIcon: ({focused, color, size}) => <Ionicons name="grid-outline" size={size} color={color} />,
        }} name='Posts' component={PostsScreen}/>
    <MainTab.Screen options={{
         headerShown: false, tabBarIcon: ({focused, color, size}) => <AntDesign name="pluscircleo" size={35} color="#FF6C00" />,
        }} name='Create' component={CreatePostsScreen}/>
    <MainTab.Screen options={{
         headerShown: false, tabBarIcon: ({focused, color, size}) => <AntDesign name="user" size={size} color={color} />,
        }} name='Profile' component={ProfileScreen}/>
  </MainTab.Navigator> 
  }

const Main = () => {
    // const [user, setUser] = useState(null);
    const { stateChange } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // db.auth().onAuthStateChanged((user) => setUser(user));
    const routing = useRoute(stateChange);
    useEffect(() => {
        dispatch(authStateChangeUser());
    }, []);
return (
    <NavigationContainer>{routing}</NavigationContainer>
)
}

export default Main;

