import { Routes, Route } from 'react-router-dom'
import './App.css'
import Chat from './pages/Chat'

function App() {

  return (
    <Routes>
      {/* Temp root */}
      <Route path='/' element={<Chat />}/>
      {/* Chat page */}
      <Route path="/chat" element={<Chat />}/>
    </Routes>
    
  )
}

export default App
