import { ADD_EXPENSE,DELETE_EXPENSE } from './actionTypes.js';

export const  addExpense=(newExpense)=>{
    return{
        type:ADD_EXPENSE,
        newExpense:newExpense
};
}