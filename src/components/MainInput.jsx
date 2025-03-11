import React from 'react'
import { FaPoundSign  } from 'react-icons/fa'
 
const MainInput = (props) => {

  function handleChange(event){
    props.setState(event.target.value)
  }

  return (
    <div className='flex flex-col gap-y-3 relative overflow-hidden'>
    <label htmlFor="mortgageAmount" className='text-slate-500'>Mortgage Amount</label>
    <div className='relative flex items-center'>
      <FaPoundSign className={`absolute w-auto h-auto bg-[#e3f3fd] p-5 border-1 border-r-0  transition-colors duration-300 ${props.amountErrorMessage ? 'border-red-500 bg-red-500' : 'border-black'}`}/>
      <input
        id="mortgageAmount"
        type="number"
        value={props.value}
        onChange={handleChange}
        className={`w-full rounded-lg border-1 border-black h-13 p-7 pl-18 focus:outline-hidden focus:border-[#d7da2f] cursor-pointer ${props.amountErrorMessage ? 'border-red-500' : 'border-black'}`}
      />
      
    </div>
    {props.amountErrorMessage && <p className='text-red-500 '>{props.amountErrorMessage}</p>}
  </div>
  )
}

export default MainInput