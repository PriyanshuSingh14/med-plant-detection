import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

const WebCam=({onImageCapture})=>{
    const webcamRef = useRef(null); 
    const [imgSrc, setImgSrc] = useState(null);
    const retake = () => {
        setImgSrc(null);
      };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        onImageCapture(imageSrc);
      }, [webcamRef]);

      const sendPhoto = async (e) => {
        e.preventDefault();
        
        const formdata = new FormData();
        formdata.append("file", imgSrc);
    
        await axios
          .post("http://localhost:8000/upload", formdata)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return (
        <div >
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={400} width={300} ref={webcamRef} />
      )}
      <div >
        {imgSrc ? (
            <>
          <Button onClick={retake} variant="contained"
            component="span"
            color="primary"
            sx={{ mr: 2 }}>Retake photo</Button>
          <Button variant="contained"
            component="span"
            color="primary"
            sx={{ mr: 2 }} onClick={(e)=>{sendPhoto(e)}}>Upload photo</Button>
          </>

        ) : (
          <Button onClick={capture} variant="contained"
          component="span"
          color="primary"
          sx={{ mr: 2 }}>Capture photo</Button>
        )}
      </div>
    </div>
    );
}

export default WebCam;