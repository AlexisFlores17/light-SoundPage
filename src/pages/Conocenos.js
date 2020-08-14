import React from "react";
import TeamMember from '../components/TeamMember'
import destruido from '../images/destruido.JPG'
import lorenzo from '../images/lorenzo.png'
import alex from '../images/alex.JPG'
import Reveal from "react-reveal/Fade";


const team = [
	{name: "Alexis Flores", descripcion: "Director tecnológico, curador de memes, siempre buscando nuevas tecnologías(en Amazon). Se pasó el metal slug con una moneda", imagen: alex},
	{name: "Alexis Guerrero", descripcion: "Director de interactividad, rockstar retirado, amante de los taquitos de tripita y una vez casi hizo un 300 en el boliche", imagen: destruido},
	{name: "Diana Urquiza", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, lacinia sed viverra et, dictum vitae nunc.", imagen: "http://placekitten.com/g/300/300"},
	{name: "Lorenzo Torres", descripcion: "Director creativo, gurú del front-end y K-pop connoisseur.", imagen: lorenzo},	
	{name: "Mijael Gutiérrez", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, lacinia sed viverra et, dictum vitae nunc.", imagen: "http://placekitten.com/g/300/300"},
	{name: "Mauro Herrera", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, lacinia sed viverra et, dictum vitae nunc.", imagen: "http://placekitten.com/g/300/300"},
	
]


function Conocenos() {
	
return (
	<Reveal effect="fadeinup" duration="2000">
		<div className="conocenos-container" >
				
			<div className="content">
				<div className="description">Somos un equipo de creadores, pensadores, exploradores y nerds tecnológicos. Nos enfocamos en nuestros proyectos con curiosidad y experimentación, usando todo lo que aprendemos para diseñar experiencias que conecten con personas como tú.</div>			
				<h2>Filosofía</h2>		
				<p>"Sólo sabemos que no sabemos nada"</p>		
				<h2>Misión</h2>		
				<p>Contribuir como agente de cambio e innovación con soluciones tecnológicas para las industrias creativas</p>				
			</div>
					
		</div>

		<div className="container">
			<div className="row" id="foto-conocenos">			
				{team.map((member) =>
					<div key={member.name} className="col-12 col-md-6 col-lg-4">
						<TeamMember name={member.name} descripcion={member.descripcion} imagen = {member.imagen}/>
					</div>
				)}
				
			</div>
			
		</div>
	
	</Reveal>
		
	
	)

}

export default Conocenos;



