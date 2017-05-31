import { combineReducers } from 'redux';
import { loginReducer } from '../reducers/reducers';
import { routerReducer } from 'react-router-redux'


export default combineReducers({
	routing: routerReducer,
    loginReducer
});