import {	
		FETCH_FOOD,	
		FETCH_FOOD_SUCCESS,
		FETCH_FOOD_FAIL,
		SEARCH_FOOD,
		SEARCH_FOOD_SUCCESS,
		SEARCH_FOOD_FAIL,
	   } from './types'


import axios from 'axios'
import Secrets from 'react-native-config'



export const fetchFood = ()=>{
	
	return (dispatch) =>{
			dispatch({type: FETCH_FOOD})

			axios.get(Secrets.SERVER_URL +'/api/foods/')			
			.then((response)=> {	
			 	 dispatch({type:FETCH_FOOD_SUCCESS,	payload: response.data.foodsArray})		   
			})
			.catch((error)=> { 	
				dispatch({type: FETCH_FOOD_FAIL, payload: {error: 'Error to fetch data!'}})
			});	
	}
}


export const searchFood = (word,foodsArray)=>{
	
	return (dispatch) =>{

			dispatch({type: SEARCH_FOOD,payload: word})			

			var searched_foods = foodsArray.filter(food => (food.Name.toLowerCase()).indexOf(word.toLowerCase()) !==-1)
			
			dispatch({type:SEARCH_FOOD_SUCCESS,	payload: searched_foods})
	}
}
