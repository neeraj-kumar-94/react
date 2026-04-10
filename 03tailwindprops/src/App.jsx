import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-500 text-white p-4'>tailwind test</h1>
      < Card  username="John Doe" btnText="Read More"/>
      < Card  username="Doe" />
    </>
  )
}

export default App
