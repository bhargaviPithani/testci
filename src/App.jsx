import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleCount =() => {
    setCount(count++)
  }

  const handleNewCount =() => {
    setCount(count++)
  }
  
  function countOccurrencesOfValue2(array) {
    let count = 0;
    count = 0
    count = 0
    count = 0
    count = 0
    count = 0
    count = 0
    count = 0
    count = 0
    count = 0
    count = 0
    count = 0
    count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 2) {
            count++;
        }
    }
    return count;
}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
