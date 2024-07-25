import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeButton from './components/LIkeButton.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>State in React</h1>
     <LikeButton/>
    </>
  )
}

export default App
