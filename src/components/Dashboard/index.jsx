import React from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import TransactionList from "./TransactionList";
import useTransaction from "../../hooks/useTransaction";
import { getCurrentDate, getDateFromISOString } from "../../utiils";
import Navbar from "../common/Navbar";

const Dashboard = () => {
  const { transaction } = useTransaction();

  console.log(transaction)

  var currentDate = getCurrentDate();


  const todaysTrans = transaction?.filter((d)=>getDateFromISOString(d?.transactionDate) == currentDate)
  const totalAmount = todaysTrans?.filter((d)=> d?.status == "Completed" ).reduce((sum, transaction) => {
       return sum + transaction?.amount
  }, 0);
  console.log(totalAmount);
  return (
    <div className="mt-4 flex-1 mr-4">
      <Navbar />
      <div className="m-4">
        <div className="flex justify-between gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <div className="border border-gray-300 px-8 py-4 rounded-2xl">
                <div
                  className=" flex justify-between gap-3 text-xl pb-4 font-bold h-fit"
                  style={{ color: "#222222" }}
                >
                  <p>Todays Statistics: </p>
                  <p>{todaysTrans?.length}</p>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-2xl">
                <div
                  className=" flex justify-between gap-3 text-xl pb-4 font-bold"
                  style={{ color: "#222222" }}
                >
                  <p>Total Revenue: </p>
                  <p>{totalAmount}</p>
                </div>
              </div>
            </div>
            <BarChart />
          </div>
          <TransactionList data={todaysTrans} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
