import { Box, Button, Container, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useRecoilState } from "recoil";
import { webcamAtom } from "./recoil/atoms";
import WebCam from "./WebCam";
import axios from "axios";

const HomePageContainer=()=>{
    const [selectedFile, setSelectedFile] = useState(null);
    const[webcam , setWebcam]=useRecoilState(webcamAtom);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
      };
      const sendPhoto=async(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("file", selectedFile);
    
        await axios.post("http://localhost:8000/upload", formdata)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    
    return (
     <Container maxWidth="md">
        <Box sx={{mt:5}}>
            <Typography variant="h4" sx={{
                color:"green"
            }}>
                Welcome to Charakagiki!!!
                <br/>
                Which medical plant are you interested in today?
            </Typography>
           
            <Paper elevation={16} sx={{mt:3}} >
            <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search' }}
        
      />
      <IconButton type="button" sx={{ p: '10px',float:"right" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Paper>
      <Typography variant="h6" sx={{mt:3 , color:"grey"}}>
        Get the name of the plant by simply clicking the photo using your camera or uploading it...
      </Typography>
           
      <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="file-input"
        />
      <label htmlFor="file-input">
          <Button
            variant="contained"
            component="span"
            color="primary"
            sx={{ mr: 2,mt:2 }}
          >
          Select Image
          </Button>
         
          </label>
          {/* <Button
            variant="contained"
            component="span"
            color="primary"
            sx={{ mr: 2,mt:2 }}
            
          >

            <IconButton onClick={sendPhoto}>
            Upload Image
            </IconButton> 
         
         </Button> */}
         <button onClick={sendPhoto}>Upload Photo</button>

          <IconButton type="button" aria-label="camera" sx={{ml:2 ,mt:2}}>
              <CameraAltIcon fontSize="large" onClick={()=>{setWebcam(!webcam)}}/>
              

          </IconButton>
          {webcam && <WebCam/>}

        </Box>
        </Container>

    );
}
export default HomePageContainer;