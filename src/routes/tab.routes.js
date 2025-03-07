import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons'
import Home from "../screens/Home";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name='home' component={Home}
                options={{tabBarIcon:()=><Feather name='home' size={20} />,
                tabBarLabel:"Início",tabBarActiveBackgroundColor:'blue'
            }}
            />
            <Tab.Screen name='login' component={Login}
                options={{tabBarIcon:()=><Feather name='log-in' size={20} />,
                tabBarLabel:"Login",tabBarActiveBackgroundColor:'blue'
            }}
            />
        </Tab.Navigator>
    )
}