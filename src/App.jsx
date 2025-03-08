import React, { useState } from 'react'
import Hero from './components/Hero.jsx'
import Map from './components/Map.jsx'

const App = () => {
  const [ipAddress, setIpAddress] = useState('')
  const [geoInfo, setGeoInfo] = useState({})

  return (
    <div className='relative'>
      <Hero 
        setGeoInfo={setGeoInfo}
        setIpAddress={setIpAddress}
        ipAddress={ipAddress}
        geoInfo={geoInfo}
      />
      <Map 
        geoInfo={geoInfo}
      />
    </div>
  )
}

export default App