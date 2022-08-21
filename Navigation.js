import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import NewPost from './screens/NewPost'
import Login from './screens/Login'
import SignUp from './screens/SignUp'

const screenOptions={
  headerShown:false,
}
const Stack = createNativeStackNavigator();

export default navigation=() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='NewPost' component={NewPost} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}