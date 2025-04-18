import React, { useContext } from 'react'
import { ContextValue } from './ContextValue'

const Count = () => {
    const {count, handleIncrement} = useContext(ContextValue)

    return (
       <div>
            <button onClick={handleIncrement}>Increment V2</button>
            <div>Count: {count}</div>
       </div>
    )
}

export default Count