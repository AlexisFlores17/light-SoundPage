import React from "react";
import contactoImg from '../images/contacto.jpg';
import imgContacto from '../images/distur.jpeg';

function Contacto() {

return (    
	<>
		<div className='col-12'>
			<div id='div-img-contacto'>
				<img className='contacto-img img-fluid' src ={contactoImg} alt='contacto' />
			</div>		
			<div className='contacto-content'>
				<div className='contacto-quote'>
					"El arte desafía a la tecnología y la tecnología inspira al arte"
					<br/>
					-John Lasseter.
				</div>

				<div className='contacto-texto'>
					Texto inspiracional pa que nos contacte la bandita alterada

					Enim aliquip enim ut exercitation quis ullamco. Cupidatat magna fugiat id irure ullamco. Incididunt laborum fugiat elit cupidatat minim nostrud do veniam. Dolore occaecat excepteur minim sint Lorem aliquip aute anim dolor sit nostrud esse dolor. Est consequat laboris et sint cillum excepteur irure eu ad aute.
				</div>

				<div className="contacto-img ">
					<img className="img-fluid rounded" src={imgContacto}/>
				</div>

				<div className="social-icons-contacto">   
					<a href="https://www.instagram.com/lab_lsd/" rel="noopener noreferrer" target="_blank">
						<div className="icon">
							<span className="icon-text">IG</span>
						</div>
					</a>  

					<a href="https://www.facebook.com/lab.lsd" rel="noopener noreferrer" target="_blank">
						<div className="icon">
							<span className="icon-text">FB</span>
						</div>
					</a>

					<a href="https://twitter.com/lab_lsd" rel="noopener noreferrer" target="_blank">
						<div className="icon">
							<span className="icon-text">TW</span>
						</div>
					</a>

					<a href="https://www.linkedin.com/company/light-sound-disruptive-lab" rel="noopener noreferrer" target="_blank">
						<div className="icon">
							<span className="icon-text">LKD</span>
						</div>
					</a>                
                </div>
			</div>
		</div>	
	</>
	)
}

export default Contacto;
