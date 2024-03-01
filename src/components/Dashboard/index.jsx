import React from 'react'
import PieChart from './PieChart'
import BarChart from './BarChart'
import TransactionList from './TransactionList'

const Dashboard = () => {
    return (
      <div className='flex gap-6'>
    <div className='flex flex-col gap-6'>
       <div className='flex gap-6'>
        <PieChart title="Todays Statistics" amount=""/>
        <PieChart title="Total Revene" amount="$55531.00"/>
          </div>
          <BarChart />
    </div>
          <TransactionList />  
      </div>
  )
}

export default Dashboard
