import React, { Component} from 'react';
import { AppRegistry, Alert, Button, Text, TextInput, StyleSheet, View } from 'react-native';
//import firebase from 'react-native-firebase'
import firebase from 'firebase'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginPage from './Login';
import LoadingScreen from './LoadingScreen';
import WelcomePage from './WelcomePage';
import TripSelection from './TripCreator';
import MyChat from './ChatInterface/Chatting';
import EmailConfirmationPage from './EmailConfirmationPage';
import ChatComp from './components/Chat';
import MainComp from './components/Main';
import TripSelection2 from './TripSelect2';

const firebaseConfig = {
  apiKey: "AIzaSyAQe3hxRIsbuPpk8LEO3UeAnvAapAhGJ5w",
  authDomain: "routeabega.firebaseapp.com",
  databaseURL: "https://routeabega.firebaseio.com",
  projectID: "routeabega",
  storageBucket: "routeabeta.appspot.com",
  messagingSenderId: "136068407545",
};
firebaseApp = firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();


current_user = firebase.auth().currentUser;


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.signUpButton = this.signUpButton.bind(this)
    this.loginButton = this.loginButton.bind(this)
  }

  signUpButton() {
      this.props.navigation.navigate('Profile')
  }

  loginButton() {
      this.props.navigation.navigate('Login')
  }

  render() {
    return(
    <View style={{padding: 20}}>
    <Button
       title="Sign Up For An Account"
       color="red"
       onPress={this.signUpButton}

     />
     <Button
        title="Log In "
        color="aquamarine"
        onPress={this.loginButton}
      />
    </View>
  )
  }
}

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {fname: '', lname: '', username: '', email: '', pwd: '', confpwd: ''};
    this.verify = this.verify.bind(this)
    this.writeUserData = this.writeUserData.bind(this)
  }

  verify() {
      if (this.state.pwd != this.state.confpwd) {
          Alert.alert("Password and Confirm Password need to match!")
      } else if (this.state.pwd.length == 0 || this.state.confpwd.length == 0
       || this.state.fname.length == 0 || this.state.lname.length == 0 || this.state.username.length == 0){
          Alert.alert("No field can be left blank! ")
      } else {

          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pwd).catch(function(error) {
            console.log(error)
          })
          current_user_uid = firebase.auth().currentUser.uid
          this.writeUserData(current_user_uid, this.state.fname, this.state.lname, this.state.username, this.state.pwd, this.state.email)
          Alert.alert("You have officially created a new account!")
    }
  }

  writeUserData(userId, fname, lname, username, pwd, email) {
  firebase.database().ref('userinfo/' + userId).set({
    Email: email,
    FirstName: fname,
    LastName : lname,
    Password: pwd,
    Verified: 0,
    Username: username
  });
}


  render() {
    return (
      <View style={{padding: 20}}>
        <Text style={styles.titleText}>
          {"Sign Up For An Account"}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Please Enter Your First Name!"
          onChangeText={(fname) => this.setState({fname})}
        />
        <Text style={{padding: 10, fontSize: 32}}>
          {this.state.fname.split('').map((word) => word && '').join(' ')}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Please Enter Your Last Name!"
          onChangeText={(lname) => this.setState({lname})}
        />
        <Text style={{padding: 10, fontSize: 32}}>
          {this.state.lname.split('').map((word) => word && '').join(' ')}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Please Enter Your Username!"
          onChangeText={(username) => this.setState({username})}
        />
        <Text style={{padding: 10, fontSize: 32}}>
          {this.state.username.split('').map((word) => word && '').join(' ')}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Please enter an email!"
          onChangeText={(email) => this.setState({email})}
        />
        <Text style={{padding: 10, fontSize: 32}}>
          {this.state.email.split('').map((word) => word && '').join(' ')}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Please enter a password!"
          onChangeText={(pwd) => this.setState({pwd})}
        />
        <Text style={{padding: 10, fontSize: 22}}>
          {this.state.pwd.split('').map((word) => word && '*').join(' ')}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Confirm your password!"
          onChangeText={(confpwd) => this.setState({confpwd})}
        />
        <Text style={{padding: 10, fontSize: 32}}>
          {this.state.confpwd.split('').map((word) => word && '*').join(' ')}
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



const stackNav = createStackNavigator({
  Profile: {screen: SignUpPage, title: "Sign Up Page"},
  Home: {screen: HomePage, title: "Welcome Fellow Traveller!"},
  Login: {screen: LoginPage, title: "Sign Into Your Account!" },
  Loading: {screen: LoadingScreen, title: "Please Wait..Loading"},
  Welcome: {screen: WelcomePage, title: "Hey There!"},
  TripSelect: {screen: TripSelection, title: "Trip Selection"},
  EmailConf: {screen: EmailConfirmationPage, title: "E Conf Page"},
  ChatPage: {screen: ChatComp, title:'Chat Page'},
  MainComp: {screen: MainComp, title:'Main Comp'},
  TripSelect2: {screen: TripSelection2, title: "Loc"}


},
{
  initialRouteName: 'Home'
});

const MyApp = createAppContainer(stackNav);

export default MyApp;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
      backgroundColor: '#00aeef',
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15
  },
  greenbutton: {
      backgroundColor: '#cd5c5c',
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15

  }
});

// skip this line if using Create React Native App

AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
