import {	
		FETCH_ITEM,	
		FETCH_ITEM_SUCCESS,
		FETCH_ITEM_FAIL,
		UPDATE_ITEM_CART,
	   } from './types'


import axios from 'axios'
import Secrets from 'react-native-config'
import {Actions} from 'react-native-router-flux'



export const fetchItem = (item,daily_limit)=>{
	console.log(daily_limit);
	return (dispatch) =>{

  		oxalatesValue = item.oxalates.slice(0, -2);
		oxalatesValueInt = parseInt(oxalatesValue);

  		dispatch({type: FETCH_ITEM, payload: {...item, percentage: oxalatesValueInt/daily_limit *100	}})
		dispatch({type: FETCH_ITEM_SUCCESS})
		Actions.ItemScreen()

			
	}
}

export const updateItemCart = (text,oxalatesItemValue,daily_limit)=>{
	//console.log(text);
	//console.log(oxalatesItemValue);

	return (dispatch) =>{
		oxalatesValue = oxalatesItemValue.slice(0, -2);
		oxalatesValueInt = parseInt(oxalatesValue);

		dispatch({type: UPDATE_ITEM_CART, payload: {servingSizeCart: text, oxalatesCart: oxalatesValueInt*text +'mg', percentage: oxalatesValueInt*text/daily_limit *100  }})

	}

}



