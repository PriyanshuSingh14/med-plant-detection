
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import homebg from "./images/homebg.jpg"
import React from 'react';
import HomePageContainer from "./HomePageContainer";

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
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
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

  return (
    <div style={divStyle}>
      <div style={backgroundStyle}></div>
      <div style={contentStyle}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CHARAKAGIKI
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
