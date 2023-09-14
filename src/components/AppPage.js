
import background from "./images/front.jpg";

import lg from "./images/logock.png"
import { Link } from "react-router-dom";
const AppPage=()=>{

    const divStyle = {
        backgroundImage: `url(${background})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw", 
        height: "100vh",
        display: "flex",
        flexwrap:"wrap",
        justifyContent: "center",
        alignItems: "center",
        color: "white", 
      };
    
      return (
        <div style={divStyle}>
          <div>
          <Link to ="/home">
            <img src={lg} alt="logo" ></img>
            
   
    </Link>
          </div>
        </div>
      );
}

export default AppPage;