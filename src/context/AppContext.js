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
        {id:1, name:'Despensa', cost:300},
        {id:2, name:'Ahorro', cost:500},
        {id:3, name:'Bitso', cost:100},
        {id:4, name:'Terapia', cost:400},
        {id:5, name:'Celular', cost:25},
        {id:6, name:'Mara TV faltan 1000', cost:125},
        {id:7, name:'Credito HSBC', cost:600},
        {id:8, name:'Genshin Impact', cost:125},
        {id:9, name:'Mara Teclado faltan 1000', cost:125}
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
