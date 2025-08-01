
/*import React, { use } from 'react'
import { useState,useEffect,useRef } from 'react'
//useref is a react hook that allows us to create mutable varvriable which will nor re-render the component
// it is used to access the DOM elements directly

const Useref = () => {
  const [value, setValue] = useState(0);
   //const [count, setCount] = useState(0);

      /*  useEffect(()=>{

          setCount(prevCount => prevCount + 1);
          console.log("useEffect called", count);
        })
          */
         /*
  const count = useRef(0);
  console.log(count.current);
  useEffect(() => {
    count.current = count.current + 1;
    console.log("useEffect called", count.current);

  })
  

  return (
   <>
    <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
    <h1>Value: {value}</h1>
    <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
    <h1>Count is : {count.current}</h1>
   </>
  )
}

export default Useref 
*/
import React, { useState, useEffect, useRef } from 'react';
const Useref= () => {
  const inputelement= useRef();
  const btn=()=>{
    console.log(inputelement.current);
    inputelement.current.style.color='red';
    
    

    
  }



  return(
    <>
    <input type='text' ref={inputelement}></input>
    <button onClick={btn} >Click Me</button>
    </>
  )
}
export default Useref;