import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import LoadingScreen from "./screens/LoadingScreen";
import ResultScreen from "./screens/ResultScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
   
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: "Health Simple"}}
        />
        <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{title: "Health Simple"}}
        />
           <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{title: "Health Simple"}}
        />
          <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{title: "Health Simple"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
     
  );
}
