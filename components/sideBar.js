

import { FaLinkedinIn , FaGithub ,FaRegWindowClose} from "react-icons/fa";

import {useState , useEffect} from 'react';
import Link from 'next/link';


import UseContext from '../hooks/useContext';

import styles from '../src/styles/Barra.module.css';


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


		const {menuVisible , setMenuVisible , clickEnLinkContacto, setClickEnLinkContacto , trabajos,setTrabajos , contacto , setContacto ,yo , setYo, habilidades,setHabilidades} = UseContext();

	
		const clickEnLink = ()=>{

			setClickEnLinkContacto(false);
			setTrabajos(false);
			setContacto(false);
			setYo(false);
			setHabilidades(false);


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

																			localStorage.setItem("linkActivado","");


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
																			localStorage.setItem("linkActivado","yo");
																									
																			}

																}



													>

														SOBRE MI


													</Link>

											</li>
											
											<li><Link href="trabajos" 
													  className={trabajos ? styles.activado : ""}
													  onClick={  (e)=>{  
																							setMenuVisible(false)
																							clickEnLink();
																							setTrabajos(true);
																							localStorage.setItem("linkActivado","trabajos");
																							
																							
																					  }
																			   }>TRABAJOS</Link></li>
											<li>

												<Link 
											           href="contacto"
											           className={ contacto ? styles.activado : "" }
											           onClick={(e)=>{

											           					setMenuVisible(false)
											           					
											           					clickEnLink();
											           					setContacto(true);

											           					localStorage.setItem("linkActivado","contacto");

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