

import React from 'react';
import TextShpere from './TextShpere';

import {useEffect} from 'react';


const Habilidades = ({textoTitulo})=>{

	

	const arregloLetras = textoTitulo.split("");




  useEffect(()=>{

  	 let 
       titulo2 = document.querySelector(".habilidades h2 ");


       


    let 
        letrasTitulo2 = document.querySelectorAll(".habilidades h2 span");
  

    //BIEN CARGA LA PÁGINA ANIMAMOS LAS LETRAS DEL TITULO , SIEMPRE Y CUANDO ESTEMOS VISUALIZANDO
    //ESTE TÍTULO.
   

  
    animarLetras(letrasTitulo2);




    function animarLetras(letras){

      
        for(var i=0 ; i<letras.length ; i++){

        
          let alturaAnimado = letras[i].offsetTop;


              letras[i].classList.add("letra","letra-"+i);

          

        }


    }



  },[]);



	return(

			<>
				 <div className="md:w-1/2">
              
		              <h2>

		                  {

		                  	arregloLetras.map((letra)=>{

		                  		return(

		                  					<span   className="">{letra}</span>


		                  				)



		                  	})

		                  }
		               


		              </h2>

		              <p className="text-justify">

		                A incios del año 2021 descubrí mi pasión por el desarrollo web .
		                Actualmente soy estudiante de desarrollo de software en el instituto
		                San Ignacio de Loyola (ISIL) y cuento con experiencia en HTML , CSS , JS , REACT , WORDPRESS , BOOTSTRAP , etc.
		            
		              </p>


		          </div>

		         

         	 	 <TextShpere />

         	</>


		   )

}

export default Habilidades;