import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Perfil from "../screens/Perfil";

const Stack = createNativeStackNavigator()

export default function StackRoutes() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }}>
                <Stack.Screen name="stackHome" component={Home} />
                <Stack.Screen name="stackLogin" component={Login} />
                <Stack.Screen name='stackPerfil' component={Perfil} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}