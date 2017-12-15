import {	
		OXALATES_INPUT_CHANGE,	
		PROFILE_SUBMIT,
		PROFILE_SUBMIT_SUCCESS,
		PROFILE_SUBMIT_FAIL,	
	   } from '../actions/types'


const INITIAL_STATE = {
	oxalates_limit: 40,
	loading: false,
	error:'',
	profile_submited: null,
}

export default (state = INITIAL_STATE,action) => {	
	switch(action.type){

		case OXALATES_INPUT_CHANGE: 
			return { ...INITIAL_STATE, oxalates_limit: action.payload}	
		case PROFILE_SUBMIT: 
			return { ...state, loading: true}
		case PROFILE_SUBMIT_SUCCESS: 
			return { ...state, loading: false,profile_submited: true}
		case PROFILE_SUBMIT_FAIL: 
			return { ...state, loading: false,error: action.payload.error, profile_submited: false}
		default:
			return state
	}
}