import {	
		UPDATE_ITEM_CART,
	   } from './types'


import axios from 'axios'
import Secrets from 'react-native-config'
import {Actions} from 'react-native-router-flux'

export const updateItemCart = (servingSize, newServingOption, oxalatesItemValue,daily_limit)=>{
	
	console.log('AQUI111');
	// Math to discover oxalates
	var value1 = newServingOption.split(' ')
	var valueX = servingSize*value1[0]
	var option = newServingOption.split("---")
	var valueY = option[1]
	console.log('x:' +valueX);
	console.log('Y:' +valueY);


	oxalatesValue = oxalatesItemValue.slice(0, -2);
	var valueZ = parseInt(oxalatesValue);
	console.log('Z:' +valueZ);	
	var numOxalates = (valueX*valueZ) / valueY

	return (dispatch) =>{
		dispatch({type: UPDATE_ITEM_CART, 
			payload: {
				servingSizeCart: servingSize, 
				oxalatesCart: numOxalates +'mg',
				servingOptionCart: newServingOption,
				percentage: numOxalates/daily_limit *100  
			}
		})

	}

}



