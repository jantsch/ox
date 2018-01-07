import {	
		SAVE_FILTERS,
	   } from './types'

import {Actions	} from 'react-native-router-flux'



export const saveFilters = (activeCategoriesList , activeCategoriesOxalatesList)=>{
	return (dispatch) =>{ 	
		dispatch({
			type: SAVE_FILTERS,
			payload: {activeCategoriesList,activeCategoriesOxalatesList}
		})
		Actions.SearchScreen({type:'reset'});
	}
}
