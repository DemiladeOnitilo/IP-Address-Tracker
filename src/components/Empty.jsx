import React from 'react'
import calcError from '../assets/images/illustration-empty.svg'

const Empty = () => {
  return (
     <div className='flex flex-col justify-center items-center gap-y-4 p-14 text-center h-full w-full'>
      <img src={calcError} />
      <h1 className='text-white text-2xl'>Results shown here</h1>
      <p className='slate-700 '>Compelete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
    </div>
  )
}

export default Empty