import React, { useState } from 'react';
import { AppBar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, InputBase, Paper, Toolbar, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { backButtonAtom } from "./recoil/atoms";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import sc from "./images/science.jpg";
import SearchIcon from "@mui/icons-material/Search";
import tulsi from "./images/tulsi.jpeg";
import neem from "./images/neem.webp";
import mango from "./images/mango.jpeg";
import aloe from "./images/aloe.jpg"
import axios from "axios";

const ScientificNames = () => {
  const divStyle = {
    position: "relative",
    width: "100vw",
    height: "100vh",
  };

  const backgroundStyle = {
    backgroundImage: `url(${sc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
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
  };

  const [backButton, setBackButton] = useRecoilState(backButtonAtom);
  const [searchScientificNames, setSearchScientificNames] = useState("");

  const scientificNameHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", searchScientificNames);

    try {
      const response = await axios.post("http://localhost:8000/upload", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    console.log(searchScientificNames);
    setSearchScientificNames("");
  };

  const searchHandler = (e) => {
    setSearchScientificNames(e.target.value);
  };

  return (
    <>
      <div style={divStyle}>
        <div style={backgroundStyle}></div>
        <div style={contentStyle}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  CHARAKAGIKI
                </Typography>
                <IconButton onClick={() => { setBackButton(true) }}>
                  <ArrowBackIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Box sx={{ flexGrow: 1, mt: "10%" }}>
              <Paper elevation={16} sx={{ mt: 3, width: "60%", ml: "18%", height: "35px" }}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Scientific Names..."
                  inputProps={{ "aria-label": "search" }}
                  value={searchScientificNames}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      scientificNameHandler(e);
                    }
                  }}
                  onChange={searchHandler}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px", float: "right" }}
                  aria-label="search"
                  onClick={scientificNameHandler}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
              <Box sx={{ flexGrow: 1, mt: "10%" }}>
                <Grid container spacing={0.5}>
                  <Grid item xs={12} sm={3}>
                    <Card sx={{ maxWidth: 345, mt: 2, ml: 2 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={tulsi}
                          alt="Tulsi"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Tulsi
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            Ocimum tenuiflorum
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Card sx={{ maxWidth: 345, mt: 2, ml: 2 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={neem}
                          alt="Neem"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Neem
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            Azadirachta indica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Card sx={{ maxWidth: 345, mt: 2, ml: 2 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={mango}
                          alt="Mango"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Mango
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            Mangifera indica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Card sx={{ maxWidth: 345, mt: 2, ml: 2 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={aloe}
                          alt="Aloe Vera"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Aloe Vera
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            Aloe barbadensis miller
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </>
  )
}

export default ScientificNames;
