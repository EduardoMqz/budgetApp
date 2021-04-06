import {createContext, useReducer} from 'react';

const AppReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                //copy of the current state
                ...state,
                //create a new expenses object
                expenses:[...state.expenses /*the new expenses contain de current expenses object*/,
                            action.payload/*plus the new expense*/]     
            }

        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter(
                    //return an array of the expenses without the expense with the id = payload
                    (expense) => expense.id !== action.payload
                ),
            };

        default:
            return state;
    }
}


const initialState ={
    budget:3000,
    expenses:[
        {id:1, name:'Gasto 1', cost:300},
        {id:2, name:'Gasto 2', cost:500},
        {id:3, name:'Gasto 3', cost:100},
        {id:4, name:'Gasto 4', cost:400},
        {id:5, name:'Gasto 5', cost:25},
        {id:6, name:'Gasto 6', cost:125},
        {id:7, name:'Gasto 7', cost:600},
        {id:8, name:'Gasto 8', cost:125},
        {id:9, name:'Gasto 9', cost:125}
    ],
};



export const AppContext = createContext();

export const AppProvider = (props) =>{
    const[state, dispatch] = useReducer(AppReducer, initialState);
    return(<AppContext.Provider value={{
        budget:state.budget,
        expenses:state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
};
