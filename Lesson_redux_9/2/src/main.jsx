import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />);

let initState = {
    account: "123456",
    balance: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "DEPOSIT":
            return {
                ...state,
                balance: state.balance + action.payload
            }
        case "WITHDRAW":
            return {
                ...state,
                balance: state.balance - action.payload
            }
        default:
            return state;
    }
}

export const dispatch = (action) => {
    initState = reducer(initState, action);

    console.log(initState)
}

// Action creators
const deposit = (payload) => ({type: "DEPOSIT", payload})
const withdraw = (payload) => ({type: "WITHDRAW", payload})

dispatch(deposit(100)); // {type: "DEPOSIT", payload: 100}
dispatch(deposit(200)); // {type: "DEPOSIT", payload: 200}
dispatch(withdraw(50)); // {type: "WITHDRAW", payload: 50}

console.log(initState)