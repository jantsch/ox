import {
		ON_DAY_CHANGED,
		SUBMIT_ITEM_CART
	} from '../actions/types'

import moment from 'moment'

const INITIAL_STATE ={
	today:  moment(),
	history: []
}


export default (state=INITIAL_STATE,action) => {	
	switch(action.type){
		case ON_DAY_CHANGED:
			return {...state, today: action.payload}
		case SUBMIT_ITEM_CART:
			var newHistory = [...state.history, action.payload]
			return {...state, history: newHistory}
		default:
			return state

	}

}