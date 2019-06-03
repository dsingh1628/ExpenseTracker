import {createStore,combineReducers}  from 'redux';
import  NewExpenseReducer from '../reducers/NewExpenseReducer.js';

const rootReducer=combineReducers({

    expenses:NewExpenseReducer
});

const configureStore=()=>{
    return createStore(rootReducer);
}

export default configureStore;