import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import stackNav from './App';
import firebase from 'firebase';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Button} from 'react-native-elements';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class EmailConfirmationPage extends Component {
  constructor(props) {
    super(props);
    this.sentEmail = this.sentEmail.bind(this);
  }

  sentEmail() {
    user = firebase.auth().currentUser;
    if (user == null) {
      console.log("user is null");
    } else {
      firebase.auth().onAuthStateChanged(function(user) {
        user.sendEmailVerification();
      });
      console.log("email has been sent");
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4F6D7A"
        />
        <Text style={styles.welcome}>
          We're excited to see that you're ready for your next excursion !
        </Text>
        <Text style={styles.instructions}>
          Before you start on your next excursion
        </Text>
        <Text style={styles.instructions}>
          Please check your email for an account confirmation link
        </Text>
        <Button
           buttonStyle = {styles.button}
           title="Send Email"
           onPress= {this.sentEmail}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  button: {
      backgroundColor: '#7fff00',
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});
