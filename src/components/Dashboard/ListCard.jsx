import React from "react";
import { formatDate } from "../../utiils";

const ListCard = ({ data }) => {
  console.log(data);
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <img src="./Ellipse 1.svg" alt="" className="rounded-full w-12 h-12" />
        <div>
          <p style={{ color: "#222222" }}>{data?.name}</p>
          <p style={{ color: "rgba(34, 34, 34, 0.5)" }}>
            {formatDate(data?.timestamp)}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold" style={{ color: "#222222" }}>
          ${data?.amount}
        </p>
        <p style={{ color: "#24AD6B" }}>Completed</p>
      </div>
    </div>
  );
};

export default ListCard;
