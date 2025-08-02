/*import { useState,useEffect } from 'react'

import './App.css'

function App() {
     /* //different use of hooks in react 
      const [color,setcolor]=useState('Red')

  const changecolor=()=>{
      setcolor('Blue')*/
      /*
  const [car,setcar]=useState({
    name:"BMW",
    color:"blue",
    mileage:"15"
  })
  const changecolor=()=>{

    setcar((prev)=>{
      return {...prev , color:"red"}
    })
  }*/



  
/*
  return (/*
    <>
      <h1>My fav  color is {color}</h1>
      <button onClick={changecolor}>blue</button>
    </>
    <>
    <h1>My car name is {car.name},with {car.color} color and mileage of {car.mileage} mileage</h1>
    <button onClick={changecolor}>blue</button>
    </>
  )
}ss


  )
}

export default App
*/
/*
import React, { useState } from 'react'

const App = () => {


  const [form,setform]=useState({
    name:"Sobit",
    surname:"Shrestha",
    work:"Bakchodi"


  });
  return (
    
    <>
    <label>Name
      <input value={form.name} onChange={e=>{setform({...form,name:e.target.value})}}/>
    </label>

      <label>Surname
      <input value={form.surname} onChange={e=>{setform({...form,surname:e.target.value})}}/>
    </label>
      <label>Name
      <input value={form.work} onChange={e=>{setform({...form,work:e.target.value})}}/>
    </label>

    <p>
      {form.name}{''}

      {form.surname}{''}
      z
      {form.work}
    </p>
    </>
  )
}

export default App
*/
/*

import React, { useState,useEffect } from 'react'

const App = () => {

  const[count,setcount]=useState(0);  
  const[text,settext]=useState(''); 

  useEffect(()=>{
    console.log('useeffect is running with  no dependencies')
  },[count])

  
return (
  <>
      <h1>Count is {count}</h1>
      <button onClick={()=>{setcount(prev=>prev+1);
       setcount(prev=>prev+1);
       setcount(prev=>prev+1);
       } }>Increment</button>
     <br />
      <input
        value={text}
        onChange={e => settext(e.target.value)}
        placeholder="Type something..."
      />
  </>
)
}
export default App

*/
/*
import React, { useState,useEffect } from 'react'

const App = () => {
  const  [count,setcount]=useState('')
    useEffect(()=>{
        console.log('the useeffect runs with empty dependencies');
    },[] );


  return(
    <>
    <h1>Counteer is {count}</h1>
    <button onClick={()=>setcount(count+1)}>CLick me</button>
</>
  )

}
export default App;
*/
/*
import React, { useState,useEffect } from 'react'

const App = () => {

  const [count,setcount]=useState(0);
  const [text,settext]=useState('');

  useEffect(()=>{
    console.log('useeffect is running with  no dependencies');
  },[]);

  useEffect(()=>{
    console.log('useeffect is running with count dependencies');
  },[count]);

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={()=>setcount(prev=>prev+1)}>Increment</button>
      <input type="text" value={text} onChange={(e)=>settext(e.target.value)} />
      <p>{text}</p>
    </>
  )
}
export default App
*/
import React from 'react'
import Useeffect from './useeffect'
import Useref from './useref'
import Usememohook from './usememohook'
const App = () => {
  return (
   <>
    <h1>Welcome to the App</h1>
    <Useeffect />
    <Useref />
    <Usememohook />
    <p>This is a simple React application demonstrating hooks.</p>
   </>
  )
}

export default App