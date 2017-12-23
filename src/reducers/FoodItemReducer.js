import {
		FETCH_ITEM,	
		FETCH_ITEM_SUCCESS,
		FETCH_ITEM_FAIL
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
	loading : false,
	error: ''
}


export default (state=INITIAL_STATE,action) => {	
	switch(action.type){
		case FETCH_ITEM:
			return {...state, 	
			id: action.payload.id, 
			name: action.payload.name, 
			servingSizeNumber: action.payload.servingSize,
			servingSizeNumber2: action.payload.servingSize2,
			category:  action.payload.category,
			servingType: action.payload.servingType,
			servingType2: action.payload.servingType2,
			oxalatesValue: action.payload.oxalates,
			oxalateCategory : action.payload.oxalateCategory,
			loading: true, error: ''}
		case FETCH_ITEM_SUCCESS:			
			return {...state, loading: false}
		case FETCH_ITEM_FAIL:
			return {...state, error: action.payload.error, loading: false}		
		default:
			return state
	}

}