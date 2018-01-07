'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text

} from 'react-native';

import Checkbox from 'react-native-custom-checkbox';

class CheckListItem extends Component {
  render() {
  	const {container,nameLbl,checkBoxContainer,checkbox} = styles
    return (
    		<View style={container} key={this.props.index}>
      			<Text style={nameLbl}> {this.props.valueName} </Text>
      			<View style={checkBoxContainer}>
      				<Checkbox style={checkbox} onChange={(item,checked) => this.props.onPress(item,checked)}  name= {this.props.valueName} checked={this.props.value}  />
      			</View>
    		</View>	
  	  
    );
  }
}


const styles = {
		container:{flexDirection: 'row', alignItems: 'center',paddingTop: 15,paddingBottom: 15 },
		nameLbl: {flex: 4,paddingLeft: 20},
		checkBoxContainer: {flex: 1},
		checkbox: { color: '#55ace0'}


};


export {CheckListItem};