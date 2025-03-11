import React, { useState } from 'react'
import MainInput from './MainInput'
import SubInput from './SubInput'
import TypeButton from './TypeButton'
import CalcButton from './CalcButton'

const Calculator = ({setCalculated, setIsCalculated}) => {

    const[calculation, setCalculation] = useState("")
    const[mortgageAmount, setMortgageAmount] = useState("")
    const[mortgageTerm, setMortgageTerm] = useState("")
    const[interestRate, setInterestRate] = useState("")
    const[amountErrorMessage, setAmountErrorMessage] = useState("")
    const[termErrorMessage, setTermErrorMessage] = useState("")
    const[rateErrorMessage, setRateErrorMessage] = useState("")
    const[calcErrorMessage, setCalcErrorMessage] = useState("")


    function handleSubmit(){
        if (mortgageAmount && mortgageTerm && interestRate && calculation) {
        let intRate = (interestRate/12)/100
        let loanTerm = mortgageTerm * 12
        let repayment 
        let total 

        if(calculation === "repayment") {
            let top = intRate * (1 + intRate) ** loanTerm
            let bottom = ((1 + intRate) ** loanTerm) - 1
            repayment = mortgageAmount * (top/bottom)
            total  = repayment * loanTerm
        } else if(calculation === "interestOnly") {
            repayment = mortgageAmount * intRate
            total = repayment * loanTerm;
        }

        setCalculated({
            monthlyAmount: Math.round(repayment *100)/100,
            totalAmount: Math.round(total *100)/100
        })
        
        setIsCalculated(true);
    } else {
        setIsCalculated(false);
    }

    if (mortgageAmount > 0){
        setAmountErrorMessage("")
    } else {
        setAmountErrorMessage("This field is required")
    }

    if (mortgageTerm > 0){
        setTermErrorMessage("")
    } else {
        setTermErrorMessage("This field is required")
    }

    if (interestRate > 0){
        setRateErrorMessage("")
    } else {
        setRateErrorMessage("This field is required")
    }

    if (calculation === ""){
        setCalcErrorMessage("This field is required")
    } else {
        setCalcErrorMessage("")

    }

    }

    function handleClear() {
        setCalculation("");
        setMortgageAmount("");
        setMortgageTerm("");
        setInterestRate("");
        setCalculated({
            monthlyAmount: 0,
            totalAmount: 0
        });
       
        setAmountErrorMessage("")
        setTermErrorMessage("")
        setRateErrorMessage("")
        setCalcErrorMessage("")

    }

  return (
    <div className='w-[50%] h-auto text-left p-10 flex flex-col gap-y-7'>
        <form className='flex justify-between'>
            <h1 className='text-2xl'>Mortgage Calculator</h1>
            <button type='button' onClick={handleClear} className='border-b-1 cursor-pointer hover:opacity-50'>Clear All</button>
        </form>
        <form aria-label='Mortgage Calculator' onSubmit={ (e) =>{e.preventDefault(); handleSubmit()}} className='w-full h-full text-left flex flex-col justify-between' >
                <MainInput 
                    value={mortgageAmount}
                    setState={setMortgageAmount}
                    amountErrorMessage={amountErrorMessage}
                />
                <div className='flex justify-between'>
                    <SubInput 
                        label= 'Mortgage Term'
                        value={mortgageTerm}
                        setState={setMortgageTerm}
                        name='years'
                        errorMessage={termErrorMessage}
                    />
                    <SubInput 
                        label = 'Interest Rate'
                        value={interestRate}
                        setState={setInterestRate}
                        name = '%'
                        errorMessage={rateErrorMessage}
                    />
                </div>  
                <div className='flex flex-col gap-y-2 text-left'>
                    <label className='slate-500'>Mortgage Type</label>
                    <TypeButton 
                        name = 'Repayment'
                        value = 'repayment'
                        calculation={calculation}
                        setCalculation={setCalculation}
                        errorMessage={calcErrorMessage}
                    />
                    <TypeButton 
                        name = 'Interest only'
                        value = 'interestOnly'
                        calculation={calculation}
                        setCalculation={setCalculation}
                        errorMessage={calcErrorMessage}
                    />
                     {calcErrorMessage && <p className='text-red-500 '>{calcErrorMessage}</p>}
                </div> 
                <CalcButton />        
        </form>
    </div>
  )
}

export default Calculator