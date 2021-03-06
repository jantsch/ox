import {	
		OXALATES_INPUT_CHANGE,	
		PROFILE_SUBMIT,
		PROFILE_SUBMIT_SUCCESS,
		PROFILE_SUBMIT_FAIL
	   } from './types'

import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import Secrets from 'react-native-config'
import {AsyncStorage} from 'react-native'


export const onOxalatesInputChange = (value)=>{	
	return {
		type: OXALATES_INPUT_CHANGE,
		payload: value
	}
}

export const submitProfile = (oxalates_value)=>{


	return (dispatch) =>{
		
		if( !oxalates_value )
			dispatch({type: PROFILE_SUBMIT_FAIL, payload: { error : 'Invalid oxalates value'}})
		else
		{			
			dispatch({type: PROFILE_SUBMIT,	payload: oxalates_value})	
			AsyncStorage.getItem('token').then((token)=>{		
			console.log(token);		
				if(token)
				{		
						axios.post(Secrets.SERVER_URL +'/api/userProfile', {
					   		oxalates_limit: oxalates_value
					 	})
					  	.then((response)=> {
					  		  
						   profileSubmitSuccess(dispatch,oxalates_value)
						   
						})
					  	.catch((error)=> { 		  		
					  		profileSubmitFail(dispatch,oxalates_value)	
					  	});	
		  	}
		  	})	
		}
	}
}


const profileSubmitSuccess= (dispatch,oxalates_value)=>{
	
	dispatch({type: PROFILE_SUBMIT_SUCCESS,	payload: oxalates_value})
	Actions.TabBar({type: 'reset'})


}
const profileSubmitFail= (dispatch)=>{
	
	dispatch({type: PROFILE_SUBMIT_FAIL, payload: {error: 'Error to save oxalates limit!'}})
}