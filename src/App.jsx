import { Routes, Route } from 'react-router-dom'
import './App.css'
import Chat from './pages/Chat'
import Loginpage from './pages/Loginpage'
import Logout from './pages/Logout';
function App() {

  return (
    <Routes>
      
      {/* Chat page */}
      <Route path="/chat" element={<Chat />}/>
      {/*Login page */}
      <Route path="/login" element={<Loginpage />}/>
      {/* Logout page */}
      <Route path="/logout" element={<Logout />} />
      {/* Temp root */}
      <Route path='/' element={<Loginpage />}/>
    </Routes>
    
  )
}

export default App;