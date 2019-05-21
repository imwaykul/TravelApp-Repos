import React, { Component} from 'react';
import { AppRegistry, Alert, Button, Text, TextInput, StyleSheet, View } from 'react-native';
//import firebase from 'react-native-firebase'
import firebase from 'firebase'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginPage from './Login';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {current_username: '', email: '', username: '', pwd: '', confpwd: ''};
    this.currentUser = firebase.auth().currentUser
  }



  render() {
    return (
      <View style={{padding: 20}}>
        <Text style={styles.titleText}>
          {"Loading...."}
        </Text>

      </View>


    );
  }


}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'red'
  },
});
