let initState = {
    account: "123456",
    balance: 0
}
const accountReducer = (state = initState, action) => {
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
export default accountReducer;