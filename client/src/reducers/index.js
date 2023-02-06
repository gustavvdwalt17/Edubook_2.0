import {combineReducers} from 'redux'
import listings from './posts'
import auth from './auth'
export default combineReducers({
   listings:listings,
    auth:auth
})