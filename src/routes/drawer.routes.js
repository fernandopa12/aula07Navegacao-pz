import { createDrawerNavigator } from "@react-navigation/drawer";
import {Feather} from '@expo/vector-icons'
import Home from "../screens/Home";
import Login from "../screens/Login";
import TabRoutes from "./tab.routes";

const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{title:''}}>
            <Drawer.Screen name='home' component={TabRoutes}
                options={{drawerIcon:()=><Feather name='home' size={20} />,
                drawerLabel:"Início"
            }}
            />
            <Drawer.Screen name='login' component={TabRoutes}
                options={{drawerIcon:()=><Feather name='log-in' size={20} />,
                drawerLabel:"Login"
            }}
            />
        </Drawer.Navigator>
    )
}