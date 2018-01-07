import {	
		ON_DAY_CHANGED,
		ON_DELETE_ITEM_DIARY,
		ON_EDIT_ITEM_DIARY
	   } from './types'


import {Actions	} from 'react-native-router-flux'
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


export const onDeleteItemDiary = (id)=>{
	return (dispatch) =>{
			dispatch({type: ON_DELETE_ITEM_DIARY,	payload: id })				
	}	
}

export const onEditItemDiary =(item)=>{
	return (dispatch) =>{
		console.log(item);
			dispatch({type: ON_EDIT_ITEM_DIARY,	payload: item })
			Actions.EditItemScreen()				
	}	

}