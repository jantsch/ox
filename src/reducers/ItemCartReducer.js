import {
		UPDATE_ITEM_CART,
		UPDATE_ITEM_MEAL_CART,
		FETCH_CART,
		SET_MEAL_DATE_CART,
		SUBMIT_ITEM_CART,
		ON_EDIT_ITEM_DIARY
	} from '../actions/types'

import moment from 'moment'

const INITIAL_STATE ={
	id: null,
	name: null,
	servingSizeCart: null,
	servingOptionCart: '---', 
	oxalatesCart: null ,
	percentage: null,
	day: moment() ,
	meal: 'Breakfast',
	dmSetViaButton: false,
	loading : false,
	edited: false,	
	error: ''
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}


export default (state=INITIAL_STATE,action) => {	
	switch(action.type){	
		case FETCH_CART:
			return {...state,
					id: guid(),
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
		case ON_EDIT_ITEM_DIARY:
			return 	action.payload
	
		default:
			return state
	}

}