import { AppBar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import imagereg from "./images/imageupload.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import { useRecoilState } from "recoil";
import { backButtonAtom, webcamAtom } from "./recoil/atoms";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axios from "axios";
import WebCam from "./WebCam";
const ImageRecognition=()=>{
    const divStyle = {
        position: "relative",
        width: "100vw",
        height: "100vh",
      };
    
      const backgroundStyle = {
        backgroundImage: `url(${imagereg})`,
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
        backdropFilter: "blur(0.6px)", 
      };

      const [backButton,setBackButton]=useRecoilState(backButtonAtom);
      const [selectedFile, setSelectedFile] = useState(null);
  const [webcam, setWebcam] = useRecoilState(webcamAtom);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const sendPhoto = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", selectedFile);

    await axios
      .post("http://localhost:8000/upload", formdata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const[capturedImage,setCapturedImage]=useState();
  const capturedImageHandler=(imageData)=>{
    setCapturedImage(imageData);
    console.log(capturedImage);

  }


    return (
        <><div style={divStyle}>
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
       
        <Box sx={{ flexGrow: 1 ,ml:"10%", mt:"10%"}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
  <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="file-input"
        />
        <label htmlFor="file-input">
          <Button
            variant="contained"
            component="span"
            color="primary"
            sx={{ mr: 2, mt: 2 }}
          >
            Select Image
          </Button>
        </label>
        <Button
          variant="contained"
          component="span"
          color="primary"
          sx={{ mr: 2, mt: 2 }}
          onClick={(e) => sendPhoto(e)}
        >
          Upload Image
         
        </Button>
       

        <IconButton type="button" aria-label="camera" sx={{ ml: 2, mt: 2 }}>
          <CameraAltIcon
            fontSize="large"
            onClick={() => {
              setWebcam(!webcam);
            }}
            sx={{color:"white"}}
          />
        </IconButton>
        {webcam && <WebCam onImageCapture={capturedImageHandler}/>}
        </Grid>
        <Grid item xs={12} sm={5}>
        <Card sx={{ maxWidth: 345,mt:2,ml:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={capturedImage}
          alt="green iguana"
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
      </div>
      </div>
  </>
    );
}
export default ImageRecognition;