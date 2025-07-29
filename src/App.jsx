import { Routes, Route } from 'react-router-dom'
import './App.css'
import Chat from './pages/Chat'
import Loginpage from './pages/Loginpage'
import Logout from './pages/Logout';
function App() {

  return (
    <Routes>
      {/* Temp root */}
      <Route path='/' element={<Loginpage />}/>
      {/* Chat page */}
      <Route path="/chat" element={<Chat />}/>
      {/* Chat with room ID */}
      <Route path="/chat/:roomId" element={<Chat />}/>
      {/*Login page */}
      <Route path="/login" element={<Loginpage />}/>
      {/* Logout page */}
      <Route path="/logout" element={<Logout />} />
      {/* Dynamic chat room route - put this last so it doesn't override other routes */}
      <Route path="/:roomId" element={<Chat />}/>
    </Routes>
    
  )
}

export default App;