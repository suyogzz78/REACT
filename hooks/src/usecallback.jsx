import React, { useState, useCallback } from 'react'
import Header from './components/header'
const Usecallback = () => {
    
    const [value, setValue] = useState('');

    const [count,setcount]=useState(0);
    const newfunc=useCallback(() => {}, [count,value]);

  return (
    <div>
        <Header newfunc={newfunc} />
        <h1>Count : {count}</h1>
        <h1>Value : {value}</h1>
        <button onClick={()=>setcount(prev=>prev+1)}>click me</button>
        <button onClick={()=>setValue(value=>value-1)}>Set Value</button>
    </div>
  )
}

export default Usecallback