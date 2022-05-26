import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import ListMovies from "./App/screens/ListMovies";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerShown: true,
          headerShadowVisible: true,
          gestureEnabled: false,
        })}
      >
        <Stack.Screen name="ListMovies" component={ListMovies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
