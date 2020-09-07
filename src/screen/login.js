import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {View, Text, StyleSheet} from "react-native"
import {Button, Form, Item, Input, Label} from "native-base"

import {LoginAction} from '../action'

const {useEffect} = React

const Login = ({navigation}) =>{
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const {user} = useSelector((state)=>{
        return{
            user: state.userReducer.username
        }
    })

    const dispatch = useDispatch()

    useEffect(()=>{
        if(user) navigation.navigate("Tab")
    })
    
    const handleLogin = () =>{
        const body={
            username: username,
            password: password,
        }
        console.log("form : ", username, password)
        dispatch(LoginAction(body))
        setUsername("")
        setPassword("")
    }
    return(
        <View style={styles.root}>
            <Text>LOGIN</Text>
            <Form>
                <Item floatingLabel style={styles.input}>
                    <Label>Username</Label>
                    <Input 
                        onChangeText={(value)=> setUsername(value)}/>
                </Item>

                <Item floatingLabel style={styles.input}>
                    <Label>Password</Label>
                    <Input  
                        secureTextEntry
                        onChangeText={(value)=> setPassword(value)}/>
                </Item>
            </Form>
            <Button 
                light
                onPress={handleLogin}
                style={styles.button}>
                <Text>Login</Text>   
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button:{
        alignSelf: "center",
        padding: 25
    },
    input:{
        padding: 10,
        width: 300,
        marginVertical: 20,
        borderBottomColor: "#333"
    }
})

export default Login