import {createContext, useReducer} from 'react';

const AppReducer = (state, action) =>{
    switch(action.type){
        default:
            return state;
    }
}


const initialState ={
    budget:20000,
    expenses:[
        {id:12, name:'shopping', cost:32},
        {id:12, name:'books', cost:32},
        {id:12, name:'figures', cost:32},
        {id:12, name:'session', cost:32},
        {id:12, name:'week', cost:32},
        {id:12, name:'games', cost:32}
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
