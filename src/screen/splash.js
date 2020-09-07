import React from 'react'
import {View, Text, StyleSheet} from "react-native"

const SplashScreen = () =>{
    return(
        <View style={styles.root}> 
            <Text>SPLASH SCREEN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button:{
        alignSelf: "center",
        padding: 15
    }
})

export default SplashScreen