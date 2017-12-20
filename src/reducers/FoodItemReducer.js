import {
		FETCH_ITEM,	
		FETCH_ITEM_SUCCESS,
		FETCH_ITEM_FAIL,
		UPDATE_ITEM_CART
	} from '../actions/types'


const INITIAL_STATE ={
	id: null,
	category: null,
	name: null,
	servingSizeNumber: null, 
	servingSizeNumber2:null , 
	servingType:null , 
	servingType2:null , 
	oxalatesValue: null, 
	oxalateCategory: null , 
	oxalatesCart: null ,
	loading : false,
	percentage: null,
	error: ''
}


export default (state=INITIAL_STATE,action) => {	
	console.log(state);
	console.log(action);
	switch(action.type){
		case FETCH_ITEM:
			return {...state, 	
			id: action.payload.id, 
			name: action.payload.name, 
			servingSizeNumber: action.payload.servingSize,
			category:  action.payload.category,
			servingType: action.payload.servingType,
			oxalatesValue: action.payload.oxalates,
			oxalateCategory : action.payload.oxalateCategory,
			oxalatesCart: action.payload.oxalates,
			servingSizeCart: action.payload.servingSize,
			percentage: action.payload.percentage,
			loading: true, error: ''}
		case FETCH_ITEM_SUCCESS:			
			return {...state, loading: false}
		case FETCH_ITEM_FAIL:
			return {...state, error: action.payload.error, loading: false}		
		case UPDATE_ITEM_CART:
			return {...state,
					servingSizeCart: action.payload.servingSizeCart,
					oxalatesCart: action.payload.oxalatesCart,
					percentage: action.payload.percentage,
					}
		default:
			return state
	}

}