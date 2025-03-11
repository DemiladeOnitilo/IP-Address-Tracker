import React from 'react'
import Output from './Output'
import Empty from './Empty'


const Calculated = ({calculated, isCalculated}) => {


  return (
   
    <div className='flex flex-col gap-y-4 p-14 slate-900-bg h-full w-[50%] rounded-bl-[100px] rounded-r-3xl'>
      { isCalculated 
        ?
        <Output 
        calculated={calculated}
        /> 
        :
        <Empty />
  }
    </div>
  )
}

export default Calculated