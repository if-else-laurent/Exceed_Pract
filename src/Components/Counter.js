import React, { useState } from 'react';

const Counter = (props) => {
// const {startCount, stepCount } = props;  //Эквивалентная запись 
const startCount = props.startCount;
const stepCount = props.stepCount;

console.log(props);
    const [count, setCount] = useState(startCount);
    return(
    <div>
        <p> Counter: {count} </p>
        <button onClick={() => setCount(count + stepCount)}>Click</button>
    </div>
    )
}

export default Counter;