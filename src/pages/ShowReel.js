import React ,{Component }from "react";
import { Link } from "react-router-dom";
import { ResponsivePlayer } from "../components/ResponsivePlayer";

function Showreel() {

return (
	<>
		<ResponsivePlayer/>

		<div>
              <Link to="/explore" className="link">Regresar</Link>
        </div>   
	</>
	);  
}

export default Showreel;
