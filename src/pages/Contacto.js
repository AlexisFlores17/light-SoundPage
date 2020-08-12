import React from "react";
import contactoImg from '../images/contacto.jpg';
import '../css/MainApp.scss'

function Contacto() {

return (    
	<>
		<div className='col-12'>
			<div>
				<img className='contacto-img img-fluid' src ={contactoImg} alt='contacto' />
			</div>		

			<div className='row'>
				<div>Contacto</div>
			</div>
		</div>	
	</>
	)
}

export default Contacto;
