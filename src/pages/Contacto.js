import React from "react";
import contactoImg from '../images/contacto.jpg';
import '../css/MainApp.scss'

function Contacto() {

return (    
	<>
		<div>
			<img className='contacto-img img-fluid' src ={contactoImg} alt='contacto' />
		</div>		

		<div>Contacto</div>
	</>
	)
}

export default Contacto;
