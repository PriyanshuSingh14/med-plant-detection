import React from 'react';
import Button from '@mui/material/Button'; // Import Button from the correct path
import upload from './images/imageupload.jpg';
import { Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import { Link } from 'react-router-dom';



const ImageUpload = () => {
  const textStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 5)',
  };
  return (
    <>
         <Typography variant='body1' sx={{ml:8,mt:3,  maxWidth: 345}}  style={textStyle}>
        Lost in the enigmatic world of medicinal flora? Unlock the identity of nature's healing secrets with a simple image upload or a click of your camera shutter, and reveal the name of the botanical elixir that beckons.
        </Typography>
        <Link to="/image">
        <Button variant="text" sx={{ mt: 1 ,ml:8,color:"white",fontSize:"25px"}} style={textStyle}>
          Scan Image
        </Button></Link>
        <Card sx={{ maxWidth: 345,mt:3,ml:8 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={upload}
          alt="green iguana"
        />
        <CardContent>
       
        <Button variant="contained" sx={{ mt: 1 ,ml:3}}>
          Upload Image
        </Button>

<IconButton type="button" aria-label="camera"  sx={{ ml: 1, mt: 1,color:"black" }}>
          <PhotoCameraRoundedIcon
            fontSize="large"
           
          />
        </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
       
    </>
        
      
  );
};

export default ImageUpload;
