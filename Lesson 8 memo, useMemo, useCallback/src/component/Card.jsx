import { memo } from "react";

const Card = ({ name }) => {
    console.log("Rendering ...", name);
    
    return (
        <div>Card: {name}</div>
    )
}

export default memo(Card)