import React from 'react'

const SubInput = (props) => {

  function handleChange(event){
    props.setState(event.target.value)
  }

  return (
    <div className='flex flex-col gap-y-3 relative overflow-hidden'>
        <label htmlFor={props.label} className='slate-500 '>{props.label}</label>
        <div className='flex'>
          <input id={props.label} type="number" value={props.value} onChange={handleChange} className={`w-55 h-10 p-6 rounded-lg border-1 border-black focus:outline-hidden focus:border-[#d7da2f]   ${props.errorMessage ? 'border-red-500' : 'border-black'}`}/>
          <p className={`absolute right-0 w-auto h-auto bg-[#e3f3fd] p-3 border-1 border-l-0 focus:bg-[#d7da2f] focus:border-[#d7da2f] transition-colors duration-300 ${props.errorMessage ? 'border-red-500 bg-red-500' : 'border-black'}`}>{props.name}</p>
        </div>
        {props.errorMessage && <p className='text-red-500 '>{props.errorMessage}</p>}
        
    </div>
  )
}

export default SubInput