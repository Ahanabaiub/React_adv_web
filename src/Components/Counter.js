import React from 'react';
import { useState  } from 'react';

const Counter = ()=>{

    const[count,setCount] = useState(0);

    return (

        <div>
            <p>Click the button to increse Count. Have fun....</p>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <h2>Currently Count is {count}</h2>
        </div>
       
    );
}

export default Counter;