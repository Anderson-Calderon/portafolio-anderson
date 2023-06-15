
//COMPONENETES DE REACT
import {createContext , useState} from 'react';

//CREAMOS EL CONTEXT
const ContextPortafolio = createContext();


const PortafolioProvider = ({children})=>{

	//UTILIZAMOS PARA MOSTRAR EL MENÚ Y OCULTARLO
	const [menuVisible , setMenuVisible] = useState(false);


	// LO UTILIZO PARA SABER SI HICE CLICK EN ALGÚN DETERMINADO ENLACE . 
	//POR EJEMPLO SI HAGO CLICK EN EL ENLACE trabajos , ENTONCES PINTO EL ENLACE ACTIVO.
	const [trabajos , setTrabajos] = useState(false);
	const [contacto,setContacto] = useState(false);
	const [habilidades, setHabilidades] = useState(false);
	const [yo , setYo] = useState(false);
	const [clickEnLinkContacto , setClickEnLinkContacto] = useState(false);

	return(


			<ContextPortafolio.Provider 

				value={


							{


									menuVisible,
									setMenuVisible,
									clickEnLinkContacto,
									setClickEnLinkContacto,
									trabajos,
									setTrabajos,
									contacto,
									setContacto,
									yo,
									setYo,
									habilidades,
									setHabilidades



							}

					   }

			
		>

			{children}


			</ContextPortafolio.Provider>



			);



}

export {PortafolioProvider}

export default ContextPortafolio;
