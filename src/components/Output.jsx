import React from 'react'
import { FaPoundSign  } from 'react-icons/fa'

const Output = (calculated) => {

    console.log(calculated.calculated)
  return (
    <div>
    <h1 className='text-2xl text-white'>Your results</h1>
      <p className='slate-700 '>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
      <div className='lime-bg w-full h-80 rounded-xl mt-15 pt-1'>
        <div className='bg-black h-full flex flex-col gap-y-9 text-left rounded-xl p-8 '>
          <div className='flex flex-col gap-y-3'>
            <p className='slate-700'>Your monthly repayments</p>
            <p className='lime flex items-center text-6xl'><FaPoundSign />{calculated.calculated.monthlyAmount ? calculated.calculated.monthlyAmount : '0.00'}</p>
          </div>
          <hr className='border-1 border-[#eee] opacity-10' />
          <div className='flex flex-col gap-y-3'>
            <p className='slate-700'>Total you'll repay over the term</p>
            <p className='text-white flex items-center text-2xl'><FaPoundSign />{calculated.calculated.totalAmount ? calculated.calculated.totalAmount : '0.00'}</p>
          </div>
        </div>
      </div>
      </div>
)
}

export default Output