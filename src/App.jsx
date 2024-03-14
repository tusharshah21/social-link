import { useState } from 'react'
import Social from "./section/Social.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Social/>
    </>
  )
}

export default App
