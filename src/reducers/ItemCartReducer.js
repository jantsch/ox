import {
		UPDATE_ITEM_CART,
		UPDATE_ITEM_MEAL_CART,
		FETCH_CART,
		SET_MEAL_DATE_CART,
		SUBMIT_ITEM_CART
	} from '../actions/types'

import moment from 'moment'

const INITIAL_STATE ={
	name: null,
	servingSizeCart: null,
	servingOptionCart: '---', 
	oxalatesCart: null ,
	percentage: null,
	day: moment() ,
	meal: 'Breakfast',
	dmSetViaButton: false,
	loading : false,	
	error: ''
}




export default (state=INITIAL_STATE,action) => {	
	switch(action.type){	
		case FETCH_CART:
			return {...state,
					name: action.payload.name,
					servingSizeCart: action.payload.servingSizeCart,
					servingOptionCart: action.payload.servingOptionCart,
					oxalatesCart: action.payload.oxalatesCart,
					percentage: action.payload.percentage,
				}	
		case UPDATE_ITEM_CART:
			return {...state,
					servingSizeCart: action.payload.servingSizeCart,
					servingOptionCart: action.payload.servingOptionCart,
					oxalatesCart: action.payload.oxalatesCart,
					percentage: action.payload.percentage,
					}
		case UPDATE_ITEM_MEAL_CART:
			return { ...state,
					day: action.payload.day,
					meal: action.payload.meal
			}
		case SUBMIT_ITEM_CART:
			return {...INITIAL_STATE}
		case SET_MEAL_DATE_CART:
			return { ...state,
					day: action.payload.day,
					meal: action.payload.meal,
					dmSetViaButton: true
			}
		default:
			return state
	}

}