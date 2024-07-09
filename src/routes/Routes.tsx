import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../scrrens/FirstScreen";
import SecondScreen from "../scrrens/SecondScreen";




const Stack = createNativeStackNavigator();

const Routes = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen
          name="First"
          component={FirstScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{ headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default Routes;