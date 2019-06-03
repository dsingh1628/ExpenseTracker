import {ADD_EXPENSE,DELETE_EXPENSE} from '../actions/actionTypes.js';

const initialState={
    expenses:[]
}

const reducer=(state=initialState,action)=>{

    console.dir(state);
    
    switch(action.type){
        case ADD_EXPENSE:
                console.dir(action.newExpense);
                let newExpensList=state.expenses.slice();
                newExpensList.push(action.newExpense);
        return{
            expenses:newExpensList
        };

        default: return state;
    }
}

export default reducer;