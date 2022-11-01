import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailProducts from './DetailProducts';


const Stack = createNativeStackNavigator();

const HomeTab =({navigation})=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <TouchableOpacity  onPress={()=>{
        navigation.navigate('DetailProducts')
      }}>
      <Text>Home</Text>

      </TouchableOpacity>
    </View>
  )
}
export default HomeTab

const styles = StyleSheet.create({})