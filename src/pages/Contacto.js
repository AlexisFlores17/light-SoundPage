import React from "react";
import contactoImg from '../images/contacto.jpg';
import '../css/MainApp.scss';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import gmail from '../images/gmail.png';

function Contacto() {

return (    
	<>
		<div className='col-12'>
			<div id='div-img-contacto'>
				<img className='contacto-img img-fluid' src ={contactoImg} alt='contacto' />
			</div>		

			<div className='col-6'>
				<div className='col-6'>Contacto</div>
				<div className='row'>
					<div className='col-6'>
						<img src={facebook}/>
					</div>
					<div className='col-6'>
						https://www.facebook.com/lab.lsd
					</div>
				</div>
				<div className='row'>
					<div className='col-6'>
						<img src={instagram}/>
					</div>
					<div className='col-6'>
						https://www.instagram.com/lsd.labs
					</div>
				</div>
				<div className='row'>
					<div className='col-6'>
						<img src={gmail}/>
					</div>
					<div className='col-6'>
						contacto@lsdlab.com.mx
					</div>
				</div>
			</div>
		</div>	
	</>
	)
}

export default Contacto;
