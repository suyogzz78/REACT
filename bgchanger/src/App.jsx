import React, { useState } from "react";

function App() {
  const [color,setcolor]= useState("red");

  return (
    <>
    <h1 className="justify-center flex flex-wrap " 
    style={{backgroundColor:"red"}}>BACKGROUND COLOR CHANGER</h1>
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center px-2 bottom-2 inset-x-0 ">
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-xl px-2 py-2 rounded-xl">
          <button onClick={()=> setcolor("red")}
            className="px-2  outline-none rounded-lg"
             style={{backgroundColor:"red"}}> Red</button>

           <button onClick={()=>setcolor("green")}
           className="px-2  outline-none rounded-lg" 
           style={{backgroundColor:"green"}}> Green</button>
            <button onClick={()=>setcolor("yellow")}
            className="px-2  outline-none rounded-lg" 
            style={{backgroundColor:"yellow"}}> Yellow</button>
             <button  onClick={()=>setcolor("purple")} 
             className="px-2  outline-none rounded-lg" 
             style={{backgroundColor:"purple"}}> Purple</button>
              <button onClick={()=>setcolor("olive")} 
              className="px-2  outline-none rounded-lg" 
              style={{backgroundColor:"olive"}}> Olive</button>
              <button onClick={()=>setcolor("whitesmoke")} 
              className="px-2  outline-none rounded-lg " 
              style={{backgroundColor:"black",color:"white"}}> Reset</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
