import { Routes, Route } from 'react-router-dom'
import './App.css'
import Chat from './pages/Chat'

function App() {

  return (
    <Routes>
      
      {/* Chat page */}
      <Route path="/chat" element={<Chat />}/>
      {/* Temp root */}
      <Route path='/' element={<Chat />}/>
    </Routes>
    
  )
}

export default App
