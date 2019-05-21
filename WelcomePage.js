import React, { Component} from 'react';
import { AppRegistry, Alert, Text, TextInput, StyleSheet, View } from 'react-native';
import {Button} from 'react-native-elements';
import firebase from 'firebase';
import SignUpPage from './App';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoadingScreen from "./LoadingScreen";
import stackNav from './App';
import styles from './App';
import LoginPage from './Login';

export default class WelcomePage extends Component {
  constructor(props) {
    console.log("Now Entering: Welcome Page");
    super(props);
    this.state = {current_user: 'Sean', current_location: 'Borivali', current_temperature: '78°', current_weather: 'Sunny', current_no_trips: 2};
    this.title = "Welcome " + global.firstName;
    this.tripView = this.tripView.bind(this)
    this.addNewTrip = this.addNewTrip.bind(this)
    this.change2pp = this.changeToProfilePage.bind(this)
    this.moveToChat = this.moveToChat.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    firebase.auth().signOut().then(function() {

  }, function(error) {
  console.error('Sign Out Error', error);
});
  Alert.alert("Good Bye!");
  this.props.navigation.navigate('Login');
  }

  tripView() {
    this.props.navigation.navigate('TripSelect');
  }

  addNewTrip() {


  }

  changeToProfilePage() {

  }

  moveToChat() {
    this.props.navigation.navigate('ChatPage')
  }

  render() {
    return (
      <View style={{width: 400, height: 50}}>
        <Text style={styles2.titleText}>
          {this.title}
        </Text>
        <Text style={styles2.titleText}>
          {this.state.current_location + "        " + this.state.current_temperature}
        </Text>
        <Button
           buttonStyle = {styles.button}
           title="View My Trips"
           color="aquamarine"
         />
         <Button
            onPress = {this.tripView}
            title="Create New Trip"
            color="red"
          />
           <Button
              buttonStyle = {styles.button}
              title="View Profile"
              color="red"
            />
            <Button
               buttonStyle = {styles.greenbutton}
               onPress = {this.moveToChat}
               title="Messages"
               color="red"
             />
             <Button
               buttonStyle = {styles.greenbutton}
               onPress = {this.logOut}
               title ="Sign Out"

             />

      </View>
    );
}


}

const styles2 = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 35,
    fontFamily: 'DamascusLight',
    color: 'black'
  },
});
