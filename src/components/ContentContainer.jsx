import React from 'react'
import Content from './Content'

const ContentContainer = (props) => {
  return (
    <div className='absolute top-[70%] left-[15%] z-999 lg:flex-row  flex flex-col justify-between items-center text-center lg:justify-center lg:gap-x-30 bg-white h-70 lg:h-40 w-[70%] p-9 rounded-2xl shadow-lg overflow-visible'>
          <Content 
            name= "IP ADDRESS"
            content= {props.ipAddress}
            isFirst= {true}
          />
          <Content 
            name= "LOCATION"
            content= {props.location}
          />
          <Content 
            name= "TIMEZONE"
            content= {props.timezone}
          />
          <Content 
            name= "ISP"
            content= {props.isp}
          />
    </div>
  )
}

export default ContentContainer