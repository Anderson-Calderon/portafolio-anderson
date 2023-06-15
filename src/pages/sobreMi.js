
// COMPONENTES 
import Layout from '../../layout/Layout';
import Habilidades from '../../components/Habilidades';



import {useEffect} from 'react';




const Habilities = ()=>{



	return(

					<Layout

				        title="Anderson | Sobre Mi"
				        description="Hola , soy Anderson , desarrollador web . Un pequeño resumen sobre mi persona."
				       

				      >

		        			<main className="md:pl-16 py-5 ">


		        				<section className="md:flex  justify-beetwen gap-20 items-center habilidades mt-10">

						            <Habilidades textoTitulo="Sobre Mi" />

						         </section>


		        			</main>


		        	</Layout>




			)

}

export default Habilities;