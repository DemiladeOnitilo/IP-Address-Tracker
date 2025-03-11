import React from 'react'

const TypeButton = (props) => {

  function onChange(event){
    props.setCalculation(event.target.value)
    console.log(props.calculation)
  }

  return (
    <div className='block'> 
        <label id='active' className={`relative flex gap-x-6 border-1 h-12 items-center pl-6 cursor-pointer 
            ${props.calculation === props.value ? 'border-[#d7da2f] bg-[#d7da2f]/30' : 'hover:border-[#d7da2f]'}`}>
            <input 
            type='radio' 
            name='type'
            id={props.name}
            value={props.value}
            onChange={onChange}
            checked={props.calculation === props.value}
            className='h-5 w-5 cursor-pointer accent-[#d7da2f] border-0 ' 
            />
            {props.name}
        </label>
        
    </div>
  )
}

export default TypeButton