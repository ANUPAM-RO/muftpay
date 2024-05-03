import React from 'react'

const BankDetailsForm = ({setSuccess1}) => {
  return (
    <div>
        <p className='text-[#222222] font-[600] text-[22px] pb-6'>User Bank Details</p>
            <div className='flex flex-col gap-6 text-[#484857]'> 
            <div>
                <label>User Name</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' />
            </div>
            <div>
                <label>Account Number</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' />
            </div>
            <div>
                <label>Ifsc Code</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' />
            </div>
            <div>
                <label>Bank Name</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' />
            </div>
            <div>
                <label>Amount</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' />
            </div>
        </div>
        <div className='flex justify-center my-[30px]'>
        <button className='bg-[#4DB7FD] text-white w-[180px] py-1 rounded-lg font-semibold' onClick={()=>setSuccess1(true)} >Submit</button>
        </div>
        
    </div>
  )
}

export default BankDetailsForm