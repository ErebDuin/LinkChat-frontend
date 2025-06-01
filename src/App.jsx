<<<<<<< HEAD
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Message from './Message';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Message />}/>
      </Routes>
    </Router>
  );
=======
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
>>>>>>> main
}

export default App;