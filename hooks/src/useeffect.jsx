import React from 'react'
import { useState,useEffect } from 'react'
const Useeffect = () => {

    const [count,setcount]=useState(0);
    const [text,settext]=useState('suyog');
    useEffect(()=>{
        setTimeout(() => {
            setcount(count+1);
            console.log('useeffect is running');
        },2000);
    },[count,text])
  return (
    <>
        <h1>Count is {count}</h1>
      
    </>
  )
}

export default Useeffect