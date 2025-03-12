
import React from 'react'

const Content = ({ name, content, isFirst = false }) => {
  return (
    <div className={`flex flex-col text-center lg:text-left w-50 gap-y-2 ${isFirst ? '' : 'lg:border-l lg:border-gray-400 lg:pl-10'}`}>
      <p className='text-xs lg:text-lg font-bold text-gray-400 tracking-wide'>{name}</p>
      <h2 className='text-xl lg:text-3xl font-semibold'>{content}</h2>
    </div>
  )
}

export default Content