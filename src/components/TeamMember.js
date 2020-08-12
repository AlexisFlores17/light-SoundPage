import React from 'react'

const estilos = {
	container: {
		backgroundColor:"green",
		color: "white",		
		margin: "0",
		paddingLeft: "60px",
		position: "absolute",
		top: "30%",		
		transform: "translateY(-50%)",
		width: "100%",

	}

}

export default function TeamMember(props) {
    const {name, descripcion, imagen} = props
    return (
        <div>
            <div>
            <img src={imagen} style={{width: "300px"}}/>
            </div>
            <div>{name}</div>
            <div>{descripcion}</div>
        </div>
        
       
       
    )
}


