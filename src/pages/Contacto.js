import React from "react";
import contactoImg from '../images/contacto.jpg';
import '../css/MainApp.scss';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import gmail from '../images/gmail.png';
import imgContacto from '../images/distur.jpeg';

function Contacto() {

return (    
	<>
		<div className='col-12 container'>
			<div id='div-img-contacto'>
				<img className='contacto-img img-fluid' src ={contactoImg} alt='contacto' />
			</div>		
			<div>
				<div>
					"El arte desafía a la tecnología y la tecnología inspira al arte"
				</div>
				<div>
					-John Lasseter.
				</div>

				<div>
					Texto inspiracional pa que nos contacte la bandita alterada

					Enim aliquip enim ut exercitation quis ullamco. Cupidatat magna fugiat id irure ullamco. Incididunt laborum fugiat elit cupidatat minim nostrud do veniam. Dolore occaecat excepteur minim sint Lorem aliquip aute anim dolor sit nostrud esse dolor. Est consequat laboris et sint cillum excepteur irure eu ad aute.
				</div>

				<div className="img-contacto ">
					<img className="img-fluid rounded" src={imgContacto}/>
				</div>
			</div>
		</div>	
	</>
	)
}

export default Contacto;
