import React, { useContext } from 'react'
import Context from '../../Context'

const Text = () => {
    const {title} = useContext(Context);

    return (
        <h1>{title}</h1>
    )
}

export default Text