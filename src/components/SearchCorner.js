import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import search from "./images/searchimage.jpg"
import { Link } from "react-router-dom";
const SearchCorner=()=>{
    const textStyle = {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 5)',
      };
    return (
        <>
         <Card sx={{ maxWidth: 345,mt:3,ml:6}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={search}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mango
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
     Neem
          </Typography>
          <Typography variant="body1" color="text.secondary">
        Aloevera
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Typography variant="subtitle1" sx={{ maxWidth: 345,mt:3,ml:6}} style={textStyle}>
   If you yearn to behold the captivating visage of medicinal flora, embark on your visual journey through the verdant realm by employing the mystical incantation of the search bar below.
    </Typography>
    <Link to ="/imageSearch">
    <Button variant="text" sx={{ maxWidth: 345,mt:0.5,ml:6 ,color:"white",fontSize:"18px"}} size="small" style={textStyle} >
    Unveil the botanical wonders 
    </Button>
    </Link>
        </>
    );
}
export default SearchCorner;