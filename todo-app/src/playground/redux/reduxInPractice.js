import { createStore } from 'redux';

const countReducer = ( state = { count : 0 } ) => {
    console.log(state.count);
};

//store takes 2 parameters state and action
const store = createStore(countReducer);