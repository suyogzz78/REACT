import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const[counter,setcounter]= useState(15)

const addvalue=()=>
{
  console.log("value is added",counter);
  if(counter < 20 ){
 setcounter(counter +1)
  }
  else
    alert("counter cannot go above 20")

}

const removevalue=()=>
{
  if(counter > 0 ){
    setcounter(counter-1)
  }
  else{
    alert("counter cannot go below 0")
  }
}
  return (
    <>
        <h1>Suyog Gautam</h1>
        <h1>Counter value {counter}</h1>
        <button onClick={addvalue} style={{ marginBottom: "10px" }}>Add value {counter}</button>
        <br/>
        <button onClick={removevalue}>remove value {counter}</button> 
      
           
    </>
  )
}

export default App
