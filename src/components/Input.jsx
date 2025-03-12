import React from 'react'
import arrow from '../assets/images/icon-arrow.svg'

const Input = (props) => {  


  return (
    <div className='flex justify-center w-[105%] lg:w-[55%]'>
        <input type="text" value={props.value || ''} onChange={props.handleChange} placeholder='Search for any IP address or domain' className='border-0 rounded-l-xl bg-white w-[50%] h-15 pl-6 focus:outline-none' />
        <button type='submit' onClick={props.submitted} className=' bg-black flex justify-center items-center h-15 w-15 rounded-r-2xl cursor-pointer hover:bg-gray-700'><img src={arrow} alt="arrow icon" className='w-3' /></button>
    </div>
  )
}

export default Input