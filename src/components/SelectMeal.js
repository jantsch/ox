import React, {Component} from 'react'
import { View,Text } from 'react-native'
import {  Divider  } from 'react-native-elements'

import { updateItemMealCart } from './../actions'
import { connect} from 'react-redux'




class SelectMeal extends Component{	

	_onPress = (meal) =>{
		this.props.updateItemMealCart(meal)			
	}	
	_renderText =(meal) =>{
		if(this.props.meal ==  meal)
		{
			return (
					<Text style={[styles.textStyle, styles.color]} onPress={() => this._onPress(meal)}> {meal} </Text>
		 			
				)
		}
		else
		{
			return (
					<Text style={styles.textStyle} onPress={() => this._onPress(meal)}> {meal} </Text>		 			
				)
		}

	}


render () {
  return (
  	<View style={styles.containerStyle}>
  		  {this._renderText('Breakfast')}		 
		  <Divider style={{ backgroundColor: 'grey' }} />
		  {this._renderText('Lunch')}		
		  <Divider style={{ backgroundColor: 'grey' }} />		  
		  {this._renderText('Dinner')}		
		  <Divider style={{ backgroundColor: 'grey' }} />
		  {this._renderText('Snacks')}		
		 
    </View>
  )
}
}

const styles ={
	containerStyle:{
		marginTop: 53
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

const mapStateToProps =(state) => {
	const {meal} = state.cart
	return {
		meal
	}
}






export default  connect(mapStateToProps, {updateItemMealCart})(SelectMeal)