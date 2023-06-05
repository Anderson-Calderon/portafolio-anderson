import {useEffect} from 'react';

import Layout from '../../layout/Layout';
import Header from '../../components/header';

import Contactame from '../../components/Contactame';





const Contacto = ()=>{

	useEffect(()=>{

		const letrasTitulo3 = document.querySelectorAll(".contactame h2 span");

		animarLetras(letrasTitulo3);

	},[]);

	  function animarLetras(letras){

      
        for(var i=0 ; i<letras.length ; i++){

        
          let alturaAnimado = letras[i].offsetTop;


              letras[i].classList.add("letra","letra-"+i);

          

        }


    }


	return(

				<Layout 

					  	title="Anderson | Contáctame"
				        description="Hola , soy Anderson , desarrollador web . Formulario para contactarme y resolver cualquier problema que tengas."
				      

				>

					<main className="md:pl-16 pb-5">


         				 <section className="md:flex gap-5 justify-beetwen items-center contactame py-5">
							
							<Contactame />

						</section>

					</main>

				</ Layout >

				



			);
}

export default Contacto;