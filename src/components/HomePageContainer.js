import { Box, Grid } from "@mui/material";

import ImageUpload from "./ImageUpload";
import ScientificCorner from "./ScientificCorner";
import SearchCorner from "./SearchCorner";


const HomePageContainer=()=>{
  const divStyle={
    display: "flex",
    flexWrap: "wrap",
  }


  return (
    <>
    <div style={divStyle}>
       <Box sx={{ flexGrow: 1 ,mt:20}}>
    <Grid container spacing={2}>
  <Grid item xs={4}>
   <ScientificCorner/>
  </Grid>
  <Grid item xs={4}>

    <ImageUpload/>

  </Grid>
  <Grid item xs={4}>
   <SearchCorner/>
  </Grid>
  </Grid>
  </Box>
  </div>
  </>
  );
}
export default HomePageContainer;