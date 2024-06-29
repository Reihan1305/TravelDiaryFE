import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../lib/Api';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate()
  const data ={
    name:fullName,
    email:email,
    password,
    phone
  }

  const handleSubmit = async(event:any) => {
    event.preventDefault();
    console.log('Submitting:', data)
    try {
      const register = await API.post("/auth/register",data)
      navigate('/auth/login')
      return register
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ marginTop: '20px'}}>
      <Box
          display="flex"
          justifyContent="space-between"
          alignItems="start"
        >
          <img src='/pintpoint.png' alt='Pintpoint Logo' style={{ width: '70px', height: '100px' }} />
          <Typography component="h1" variant="h4" fontWeight={'700'} style={{ marginTop:"20px",marginLeft:"15px" }}>
            Register
          </Typography>
          <img src='/leaf.png' alt='Leaf Logo' style={{ width: '100px', height: '110px' }} />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{padding:"20px" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              autoComplete="name"
              autoFocus
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone"
              type="number"
              id="phone"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Typography>
              Already Have Account? click<Link to={'/auth/login'} style={{ textDecoration: "none", color: "blue" }}>Here</Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
