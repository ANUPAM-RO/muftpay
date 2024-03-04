import React from 'react'

const ReportCard = ({data}) => {
  return (
      <div className="border border-gray-300 px-2 py-3 rounded-2xl w-full flex gap-6 items-center">
          <div>
              <img src={data?.image} alt="" />
          </div>
          <div>
          <p style={{ color: "#718EBF" }} className='w-fit'>{data?.title}</p>
              <p style={{ color: "#232323", fontWeight: 600, fontSize: "24px" }}>{data?.value}</p>
          </div>

    </div>
  )
}

export default ReportCard
