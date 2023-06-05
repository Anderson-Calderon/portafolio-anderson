import Link from 'next/link';
import styles from '../src/styles/Proyecto.module.css';

import {useEffect } from 'react';
const Proyecto = ({proyecto})=>{

	

	useEffect(()=>{


	},[]);

	const {titulo , descripcion , numero , urlImagen,urlProyecto} = proyecto;
	
	return(



		<div  className={`${styles.contenedorSupremo}  mb-20`}>

			

				<Link    href={urlProyecto} target="_blank"  className="">

				<div className={`${styles.contenedorNumero} ${ numero%2==1 ? styles.aLaDerecha : styles.aLaIzquierda }`}>
					

					
						
						<div className={`${styles.numero} ${styles.atras}`}>
						
							{ "0"+numero }

						</div>

						<div className={`${styles.numero} ${styles.frente}`}>
							
							{"0" +  numero }

						</div>


					


				</div>


				<div className={`${styles.contenedorProyecto1} `}>
					
					<div className={`${styles.fondo}`}>
					

					</div>

					<div className={`${styles.fondo2}`}>
						

					</div>



					<div className={`${styles.contenido} ${ numero%2==0 ? styles.aLaDerecha : styles.aLaIzquierda }`}>
						

						<div>
							
							<h1>{titulo}</h1>

							<p> {descripcion} </p>

							<button className={`${styles.boton}`}>Ver</button>

						</div>

					</div>

					<div className={`${styles.imagenProyecto1}`}>

						
							
							<img src={urlImagen} />


						
						

					</div>




				</div>
			</Link>
		</div>




		  )


}

export default Proyecto;