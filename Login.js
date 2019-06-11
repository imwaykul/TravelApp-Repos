import React, { Component} from 'react';
import { AppRegistry, Alert, Button, Text, TextInput, StyleSheet, View } from 'react-native';
import firebase from 'firebase'
import SignUpPage from './App'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoadingScreen from "./LoadingScreen"
import stackNav from './App'


export default class LoginPage extends Component {

  constructor(props) {
    super(props);
    global.selectedTrip = '';
    global.current_user = null;
    global.firstName = '';
    global.lastName = '';
    global.email = '';
    global.authenticated = 10;
    global.tripName = '';
    global.friendList = [];
    global.location = '';
    this.state = {email: '', username: '', pwd: '', firstName: '', lastName: '', confpwd: '', isLogin: false};
    this.verify = this.verify.bind(this);
    this.firebaseLogin = this.loginToFireBase.bind(this);
    this.admin = firebase.database().ref("/routeabega").child("userinfo");
    this.gotData = this.gotData.bind(this);
    this.errData = this.errData.bind(this);
  }

  loginToFireBase(email, password) {
  this.setState({ isLogin: true });
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pwd).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    //Alert.alert(errorMessage)

  })
  emaile = "default_error_email";
  if (firebase.auth().currentUser != null) {
    emaile = this.state.email;
    console.log("USER ID: " + firebase.auth().currentUser.uid);
  }
  console.log("Current Email: " + emaile);
  global.current_user = firebase.auth().currentUser;
  if (global.current_user != null) {
      console.log(global.current_user.LastName);
  }
};

gotData(data) {
  emails = data.val();
  keys = Object.keys(emails);
  //console.log(keys);
  found = false;
  i = 0
  while (i < keys.length && !found) {
    k = keys[i];
    cur_email = emails[k].Email;
    cur_pwd = emails[k].Password;
    if (cur_email == this.state.email && cur_pwd == this.state.pwd) {
        found = true;
        global.firstName = emails[k].FirstName;
        global.lastName = emails[k].LastName;
        global.authenticated = emails[k].Verified;
        global.email = cur_email;

    }
    i = i + 1

  }

  if (found) {
    console.log("Time to Log in!");
    this.loginToFireBase(this.state.email, this.state.pwd)
    console.log("EVAR IS: " + firebase.auth().currentUser.emailVerified);
    if (!firebase.auth().currentUser.emailVerified) {
      this.props.navigation.navigate("EmailConf")
    }
     else {
      this.props.navigation.navigate('Welcome');
  }
  } else {
    console.log("Error Found in Login");
    Alert.alert("Invalid username/password combination!")
  }
  //console.log("i is " + i.toString());

  // for (i = 0; i < keys.length; i++) {
  //     k = keys[i];
  //     initials = emails[k].Email;
  //     if (initials.includes(this.state.email)) {
  //         Alert.alert("Email Exists!");
  //     }
  //     passwords = emails[k].Password;
  //     console.log(initials, passwords)
  //
  // }
}

errData(err) {
  console.log("Error!");
  console.log(err)

}

  verify() {
      if (this.state.pwd.length == 0 || this.state.email.length == 0) {
          Alert.alert("No field can be left blank! ")
      }
      else {
          database = firebase.database();
          ref = database.ref('userinfo')
          ref.on('value', this.gotData, this.errData)


      }
  }


  render() {
    return (
      <View style={{padding: 20}}>
        <Text style={styles.titleText}>
          {"Login To Your Account"}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Please Enter Your Email!"
          onChangeText={(email) => this.setState({email})}
        />
        <Text style={{padding: 10, fontSize: 32}}>
          {this.state.email.split('').map((word) => word && '').join(' ')}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Please Enter Your Password!"
          onChangeText={(pwd) => this.setState({pwd})}
        />
        <Text style={{padding: 10, fontSize: 32}}>
          {this.state.pwd.split('').map((word) => word && '*').join(' ')}
        </Text>
        <Button
           onPress = {this.verify}
           title="Submit"
           color="aquamarine"
         />

      </View>


    );
  }
}





const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});


// skip this line if using Create React Native App
