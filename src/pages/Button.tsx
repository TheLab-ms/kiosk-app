import React from 'react';
import { useState } from "react";

const Button = () => {
        const [count, setCount] = useState(10);
    return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(20)}>2</button>
        <button onClick={() => setCount(30)}>3</button>
        <button onClick={() => setCount(40)}>4</button>
        <button onClick={() => setCount(50)}>5</button> 

      




    </div>
  );
}

export default Button;

