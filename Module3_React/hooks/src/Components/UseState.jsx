import React, { useState } from 'react';

const UseState = () => {

    const [count, setCount] = useState(1);

    const increment = ()=>{
        setCount((prevCount) => prevCount+1);
    }

    const decrement = ()=>{
        setCount((prevCount) => prevCount-1);
    }

    return ( 
        <div>
            <p>{count}</p>
            <button onClick = {increment}>+</button>
            <button onClick = {decrement}>-</button>
        </div>
     );
}
 
export default UseState;