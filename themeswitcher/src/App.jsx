
import { use } from 'react';
import './App.css'
import { Themeprovider } from './context/theme'

function App() {
 const [themeMode,setThemeMode] = useState("light");

 const darkTheme =()=>{
  setThemeMode("dark");
 }
 const lightTheme =()=>{

  setThemeMode("light");
 }

 useffect(()=>{
  document.querySelector("html").classList.remove("light","dark");
  document.querySelector("html").classList.add(themeMode);
 },[themeMode])

  return (
   
<Themeprovider  value ={{themeMode,darkTheme,lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center bg-gray-100">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/*cthemebtn*/}
                    </div>
s
                    <div className="w-full max-w-sm mx-auto">
                       {/*card*/}
                    </div>
                </div>
            </div>
</Themeprovider>
      
  )
}

export default App
