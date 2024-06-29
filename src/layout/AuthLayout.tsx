import { Box, Container } from '@mui/material'
import {  Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <Box className="container" sx={{color: "white", height: "100vh" ,}} >
    <Container className="container">
       <Outlet />
    </Container>
 </Box>
  )
}

export default AuthLayout