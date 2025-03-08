import React, { useEffect } from 'react';
import bgPattern from '../assets/images/pattern-bg-desktop.png';
import Input from './Input';
import ContentContainer from './ContentContainer';

const Hero = ({ setIpAddress, setGeoInfo, ipAddress, geoInfo }) => {
  useEffect(() => {
    getVisitorIP();
  }, []);

  const getVisitorIP = async () => {
    try {
      const response = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_l4q84sBB1RLuRp9gscA7PX1qqKibz&ipAddress=192.212.174.101');
      const data = await response.json();
      setIpAddress(data.ip);
      setGeoInfo(data);
    } catch (error) {
      console.error('Failed to fetch IP: ', error);
    }
    setIpAddress('');
  };

  const resolveDomainToIP = async (input) => {
    if (/^\d+\.\d+\.\d+\.\d+$/.test(input)) {
      return input; // Already an IP
    }
    try {
      const response = await fetch(`https://dns.google/resolve?name=${input}&type=A`);
      const data = await response.json();
      if (data.Answer) {
        return data.Answer[0].data;
      }
    } catch (error) {
      console.error('Error resolving domain:', error);
    }
    return null;
  };

  function handleChange(event) {
    setIpAddress(event.target.value);
  }

  const submitted = async (event) => {
    event.preventDefault();
    const resolvedIP = await resolveDomainToIP(ipAddress);
    if (!resolvedIP) {
      alert('Invalid domain or IP address');
      return;
    }
    try {
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_l4q84sBB1RLuRp9gscA7PX1qqKibz&ipAddress=${resolvedIP}`);
      const data = await response.json();
      setGeoInfo(data);
    } catch (error) {
      console.error('Failed to fetch Location Info: ', error);
    }
  };

  return (
    <div className='relative'>
      <div className='relative bg-no-repeat bg-cover bg-center h-[30vh] flex flex-col items-center gap-y-5' style={{ backgroundImage: `url(${bgPattern})` }}>
        <h1 className='text-3xl text-white font-bold mt-5'>IP Address Tracker</h1>
        <Input 
          value={ipAddress}
          handleChange={handleChange}
          submitted={submitted}
        />
      </div>
      <ContentContainer 
        ipAddress={geoInfo.ip}
        location={geoInfo.location ? `${geoInfo.location.region}, ${geoInfo.location.country} ${geoInfo.location.postalCode}` : ''}
        timezone={geoInfo.location ? `UTC ${geoInfo.location.timezone}` : ''}
        isp={geoInfo.isp}
      />
    </div>
  );
};

export default Hero;
