import {	
		INPUT_CHANGE,	
		LOGIN_USER_SUCCESS,
		LOGIN_USER_FAIL,
		LOGIN_USER,
		CHECK_USER_SUCCESS,
		CHECK_USER_FAIL		
	   } from './types'


import {AsyncStorage} from 'react-native'
import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import Secrets from 'react-native-config'
import SocialLoginAPI from './../services/OAuth'



export const onInputChange = ({prop,value})=>{	
	return {
		type: INPUT_CHANGE,
		payload: {prop,value}
	}
}

export const checkLoginUser = () =>{

	//AsyncStorage.removeItem('token')
	return (dispatch) =>{

		AsyncStorage.getItem('token').then((token)=>{				
				if(token)
					dispatch({type: CHECK_USER_SUCCESS,	payload: {token}})		
				else
					dispatch({type: CHECK_USER_FAIL})
		})
	}
}

export const loginUser = ({email,password})=>{

	return (dispatch) =>{
		
		if( !email  || !password)
			dispatch({type: LOGIN_USER_FAIL, payload: { error : 'Fill the fields'}})
		else
		{			
			dispatch({type: LOGIN_USER,	payload: {email,password}})			
			axios.post(Secrets.SERVER_URL +'/api/auth/login', {
		   		email: email, password: password
		 	},{
			  timeout: 500
			})
		  	.then((response)=> {
		  		  
			   let active_token = response.data.token
			   loginSuccess(dispatch,active_token)
			   
			})
		  	.catch((error)=> {
		  		// Try to Register 		  		
		  		registerUser(dispatch,email,password)	
		  	});		
		}
	}
}

const loginSuccess = (dispatch, token) =>{
	//AsyncStorage.setItem('token',token)
	dispatch({type: LOGIN_USER_SUCCESS,	payload: {token}})
	Actions.TabBar({type: 'reset'})

}
const registerUser = (dispatch,email,password)=>{

		axios.post(Secrets.SERVER_URL +'/api/auth/register', {
		   		email: email, password: password
		})
		.then((response)=> {	
				  
			   let active_token = response.data.token
			   loginSuccess(dispatch,active_token)
		})
		.catch((error)=> {
		  		// Register Fail 		  		
		  		dispatch({type: LOGIN_USER_FAIL, payload: {error: 'Error to Login/Register'}})
		    	console.log(error);
		  	});		
}



export const loginWithProvider = (provider) => async dispatch =>{
		
		SocialLoginAPI(provider)
		.then(info=>{console.log(info);registerUserWithProvider(dispatch,provider,info)})
		.catch(error=>{console.log(error)})
}

const registerUserWithProvider = (dispatch,provider,info)=>{

		dispatch({type: LOGIN_USER})		
		axios.post(Secrets.SERVER_URL +'/api/auth/registerWithProvider', {
		   		provider: provider,
		   		access_token: provider==='twitter'? info.credentials.oauth_token : info.credentials.access_token,
		   		id: 		  provider==='twitter'? info.user.id_str : info.user.id,
		   		email:info.user.email,
		   		name: info.user.name
		})
		.then((response)=> {	
				  
			   let active_token = response.data.token
			   console.log(active_token);
			   loginSuccess(dispatch,active_token)
		})
		.catch((error)=> {
		  		// Register Fail 		  		
		  		//dispatch({type: LOGIN_USER_FAIL, payload: {error: 'Error to Login/Register'}})
		    	console.log(error);
		  	});		
}