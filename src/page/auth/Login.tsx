import React from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import useLoginForm from './hooks/login'; // Adjust the path as necessary

const Login = () => {
  const { formData, handleChange, handleSubmit } = useLoginForm();

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
            Login
          </Typography>
          <img src='/leaf.png' alt='Leaf Logo' style={{ width: '100px', height: '110px' }} />
        </Box>
        <Box
          sx={{ padding: "0 10px 10px 10px" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ width: '100%' }}
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
              value={formData.password}
              onChange={handleChange}
              sx={{ width: '100%' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt:1, mb: 1}}
            >
              Login
            </Button>
            <Typography>
              Don't have an account yet?{' '}Klik {' '}
              <Link to={'/auth/register'} style={{ textDecoration: 'none', color: 'blue' }}>
                here
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
