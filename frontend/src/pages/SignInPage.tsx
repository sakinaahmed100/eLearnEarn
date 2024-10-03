// src/components/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Signin.css'; // Add your styles if needed
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {
        email,
        password,
      });
      console.log( response.data.access_token); // Log the response data to inspect it
      setMessage('User signed in successfully!');
      localStorage.setItem('token',  response.data.access_token); // Store the token in localStorage
      localStorage.setItem('userId', response.data.userId); 
      navigate('/dashboard'); 
    } catch (error) {
      setMessage('Error signing in. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;

// shabbirraza365@gmail.com