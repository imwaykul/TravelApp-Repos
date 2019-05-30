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
  constructor() {
    super();
    this.state = {
      selectedItems: [],
      buttonTxt: "Create My Trip!",
      clicked: 0,
    };
    this.verify = this.verify.bind(this)
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  verify() {
    if (this.state.selectedItems.length != 1) {
        Alert.alert("Please Choose One (and only one) Location!")
    } else {
        this.props.navigation.navigate('TripPortrait');
    }
  }

  render() {
    return (
      <View style= {styles5.bgtest}>
      <Image
      style={{width: 80, height: 80, justifyContent: 'center'}}
      source={require('./globes.png')}
      />
        <Text>Where Y'all Headed?</Text>
        <SectionedMultiSelect
          items={items}
          uniqueKey="id"
          subKey="children"
          iconKey="icon"
          selectText="Choose some things..."
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
        <Button
           buttonStyle = {styles5.button}
           title={this.state.buttonTxt}
           onPress= {this.verify}
         />
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
