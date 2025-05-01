import React, { memo } from 'react'

const Button = ({ onClick }) => {
    console.log("Button render");

    return (
        <button onClick={onClick}>Click me</button>
    )
}

export default memo(Button)