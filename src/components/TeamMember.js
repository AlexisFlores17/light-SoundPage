import React from 'react'


export default function TeamMember(props) {
    const {name, descripcion, imagen} = props
    return (
        <div className="teamMember-container">
            <div>
            <img src={imagen} style={{width: "300px"}} alt="TeamMember-image"/>
            </div>
            <div className="name">{name}</div>
            <div className="descripcion">{descripcion}</div>
        </div>
        
       
       
    )
}


