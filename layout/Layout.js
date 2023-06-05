import Head from 'next/head';
import REACTDOM from 'react-dom';

import SideBar from '../components/sideBar';


import {useEffect,useState} from 'react';


import { FaBars } from "react-icons/fa";


import styles from '../src/styles/Header.module.css';

import UseContext from '../hooks/useContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

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

						
					</Head>

						<div className="bg-principal">

							<div className="contenedor">

								<ToastContainer />

								<SideBar 

									

								/>
								
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