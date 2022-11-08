import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  label,
  TouchableOpacity,
} from 'react-native';


export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.titleForm}>
        <Image
          style={styles.image}
          source={require('../assets/images/logo.png')}
        />
        <Text style={styles.text1}>Proceed with your</Text>
        <Text style={styles.text2}>Login</Text>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.input_title}>Username</Text>
        <TextInput style={styles.TextInput} placeholder="DURAR0045" />
        <Image
          style={styles.imageUser}
          source={require('../assets/images/user.png')}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.input_title}>Password</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="*************"
          secureTextEntry={true}
        />
        <Image
          style={styles.imageUser}
          source={require('../assets/images/key.png')}
        />
      </View>
      <Button style={styles.loginBtn}
        title="Login"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Main'}],
          });
        }}
      />
      <Text style={styles.forgotText}>Forgot Password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    padding: 0,
    paddingLeft: 40,
    paddingRight: 10,
  },
  titleForm: {
    paddingBottom: 80,
  },
  image: {
    marginTop: 20,
    marginBottom: 15,
    width: 120,
    height: 120,
  },
  imageUser: {
    width: 25,
    height: 25,
    marginLeft: 290,
    marginTop: -45,
  },
  inputView: {
    width: '100%',
    height: 45,
    marginBottom: 30,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  TextInput: {
    marginBottom: 7,
  },
  input_title: {
    color: 'black',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#D92525',
    padding: 10,
  },
  loginText: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
  },
  text1: {
    fontSize: 20,
    color: '#4B4952',
  },
  text2: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  forgotText: {
    width: '100%',
    paddingTop: 20,
    paddingLeft: 105,
  },
});
