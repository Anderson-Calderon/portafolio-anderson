//HOJA DE ESTILOS
import {useState,useEffect} from 'react';

//next
import Image from 'next/image'
import Link from 'next/link';


//LIBRERÍA DE ICONOS
import {FaEye} from 'react-icons/fa';

//COMPONENTES
import Layout from '../../layout/Layout';
import Header from '../../components/header';

import Loading from '../../components/Loading';


import Contactame from '../../components/Contactame';

import Habilidades from '../../components/Habilidades';


//HOJA DE ESTILOS 
import styles from '@/styles/Home.module.css'

import UseContext from '../../hooks/useContext';





export default function Home() {


  //ME INDICA CUANDO SE MUESTRA Y CUANDO NO SE MUESTRA EL MENÚ
  //const [menuVisible,setMenuVisible] = useState(false);




  //===ME INDICA SI YA CARGARON TODOS LOS COMPONENTE O AÚN NO===
  const [cargando,setCargando] = useState(true);


  const {menuVisible,setMenuVisible,trabajos,setTrabajos} = UseContext();

 
  useEffect(()=>{



   if(menuVisible){

        console.log("MENU VISIBLE");

        document.querySelector("body").classList.add("ocultarScrollVertical");

    }else{

         document.querySelector("body").classList.remove("ocultarScrollVertical");


    }




  },[menuVisible]);



  useEffect(()=>{



    window.addEventListener("scroll",animacionDeLetras);



   let titulo1 = document.querySelector(".galeria-portafolio h2 "),
       titulo2 = document.querySelector(".habilidades h2 "),
       titulo3 = document.querySelector(".contactame h2") ;


    let alturaAnimado1 = titulo1.offsetTop,
        alturaAnimado2 = titulo2.offsetTop,
        scrollTop = document.documentElement.scrollTop,
        alturaAnimado3 = titulo3.offsetTop;
       


    let letrasTitulo1 = document.querySelectorAll(".galeria-portafolio h2 span"),
        letrasTitulo2 = document.querySelectorAll(".habilidades h2 span"),
        letrasTitulo3 = document.querySelectorAll(".contactame h2 span"); 
    console.log(letrasTitulo1.length)


    //BIEN CARGA LA PÁGINA ANIMAMOS LAS LETRAS DEL TITULO , SIEMPRE Y CUANDO ESTEMOS VISUALIZANDO
    //ESTE TÍTULO.
    if(alturaAnimado1 - 600 < scrollTop){

    animarLetras(letrasTitulo1);

    } 

    if(alturaAnimado2 - 600 < scrollTop){

    animarLetras(letrasTitulo2);


    } 

    if(alturaAnimado3 - 600 < scrollTop){

    animarLetras(letrasTitulo3);


    }


    //CUANDO HACEMOS SCROLL Y VISUALIZAMOS EL TÍTULO , ANIMAMOS LAS LETRAS DE ESTE.

    function animacionDeLetras(){

      
         let scrollTop = document.documentElement.scrollTop;

        if(alturaAnimado1 - 700 < scrollTop){

          animarLetras(letrasTitulo1);
           
        } 

        if(alturaAnimado2 - 700 < scrollTop){

           animarLetras(letrasTitulo2);


        } 

        if(alturaAnimado3 - 700 < scrollTop){

           animarLetras(letrasTitulo3);


        }


   }



    function animarLetras(letras){

      
        for(var i=0 ; i<letras.length ; i++){

        
          let alturaAnimado = letras[i].offsetTop;


              letras[i].classList.add("letra","letra-"+i);

          

        }


    }



    //OBTENEMOS EL VALOR DE LA VARIABLE emailEnviado DEL LOCAL STORAGE.
    const emailEnviado = JSON.parse(localStorage.getItem("emailEnviado"));

    if(emailEnviado){

   
     


      //ELIMINAMOS LA VARIABLE emailEnviado DEL LOCALSTORAGE
       localStorage.removeItem("emailEnviado");


    }



  },[]);
 




  return (
    <>
    


      <Layout

        title="Anderson | Front End Developer"
        description="Hola , soy Anderson , desarrollador web"
       

      >

        <Header 

         
        />

        

        <main className="md:pl-16 pb-5 ">












          <section className="galeria-portafolio mb-10">

            <div >

              <h2>

                <span className="">M</span>
                <span className="">i</span>
                <span className=""> P</span>
                <span className="">o</span>
                <span className="">r</span>
                <span className="">t</span>
                <span className="">a</span>
                <span className="">f</span>
                <span className="">o</span>
                <span className="">l</span>
                <span className="">i</span>
                <span className="">o</span>

              </h2>

             <div className="md:flex md:justify-beetwen md:gap-5  md:items-center mb-5 ">

                 <p>

                    Una pequeña galería de proyectos recientes elegidos por mí.
                    Los he hecho todos por cuenta propia. Es solo una gota en el océano en comparación
                    de todo lo que puedo hacer. ¿Interesado en ver algunos más?

                </p>

                <Link 
                        href="trabajos" 
                        className="boton"
                        onClick={()=>{ setTrabajos(true) }}

                >
                    
                     <span></span>

                     Ver más!

                </Link>

             </div>

            </div>


           <div className="flex flex-wrap gap-0 galeria-fotos-portafolio w-full">

           <Link href="https://traviesitos.store/" target="_blank">


              <div className="contenedor-imagen">

                 <div className="ver">

                   VER PROYECTO

                </div>
                  <Image   src="/imagenes/logo-traviesitos.jpg"  className="imagen-portafolio" width={400} height={200} alt="Imagen Proyecto"/>


              </div>
            

            </ Link>

            <Link href="https://anderson-eight.vercel.app/" target="_blank">

              <div className="contenedor-imagen">

                <div className="ver">

                    VER PROYECTO

                </div>

                <Image   src="/imagenes/logo-portafolio.jpg"  className="imagen-portafolio" width={400} height={200} alt="Imagen Proyecto"/>

              </div>

            </ Link>
           

         
           </div>

          </section>













          <section className="md:flex  justify-beetwen gap-20 items-center habilidades mt-10 ">

            <Habilidades textoTitulo="Mis Habilidades" />


          </section>








          <section className="md:flex gap-5 justify-beetwen items-center contactame py-5 mt-10">

            <Contactame />

          </section>

         







          


        </main>

       




      </Layout>








    </>
  )
}
