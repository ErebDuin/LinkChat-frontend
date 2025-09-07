import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:8080/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        setMessage('Login successful! Redirecting...');
        setTimeout(() => navigate('/chat'), 1000);
      } else if (res.status === 401) {
        setMessage('Login failed: Invalid username or password');
      } else {
        setMessage('Login failed: Server error');
      }
    } catch (err) {
      setMessage('Login failed: Network error');
    }
  };

  return (
    <div className="center">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="txt_field">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span></span>
          <label>Username</label>
        </div>

        {/* Password */}
        <div className="txt_field">
          <input
            className="password-field"
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span></span>
          <label>Password</label>
          <div
            className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} toggle-password`}
            onClick={() => setShowPassword(!showPassword)}
          ></div>
        </div>

        {/* Submit */}
        <input type="submit" value="Login"></input>

        {/* Forgot Password */}
        <div className="pass">Forgot Username or Password?</div>

        {/* Message */}
        {message && (
          <p
            className={`login-message ${
              message.startsWith('Login successful') ? 'success' : 'error'
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
