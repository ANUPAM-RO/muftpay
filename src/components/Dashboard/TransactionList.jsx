import React from "react";
import ListCard from "./ListCard";

const TransactionList = ({data}) => {
  return (
    <div className="border border-gray-300 p-4 rounded-2xl h-fit w-full">
      <p className="text-2xl font-bold pb-6" style={{ color: "#222222" }}>
        Recent Transactions
          </p>
      <div className="flex flex-col gap-4">
        {data?.map((d, i) => (
          <div key={i}>
            <ListCard data={d} />
          </div>
          
        ))}
           
          </div>
          <div className="flex justify-center w-full mt-14">
          <button className="text-white px-8 py-2 rounded-md " style={{backgroundColor:"#4DB7FD"}}>View All</button>  
          </div>
    </div>
  );
};

export default TransactionList;
