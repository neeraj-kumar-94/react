import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1)
    console.log(counter); 
  }

  const removevalue = () => {
    setCounter(counter - 1)
    console.log(counter); 
  }


  return (
    <>
      <h1>chai aure react</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
