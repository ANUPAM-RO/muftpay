import React from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import TransactionList from "./TransactionList";
import useTransaction from "../../hooks/useTransaction";

const Dashboard = () => {
  const { transaction } = useTransaction();
  console.log(transaction)
  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <PieChart title="Todays Statistics" amount="" />
          <PieChart title="Total Revene" amount="$55531.00" />
        </div>
        <BarChart />
      </div>
      <TransactionList data={transaction} />
    </div>
  );
};

export default Dashboard;
