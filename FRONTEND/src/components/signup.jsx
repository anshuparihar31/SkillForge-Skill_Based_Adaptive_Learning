import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/register', formData);
      alert(response.data.msg);
    } catch (error) {
      console.error('Error during registration:', error); 
      alert(error.response?.data?.msg || 'An error occurred'); 
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Create Your Account</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            style={styles.input}
            value={formData.name} 
            onChange={handleChange}
            required
          />
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
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            style={styles.input}
            value={formData.mobile}
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
          <button type="submit" style={styles.button}>Register</button>
        </form>
        <p style={styles.footerText}>Already have an account? <a href="/login" style={styles.link}>Login here</a>.</p>
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
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)', // Enhanced, layered shadow
    maxWidth: '450px',
    width: '100%',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effects
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
    backgroundColor: '#17a2b8',
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
    color: '#17a2b8',
    textDecoration: 'none',
    fontWeight: '500',
  },
};

export default Register;
