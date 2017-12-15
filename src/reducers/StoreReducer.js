import { REHYDRATE } from 'redux-persist/constants'





export default (state=false,action) => {


	switch(action.type){
		case REHYDRATE:
		   return  true
		default:
		   return state
	}

}