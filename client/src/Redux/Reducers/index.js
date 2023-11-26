import { combineReducers } from "redux";
 import {productReducer} from './Eventreducer'
import {userReducer} from './Userreducer';
export const rootReducer = combineReducers({ productReducer, userReducer})