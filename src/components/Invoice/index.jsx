import React, { useState } from "react";
import "../../index.css";
import { formatTime, getDateFromISOString } from "../../utiils";
import { DialogDefault } from "../common/Dilogbox";
import usePayout from "../../hooks/usePayout";
import { Link, useNavigate } from "react-router-dom";
const Invoice = () => {
  const [openSuccess, setSuccess] = useState(false);
  const { invoiceData } = usePayout({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const [filter, setFilter] = useState("");



  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Logic to calculate the index of the last item on the current page
  const lastIndex = currentPage * itemsPerPage;
  // Logic to calculate the index of the first item on the current page
  const firstIndex = lastIndex - itemsPerPage;
  // Slice the data array to get the items for the current page
  let currentItems = invoiceData?.slice(firstIndex, lastIndex);

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const sortOptions = [
    { lable: "Jan 2024", value: 0 },
    { lable: "Feb 2024", value: 1 },
    { lable: "Mar 2024", value: 2 },
    { lable: "Apr 2024", value: 3 },
    { lable: "May 2024", value: 4 },
    { lable: "Jun 2024", value: 5 },
  ];

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex justify-between w-full p-4">
          <p className="text-2xl" style={{ color: "#222222", fontWeight: 600 }}>
            Invoice
          </p>
          <div>
            <select
              id="countries"
              style={{
                backgroundColor: "#F5F7FA",
                color: "#2497E7",
                border: "1px solid #2497E7",
              }}
              onChange={handleFilterChange}
              value={filter}
              className="px-4 text-gray-900 text-sm rounded-md block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            >
              <option selected disabled>
                Year
              </option>
              {sortOptions?.map((data, i) => (
                <option key={i} value={data?.value}>
                  {data?.lable}
                </option>
              ))}
            </select>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead
            className="text-md bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            style={{ color: "#718EBF" }}
          >
            <tr>
              <th scope="col" className="px-4 py-3">
                User Name
              </th>
              <th scope="col" className="px-4 py-3">
                Date
              </th>
              <th scope="col" className="px-4 py-3">
                Time
              </th>
              <th scope="col" className="px-4 py-3">
                Bank
              </th>
              <th scope="col" className="px-4 py-3">
                Amount
              </th>
              <th scope="col" className="px-4 py-3">
                Status
              </th>
              <th scope="col" className="px-4 py-3">
                Invoice
              </th>
            </tr>
          </thead>
          <tbody>
            {!!currentItems?.length &&
              currentItems?.map((data, i) => (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-4 py-4">{data?.recipientName}</td>
                  <td className="px-4 py-4">
                    {getDateFromISOString(data?.transactionDate)}
                  </td>
                  <td className="px-4 py-4">
                    {formatTime(data?.transactionDate)}
                  </td>
                  <td className="px-4 py-4">{data?.bankName}</td>
                  <td className="px-4 py-4">${data?.amount}</td>
                  <td className="px-4 py-4">Completed</td>
                  <td className="px-4 py-4">
                  <Link to={data?.pdfLink}>
                    <div>
                      <button
                        className="bg-[#4DB7FD] text-white font-[600] p-2 px-4 flex gap-3 rounded-lg"
                        onClick={() => {
                          setSuccess(true);
                        }}
                      >
                        Download
                        <img src="../ic_round-download.png" alt="" />
                      </button>
                    </div>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between px-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing
            <span className="font-semibold text-gray-900 dark:text-white px-1">
             {currentPage}
            </span>
            of
            <span className="font-semibold text-gray-900 dark:text-white pl-1">
            {Math.ceil(invoiceData?.length / itemsPerPage)}
            </span>
          </span>

          <div className="pagination">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="pagination__selected"
            >
              <img src="./arrow-right 1.svg" alt="" />
            </button>
            <button
              onClick={nextPage}
              disabled={lastIndex >= invoiceData?.length}
              className="pagination__selected"
            >
              <img src="./arrow-right 1 (1).svg" alt="" />
            </button>
          </div>
        </nav>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="flex justify-center items-center flex-col gap-[20px] h-[240px]">
          <img src="../Mask group.png" alt="" />
          <div className="text-[#484857] font-[600]">
            <span>You Have Successfully Download Invoice</span>
            <p className="text-center">Invoice ID : 44567</p>
          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default Invoice;
