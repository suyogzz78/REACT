import React from 'react'
import Navbar from './components/navbar/navbar';
import Suyog from './components/Suyog/Suyog';
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/about/about'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Suyog/>
      <div className='container'>
        <Title subtitle='Our Courses' title='What we offer'/>
      <Program/>
      <About/>
        <Title subtitle='College Photos' title='Gallery'/>
      </div>
    </div>
  )
}

export default App