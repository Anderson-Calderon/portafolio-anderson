
//ENLACE
import Link from 'next/link';



import {useEffect,useState} from 'react';


import UseContext from '../hooks/useContext';


//HOJA DE ESTILOS
import styles from '../src/styles/Header.module.css';

const Header = ()=>{

	
	const {setContacto} = UseContext();


	const mostrarMenu = ()=>{

		setMenuVisible(!menuVisible);



	}


	return(


				<header className={`pl-16  ${styles.header}`}>

						
							
						<div className="w-full">


							<h1>


								<span className="letra letra-1" >H</span>
								<span className="letra letra-2">o</span>
								<span className="letra letra-3">l</span>
								<span className="letra letra-4">a</span>
								<span className="letra letra-5"> , </span>  <span className={` ${styles.salto}`}></span>


								<span className="letra letra-6">S</span>
								<span className="letra letra-7">o</span>
								<span className="letra letra-8">y</span>

								<span className="letra letra-9" className="logo">&nbsp; A</span>
								<span className="letra letra-10">n</span>
								<span className="letra letra-11">d</span>
								<span className="letra letra-12">e</span>
								<span className="letra letra-13">r</span>
								<span className="letra letra-14">s</span>
								<span className="letra letra-15">o</span>
								<span className="letra letra-16">n</span>
								<span className="letra letra-17">,</span><br />

								<span className="letra letra-18"  >D</span>
								<span className="letra letra-19" >e</span>
								<span className="letra letra-20" >s</span>
								<span className="letra letra-21" >a</span>
								<span className="letra letra-22" >r</span>
								<span className="letra letra-23" >r</span>
								<span className="letra letra-24" >o</span>
								<span className="letra letra-25" >l</span>
								<span className="letra letra-26" >l</span>
								<span className="letra letra-27" >a</span>
								<span className="letra letra-28" >d</span>
								<span className="letra letra-29" >o</span>
								<span className="letra letra-30" >r</span>

								<span className="letra letra-31" > &nbsp; W</span>
								<span className="letra letra-32" >e</span>
								<span className="letra letra-33" >b</span>

							</h1>

						</div>


						<p className="animar-de-abajo-arriba">Desarollador Front End</p>


						<p className="animar-de-abajo-arriba"></p>

						<Link  

							onClick={()=>{setContacto(true)}}

							href="contacto" className="text-center  boton animar-de-abajo-arriba">
							
							<span ></span>

							Contáctame!

						</Link>

				</header>



		  )

}

export default Header;