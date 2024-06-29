import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import BackgroundImage from '/navbar.jpg'; 
import { Link, useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'start',
  color: '#fff',
}));

const LogoImage = styled('img')(({ theme }) => ({
  height: '45px',
  marginRight: theme.spacing(2),
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: 'bold',
  fontSize: '24px',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  textTransform: 'none',
}));

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
      <Link to={'/home'} style={{textDecoration:"none"}}>
        <Typography fontWeight={"700"} variant="h5" >
        <img src='/navbartitle.png' width={'100px'}/>
        </Typography>
        </Link>
        <Box>
          <CustomButton color="inherit" onClick={(e)=>navigate('/auth/login')}>
            Login
          </CustomButton>
          <CustomButton variant="contained" color="primary" onClick={(e)=>{navigate('/auth/register')}}>
            Register
          </CustomButton>
        </Box>
      </Toolbar>
      <Typography variant='h3' paddingLeft={2}>
      The Journey<br/>
      you ever dreamed of.
      </Typography>
      <Typography paddingLeft={2} marginBottom={3}>
      We made a tool so you can easily keep & share your travel memories.<br/>
      But there is a lot more
      </Typography>
    </StyledAppBar>
  );
};

export default NavBar;
