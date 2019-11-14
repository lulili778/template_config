import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux';



const store =configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 45090, createdAt: 109500}));

// store.dispatch(setTextFilter('water'));


// setTimeout (()=>{
//     store.dispatch(setTextFilter('bill'))
// },3000)

const state = store.getState();
// const visibleExpense = getVisibleExpenses(state.addExpense,state.filters);
console.log(state);


const jsx = ( <Provider store={store}>
    <AppRouter />
    </Provider>
)


//addExpense -> water bill
//addExpense -> Gas bill
//setTextFilter -> bill (2 items) water (1 item)
//getVisibleExpense -> print visibles ones to screen


ReactDOM.render(jsx,document.getElementById('app'));
