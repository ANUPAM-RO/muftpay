import React from "react";
import UserCard from "./UserCard";
import AreaChart from "./AreaChart";
import useUsers from "../../hooks/useUsers";

const UserMange = () => {
  const { users } = useUsers();
  const data = [
    { title: "Total Users", count: users?.length },
    { title: "Users Increase", count: "45,223" },
    { title: "Users Decrease", count: "5,223" },
    { title: "User Growth", count: "45%" },
  ];
  const data2 = [
    { id: "6255877057", score: "1088" },
    { id: "6255877057", score: "1088" },
    { id: "6255877057", score: "1088" },
    { id: "6255877057", score: "1088" },
    { id: "6255877057", score: "1088" },
    { id: "6255877057", score: "1088" },
    { id: "6255877057", score: "1088" },
    { id: "6255877057", score: "1088" },
    { id: "6255877057", score: "1088" },
    { id: "6255877057", score: "1088" },
  ];
  return (
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
          <AreaChart />
          <div className="border border-gray-300 p-4 rounded-2xl w-full">
            <div
              className="flex justify-between font-bold pb-2"
              style={{ color: "#222222" }}
            >
              <p>Transaction ID</p>
              <p>Risk Score</p>
            </div>
            <div className="flex flex-col gap-4">
              {data2?.map((d, i) => (
                <div className="flex justify-between font-semibold">
                  <p>{d?.id}</p>
                  <p>{d?.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMange;
