import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />);

let initState = {
    account: "123456",
    balance: 0
}

const reducer = (state = initState, action) => {
    // if(action === "DEPOSIT"){
        // return {
        //     ...state,
        //     balance: state.balance + 10
        // }
    // }else if(action === "WITHDRAW"){
        // return {
        //     ...state,
        //     balance: state.balance - 10
        // }
    // }else {
    //     return state;
    // }

    switch (action) {
        case "DEPOSIT":
            return {
                ...state,
                balance: state.balance + 10
            }
        case "WITHDRAW":
            return {
                ...state,
                balance: state.balance - 10
            }
        default:
            return state;
    }
}

const dispatch = (action) => {
    initState = reducer(initState, action);
}

dispatch("DEPOSIT");
dispatch("DEPOSIT");
dispatch("WITHDRAW");

console.log(initState)
