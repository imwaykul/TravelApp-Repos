import React, { Component} from 'react';
import { AppRegistry, Alert, Button, Text, TextInput, StyleSheet, View, Dimensions } from 'react-native';
import firebase from 'firebase'
import SignUpPage from './App'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoadingScreen from "./LoadingScreen";
import stackNav from './App';
import TripPortrait from './TripPortrait';




export default class TripList extends Component {
  constructor(props) {
    super(props);
    this.state = {current_user: 'Bubdasheep', current_no_trips: 2};

    this.title = "Your Trips"
    this.tripView = this.tripView.bind(this)
    this.addNewTrip = this.addNewTrip.bind(this)
  }

  tripView() {


  }

  addNewTrip() {

  }

  render() {
    return (
      <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
        <Text style={styles.titleText}>
          {this.title}
        </Text>
        <TripPortrait tripTitle="The Magic Chisel" tripLocation="Midgard Mountains" tripStat={0} bgc= {'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'} />
        <TripPortrait tripTitle="Boredom Central" tripLocation="Narnia" tripStat={2} bgc = {'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'} />
        <TripPortrait tripTitle="Fun Times in Cali" tripLocation="San Francisco" tripStat={1} bgc = {'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'} />
      </View>
    );
}


}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 40,
    fontFamily: 'DamascusLight',
    color: 'black'
  },
});
