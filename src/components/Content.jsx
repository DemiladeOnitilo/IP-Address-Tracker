
import React from 'react'

const Content = ({ name, content, isFirst = false }) => {
  return (
    <div className={`flex flex-col text-left w-50 gap-y-2 ${isFirst ? '' : 'border-l border-gray-400 pl-10'}`}>
      <p className='text-md font-bold text-gray-400 tracking-wide'>{name}</p>
      <h2 className='text-2xl font-semibold'>{content}</h2>
    </div>
  )
}

export default Content