import React from 'react'
import { currentDate } from '../../utiils'

const Navbar = () => {
  const date = currentDate()
  return (
    <div className='flex items-center justify-between'>
      <p className='text-md font-semibold' style={{ color: "#A3A3A3" }}>{date}</p>
          <div className='flex items-center gap-8 mr-4'>
           
              <div >
                  <img src="./Notification icon.svg" alt="Notification" />
        </div>
           <div className='flex px-2 py-1 border border-1' style={{backgroundColor:"#FFFFFF", width:"255px" , borderRadius:"12px", color:"#8BA3CB"}}>
                  <input type="text" className='border-none bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none' placeholder='Search here'/>
                  <img src="./Search.svg" alt="search" />
              </div>
              <img src="./Ellipse 1.svg" alt="profile" className='rounded-full w-14 h-14' />
          </div>
    </div>
  )
}

export default Navbar
