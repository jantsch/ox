import {	
		ON_DAY_CHANGED,
	   } from './types'


import {Actions} from 'react-native-router-flux'
import moment from 'moment'


export const onDayChange = (operation,today)=>{
	return (dispatch) =>{
			switch(operation)
			{
				case 'next':
					var newDay =  moment(today.add(1, 'd'))
					dispatch({type: ON_DAY_CHANGED,	payload: newDay })
					break
				case 'return':
					var newDay =  moment(today.subtract(1, 'd'))
					dispatch({type: ON_DAY_CHANGED,	payload: newDay  })	
					break
			}	
	}
}