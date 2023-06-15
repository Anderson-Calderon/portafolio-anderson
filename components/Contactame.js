//COMPONENTE DE NOTIFICACIÓN , GRACIAS POR CONTACTARNOS
import { toast } from 'react-toastify';

//COMPONENTES DE react
import {useState , useEffect} from 'react';


import dynamic from 'next/dynamic';


//HOJA DE ESTILOS 
import styles from '../src/styles/Home.module.css';





const MapWithNoSSR = dynamic(() => import('components/mapa'), {

    ssr: false,
    loading: ()=> <p> LOADING ...</p>



});

const Contactame = ()=>{

  //OBJETO EN EL CUAL SE ALMACENARAN LOS DATOS DEL USUARIO QUE QUIERE CONTACTARME
  const [form,setForm] = useState({});

  const [deshabilitarBoton , setDeshabilitarBoton] = useState(false);



  //ANIMAR LETRAS DEL TEXTO
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

  //LÓGICA QUE UTILIZARES AL HACER EL ENVÍO DEL EMAIL
  const handleSubmit = (e)=>{

    //PREVENIMOS EL COMPORTAMIENTO POR DEFECTO DEL FORMULARIO.
    e.preventDefault();


    //DESHABILITAMOS EL BOTÓN DE ENVÍO MIENTRAS EL EMAIL SE ESTÁ ENVIANDO . 
    setDeshabilitarBoton(true);




    fetch("https://formsubmit.co/ajax/anderson.calderoncampos@gmail.com", {

      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },

      body: JSON.stringify( form )

    })
    .then(response => response.json())
    .then(data => {

      
      
      //SI EL EMAIL FUE ENVIADO CORRECTAMENTE
       if(data.success=="true"){

          //RESETEAMOS LA INFORMACIÓN LLENANDO EN EL FORMULARIO POR PARTE DEL USUARIO
          setForm({nombre:"" , correo:"" , tema:"" , mensaje:""});



          //  RELLENAMOS EL TOAST , OJO : ESTE TOAST LO MOSTRAMOS EN LAYOUT.
           toast.success('Gracias por contactarnos', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });        




       }

       //HABILITAMOS EL BOTÓN PARA HACER OTRO ENVÍO DE EMAIL
       setDeshabilitarBoton(false);

       

    })
    .catch(error => console.log(error)); // EN CASO HAY ALGÚN ERROR AL REALIZAR EL ENVÍO DEL FORMULARIO


  }



	return(



		<>

            
            <div className="md:w-1/2 mb-10">
              

              <h2>

                  <span className="">C</span>
                  <span className="">o</span>
                  <span className="">n</span>
                  <span className="">t</span>
                  <span className="">á</span>
                  <span className="">c</span>
                  <span className="">t</span>
                  <span className="">a</span>
                  <span className="">m</span>
                  <span className="">e</span>


                </h2>


              <p className="mb-10 texto-formulario">Me encuentro interesado en oportunidades independientes,
                si tiene alguna solicitud o pregunta, no dude en utilizar el formulario. </p>


              <form  onSubmit={handleSubmit}>
                
                <div className="flex gap-2">
                  
                  <input  

                    required 
                    type="text" 
                    name="nombre" 
                    placeholder="Tu Nombre" 
                    autocomplete="off" 
                    onChange= {(e)=>{setForm({...form, [e.target.name] : e.target.value   }  ) }  }
                    value={form.nombre}
                  />

                 <input   

                    required 
                    type="email" 
                    name="correo" 
                    placeholder="Tu Correo" 
                    autocomplete="off" 
                    onChange= {(e)=>{setForm({...form, [e.target.name] : e.target.value   }  ) }  }
                    value={form.correo}

                  />

                </div>

                <input 

                    required 
                    type="text" 
                    name="tema" 
                    placeholder="Tema" 
                    autocomplete="off" 
                    onChange= {(e)=>{setForm({...form, [e.target.name] : e.target.value   }  ) }  }
                    value={form.tema}

                    />

                <textarea 

                  required 
                  name="mensaje" 
                  placeholder="Mensaje" 
                  
                  onChange= {(e)=>{setForm({...form, [e.target.name] : e.target.value   }  ) }  }
                  value={form.mensaje}

                >
                    



                </textarea>

                <button 

                    type="submit"   
                    className={`boton `}  
                    disabled={deshabilitarBoton}

                >
                  
                  <span></span>

                  {!deshabilitarBoton ? "ENVIAR" : "ENVIANDO ..."}

                </button>

                
                
              </form>


            </div>



            <div className="md:w-1/2">
              
             
              <MapWithNoSSR />


            </div>


       	</>



		  );

}

export default Contactame;