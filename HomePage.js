import React, { Component} from 'react';
import { AppRegistry, Alert, Button, Text, TextInput, StyleSheet, View } from 'react-native';
import firebase from 'firebase'
import SignUpPage from './App'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoadingScreen from "./LoadingScreen"
import stackNav from './App'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {current_user: 'Bubdasheep', current_location: 'Komban Village'};
    const title = "Welcome " + this.state.current_user;
  }

  render() {
    return (
      <View style={{padding: 20, width = 50, height = 50, backgroundColor: 'powderblue'}}>
        <Text style={styles.titleText}>
          {title}
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
    color: 'firebrick'
  },
});
