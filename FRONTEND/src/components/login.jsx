import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login', formData);
      if (response.data.user) {
        alert('Login successful!');
        localStorage.setItem('user', JSON.stringify(response.data.user)); 
        navigate('/');
      } else {
        alert('Unexpected response format.');
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.status === 400) {
        if (error.response.data.msg === 'User not found') {
          alert('User not found, redirecting to registration.');
          navigate('/signup');
        } else {
          alert(error.response.data.msg);
        }
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back!</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.footerText}>Don’t have an account? <a href="/signup" style={styles.link}>Register here</a>.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '0 20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)', // Same professional shadow as Register
    maxWidth: '450px',
    width: '100%',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#212529',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    margin: '12px 0',
    padding: '12px',
    width: '100%',
    border: '1px solid #ced4da',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '500',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  button: {
    marginTop: '20px',
    padding: '12px 0',
    backgroundColor: '#28a745',  // Changed to green to indicate login success
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '17px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    width: '100%',
  },
  footerText: {
    marginTop: '25px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#6c757d',
  },
  link: {
    color: '#28a745',
    textDecoration: 'none',
    fontWeight: '500',
  },
};

export default Login;
