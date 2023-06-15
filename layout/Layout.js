
import Head from 'next/head';
import REACTDOM from 'react-dom';


// COMPONENTE , BARRA DE NAVEGACIÓN
import SideBar from '../components/sideBar';

//COMPONENETES DE REACT
import {useEffect,useState} from 'react';


//ICONO DE react-icons HACIENDO USO DE FOTN AWESOME
import { FaBars } from "react-icons/fa";


import UseContext from '../hooks/useContext';


//ESTILOS
import styles from '../src/styles/Header.module.css';


//TOAST CONTAINER , ME AYUDA PARA PODER MOSTRAR UN MENSAJE EN PANTALLA CUANDO EL USUARIO REALICE ALGÚN ENVIO DE GAMIL
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout = ({children,title,description})=>{

	const {menuVisible , setMenuVisible} = UseContext();


	const mostrarMenu = ()=>{

		setMenuVisible(!menuVisible);



	}

	return(


				<>

					<Head>

						<title>{title}</title>
						<meta name="description" content={description} />
						<link rel="icon" href="/imagenes/icono-pestaña.png" />
						
						<link rel="preconnect" href="https://fonts.googleapis.com" />
						<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
						<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&display=swap" rel="stylesheet" />
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						
					</Head>

						<div className="bg-principal">

							<div className="contenedor">

								<ToastContainer />

								<SideBar />



								
								<div >

										<FaBars 

										style={{color: 'white' , fontSize: '30px'}} 
										className={styles.menu}  
										onClick={()=>{mostrarMenu()}}

										/>
									
											

										{children}


								</div>

							</div>

						</div>

					


				</>




			);


}

export default Layout;