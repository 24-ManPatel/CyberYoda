import { useState } from 'react'
import CyberYoda from './components/CyberYodha'
import './App.css'
import Navbar from './components/Navbar'
import Services from './components/Services'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Navbar/>
        <CyberYoda />
        <Services></Services>
      </div>
    </>
  )
}

export default App
