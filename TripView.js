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
    this.state = {current_user: 'Bubdasheep', tripName: '', current_no_trips: 2, tList: [], firsLoc: ''};
    this.title = "Your Trips"
    this.gotData2 = this.gotData2.bind(this)
    this.errData2 = this.errData2.bind(this)
    this.randomColor = this.randomColor.bind(this)

  }

  randomColor() {
      return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
  }

  gotData2(data) {

    console.log("ENTER GOT DATA")
    tripInfo = data.val();
    keys = Object.keys(tripInfo);
    i = 0;
    myTrips = [];
    count = 0;
    while (i < keys.length) {
        bgc = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
        k = keys[i];
        cur_userid = tripInfo[k].userid
        if (firebase.auth().currentUser.uid == cur_userid) {
          myTrips.push(<TripPortrait
          tripTitle={tripInfo[k].tripname}
          tripLocation={tripInfo[k].location}
          tripStat={tripInfo[k].status}
          bgc={bgc}
          />);
          count = count + 1;
        }
        i = i + 1
    }
    this.state.tripList = myTrips

  }

  errData2(err) {
    console.log("Error!");
    console.log(err)
  }

  render() {
    db = firebase.database().ref();
    var tList = new Array()
    db.on("value", function(snapshot) {
        tripList = snapshot.val().trip
        index = 0
        for (var key in tripList) {
            var rancol = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
            var item = tripList[key];
            var c_uid = item.userid
            if (c_uid==firebase.auth().currentUser.uid) {
                tList.push({"tripname": item.tripname,
                "location": item.location,
              "status": item.status,
              "bgc": rancol})
            }
        }
    }
    )
    return(
      <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
        <Text style={styles.titleText}>
          {this.title}
        </Text>
        {tList.map(item => (
          <TripPortrait
          tripTitle={item.tripname}
          tripLocation={item.location}
          tripStat={item.status}
          bgc={item.bgc}
          />
        ))}
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
