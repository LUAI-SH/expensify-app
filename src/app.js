import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// ---- * App * ---- 
import AppRouter from './components/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// ---- * STYLES * ---- 
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(
addExpense({ 
    description: 'Water bill', 
    note: 'For August', 
    amount: 200,  
}));

store.dispatch(
addExpense({ 
    description: 'Gas bill', 
    note: 'For June', 
    amount: 500,
    createdAt: 1000  
}));

store.dispatch(
    addExpense({ 
        description: 'Rent', 
        note: 'For June', 
        amount: 10900,  
    }));


// store.dispatch(setTextFilter('water'));
    
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
