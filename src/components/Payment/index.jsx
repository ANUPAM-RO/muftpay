import React from 'react'
import PaymentCard from './PaymentCard'
import PaymentTable from './PaymentTable';

const Payment = () => {
 const data = [
    { title: "Pay TM", count: "$ 45,223" },
    { title: "Cards", count: "$ 45,223" },
    { title: "Net Banking", count: "$ 45,223" },
    { title: "Google Pay", count: "$ 45,223" },
  ];
  return (
    <div>
        <div className="flex gap-4">
        {data?.map((d, i) => (
            <PaymentCard data={d} />
        ))}
          </div>
          <PaymentTable />
    </div>
  )
}

export default Payment
