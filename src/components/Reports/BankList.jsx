import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const data = [
  { name: "HDFC Bank", image: "./Rectangle 65.svg" },
  { name: "ICICI Bank", image: "./Frame 639.svg" },
  { name: "Axis Bank", image: "./Frame 630.png" },
  { name: "State Bank of India", image: "./Frame 877.svg" },
  { name: "Bank of India", image: "./Frame 878.svg" },
  { name: "Standard Chartered", image: "./Frame 630.svg" },
];

const BankList = () => {
    const componentPdf = useRef();
    const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "KycData",
    onAfterPrint:()=>alert("Data saved in pdf")
  })

  return (
    <div className="border border-gray-300 p-4 rounded-2xl mt-4">
      <div
        className=" flex justify-between text-xl pb-4 "
        style={{ color: "#222222" }}
      >
        <p className="font-bold">Bank Services List</p>
        <div
          style={{ backgroundColor: "#F5F5F5", color: "#222222" }}
          className="flex items-center gap-2 p-2 h-8 rounded-md cursor-pointer"
          onClick={generatePDF}
        >
          Export
          <img src="./Share.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-8" ref={componentPdf}>
        {data?.map((d, i) => (
          <div className="flex justify-between">
            <img src={d?.image} alt="" />
            <div>
              <p style={{ color: "#232323", fontWeight: 500 }}>{d?.name}</p>
              <p
                style={{ color: "#718EBF", fontWeight: 500, fontSize: "14px" }}
              >
                It is a long established
              </p>
            </div>
            <div>
              <p style={{ color: "#232323", fontWeight: 500 }}>Lorem Ipsum</p>
              <p
                style={{ color: "#718EBF", fontWeight: 500, fontSize: "14px" }}
              >
                Many publishing
              </p>
            </div>
            <div>
              <p style={{ color: "#232323", fontWeight: 500 }}>Lorem Ipsum</p>
              <p
                style={{ color: "#718EBF", fontWeight: 500, fontSize: "14px" }}
              >
                Many publishing
              </p>
            </div>
            <div>
              <p style={{ color: "#232323", fontWeight: 500 }}>Lorem Ipsum</p>
              <p
                style={{ color: "#718EBF", fontWeight: 500, fontSize: "14px" }}
              >
                Many publishing
              </p>
            </div>
            <div>
              <button
                className="border borrder-1 rounded-3xl px-4 py-2"
                style={{ borderColor: "#718EBF", color: "#718EBF" }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankList;
