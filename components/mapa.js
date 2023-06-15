

//COMPONENETES REACT
import {useEffect,useState} from 'react';


//COMPONENETES DE NUESTRO MAPA LEAFLET
import L from 'leaflet';
//COMPONENTES PARA TRABAJAR CON EL MAPA DE LEAFLET
import { MapContainer, TileLayer, Marker, useMap , Popup} from 'react-leaflet';
//ESTILOS DEL MAPA DE LEAFLET
import 'leaflet/dist/leaflet.css';



export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

let iconoUbicacion = new L.icon({

	iconUrl : "https://cdn-icons-png.flaticon.com/512/1483/1483285.png" ,
	iconShadow : "https://cdn-icons-png.flaticon.com/512/1483/1483285.png" ,
	iconSize : [40,35],
	iconAnchor : [22,94],
	shadowAnchor : [22,94],
	popupAnchor:[-3,-76]


});

const Mapa = ()=>{


	const [geoData, setGeoData] = useState({ lat: -12.037812744649885, lng: -77.00219673705338 });

  	const center = [geoData.lat, geoData.lng];

  	
	return (

				<div>

					<MapContainer center={center} zoom={12} style={{ height: '100vh' }}>
				      <TileLayer
				        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				      />
				      {geoData.lat && geoData.lng && (
				        <Marker position={[-12.037812744649885, -77.00219673705338]}  icon={iconoUbicacion}>

				        	<Popup>
							      Ubicación
							</Popup>


				        </Marker>
				      )}
				      <ChangeView coords={center} />
				    </MapContainer>

				</div>

			);


};


export default Mapa;