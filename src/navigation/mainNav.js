import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNav from './stackNav'

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    )
}

export default MainNavigation