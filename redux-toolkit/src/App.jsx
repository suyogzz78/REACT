import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './component/Addtodo'
import Todo from './component/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>REDUX TOOLKKIT</h1>
      <Addtodo />
      <Todo/>
    </>
  )
}

export default App
