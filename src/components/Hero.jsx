import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bgDesktopPattern from '../assets/images/pattern-bg-desktop.png';
import bgMobilePattern from '../assets/images/pattern-bg-mobile.png';
import Input from './Input';
import ContentContainer from './ContentContainer';

const Hero = ({ setIpAddress, setGeoInfo, ipAddress, geoInfo, setRespose }) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  

  useEffect(() => {
    getVisitorIP();
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisitorIP = async () => {
    try {
      const response = await axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_0kAMjxKIOCAb4C5YY6HKBn9cjRWIR&ipAddress=192.212.174.101');
      const data = response.data;
      setRespose(response.data)
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
      const response = await axios.get(`https://dns.google/resolve?name=${input}&type=A`);
      const data = response.data;
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
      const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_0kAMjxKIOCAb4C5YY6HKBn9cjRWIR&ipAddress=${resolvedIP}`);
      const data = response.data;
      setGeoInfo(data);
    } catch (error) {
      console.error('Failed to fetch Location Info: ', error);
    }
  };

  return (
    <div className='relative'>
      <div className='relative bg-no-repeat bg-cover bg-center h-[30vh] w-screen flex flex-col items-center gap-y-5' 
      style={{
        backgroundImage: `url(${isMobile ? bgMobilePattern : bgDesktopPattern})`,
      }}
      >
        <h1 className='text-3xl text-white text-center font-bold mt-5 w-[50%]'>IP Address Tracker</h1>
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
        isp={geoInfo.isp ? `${geoInfo.isp}`: 'NO ISP AVAILABLE'}
      />
    </div>
  );
};

export default Hero;
