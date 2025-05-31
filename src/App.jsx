import { Routes, Route } from 'react-router-dom'
import './App.css'
import Chat from './pages/Chat'
import Loginpage from './components/Loginpage'
function App() {

  return (
    <Routes>
      
      {/* Chat page */}
      <Route path="/chat" element={<Chat />}/>
      {/*Login page */}
      <Route path="/login" element={<Loginpage />}/>
      {/* Temp root */}
      <Route path='/' element={<Chat />}/>
    </Routes>
    
  )
}

export default App
