
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { thunk, withExtraArgument } from 'redux-thunk';
import UserReducer from './UserReducer';

import Reducer from './Reducer';

const rootReducer = combineReducers({
    Reducer,
    UserReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;