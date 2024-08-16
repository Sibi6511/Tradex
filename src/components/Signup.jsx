import React, { useState } from 'react';
import video from '../components/Signupbg.mp4';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';  // Add Link import here
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    number: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.number) newErrors.number = 'Phone number is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      axios.post('http://localhost:8080/api/signup', formData)
        .then((response) => {
          console.log(response.data);
          navigate('/login');
        })
        .catch((error) => {
          console.error(error);
          setErrors({ ...errors, signup: 'Signup failed' });
        });
    } else {
      setErrors(newErrors);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='signup-container'>
      <video className='signup-background' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>

      <div className='signup-content'>
        <Paper elevation={10} square className="signup-paper" style={{ backgroundColor: "#FFFBF5", maxWidth: '400px', padding: '20px', margin: 'auto', marginTop: '50px' }}>
          <Typography variant="h4" align="center" gutterBottom style={{ fontFamily: 'Roboto Slab, serif' }}>
            Sign Up
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Name"
              type="text"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              style={{ marginBottom: '20px' }}
            />

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
              id="number"
              name="number"
              label="Phone Number"
              type="text"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              placeholder="Enter your phone number"
              value={formData.number}
              onChange={handleChange}
              error={!!errors.number}
              helperText={errors.number}
              style={{ marginBottom: '20px' }}
            />

            <TextField
              id="password"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {errors.signup && (
              <Typography color="error" variant="body2" align="center" style={{ marginBottom: '20px' }}>
                {errors.signup}
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
              Sign Up
            </Button>
          </form>

          <Typography variant="body2" align="center" className='small-text' style={{ marginTop: '10px' }}>
            Already have an account? <Link to="/login" style={{ textDecoration: 'none', color: 'secondary' }}>Login</Link>
          </Typography>
          <Link to="/" id="signup-link" style={{ display: 'block', textAlign: 'center', color: 'secondary', marginTop: '20px' }}>Back to Home</Link>
        </Paper>
      </div>
    </div>
  );
};

export default Signup;
