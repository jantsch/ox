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


export const searchFood = (word,foodsArray,filters)=>{
	
	return (dispatch) =>{

			dispatch({type: SEARCH_FOOD,payload: word})			
			
			if(filters.activeCategoriesList.length >0 || filters.activeCategoriesOxalatesList.length >0)
			{
				if(filters.activeCategoriesList.length >0 && filters.activeCategoriesOxalatesList.length >0)
				{
					var searched_foods = foodsArray.filter(food => ((food.Name.toLowerCase()).indexOf(word.toLowerCase()) !==-1) 
												 && (filters.activeCategoriesList.indexOf(food.Category) !==-1) 
												 && (filters.activeCategoriesOxalatesList.indexOf(food.OxalateCategory) !==-1))
				}
				else if(filters.activeCategoriesList.length >0)
				{
					var searched_foods = foodsArray.filter(food => ((food.Name.toLowerCase()).indexOf(word.toLowerCase()) !==-1) 
												 && (filters.activeCategoriesList.indexOf(food.Category) !==-1))
				}
				else if(filters.activeCategoriesOxalatesList.length >0)
				{
					var searched_foods = foodsArray.filter(food => ((food.Name.toLowerCase()).indexOf(word.toLowerCase()) !==-1) 												
												 && (filters.activeCategoriesOxalatesList.indexOf(food.OxalateCategory) !==-1))
				}

			}
			else
			{
					var searched_foods = foodsArray.filter(food => ((food.Name.toLowerCase()).indexOf(word.toLowerCase()) !==-1))
			}

		
			
			dispatch({type:SEARCH_FOOD_SUCCESS,	payload: searched_foods})
	}
}
