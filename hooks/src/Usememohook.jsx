import React from 'react'
import { useState, useMemo } from 'react'
const Usememohook = () => {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(0);


    const cubenum=(num)=>{
        console.log('cubenum is running');
        return num * num * num;
    }

    const result= useMemo(() => cubenum(number), [number]);
  return (
   <>
   <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} />
   <h1>Cube of a number is :{result}</h1>
   <button onClick={()=>setCounter(counter+1)}>Counter++</button>
    <h1>Counter is : {counter}</h1>
   </>
  )
}

export default Usememohook