import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ProfileReducer from './ProfileReducer'
import StoreReducer from './StoreReducer'

export default combineReducers({
	auth: AuthReducer,
	profile: ProfileReducer,
	storeRecoveryCompleted: StoreReducer
})