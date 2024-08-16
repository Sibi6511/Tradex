import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      axios.post('http://localhost:8080/api/signup/login', formData)
        .then((response) => {
          console.log(response.data);
          navigate('/');
        })
        .catch((error) => {
          console.error(error);
          setErrors({ ...errors, login: 'Invalid email or password' });
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='login-container'>
      {/* Add video background */}
      <video autoPlay loop muted className='video-background'>
        <source src={require('./background.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='login-content'>
        <Paper elevation={10} square className="login-paper" style={{ backgroundColor: "#FFFBF5", maxWidth: '400px', padding: '20px', margin: 'auto', marginTop: '50px' }}>
          <Typography variant="h4" align="center" gutterBottom style={{ fontFamily: 'Roboto Slab, serif' }}>
            Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              style={{ marginBottom: '20px' }}
            />

            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              style={{ marginBottom: '20px' }}
            />

            {errors.login && (
              <Typography color="error" variant="body2" align="center" style={{ marginBottom: '20px' }}>
                {errors.login}
              </Typography>
            )}

            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              fullWidth
              size="large"
              style={{ marginBottom: '20px' }}
            >
              Login
            </Button>
          </form>

          <Typography variant="body2" align="center" className='small-text' style={{ marginTop: '10px' }}>
            Don't have an account? <Link to="/signup" style={{ textDecoration: 'none', color: 'secondary' }}>Sign Up</Link>
          </Typography>
          <Link to="/" id="login-link" style={{ display: 'block', textAlign: 'center', color: 'secondary', marginTop: '20px' }}>Back to Home</Link>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
