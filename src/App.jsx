import React, { useState } from 'react'
import Calculator from './components/Calculator'
import Calculated from './components/Calculated'

const App = () => {

  const[calculated, setCalculated] = useState({
    monthlyAmount: 0.00,
    totalAmount: 0.00
  })
  const[isCalculated, setIsCalculated] = useState(false);


  return (
    <div className=' w-full h-[100vh] slate-100-bg flex justify-center items-center plus-jakarta-sans'>
      <div className='flex h-170 w-[60%] bg-white rounded-3xl'>
        <Calculator 
          setCalculated={setCalculated}
          setIsCalculated={setIsCalculated}

        />
        <Calculated 
          calculated={calculated}
          isCalculated={isCalculated}
        />
      </div>
      <style jsx>{`
      .relative:focus-within .absolute {
        background-color: #d7da2f;
        border-color: #d7da2f;
      }
    `}</style>
    </div>
    
  )
}

export default App