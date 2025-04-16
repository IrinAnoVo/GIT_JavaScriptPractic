import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext';

const HomePage = () => {
    let { theme } = useContext(ThemeContext);

    return (
        <div>{theme}</div>
    )
}

export default HomePage