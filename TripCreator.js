import React, {Component} from 'react';
import { AppRegistry, Alert,Text, TextInput, Image, StatusBar, StyleSheet, View } from 'react-native';
import {Button} from 'react-native-elements';
import firebase from 'firebase';
import SignUpPage from './App';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoadingScreen from "./LoadingScreen";
import stackNav from './App';
import styles from './App'
import styles2 from './WelcomePage'
import SearchableDropdown from 'react-native-searchable-dropdown';

items = [
{
id: 1,
name: 'JavaScript',
},
{
id: 2,
name: 'Java',
},
{
id: 3,
name: 'Ruby',
},
{
id: 4,
name: 'React Native',
},
{
id: 5,
name: 'PHP',
},
{
id: 6,
name: 'Python',
},
{
id: 7,
name: 'Go',
},
{
id: 8,
name: 'Swift',
},
];

export default class TripSelection extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.state = {tName: '', tLocation: '', friends: ''};
  }

  nextPage() {
    if (this.state.tName.length == 0) {
        Alert.alert("Your Trip Needs a Name!");
    } else {
        this.props.navigation.navigate('TripSelect2');
    }
  }


    render() {
      return (
        <View style={styles3.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#20B2AA"
          />
          <Image
          style={{width: 50, height: 50}}
          source={require('./airplane.png')}
          />
          <Text style={styles3.welcome}>
            We're excited to see that you're ready for your next excursion !
          </Text>
          <Text style={styles3.welcome}>
            Please Give a Name For Your Trip!
          </Text>
          <TextInput
            style={styles3.instructions}
            placeholder="Enter A Trip Name"
            onChangeText={(tName) => this.setState({tName})}
          />
          <Button
             buttonStyle = {styles3.button}
             title="Next"
             onPress= {this.nextPage}
           />
        </View>
      );
    }


}

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20B2AA',
  },
  button: {
      backgroundColor: '#7fff00',
      borderColor: 'black',
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
