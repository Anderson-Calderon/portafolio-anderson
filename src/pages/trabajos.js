import Layout from '../../layout/Layout';
import {useEffect} from 'react';


import UseContext from '../../hooks/useContext';


import Proyecto from '../../components/Proyecto';

const Trabajos = ()=>{

	const {clickEnLinkContacto, setClickEnLinkContacto} = UseContext();

	const arregloProyectos = [ 
								{

									 numero : 1 ,
									 titulo:"Traviesitos" ,
									 descripcion:"Ecommerce de ropa" ,
									 urlImagen:"https://childrens-spaces.com/wp-content/uploads/2019/02/moda-infantil-810x401.jpg",
									 urlProyecto:"https://www.traviesitos.store/"

								},

								{

									 numero : 2 ,
									 titulo:"Portafolio Web" ,
									 descripcion:"Portafolio de mis proyectos" ,
									 urlImagen:"https://www.adslzone.net/app/uploads-adslzone.net/2021/10/lenguaje-de-programacion.jpg",
									 urlProyecto:"https://portafolio-1-1-git-main-3lli0tald3rs0n.vercel.app/"

								},
								{

									 numero : 3 ,
									 titulo:"TransformaGreen" ,
									 descripcion:"Proyecto tecnológico de reciclaje " ,
									 urlImagen:"https://static.mercadonegro.pe/wp-content/uploads/2022/06/03160352/PORTAL-RECICLA-1.jpg",
									 urlProyecto:"https://transformagreen.netlify.app/"

								}




							 ];




	return(

			<Layout

		        title="Anderson | Mis Trabajos"
		        description="Hola , soy Anderson , desarrollador web . Estos son mis trabajos."
		       

		      >

			      

		        

		        <main className="md:pl-16 pb-5">

		        	<h2 className="text-center  mb-10 text-white mt-10">Mis Trabajos</h2>

		        	{

		        		arregloProyectos.map((proyecto)=>{


		        				return(

		        							<Proyecto 

		        								key={proyecto.numero}
		        								proyecto={proyecto} />


		        						)

		        		})		


		        	}


		        

		        </main>


		     </Layout>




			)

}

export default Trabajos;