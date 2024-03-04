import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const PaymentTable = () => {
  const componentPdf = useRef();
  const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "KycData",
    onAfterPrint: () => alert("Data saved in pdf"),
  });

  return (
    <div className="my-4">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div
          className=" flex justify-between text-xl pb-4 p-4"
          style={{ color: "#222222" }}
        >
          <p className="font-bold">Success Rate</p>
          <div className="flex gap-2 cursor-pointer" onClick={generatePDF}>
            <p style={{ color: "#2497E7" }}>Export</p>
            <img src="./Share (1).svg" alt="" />
          </div>
        </div>
        <div ref={componentPdf}>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead
              className="text-md bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              style={{ color: "#64748B" }}
            >
              <tr>
                <th scope="col" className="px-4 py-3 w-1/2">
                  Services
                </th>
                <th scope="col" className="px-4 py-3">
                  Success
                </th>
                <th scope="col" className="px-4 py-3">
                  Failed
                </th>
                <th scope="col" className="px-4 py-3">
                  Pending
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-4 py-4" style={{ color: "#1C2434" }}>
                  Pay TM
                </td>
                <td className="px-4 py-4" style={{ color: "#10B981" }}>
                  45%
                </td>
                <td className="px-4 py-4" style={{ color: "#DA4848" }}>
                  45%
                </td>
                <td className="px-4 py-4" style={{ color: "#4DB7FD" }}>
                  45%
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-4 py-4" style={{ color: "#1C2434" }}>
                  Cards
                </td>
                <td className="px-4 py-4" style={{ color: "#10B981" }}>
                  45%
                </td>
                <td className="px-4 py-4" style={{ color: "#DA4848" }}>
                  45%
                </td>
                <td className="px-4 py-4" style={{ color: "#4DB7FD" }}>
                  45%
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-4 py-4" style={{ color: "#1C2434" }}>
                  Net Banking
                </td>
                <td className="px-4 py-4" style={{ color: "#10B981" }}>
                  45%
                </td>
                <td className="px-4 py-4" style={{ color: "#DA4848" }}>
                  45%
                </td>
                <td className="px-4 py-4" style={{ color: "#4DB7FD" }}>
                  45%
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-4 py-4" style={{ color: "#1C2434" }}>
                  Google Pay
                </td>
                <td className="px-4 py-4" style={{ color: "#10B981" }}>
                  45%
                </td>
                <td className="px-4 py-4" style={{ color: "#DA4848" }}>
                  45%
                </td>
                <td className="px-4 py-4" style={{ color: "#4DB7FD" }}>
                  45%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
