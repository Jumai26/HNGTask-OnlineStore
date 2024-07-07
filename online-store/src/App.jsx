import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ShopPage from './components/ShopPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <ShopPage/>
      </div>  
    </>
  )
}

export default App
