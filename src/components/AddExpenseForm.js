import React, {useState, useContext} from 'react';
import {AppContext} from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm = () =>{
    const {dispatch} = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) =>{
        event.preventDefault();//prevents the page from reloading
        const expense = {
            id: uuidv4(),
            name:name,
            cost: parseInt(cost)
        };

        dispatch({
            type:'ADD_EXPENSE',
            payload: expense,
        });
    };
    return(
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>Name</label>
                    <input required='required' value={name} onChange={(event) => setName(event.target.value)} type='text' className='form-control' id='name'></input>
                </div>
                <div className='col-sm'>
                    <label for='cost'>Cost</label>
                    <input required='requiered' value={cost} onChange={(event) => setCost(event.target.value)} type='text' className='form-control' id='cost'></input>
                </div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>Save</button>
                </div>
            </div>
        </form>

    );
};

export default AddExpenseForm;