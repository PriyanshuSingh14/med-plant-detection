

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import homebg from "./images/homebg.jpg"
import React, { useEffect } from 'react';
import HomePageContainer from "./HomePageContainer";
import lg from "./images/logofront.png"
import axios from "axios";

const Home = () => {
  const divStyle = {
    position: "relative",
    width: "100vw",
    height: "100vh",
  };

  const backgroundStyle = {
    backgroundImage: `url(${homebg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100%",
    minHeight: "100vh",
    filter: "blur(1px)",
  };

  const contentStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
   
    color: "white",
    backdropFilter: "blur(3px)", 
  };

  //  useEffect(() => {
  //   const res = axios.get("http://localhost:3000/users");
  //   console.log(res);
  //  },[]);

  return (
    <div style={divStyle}>
      <div style={backgroundStyle}></div>
      <div style={contentStyle}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <img src={lg} alt="logo" height="70px" width="70px" ></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AN INNOVATION OF MINISTRY OF AYUSH
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <HomePageContainer/>
    </Box>

      </div>
    </div>
  );
}

export default Home;