
import {useState , useEffect} from 'react';


import dynamic from 'next/dynamic';

//COMPONENTE DE NOTIFICACIÓN , GRACIAS POR CONTACTARNOS
import { toast } from 'react-toastify';



//HOJA DE ESTILOS 

import styles from '../src/styles/Home.module.css';

const MapWithNoSSR = dynamic(() => import('components/mapa'), {
  ssr: false,
  loading: ()=> <p>LOADING ...</p>
});

const Contactame = ()=>{


  const [form,setForm] = useState({});

  const [deshabilitarBoton , setDeshabilitarBoton] = useState(false);


  const handleSubmit = (e)=>{

    
    e.preventDefault();

    console.log("enviando formulario ...");

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

      console.log(data) 
      

       if(data.success=="true"){

          setForm({nombre:"" , correo:"" , tema:"" , mensaje:""});
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

       setDeshabilitarBoton(false);

       

    })
    .catch(error => console.log(error));


    console.log("ENVIANDO FORMULARIO");





  }



	return(



		<>

            
            <div className="md:w-1/2 mb-10">
              

              <h2> <span className="">C</span>
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