import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,Linking
} from 'react-native';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.login}>

        <Text style={styles.text}>Login</Text>
        <Text style={styles.intext}>Please  login in your account</Text>
        </View>
        
        <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
              <Feather name="mail" size={24} style={styles.inputIcon} color="white" />
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
              <Feather name="lock" size={24} color="white" style={styles.inputIcon} />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text style={styles.fgpass}>Forgot your password?</Text>
        </TouchableHighlight>

        {/* <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text style={styles.fgpass}>Register</Text>
        </TouchableHighlight> */}
        
      </View>
      <View >
   <Text > <Text style={styles.account} > Don't have an account ?</Text> <Text style={styles.create}>Create new now?</Text> </Text>
      </View>
      <View style={styles.terms}>
        <Text style={styles.account}>By your are logining in,you are agree</Text><Text style={styles.account}> with Wyld's <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://google.com')}>Terms & Conditions</Text></Text>
      </View>
      
      </View>
      
    );
  }
}


function Register(){
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  inputContainer: {
      borderBottomColor: '#1b1b1b',
     // backgroundColor: '#FFFFFF',
     backgroundColor:"#1b1b1b",
      borderRadius:30,
      borderBottomWidth: 1,
      width:350,
      height:45,
      marginBottom:20,
       color:"#000000",
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
      color:"white"
    
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:25,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:350,
    borderRadius:30,
  
   
  },
  loginButton: {
    backgroundColor: "#ffff00",
  },
  loginText: {
    color: '#000000',
    fontSize:15
  },
  login :{
marginRight:200,

  },
  text:{
    fontSize:30,
    color:'#fff8dc'
  }
  ,
  intext:{
    color:'#fff8dc'
  },
  mainContainer:{
    marginTop:60
  },
  fgpass:{
    
    color:"#ffff00",
    marginLeft:150,
    
  }
  ,
  create:{
    color:"#ffff00",
  },
 account:{
color:"#ffffff"
 },terms:{
   marginTop:100,
   justifyContent: 'center',
 }
});

                    