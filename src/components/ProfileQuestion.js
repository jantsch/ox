import React, { Component } from 'react';
import {View,Text,TouchableOpacity } from 'react-native';
import AppIntro from 'react-native-app-intro';
import { Actions } from 'react-native-router-flux'
import { Slider } from 'react-native-elements'


class ProfileQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 40
    };
  }
  render() {  
    return (
      <View style={styles.slide}>
        <View style={styles.upperContainer}>
            <Text style={styles.text} > What is the daily ammount of oxalates allowed?</Text>
            <View style={styles.picker}>
              <Slider
                minimumValue={0}
                maximumValue={120}
                step={1}
                minimumTrackTintColor={'#3f3f3f'}
                maximumTrackTintColor={'#b3b3b3'}
                thumbTintColor={'#fff'}
                animateTransitions= {true}
                value={this.state.value}
                onValueChange={(value) => this.setState({value})} />
              <Text style={styles.currentValue}>{this.state.value} mg</Text>
            </View>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.dotContainer}>
             <View
              style={styles.dotStyle}
              />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.full}
                  onPress={ ()=> Actions.TabBar() }
                >
                 <Text style={styles.nextButtonText}>Done
                 </Text>
                </TouchableOpacity>
            </View>
        </View>
      
      </View>
    );
  }
}

const styles = {
  slide: {
    flex: 1, 
    backgroundColor: '#55ace0',
    
  },
  upperContainer:{   
      flex: 0.6,
      justifyContent :'flex-end',   

  },
   bottomContainer:{
    flex: 0.4,
    flexDirection: 'row',
    
  },
  text: {
    color: '#fff',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 23,
    fontWeight: 'bold',
  },
  picker:{
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  currentValue:{
     color: '#fff',
     alignSelf: 'center'
  },
  dotStyle: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 7,
    marginBottom: 7,
  },
 
  dotContainer: {
    flex: 0.7,
     justifyContent :'flex-end',
     alignItems: 'flex-end',
     marginRight: 80,
     marginBottom: 25
   
  },
  btnContainer: {
    flex: 0.3, 
    justifyContent :'flex-end',
    alignSelf: 'flex-end'  
   
  },
  nextButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: '#fff',
    marginRight: 40, 
  },
  full: {
    height: 80,
    width: 100,
    alignItems: 'center',
      justifyContent :'center',
   
  }

};


export default ProfileQuestion