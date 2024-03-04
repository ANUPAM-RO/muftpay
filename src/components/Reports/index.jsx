import React from 'react'
import ReportCard from './ReportCard'
import BankList from './BankList';

const Reports = () => {
     const data = [
    { title: "Personal Accounts", value: "$ 45,223" , image:"Group 1.svg"},
    { title: "Corporate Accounts", value: "$ 45,223" , image:"Group 594.svg"},
    { title: "Business Transactions", value: "$ 45,223" , image:"Group 595.svg"},
    { title: "Total Revenue", value: "$ 45,223" , image:"Group 596.svg"},

  ];
  return (
    <div>
        <p className="pb-6 text-2xl" style={{ color: "#222222", fontWeight: 600 }}>
       User Management
          </p>
          <div className='flex gap-4'>
              {data?.map((d, i) => (
                  <ReportCard data={d} />
              ))} 
          </div>
          <BankList />
         
    </div>
  )
}

export default Reports
