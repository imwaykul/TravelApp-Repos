import React, { Component} from 'react';
import { AppRegistry, Alert, Button, Text, TextInput, StyleSheet, Dimensions, Image, View, TouchableOpacity } from 'react-native';
//import firebase from 'react-native-firebase'
import firebase from 'firebase'
import {createStackNavigator, withNavigation, createAppContainer} from 'react-navigation';
import LoginPage from './Login';
import LoadingScreen from './LoadingScreen';
import WelcomePage from './WelcomePage';
import TripSelection from './TripCreator';
import MyChat from './ChatInterface/Chatting';
import EmailConfirmationPage from './EmailConfirmationPage';
import ChatComp from './components/Chat';
import MainComp from './components/Main';
import TripSelection2 from './TripSelect2';
import LocationSelection from './LocationSelection';
import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';
import stackNav from './App';

class TripPortrait extends Component {

  static propTypes = {
      tripTitle: PropTypes.string.isRequired,
      tripLocation: PropTypes.string.isRequired,
      tripStat: PropTypes.number.isRequired,
      bgc: PropTypes.string.isRequired,
  }

  static defaultProps = {
      tripTitle: 'INSERT TRIP NAME',
      tripLocation: 'INSERT LOCATION',
      tripStat: 1,
      bgc: 'black'
  }


  constructor(props) {
      super(props)
      this.state = {tripTitle: 'Fun Times At Epcot', isToggleOn: true, tripStat: "Not Started", tripLocation: 'Boring Location', statusColor: 'mistyrose', coverPhoto: 'location_default.jpg'}
      this.setTripTitle = this.setTripTitle.bind(this);
      this.setTripLocation = this.setTripLocation.bind(this);
      this.setTripStat = this.setTripStat.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.click = this.click.bind(this);

  }

  handleClick() {
      this.setState(state => ({
          isToggleOn: !state.isToggle
      }))
  }

  click() {
      Alert.alert("Beginning Navigation!");
      global.selectedTrip = this.props.tripTitle;
      this.props.navigation.navigate('TripHome');
  }


  //getter function that obtains Trip Title

  setTripTitle(text) {
      this.setState({
        tripTitle: text
      })
  }

  //getter function that obtains trip status ('incomplete', 'in progress', 'finished')

  setTripLocation(text) {
    this.setState({
      tripLocation: text
    })
  }

  setTripStat(text) {
    this.setState({
      tripStat: text
    })
  }


  render() {
    const {tripStat, tripTitle, tripLocation, bgc} = this.props;
    const {coverPhoto} = this.state;
    statusColor = 'black'
    tripStatus = 'unknown'
    if (tripStat == 0) {
        statusColor = 'silver'
        tripStatus = 'UNINITIALIZED'
    } else if (tripStat == 1) {
        statusColor = 'firebrick'
        tripStatus = 'NOT STARTED'
    } else if (tripStat == 2) {
        statusColor = 'orange'
        tripStatus = 'IN PROGRESS'
    } else if (tripStat == 3) {
        statusColor = 'mediumseagreen'
        tripStatus = 'COMPLETED'
    }
    return (
      <View style = {{height: 200, width: Dimensions.get('window').width, backgroundColor: bgc, alignCenter: 'center'}}>
      <TouchableOpacity
         style={tripStyles.panel}
         onPress={this.click}
       >
         <Text> {tripTitle} </Text>
       </TouchableOpacity>
      <Image
        source = {require('./location_default.jpeg')}
        style = {tripStyles.circle}
      />
      <Text style = {{color: statusColor, fontSize: 20}}>
        {tripStatus}
      </Text>
      <Text style = {{color: 'plum', fontSize: 15}}>
        {tripLocation}
      </Text>
      </View>
    )
  }

}

export default withNavigation(TripPortrait)

const bgc = TripPortrait.props;

var tripStyles = StyleSheet.create({
  main: {
    height: 200,
    width: Dimensions.get('window').width,
    backgroundColor:bgc,
    alignItems: 'center'
  },
  circle: {
      width: 120,
      height: 120,
      borderRadius: 120/2,
      justifyContent: 'center',
      backgroundColor: 'mistyrose'
  },
  panel: {
      flex: 1,
      justifyContent: 'center',
      color: 'black',
      backgroundColor: 'lightgray'
  }
});
