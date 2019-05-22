import React, {Component} from 'react';
import { AppRegistry, Alert,Text, Dimensions, TextInput, Image, StatusBar, StyleSheet, View } from 'react-native';
import {Button} from 'react-native-elements';
import firebase from 'firebase';
import SignUpPage from './App';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoadingScreen from "./LoadingScreen";
import stackNav from './App';
import styles from './App';
import styles2 from './WelcomePage';
import SearchableDropdown from 'react-native-searchable-dropdown';
import MultiSelect from 'react-native-multiple-select';
import {Font, MapView, Permissions} from 'expo'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';


// This is how you can load a local icon
// You can remove this if you'd like


const items = [
  {
    name: 'Cities',
    id: 0,
    children: [
      {
        name: 'Asgard',
        id: 10,
      },
      {
        name: 'Narnia',
        id: 17,
      },
      {
        name: 'Westeros',
        id: 13,
      },
      {
        name: 'Hogwarts',
        id: 14,
      },
      {
        name: 'Deathstar',
        id: 15,
      },
      {
        name: 'Gotham',
        id: 16,
      },
    ],
  },
];

export default class LocationSelection extends Component {
  state = {
    latitude: null,
    longitude: null
  }

  async componentDidMount() {
    const {status} = await Permissions.getAsync(Permissions.LOCATION);
    if (status != 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
    navigator.geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => this.setState( {latitude, longitude}),
      (error) => console.log("Error: ", error)
    )
  }

  verify() {
    if (this.state.selectedItems.length != 1) {
        Alert.alert("Please Choose One (and only one) Location!")
    } else {
        Alert.alert("You're All Set! Start Planning!!!")
    }
  }

  render() {
    const {latitude, longitude} = this.state
    console.log("Latitude: ", latitude);
    console.log("Longitude: ", longitude);
    if (latitude) {
      return (
        <MapView
        showsUserLocation
        style = {{ flex: 1}}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        >
        </MapView>
      );
    }
    return (
      <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>We Need Your Permission!</Text>
      </View>
    );
  }
}

const styles5 = StyleSheet.create({
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
  welcome2: {
    fontSize: 25,
    textAlign: 'center',
    margin: 5,
    color: '#dc143c',
  },
  bgtest: {
    fontSize: 25,
    backgroundColor: 'darkseagreen',
    flex: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 10,
  },
});
