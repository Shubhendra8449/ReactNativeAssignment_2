import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../scrrens/FirstScreen";
import SecondScreen from "../scrrens/SecondScreen";




const Stack = createNativeStackNavigator();

const Routes = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailScreen"
          component={SecondScreen}
          options={{ headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default Routes;