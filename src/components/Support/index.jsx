import React from "react";
import useSupport from "../../hooks/useSupport";

const Support = () => {
  const { support } = useSupport();
  return (
    <div className="flex flex-col gap-2 items-center h-[100vh]">
      <img src="./image 2.svg" alt="" className="w-96 h-80" />
      <p style={{ color: "#222222", fontSize: "22px" }}>
        Tell us how can we help
      </p>
      <div className="flex flex-col gap-2">
        {support?.map((data, i) => (
          <>
            <div className="flex gap-4">
              <img src="./whatsapp (1).svg" alt="" />
              <p>{data?.mobileNumber}</p>
            </div>
            <div className="flex gap-4">
              <img src="./whatsapp (2).svg" alt="" />
              <p>{data?.email}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Support;
