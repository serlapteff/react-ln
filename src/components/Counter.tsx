import React, { useState } from 'react';
import counter from './Counter.module.scss'
export const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = ()=> {
        setCount(count + 1)
    }
    return (
        <div className={counter.wrap}>
            <h1>{count}</h1>
            <button className={counter.button} onClick={increment}>increment</button>
        </div>
    );
};

