import React from "react";
import { formatDate } from "../../utiils";

const ListCard = ({ data }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <img
          src={data?.userId?.image}
          alt=""
          className="rounded-full w-12 h-12"
        />
        <div>
          <p style={{ color: "#222222" }}>{data?.userId?.name}</p>
          <p style={{ color: "rgba(34, 34, 34, 0.5)" }}>
            {formatDate(data?.transactionDate)}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold" style={{ color: "#222222" }}>
          ₹{data?.amount}
        </p>
        <p
          className={
            data?.status === "Complete" ? "text-[#10B981]" : "text-[#FFB444]"
          }
        >
          {data?.status}
        </p>
      </div>
    </div>
  );
};

export default ListCard;
