import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import tulsi from "./images/tulsi.jpeg"
import { Link } from "react-router-dom";
const ScientificCorner=()=>{
  const textStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 5)',
  };
    return(
        <>
        <Card sx={{ maxWidth: 345,mt:3,ml:12 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={tulsi}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            Tulsi 
          </Typography>
          <Typography variant="body1" color="text.secondary">
          Ocimum tenuiflorum
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Typography sx={{ maxWidth: 345,mt:3,ml:12 }} style={textStyle}variant="h6">
    Curious about the botanical nomenclature, the scientific names that plants whisper in the secret language of taxonomy?
    </Typography>
    <Link to="/scientific">
    <Button variant="text" sx={{ maxWidth: 345,mt:2,ml:12 ,color:"white",fontSize:"25px"}} size="large" style={textStyle} >
        Scientific Names
    </Button></Link>
        </>
    );
}
export default ScientificCorner;