import React ,{Component }from "react";
import { Link } from "react-router-dom";

function Showreel() {

return (
	<>    
		<iframe 	 	 
		title="vimeo-player" 
		src="https://player.vimeo.com/video/189176993" 
		style={{position: "fixed",
				right: "0",
				bottom: "0",
				minWidth: "100%",
				minHeight: "100%",}} 
				width="100%" height="90%" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen>
				
		</iframe>

		<div className="col-sm-4 col-12">
              <Link to="/explore" className="link">Regresar</Link>
        </div>   
	</>
	);  
}

export default Showreel;
