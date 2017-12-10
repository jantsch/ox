import {	
		FETCH_ID_JOBS,
		FETCH_ID_JOBS_FAIL,
		FETCH_ID_JOBS_SUCCESS
	   } from '../actions/types'


const INITIAL_STATE = {
	data: {results:[]},
	loading: false,
	error:''
}

export default (state = INITIAL_STATE,action) => {	

	switch(action.type){

		case FETCH_ID_JOBS: 
			return { ...INITIAL_STATE, loading:true}	
		case FETCH_ID_JOBS_FAIL: 
			return { ...state, error: action.payload.error, loading:false}
		case FETCH_ID_JOBS_SUCCESS: 
			return { data: action.payload, loading:false}
		default:
			return state
	}
}