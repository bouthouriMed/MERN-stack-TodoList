import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import todoReducer from './todoReducer';

export default combineReducers({
    todo: todoReducer,
    auth: authReducer,
    error: errorReducer
})
