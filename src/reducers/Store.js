//@flow
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from './LoginReducer';
import type {UserNameAction,State} from '../utilities/userTypes';

const AppReducers = combineReducers({
    LoginReducer
});

const rootReducer = (state : Object, action : UserNameAction) :State => AppReducers(state, action);

const Store  = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default Store;
