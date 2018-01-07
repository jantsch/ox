import {
		ON_DAY_CHANGED,
		SUBMIT_ITEM_CART,
		ON_DELETE_ITEM_DIARY,
		ON_UPDATE_ITEM_DIARY
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
		case ON_DELETE_ITEM_DIARY:
			var newList = state.history.filter(item=>{return item.id != action.payload})
			return {...state,history: newList}
		case ON_UPDATE_ITEM_DIARY:		
			var newList = state.history.filter(item=>{return item.id != action.payload.id})
			newList.push(action.payload)
			return {...state,history: newList}
		default:
			return state

	}

}