import { Routes, Route } from 'react-router-dom'
import './App.css'
import Chat from './pages/Chat'
import Loginpage from './pages/Loginpage'
import Logout from './pages/Logout';
import HomePage from './pages/HomePage';
function App() {

  return (
    <Routes>
      {/* Home page */}
      <Route path='/' element={<HomePage />}/>
      {/* Login page */}
      <Route path='/login' element={<Loginpage />}/>
      {/* Chat page */}
      <Route path="/chat" element={<Chat />}/>
      {/* Chat with room ID */}
      <Route path="/chat/:roomId" element={<Chat />}/>
      {/* Logout page */}
      <Route path="/logout" element={<Logout />} />
      {/* Dynamic chat room route - put this last so it doesn't override other routes */}
      <Route path="/:roomId" element={<Chat />}/>
    </Routes>
    
  )
}

export default App;