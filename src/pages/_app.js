import '@/styles/globals.css'
import {PortafolioProvider} from '../../context/context';

export default function App({ Component, pageProps }) {
  return (


  				<PortafolioProvider>

  					<Component {...pageProps} />

  				</PortafolioProvider>


  			)
}
