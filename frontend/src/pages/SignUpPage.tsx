// src/components/Signup.tsx
import React, { useState } from 'react';
// src/components/Signup.tsx
import '../styles/Signup.css';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // You will call the backend API here (FastAPI)
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/signup`, {
        username,
        email,
        password,
      });
      setMessage('User signed up successfully!');
    } catch (error) {
      setMessage('Error signing up. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          minLength={3}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default Signup;

