import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ProfileReducer from './ProfileReducer'
import FoodReducer from './FoodReducer'
import FoodItemReducer from './FoodItemReducer'
import ItemCartReducer from './ItemCartReducer'
import StoreReducer from './StoreReducer'

export default combineReducers({
	auth: AuthReducer,
	profile: ProfileReducer,
	food: FoodReducer,
	item: FoodItemReducer,
	cart: ItemCartReducer,
	storeRecoveryCompleted: StoreReducer
})