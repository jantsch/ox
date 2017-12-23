import {	
		FETCH_ITEM,	
		FETCH_ITEM_SUCCESS,
		FETCH_ITEM_FAIL,
		FETCH_CART
	   } from './types'


import axios from 'axios'
import Secrets from 'react-native-config'
import {Actions} from 'react-native-router-flux'



export const fetchItem = (item,daily_limit)=>{
	console.log(item.servingType + item.servingSize);
	return (dispatch) =>{

  		oxalatesValue = item.oxalates.slice(0, -2);
		oxalatesValueInt = parseInt(oxalatesValue);

  		dispatch({type: FETCH_ITEM, payload: {...item}})
  		dispatch({type: FETCH_CART, 
  			payload: {
  				servingSizeCart: '1',
  				oxalatesCart: item.oxalates,
  				servingOptionCart:  item.servingSize +' '+  item.servingType+'---' +  item.servingSize ,
  				percentage: oxalatesValueInt/daily_limit *100	}})

		dispatch({type: FETCH_ITEM_SUCCESS})
		Actions.ItemScreen()

			
	}
}





