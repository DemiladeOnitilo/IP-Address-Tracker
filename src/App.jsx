import React, { useState } from 'react'
import Hero from './components/Hero.jsx'
import Map from './components/Map.jsx'

const App = () => {
  const [ipAddress, setIpAddress] = useState('')
  const [geoInfo, setGeoInfo] = useState({})
  const [response, setRespose] = useState({})

  
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Hero 
        setGeoInfo={setGeoInfo}
        setIpAddress={setIpAddress}
        setRespose={setRespose}
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