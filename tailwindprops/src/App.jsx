import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-300 text-black mb-5'> Tailwind test</h1>
     /*
    <Card username="BANDAR" price="250" btn="sick me"/>
    <Card username="lord" price="251" btn="sikkk me"/>
  

    </>
  )
}

export default App
