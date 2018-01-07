import {
		SAVE_FILTERS
	} from '../actions/types'


const INITIAL_STATE ={
	activeCategoriesList:[],
	activeCategoriesOxalatesList:[],

}


export default (state=INITIAL_STATE,action) => {
	switch(action.type){		
		case  SAVE_FILTERS:
			return {
				...state,
				activeCategoriesList : action.payload.activeCategoriesList,				
				activeCategoriesOxalatesList : action.payload.activeCategoriesOxalatesList
			}
		default:
			return state
	}

}