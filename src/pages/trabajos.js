// COMPONENTES
import Layout from '../../layout/Layout';
import Proyecto from '../../components/Proyecto';


//HOOK
import {useEffect} from 'react';

import UseContext from '../../hooks/useContext';




const Trabajos = ()=>{

	const {clickEnLinkContacto, setClickEnLinkContacto} = UseContext();

	//console.log(proyectos);

  //ANIMAR LETRAS DEL TEXTO
  useEffect(()=>{

    const letrasTitulo3 = document.querySelectorAll("h2 span");

    animarLetras(letrasTitulo3);

  },[]);

    function animarLetras(letras){

      
        for(var i=0 ; i<letras.length ; i++){

        
          let alturaAnimado = letras[i].offsetTop;


              letras[i].classList.add("letra","letra-"+i);

          

        }


    }


	//ARREGLO EL CUAL CONTIENE DATOS DE TODOS MIS PROYECTOS

	const arregloProyectos = [ 


								{

									numero:1,
									titulo:"Anxxiient" ,
									 descripcion:"Ecommerce de ropa" ,
									 urlImagen:"https://anxxiient.com/wp-content/uploads/2023/07/banner07.jpg",
									 urlProyecto:"https://anxxiient.com/"
									

								},

								{

									 numero : 2 ,
									 titulo:"Oceanide",
									 descripcion:"Hotel de cabañas" ,
									 urlImagen:"https://storage.planner5d.com/s/fd369aedb955e004138b72a34fd041fd_25.jpg?v=1516979059",
									 urlProyecto:"https://oceanide.pe/"

								},

								{

									 numero : 3 ,
									 titulo:"Equilibrium",
									 descripcion:"Web de terapias alternativas" ,
									 urlImagen:"https://fisiostar.com/wp-content/uploads/2018/12/terapia-alternativa-3.jpg",
									 urlProyecto:"https://equilibriumalternativas.pe/"

								},

								{

									 numero : 4 ,
									 titulo:"Equilibrium",
									 descripcion:"Administrador de reservas de citas" ,
									 urlImagen:"https://img.freepik.com/vector-gratis/reserva-citas-calendario_52683-39079.jpg",
									 urlProyecto:"https://equilibrium-reservas.netlify.app/"

								},

									{

									 numero : 5 ,

									 titulo:"Registro de Asistencia",
									 descripcion:"Proyecto de registro de Asistencia " ,
									 urlImagen:"https://www.buk.cl/hubfs/por-que-tener-un-control-de-asistencia-de-personal.jpg",
									 urlProyecto:"https://asistenciasasciende.netlify.app/"
									

								},

								{

									 numero : 6 ,
									 titulo:"Landing Page",
									 descripcion:"Envio de gmail" ,
									 urlImagen:"https://i.pinimg.com/564x/91/de/78/91de78b61e8fcb31a17466e5819c204f.jpg",
									 urlProyecto:"https://relaxed-kleicha-f494d8.netlify.app/"

								},

								

							
								{

									 numero : 7 ,
									 titulo:"TransformaGreen" ,
									 descripcion:"Proyecto tecnológico de reciclaje " ,
									 urlImagen:"https://static.mercadonegro.pe/wp-content/uploads/2022/06/03160352/PORTAL-RECICLA-1.jpg",
									 urlProyecto:"https://transformagreen.netlify.app/"

								},

								

								{

									numero:8,
									 titulo:"Portafolio Web" ,
									 descripcion:"Portafolio de mis proyectos" ,
									 urlImagen:"https://www.adslzone.net/app/uploads-adslzone.net/2021/10/lenguaje-de-programacion.jpg",
									 urlProyecto:"https://anderson-eight.vercel.app/"
									

								}




							 ];






	return(

			<Layout

		        title="Anderson | Mis Trabajos"
		        description="Hola , soy Anderson , desarrollador web . Estos son mis trabajos."
		       

		      >


		        <main className="md:pl-16 pb-5">

		        	<h2 className="text-center  mb-10 text-white mt-10">
		        		
		        		<span>M</span>
		        		<span>i</span>
		        		<span>s</span>
		        		<span> T</span>
		        		<span>r</span>
		        		<span>a</span>
		        		<span>b</span>
		        		<span>a</span>
		        		<span>j</span>
		        		<span>o</span>
		        		<span>s</span>

		        	</h2>

		        	{

		        		//proyectos.map(({attributes : proyecto})=>{

		        			arregloProyectos.map((proyecto)=>{
		        				
		        		
		        				

		        				return(


		        							<Proyecto  	

		        								key={proyecto.numero}
		        								proyecto={proyecto}


		        							 />


		        						)

		        		})		


		        	}	        

		        </main>


		     </Layout>


			)

}

export default Trabajos;


// export async function getStaticProps(){


// 	const respuesta = await fetch("http://127.0.0.1:8082/api/proyectos?populate=imagen&sort[0]=id%3Aasc");

// 	const {data} = await  respuesta.json();

// 	console.log(data);

// 	return{


// 			props:{


// 						data

// 				   }



// 		}



// }