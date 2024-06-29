import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutAsync } from "../../store/async/LoginAsync";
import { useAppDispatch } from "../../store/store";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#ffffff", // Ubah sesuai kebutuhan warna background
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Efek bayangan jika diperlukan
}));

const NavBarLogin = () => {
  const dispatch=useAppDispatch()
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link to={'/'} style={{textDecoration:"none"}}>
        <Typography fontWeight={"700"} variant="h5" >
        <img src='/navbarlogintitle.png' width={'100px'}/>
        </Typography>
        
        </Link>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <Avatar alt="User Avatar" src="/avatar.jpg" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={(e)=>navigate('/profile')}>
            <Box
              textAlign={"center"}
              sx={{
                alignItem: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <AccountCircleOutlinedIcon
                sx={{ marginRight: "5px", color: "#FFAF00" }}
              />
              <Typography fontWeight={"700"}> Profile</Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={(e)=>navigate('/addjourney')}>
            <Box
              textAlign={"center"}
              sx={{
                alignItem: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <HistoryEduOutlinedIcon
                sx={{ marginRight: "5px", color: "#87A900" }}
              />
              <Typography fontWeight={"700"}> New Journey</Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={(e)=>navigate('/bookmark')}>
            <Box
              textAlign={"center"}
              sx={{
                alignItem: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <BookmarkBorderOutlinedIcon
                sx={{ marginRight: "5px", color: "#3B97D3" }}
              />
              <Typography fontWeight={"700"}> Bookmark</Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={(e)=>dispatch(logoutAsync())} sx={{
                borderTop:"1px solid grey"}}>
            <Box
              textAlign={"center"}
              sx={{
                alignItem: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <LogoutIcon
                sx={{ marginRight: "5px", color: "#E50914" }}
              />
              <Typography fontWeight={"700"}> Log Out</Typography>
            </Box>
          </MenuItem>
        </Menu>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBarLogin;
