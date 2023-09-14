import { AppBar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, InputBase, Paper, Toolbar, Typography } from "@mui/material";
import image from "./images/imgsrbg.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRecoilState } from "recoil";
import { backButtonAtom } from "./recoil/atoms";
import SearchIcon from "@mui/icons-material/Search";
import tulsi from "./images/tulsi.jpeg";
import neem from "./images/neem.webp";
import mango from "./images/mango.jpeg";
import aloe from "./images/aloe.jpg"
import axios from "axios";
import { useState } from "react";
const ImageSearch=()=>{
    const divStyle = {
        position: "relative",
        width: "100vw",
        height: "100vh",
      };
    
      const backgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        filter: "blur(0.4px)",
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
        backdropFilter: "blur(0.1px)", 
      };
      const [backButton,setBackButton]=useRecoilState(backButtonAtom);
      const[searchImage,setSearchImage]=useState("");
      const searchImageHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("text", searchImage);
    
        try {
          const response = await axios.post("http://localhost:8000/upload", formData);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
        console.log(searchImage);
        setSearchImage("");
      };

      const searchHandler = (e) => {
        setSearchImage(e.target.value);
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
            
                <IconButton onClick={()=>{setBackButton(true)}}>
                <ArrowBackIcon/> 
                </IconButton>
          
          </Toolbar>
          </AppBar>
          <Box sx={{ flexGrow: 1 , mt:"10%"}}>
        <Paper elevation={16} sx={{ mt: 3,width:"60%",ml:"18%",height:"35px" }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Images.."
            inputProps={{ "aria-label": "search" }}
            value={searchImage}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  searchImageHandler(e);
                }
              }}
              onChange={searchHandler}
          />
          <IconButton
            type="button"
            sx={{ p: "10px", float: "right" }}
            aria-label="search"
            onClick={searchImageHandler}
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        <Box sx={{ flexGrow: 1 , mt:"10%"}}>
        <Grid container spacing={0.5}>
              <Grid item xs={12} sm={3}>
        <Card sx={{ maxWidth: 345,mt:2,ml:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={tulsi}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tulsi 
          </Typography>
          <Typography variant="body1" color="text.secondary">
          bronchitis, bronchial asthma, malaria, diarrhea, dysentery...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={12} sm={3}>
    <Card sx={{ maxWidth: 345,mt:2,ml:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={neem}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Neem
          </Typography>
          <Typography variant="body1" color="text.secondary">
          insecticide, insect repellent, and oral dentifrice..
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={12} sm={3}>
        <Card sx={{ maxWidth: 345,mt:2,ml:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={mango}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
   Mango
          </Typography>
          <Typography variant="body1" color="text.secondary">
          used to treat gall stones and kidney stones..
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={12} sm={3}>
        <Card sx={{ maxWidth: 345,mt:2,ml:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={aloe}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
   Aloe Vera
          </Typography>
          <Typography variant="body1" color="text.secondary">
          treat skin injuries (burns, cuts, insect bites, and eczemas) and digestive problems ..
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
    );
}

export default ImageSearch;