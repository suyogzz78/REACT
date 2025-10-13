
import { use } from 'react';
import './App.css'
import { Themeprovider } from './context/theme'
import ThemeBtn from './components/Themebtn';
import Card from './components/card';
import { useState,useEffect } from 'react';

function App() {
 const [themeMode,setThemeMode] = useState("light");

 const darkTheme =()=>{
  setThemeMode("dark");
 }
 const lightTheme =()=>{

  setThemeMode("light");
 }
//themes
 useEffect(()=>{
  document.querySelector("html").classList.remove("light","dark");
  document.querySelector("html").classList.add(themeMode);
 },[themeMode])

  return (
   
<Themeprovider  value ={{themeMode,darkTheme,lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center bg-gray-100">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
</Themeprovider>
      
  )
}

export default App
