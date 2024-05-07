import React from 'react'
import usePayout from '../../hooks/usePayout'

const BankDetailsForm = ({setSuccess1}) => {
    const { 
        recipientName,
        setRecipientName,
        recipientAccountNumber,
        setRecipientAccountNumber,
        bankName,
        setBankName,
        recipientIFSC,
        setRecipientIFSC,
        amount,
        setAmount,
        handleSubmit
    } = usePayout({setSuccess1})
  return (
    <div>
        <p className='text-[#222222] font-[600] text-[22px] pb-6'>User Bank Details</p>
            <div className='flex flex-col gap-6 text-[#484857]'> 
            <div>
                <label>User Name</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' value={recipientName} onChange={(e)=>setRecipientName(e.target.value) } />
            </div>
            <div>
                <label>Account Number</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' value={recipientAccountNumber} onChange={(e)=>setRecipientAccountNumber(e.target.value) }/>
            </div>
            <div>
                <label>IFSC Code</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' value={recipientIFSC} onChange={(e)=>setRecipientIFSC(e.target.value) } />
            </div>
            <div>
                <label>Bank Name</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg'  value={bankName} onChange={(e)=>setBankName(e.target.value) } />
            </div>
            <div>
                <label>Amount</label>
                <input type="text" className='w-full border border-[#8F8F8F] rounded-lg' value={amount} onChange={(e)=>setAmount(e.target.value) } />
            </div>
        </div>
        <div className='flex justify-center my-[30px]'>
        <button className='bg-[#4DB7FD] text-white w-[180px] py-1 rounded-lg font-semibold' onClick={handleSubmit} >Submit</button>
        </div>
        
    </div>
  )
}

export default BankDetailsForm