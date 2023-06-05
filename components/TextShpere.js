import React  , {useEffect} from 'react';

import TagCloud from 'TagCloud';

import styles from '@/styles/Home.module.css'

const TextShpere = ()=>{

	useEffect(()=>{

		
		


						const container  = ".tagcloud";

						const texts = [



											"REACT.JS",
											"NODE.JS",
											"JS",
											"HTML5",
											"CSS3",
											"WORDPRESS",
											"BOOTSTRAP",
											"SQL"
											



									   ];

							const options ={


												radius:150,
												maxSpeed:"fast",
												initSpeed:"fast",
												keep:true,


											};

			
		// return ()=>{									
						
				TagCloud(container,texts,options)		



		// }	  


	},[]);


	return(


			<>


				<div className="text-shpere w-50">

					<span className="tagcloud w-50">



					</span>


				</div>

				

			</>



		  );

}


export default TextShpere;