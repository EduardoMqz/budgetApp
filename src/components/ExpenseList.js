import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () =>{
    const expenses =[
        {id: 1243, name:'Shopping', cost:50},
        {id: 2345, name:'Clothes', cost:100},
        {id: 3456, name:'Books', cost:145},
        {id: 4567, name:'Figures', cost:542},
        {id: 5678, name:'House', cost:541}
    
    ]
    return(
        <ul className='list-group'>
            {expenses.map((expense)=>(
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>

    );
};

export default ExpenseList;