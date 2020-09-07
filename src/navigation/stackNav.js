import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {createStackNavigator} from "@react-navigation/stack"

// import component
import Login from "../screen/login"
import TabNav from "./tabNav"
import SplashScreen from "../screen/splash"
import { keepLogin } from "../action"
import DrawerNav from "./drawerNav"

const StackNav = ()=>{
    const {username, loading} = useSelector((state)=>{
        return{
            username: state.userReducer.username,
            loading: state.userReducer.authloading
        }
    })

    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(keepLogin())
    },[])

    if(loading){
        return <SplashScreen/>
    }
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator>
            {username? (
                <Stack.Screen name="Tab" component={TabNav}/>
            ) :(
                <Stack.Screen name="Login" component={Login}/>
            )
            }
            <Stack.Screen name="Drawer" component={DrawerNav}/>
        
        </Stack.Navigator>
    )
}

export default StackNav