import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import iconLocation from '../assets/images/icon-location.svg'

// Define the custom marker icon
const customIcon = new L.Icon({
  iconUrl: iconLocation,
  iconSize: [46, 56], // size of the icon
  iconAnchor: [23, 56], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -56] // point from which the popup should open relative to the iconAnchor
})

const MapUpdater = ({ center }) => {
  const map = useMap()
  useEffect(() => {
    map.flyTo(center, 13, {
      animate: true,
      duration: 1
    })
  }, [center, map])
  return null
}

const Map = ({ geoInfo }) => {
  const defaultLocation = { lat: 37.3861, lng: -122.0839 } // Default location (Mountain View, CA)
  const center = geoInfo?.location?.lat && geoInfo?.location?.lng
    ? [geoInfo.location.lat, geoInfo.location.lng]
    : [defaultLocation.lat, defaultLocation.lng]

  return (
    <div className='h-[70vh] w-screen overflow-hidden'>
      <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapUpdater center={center} />
        <Marker icon={customIcon} position={center}>
          <Popup>
            {geoInfo?.ip ? `IP: ${geoInfo.ip}` : 'Default Location'}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map