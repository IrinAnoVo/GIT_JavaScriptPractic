import { createStore } from 'redux'
import accountReducer from './reduсes/account';

const store = createStore(
    accountReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;