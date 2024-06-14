import React from "react";
import UserCard from "./UserCard";
import AreaChart from "./AreaChart";
import useUsers from "../../hooks/useUsers";
import useTransaction from "../../hooks/useTransaction";
import Navbar from "../common/Navbar";

const UserMange = () => {
  const { users } = useUsers();
  const { transaction} = useTransaction()

  function groupObjectsByMonth(data) {
    const monthArray = [];

    // Initialize monthArray with empty arrays for all months
    for (let i = 1; i <= 12; i++) {
        const monthName = new Date(2000, i - 1).toLocaleString('en-us', { month: 'long' });
        monthArray[i] = { monthName, data: [] };
    }

    // Iterate through the data array
    data.forEach(item => {
        // Extract the month from createdAt field
        const createdAtDate = new Date(item.createdAt);
        const createdAtMonth = createdAtDate.getMonth() + 1;

        // Push the item into the array corresponding to its month
        monthArray[createdAtMonth].data.push(item);
    });

    return monthArray;
}

// Usage example:

const result = groupObjectsByMonth(users);
const filteredResult = result.filter(item => item !== null);
console.log(transaction);

  const data = [
    { title: "Total Users", count: users?.length , url:'/users' },
    { title: "Users Increase", count: "45,223" },
    { title: "Users Decrease", count: "5,223" },
    { title: "User Growth", count: "45%" },
  ];

  return (
    <div className="mt-4 flex-1 mr-4">
    <Navbar />
    <div className="m-4">
    <div>
      <p
        className="pb-6 text-2xl"
        style={{ color: "#222222", fontWeight: 600 }}
      >
        User Management
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          {data?.map((d, i) => (
            <UserCard data={d} />
          ))}
        </div>
        <div className="flex gap-4">
          <AreaChart result={filteredResult}/>
        
        </div>
      </div>
    </div>

    </div>
  </div>
  );
};

export default UserMange;
