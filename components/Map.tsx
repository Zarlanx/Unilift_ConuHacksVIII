'use client'

import L from 'leaflet'
import MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Map = () => {

    interface Location {
        formatted: string;
        geometry: {
          lat: number;
          lng: number;
        };
      }

    const [coord, setCoord] = useState([45.5017, -73.5673])

    const SearchLocation = () => {
        const [location, setLocation] = useState('');
        const [suggestions, setSuggestions] = useState<Location[]>([]);
      
        useEffect(() => {
          if (location) {
            const fetchSuggestions = async () => {
              const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=YOUR_OPENCAGE_API_KEY`);
              setSuggestions(response.data.results);
            }
      
            fetchSuggestions();
          } else {
            setSuggestions([]);
          }
        }, [location]);
      
        const selectLocation = (location: Location) => {
          setLocation(location.formatted);
          setCoord([location.geometry.lat, location.geometry.lng]);
          setSuggestions([]);
        }
      
        return (
          <div className="search-location">
            <input
              type="text"
              className='bg-gray-700 rounded-lg p-2 w-large outline-none'
              value={location}
              onChange={event => setLocation(event.target.value)}
            />
            {suggestions.map((suggestion, index) => (
              <div key={index} onClick={() => selectLocation(suggestion)}>
                {suggestion.formatted}
              </div>
            ))}
          </div>
        )
      }

    const GetMyLocation = () => {
        const getMyLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setCoord([position.coords.latitude, position.coords.longitude])
                })
            } else {
                console.log("Geolocation is not supported by this browser.")
            }
        }

        return (
            <div className="get-my-location mt-2">
                <button onClick={getMyLocation}>Get My Location</button>
            </div>
        )
    }

    return (
        <div>
            <SearchLocation />
            <GetMyLocation />
            <MapContainer style={{
                height: '50vh',
                width: '64vw'
            }} center={coord} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={[51, -0.09]}>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map