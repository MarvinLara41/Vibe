import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import {
	userSigninReducer,
	userRegisterReducer,
	userUpdateReducer,
} from './reducers/userReducers';

import {
	workoutSaveReducer,
	workoutPersonalListReducer,
	workoutDeleteReducer,
} from './reducers/workoutReducer';

const userInfo = Cookie.getJSON('userInfo') || null;

const intialState = {
	userSignin: { userInfo },
};

const reducer = combineReducers({
	userSignin: userSigninReducer,
	userRegister: userRegisterReducer,
	workoutSave: workoutSaveReducer,
	workoutPersonalList: workoutPersonalListReducer,
	userUpdate: userUpdateReducer,
	workoutDelete: workoutDeleteReducer,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	intialState,
	composeEnchancer(applyMiddleware(thunk))
);

export default store;
