
import React, { Component } from 'react';
import { View ,Text,ScrollView} from 'react-native';
import {  Divider,ListItem } from 'react-native-elements'
import { CheckListItem} from './common'


class FilterSelection extends Component{

		
	_renderValues =() =>{	

		return this.props.categories.map((item,index) =>{
			 return (<CheckListItem valueName={item}  key={index} onPress={this.props.onPress} value={this.props.activeFilters.indexOf(item) >-1} />)}
			)		
	}
	render(){
		return(
			<View style={styles.containerStyle}>
			<ScrollView >
	  		  {this._renderValues()} 
	  		  </ScrollView>
	   		</View>
		)
	}

}


const styles = {
	containerStyle:{
		marginTop: 53,
		flex: 1,
		paddingBottom: 60
	},
	textStyle:{
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10
	},
	color:{
		backgroundColor: '#bebebc'
	}
}

export default FilterSelection
