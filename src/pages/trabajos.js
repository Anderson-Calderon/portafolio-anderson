


// COMPONENTES
import Layout from '../../layout/Layout';
import Proyecto from '../../components/Proyecto';


//COMPONENETE DE REACT
import {useEffect} from 'react';


import UseContext from '../../hooks/useContext';




const Trabajos = ()=>{

	const {clickEnLinkContacto, setClickEnLinkContacto} = UseContext();



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


	// ARREGLO EL CUAL CONTIENE DATOS DE TODOS MIS PROYECTOS

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
									 urlProyecto:"https://anderson-eight.vercel.app/"

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