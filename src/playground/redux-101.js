import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
    
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = ({ count } = {}) => ({
    type: 'RESET',
});


// Reduces 

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return { count : state.count + action.incrementBy }
            break;
        case 'DECREMENT':
            return { count : state.count - action.decrementBy }
            break;
        case 'SET':
            return { count : action.count }
            // return { count : 0 }
            break;    
        case 'RESET':
            return { count : 0 }
            break;    
        default:
            return state;
            break;
    }
}


const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 5 }));


store.dispatch(decrementCount({ decrementBy: 5 }));


store.dispatch(setCount( {count : 101} ));

store.dispatch(resetCount());










