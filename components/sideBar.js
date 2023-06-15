
// ICONOS DE FA
import { FaLinkedinIn , FaGithub ,FaRegWindowClose} from "react-icons/fa";


//COMPONENETES DE REACT
import {useState , useEffect} from 'react';


//ENLACE
import Link from 'next/link';


import UseContext from '../hooks/useContext';


//ESTILOS
import styles from '../src/styles/Barra.module.css';


//ME SIRVE PARA OBTENER LA RUTA EN LA QUE ESTOY NAVEGANDO
import {useRouter} from 'next/router';


const SideBar = ()=>{

		const {pathname} = useRouter();

		useEffect(()=>{

				switch (pathname) {

				

					case 'yo' : setYo(true); break;
					case '/sobreMi' : setYo(true); break;
					case '/trabajos' : setTrabajos(true); break;
					case '/contacto' : setContacto(true); break;

				}

		},[]);


		const {menuVisible , setMenuVisible ,  trabajos,setTrabajos , contacto , setContacto ,yo , setYo} = UseContext();

		//SE EJECUTARÁ CUANDO REALICE CLICK EN ALGÚN ENLACE DE MI BARRA DE NAVEGACIÓN
		const clickEnLink = ()=>{
	
			setTrabajos(false);
			setContacto(false);
			setYo(false);

		}

						return(

									
									<nav className={` ${styles.barra} ${menuVisible && styles.mostrarBarra }`}>


										<FaRegWindowClose onClick={ ()=>{

																			setMenuVisible(false)

																		}

																   }

													  style={{color: 'white' , fontSize: '30px'}}

													  className={` ${styles.cerrar}  `} 

										 />




										<ul>

											<li>

													<Link 

														  href="/"  
														  onClick={()=>{

														  					setMenuVisible(false)
																			clickEnLink();

									
																		}}>

																		   <span className="logo">A</span>  <br/>    ANDERSON   <br /> 
																		   <span>Programador Web</span> 


													</Link>


											</li>
											
											<li>

													<Link 

														href="sobreMi"
														className={yo ? styles.activado : ""}
													  	onClick={  

													  				(e)=>{  

																			setMenuVisible(false)
																			clickEnLink();
																			setYo(true);
																			
																									
																			}

																}



													>

														SOBRE MI


													</Link>

											</li>
											
											<li>

												<Link href="trabajos" 
													  className={trabajos ? styles.activado : ""}
													  onClick={  (e)=>{  
																							setMenuVisible(false)
																							clickEnLink();
																							setTrabajos(true);
																							
																							
																							
																		}

																	}
												>


													TRABAJOS

													</Link>

											</li>


											<li>

												<Link 
											           href="contacto"
											           className={ contacto ? styles.activado : "" }
											           onClick={(e)=>{

											           					setMenuVisible(false)
											           					
											           					clickEnLink();
											           					setContacto(true);

											           					

											           				}}

											      >

											      	CONTÁCTAME

											      </Link>

											</li>

											
											<li className="flex justify-center gap-2">

												<Link href="https://www.linkedin.com/in/anderson-calder%C3%B3n-campos-69ab93228/" target="_blank">
													<FaLinkedinIn style={{color: 'white' , fontSize: '30px'}} />
												</Link>


												

											</li>

										</ul>						


									</nav>



								)


					}

export default SideBar;