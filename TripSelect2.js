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
    name: 'Friends',
    id: 0,
    children: [
      {
        name: 'Joker',
        id: 10,
      },
      {
        name: 'Isabelle',
        id: 17,
      },
      {
        name: 'Snake',
        id: 13,
      },
      {
        name: 'Bowser',
        id: 14,
      },
      {
        name: 'Daisy',
        id: 15,
      },
      {
        name: 'Ganandorf',
        id: 16,
      },
    ],
  },
];

export default class TripSelection2 extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
      buttonTxt: "Where To?",
      clicked: 0,
    };
    this.verify = this.verify.bind(this)
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  verify() {
    if (this.state.clicked == 0) {
      if (this.state.selectedItems.length == 0) {
          Alert.alert("Solo Trip? Confirm to Continue!")
      } else {
          Alert.alert("Confirm So We Can Let Everyone Know!")
      }
      this.setState({
        buttonTxt: "Confirm My Party!"
      })
      this.setState({
        clicked: 1
      })
    } else {
        this.props.navigation.navigate('LocationSelection')
    }
  }

  render() {
    return (
      <View style= {styles4.bgtest}>
      <Image
      style={{width: 80, height: 80, justifyContent: 'center'}}
      source={require('./friends_icon.png')}
      />
        <Text>Who Do You Want To Invite?</Text>
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
           buttonStyle = {styles4.button}
           title={this.state.buttonTxt}
           onPress= {this.verify}
         />
      </View>
    );
  }
}

const styles4 = StyleSheet.create({
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
    backgroundColor: '#20B2AA',
    flex: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 10,
  },
});
