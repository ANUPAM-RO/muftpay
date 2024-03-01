import React from 'react'

const ListCard = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-3'>
              <img src="./Ellipse 1.svg" alt="" className='rounded-full w-12 h-12'/>
              <div>
                 <p style={{color:"#222222"}}>User Name</p> 
                 <p style={{color:"rgba(34, 34, 34, 0.5)"}}>24th January</p> 
              </div>
              
          </div>
          <div>
              <p className='font-semibold' style={{color:"#222222"}}>$250</p>
              <p style={{color:"#24AD6B"}}>Completed</p>
          </div>
    </div>
  )
}

export default ListCard;
