import React from 'react'
import usePayout from '../../hooks/usePayout'

const BankDetailsForm = ({setSuccess1 , recipientName , bankName , recipientIFSC, recipientAccountNumber,  amount}) => {
    // const { 
    //     handleSubmit
    // } = usePayout({setSuccess1 , data: {recipientName , bankName , recipientIFSC, recipientAccountNumber,  amount}})
  return (
    <div>
        <p className='text-[#222222] font-[600] text-[22px] pb-6'>User Bank Details</p>
            <div className='flex flex-col gap-6 text-[#484857]'> 
            <div>
                <label>User Name</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' value={recipientName} />
            </div>
            <div>
                <label>Account Number</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' value={recipientAccountNumber} />
            </div>
            <div>
                <label>IFSC Code</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' value={recipientIFSC}  />
            </div>
            <div>
                <label>Bank Name</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg'  value={bankName}  />
            </div>
            <div>
                <label>Amount</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' value={amount}  />
            </div>
        </div>
        <div className='flex justify-center my-[30px]'>
        <button className='bg-[#4DB7FD] text-white w-[180px] py-1 rounded-lg font-semibold' onClick={()=>setSuccess1(false)} >Submit</button>
        </div>
        
    </div>
  )
}

export default BankDetailsForm