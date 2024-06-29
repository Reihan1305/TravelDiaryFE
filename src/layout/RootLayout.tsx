import { Box, Container } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../component/Navbar";
import LoginNavbar from "../component/Navbar/LoginNavbar";
import { useAppSelector } from "../store/store";

const RootLayout = () => {
  const islogin = useAppSelector((state)=>state.auth.isLogin)
  
  if(islogin){
    return(
        <Navigate to={'/'}/>
    )
  }
  return (
    <Box
      sx={{
        backgroundColor: "#E5E5E5",
      }}><NavBar/>
      <Box sx={{
        padding:"0 100px"
      }}>

        <Outlet />
      </Box>
    </Box>
  );
};

export default RootLayout;
