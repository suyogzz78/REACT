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
      
      {form.work}
    </p>
    </>
  )
}

export default App