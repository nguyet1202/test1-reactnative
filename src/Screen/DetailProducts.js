import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const DetailProducts =({route,navigation})=>{
    const {text} = route?.params||{}
    console.log(route)
  return(
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 24}}>ProductDetail</Text>
    </View>
  )
}
export default DetailProducts;

const styles = StyleSheet.create({});