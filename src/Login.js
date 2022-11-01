import {StyleSheet, Text, View, Button, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';


const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.login_text}>Login</Text>
      <View style={styles.wrapInput}>
        <Text>Email</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.wrapInput}>
        <Text>Password</Text>
        <TextInput style={styles.input}></TextInput>
      </View >
      <View style={styles.text}>
        <View><TouchableOpacity style={styles.checkbox}>
        </TouchableOpacity></View>
      <View><Text style={styles.tt}>Remember me</Text></View>
        
      </View>
      <View style={styles.wrapInput}>
        <Button
        title="Login"
        color="hotpink"
        style={styles.btn}/>
 </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
margin: 40
    },
  login_text: {
    fontSize: 30,
    marginHorizontal: 40,
    marginBottom: 20,
  },
  wrapInput: {
    // marginHorizontal: 40,
    marginBottom: 20,
  },
  input: {
    // width: 300,
    height: 40,
    borderRadius: 20,
    borderWidth:1,
    borderColor: 'gray'
  },
  checkbox:{
    height: 30,
    width: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 16
  },
  text: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center'
  }
});

export default Login;
