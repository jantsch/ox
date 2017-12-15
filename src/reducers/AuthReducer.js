import {
		INPUT_CHANGE,		
		LOGIN_USER_SUCCESS,
		LOGIN_USER_FAIL,
		LOGIN_USER
	} from '../actions/types'


const INITIAL_STATE ={
	email: '',
	password: '',
	token: null,
	loading : false,
	error: ''
}


export default (state=INITIAL_STATE,action) => {	

	switch(action.type){
		case INPUT_CHANGE:
			return {...state,[action.payload.prop]: action.payload.value}
		case LOGIN_USER:
			return {...state, loading: true, error: ''}
		case LOGIN_USER_SUCCESS:			
			return {...state,...INITIAL_STATE, token: action.payload.token, loading: false}
		case LOGIN_USER_FAIL:
			return {...state, error: action.payload.error, password:'', loading: false}
		default:
			return state

	}

}