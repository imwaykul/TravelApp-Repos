import React, { Component} from 'react';
import { AppRegistry, Alert, Button, Text, TextInput, StyleSheet, View } from 'react-native';
import firebase from 'firebase'
import SignUpPage from './App'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoadingScreen from "./LoadingScreen"
import stackNav from './App'

export default class TripList extends Component {
  constructor(props) {
    super(props);
    this.state = {current_user: 'Bubdasheep', current_no_trips: 2};

    this.title = "Here is a list of your Trips"
    this.tripView = this.tripView.bind(this)
    this.addNewTrip = this.addNewTrip.bind(this)
  }

  tripView() {


  }

  addNewTrip() {

  }

  render() {
    return (
      <View style={{width: 400, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={styles.titleText}>
          {this.title}
        </Text>
        <Text style={styles.titleText}>
          {this.state.current_location + "        " + this.state.current_temperature}
        </Text>
        <Button
           onPress = {this.tripView}
           title="Submit"
           color="aquamarine"
         />
         <Button
            onPress = {this.tripView}
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
    fontSize: 35,
    fontFamily: 'DamascusLight',
    color: 'black'
  },
});
