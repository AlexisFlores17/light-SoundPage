import React from "react";
import contactoImg from '../images/contacto.jpg';
import imgContacto from '../images/distur.jpeg';
import Reveal from "react-reveal/Fade";
import Fade from "react-reveal/Fade";

function Contacto() {

return (    
	<Reveal effect="fadeindown" duration={2000}>
		<div className='col-12'>
			<div className='contacto-div-top'>
				<img className='contacto-img img-fluid' src ={contactoImg} alt='contacto' />
				<div className='contacto-quote rounded' >
					<Fade top delay={1000} >"El arte desafía a la tecnología y la tecnología inspira al arte"</Fade>
					<br/>
					<Fade top delay={2000} >-John Lasseter.</Fade>
				</div>
			</div>		
			<div className='contacto-content row'>

				<div className='contacto-info col-6'>
					<div>
						<div className='text-xl mb-5'>Texto inspiracional pa que nos contacte la bandita alterada</div>

						<div className='text-md-left'>
							Enim aliquip enim ut exercitation quis ullamco. Cupidatat magna fugiat id irure ullamco. Incididunt laborum fugiat elit cupidatat minim nostrud do veniam. Dolore occaecat excepteur minim sint Lorem aliquip aute anim dolor sit nostrud esse dolor. Est consequat laboris et sint cillum excepteur irure eu ad aute.
							Id minim velit consequat anim occaecat velit elit. Cupidatat magna fugiat sunt labore. Velit labore aliquip in velit. Proident ex nulla occaecat laboris cupidatat cupidatat veniam nisi aliqua exercitation nulla ipsum et aliquip. Cupidatat cillum culpa dolore amet eiusmod officia aliquip.			
						</div>
					</div>

					<div className="social-icons-contacto row">   
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

				<div className="contacto-img col-6">
					<img className="img-fluid rounded" src={imgContacto}/>
				</div>
				
			</div>
		</div>	
	</Reveal>
	)
}

export default Contacto;
