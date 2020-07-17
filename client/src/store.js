import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import {
	userSigninReducer,
	userRegisterReducer,
} from './reducers/userReducers';

const userInfo = Cookie.getJSON('userInfo') || null;

const intialState = {
	userSignin: { userInfo },
};

const reducer = combineReducers({
	userSignin: userSigninReducer,
	userRegister: userRegisterReducer,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	intialState,
	composeEnchancer(applyMiddleware(thunk))
);

export default store;
