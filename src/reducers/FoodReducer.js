import {
		FETCH_FOOD,	
		FETCH_FOOD_SUCCESS,
		FETCH_FOOD_FAIL,
		SEARCH_FOOD,
		SEARCH_FOOD_SUCCESS,
		SEARCH_FOOD_FAIL,
	} from '../actions/types'


const INITIAL_STATE ={
	search_input: '',
	foods: [],
	searched_food: [],
	loading : false,
	error: ''
}


export default (state=INITIAL_STATE,action) => {	
	switch(action.type){
		case FETCH_FOOD:
			return {...state, loading: true, error: ''}
		case FETCH_FOOD_SUCCESS:			
			return {...state, foods: action.payload, loading: false}
		case FETCH_FOOD_FAIL:
			return {...state, error: action.payload.error, loading: false}
		case SEARCH_FOOD:
			return {...state,search_input: action.payload, loading: true, error: ''}
		case SEARCH_FOOD_SUCCESS:			
			return {...state, searched_food: action.payload, loading: false, error: ''}
		case SEARCH_FOOD_FAIL:
			return {...state, error: action.payload.error, loading: false}
		default:
			return state
	}

}