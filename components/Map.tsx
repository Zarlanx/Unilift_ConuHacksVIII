'use client'

import L from 'leaflet'
import MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'

const Map = () => {

    const [coord, setCoord] = useState([51.505, -0.09])

    const SearchLocation = () => {
        return (
            <div className="search-location">
                <div>
                <label>Location:</label>
                </div>
                <div>
                    <input type="text"
                    className='bg-gray-700 rounded-lg p-2 w-large outline-none'
                    />
                </div>
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