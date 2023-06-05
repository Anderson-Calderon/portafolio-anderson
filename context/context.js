import {createContext , useState} from 'react';


const ContextPortafolio = createContext();

const PortafolioProvider = ({children})=>{


	const [menuVisible , setMenuVisible] = useState(false);
	const [clickEnLinkContacto , setClickEnLinkContacto] = useState(false);


	const [trabajos , setTrabajos] = useState(false);
	

	const [contacto,setContacto] = useState(false);

	const [habilidades, setHabilidades] = useState(false);

	const [yo , setYo] = useState(false);

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
