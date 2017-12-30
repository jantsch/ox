import {	
		UPDATE_ITEM_CART,
		UPDATE_ITEM_MEAL_CART,
		SUBMIT_ITEM_CART,
		SET_MEAL_DATE_CART
	   } from './types'


import axios from 'axios'
import Secrets from 'react-native-config'
import {Actions} from 'react-native-router-flux'
import moment from 'moment'


export const updateItemCart = (servingSize, newServingOption, oxalatesItemValue,daily_limit)=>{
	
	// Math to discover oxalates
	var value1 = newServingOption.split(' ')
	var valueX = servingSize*value1[0]
	var option = newServingOption.split("---")
	var valueY = option[1]	


	oxalatesValue = oxalatesItemValue.slice(0, -2);
	var valueZ = parseInt(oxalatesValue);

	var numOxalates = (valueX*valueZ) / valueY

	return (dispatch) =>{
		dispatch({type: UPDATE_ITEM_CART, 
			payload: {
				servingSizeCart: servingSize, 
				oxalatesCart: numOxalates +'mg',
				servingOptionCart: newServingOption,
				percentage: numOxalates/daily_limit *100  
			}
		})

	}
}

export const updateItemMealCart = (meal)=>{
	
		return{
			type: UPDATE_ITEM_MEAL_CART, 
			payload: {
				meal: meal, 
				day :  moment()
			}
		}
}

export const submitCartItem =(cart) =>{
	return{
			type: SUBMIT_ITEM_CART, 
			payload: cart
	}
}

export const setMealDateCart =(meal,day) =>{
	return (dispatch) =>{
		dispatch({
			type: SET_MEAL_DATE_CART, 
			payload: {meal,day}
		})
		Actions.Search()

	}
}




