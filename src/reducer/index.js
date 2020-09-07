
import {combineReducers} from 'redux'

import userReducer from "./userReducer"
import apiReducer from "./apiReducer"

const allReducers = combineReducers({userReducer, apiReducer})

export default allReducers