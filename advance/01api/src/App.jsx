import React, {useEffect} from 'react'

function App() {
  function fetchProducts() {
    console.log('Fetching products...')
  }
  return (
    <button onClick={fetchProducts}>Fetch Products</button>
  )
}

export default App
