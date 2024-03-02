import React from 'react'

const UserCard = ({data}) => {
  return (
    <div className="border border-gray-300 p-4 rounded-2xl w-full">
          <p style={{ color: "#718EBF" }}>{data?.title}</p>
          <p style={{color:"#232323" , fontWeight:600 , fontSize:"24px"}}>{data?.count}</p>
    </div>
  )
}

export default UserCard
