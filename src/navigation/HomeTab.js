import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const HomeTab = () => {

    
const Stack = createNativeStackNavigator();


const HomeScreen =({navigation})=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <TouchableOpacity  onPress={()=>{
        navigation.navigate('DetailScreen',{text:"11111"})
      }}>
      <Text>Home</Text>
        
      </TouchableOpacity>
    </View>
  )
}

const DetailScreen =({route,navigation})=>{
    const {text} = route?.params||{}
    console.log(route)
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <Text>{text}</Text>
      <TouchableOpacity  onPress={()=>{
        navigation.pop()
      }}>
      <Text>pop</Text>
      </TouchableOpacity>
    </View>
  )
}
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    )
}

export default HomeTab

const styles = StyleSheet.create({})