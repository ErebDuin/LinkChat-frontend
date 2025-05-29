import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Participants from './components/Participants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite === React</h1>
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

    {/* Chat Application Structure */}
      <div className="chat-app">
      <h1 className="app-title">LinkChat</h1>
      <div className="chat-container">
        <Participants />
        {/* The rest of your chat content will go here */}
        <div className="chat-placeholder">
          Chat content will be implemented later
        </div>
      </div>
    </div>
    </>
    
  )
}

export default App
