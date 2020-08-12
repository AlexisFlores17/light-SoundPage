import React from "react";
import TeamMember from '../components/TeamMember'
import destruido from '../images/destruido.JPG'
import lorenzo from '../images/lorenzo.png'
import alex from '../images/alex.JPG'


const team = [
	{name: "Alexis Flores", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, lacinia sed viverra et, dictum vitae nunc.", imagen: alex},
	{name: "Alexis Guerrero", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, lacinia sed viverra et, dictum vitae nunc.", imagen: destruido},
	{name: "Diana Urquiza", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, lacinia sed viverra et, dictum vitae nunc.", imagen: "http://placekitten.com/g/300/300"},
	{name: "Lorenzo Torres", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, lacinia sed viverra et, dictum vitae nunc.", imagen: lorenzo},	
	{name: "Mijael Gutiérrez", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, lacinia sed viverra et, dictum vitae nunc.", imagen: "http://placekitten.com/g/300/300"},
	{name: "Mauro Herrera", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, lacinia sed viverra et, dictum vitae nunc.", imagen: "http://placekitten.com/g/300/300"},
	
]


function Conocenos() {
	
return (
	<>
	<div >
		<h2>Conócenos</h2>
		<h3>Filosofia</h3>		
		<h3>"Sólo sabemos que no sabemos nada"</h3>		
		<p>Contribuir como agente de cambio e innovación con soluciones tecnológicas para las industrias creativas</p>
		<h3>Valores</h3>		
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<h3>Equipo</h3>		
		
		
		
	</div>

	<div className="container" style={{backgroundColor:"pink"}}>
		<div className="row" id="foto-conocenos">			
			{team.map((member) =>
				<div className="col-12 col-md-6 col-lg-4">
					<TeamMember name={member.name} descripcion={member.descripcion} imagen = {member.imagen}/>
				</div>
			)}
			
		</div>
		
	</div>
	
	</>
		
	
	)

}

export default Conocenos;



