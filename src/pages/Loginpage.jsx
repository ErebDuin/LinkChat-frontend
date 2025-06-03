import React, { useState } from 'react';
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // New state for role
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    // alert(`Role: ${role}\nEmail: ${email}\nPassword: ${password}`);
    navigate('/chat');
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Role:</label>
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Loginpage;







