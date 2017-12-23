import {
		UPDATE_ITEM_CART,
		FETCH_CART
	} from '../actions/types'


const INITIAL_STATE ={
	servingSizeCart: null,
	servingOptionCart: null, 
	oxalatesCart: null ,
	percentage: null,
	loading : false,	
	error: ''
}


export default (state=INITIAL_STATE,action) => {	
	console.log(state);
	console.log(action);
	switch(action.type){	
		case FETCH_CART:
			return {...state,
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
		default:
			return state
	}

}