import { useState } from 'react'
import CyberYoda from './components/CyberYodha'
import './App.css'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Navbar/>
        <CyberYoda />
        <Services></Services>
        <Team></Team>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
