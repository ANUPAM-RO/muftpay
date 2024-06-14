import React, { useState } from "react";
import "../../index.css";
import {
  formatTime,
  getCurrentDateTime,
  getDateFromISOString,
} from "../../utiils";
import { DialogDefault } from "../common/Dilogbox";
import BankDetailsForm from "./BankDetailsForm";
import usePayout from "../../hooks/usePayout";
import Navbar from "../common/Navbar";

const Payouts = () => {
  const [openSuccess, setSuccess] = useState(false);
  const [openSuccess1, setSuccess1] = useState(false);
  const [openSuccess2, setSuccess2] = useState(false);
  const [transId, setTransId] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const {
    allPayouts,
    handleStatus,
    recipientName,
    setRecipientName,
    recipientAccountNumber,
    setRecipientAccountNumber,
    bankName,
    setBankName,
    recipientIFSC,
    setRecipientIFSC,
    amount,
    setAllPayouts,
    setAmount,
    filter,
    setFilter,
    handleFilterChange,
  } = usePayout({});

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(allPayouts);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    // Filter the data based on the search term
    const results = allPayouts?.filter(
      (item) =>
        item?.recipientName.toLowerCase().includes(term.toLowerCase()) ||
        item?.status?.toLowerCase().includes(term.toLowerCase()) ||
        item?.bankName?.toLowerCase().includes(term.toLowerCase()) ||
        getDateFromISOString(item?.transactionDate)?.includes(
          term.toLowerCase()
        )
    );
    setSearchResults(results);
  };

  const handleDone = () => {
    handleStatus(transId);
    setSuccess1(false);
    setSuccess(false);
  };
  const handleClose = () => {
    setSuccess2(false);
    setSuccess1(true);
    setSuccess(true);
  };

  // Logic to calculate the index of the last item on the current page
  const lastIndex = currentPage * itemsPerPage;
  // Logic to calculate the index of the first item on the current page
  const firstIndex = lastIndex - itemsPerPage;
  // Slice the data array to get the items for the current page
  let currentItems = !searchResults?.length
    ? allPayouts?.slice(firstIndex, lastIndex)
    : searchResults?.slice(firstIndex, lastIndex);

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const sortOptions = [
    { lable: "Jan 2024", value: "2024-01" },
    { lable: "Feb 2024", value: "2024-02" },
    { lable: "Mar 2024", value: "2024-03" },
    { lable: "Apr 2024", value: "2024-04" },
    { lable: "May 2024", value: "2024-05" },
    { lable: "Jun 2024", value: "2024-06" },
    { lable: "Jul 2024", value: "2024-07" },
    { lable: "Aug 2024", value: "2024-08" },
    { lable: "Sep 2024", value: "2024-09" },
    { lable: "Oct 2024", value: "2024-10" },
    { lable: "Nov 2024", value: "2024-11" },
    { lable: "Dec 2024", value: "2024-12" },
  ];

  return (
    <div className="mt-4 flex-1 mr-4">
      <Navbar searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="m-4">
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex justify-between w-full p-4">
              <p
                className="text-2xl"
                style={{ color: "#222222", fontWeight: 600 }}
              >
                Payouts
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
                    Amount To Pay
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Pay Status
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Payment
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
                      <td className="px-4 py-4">₹{data?.amount}</td>
                      <td className="px-4 py-4">
                        <div
                          className={
                            data?.status === "Completed"
                              ? "text-[#10B981]"
                              : "text-[#FFB444]"
                          }
                        >
                          {data?.status}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div>
                          <button
                            className="bg-[#4DB7FD] text-white font-[600] p-1 px-8 flex gap-3 rounded-lg"
                            onClick={() => {
                              setSuccess(true);
                              setTransId(data?._id);
                              setRecipientName(data?.recipientName);
                              setRecipientAccountNumber(
                                data?.recipientAccountNumber
                              );
                              setBankName(data?.bankName);
                              setRecipientIFSC(data?.recipientIFSC);
                              setAmount(data?.amount);
                            }}
                          >
                            {data?.status === "Completed" ? (
                              "Done"
                            ) : (
                              <div className="flex gap-2">
                                Pay
                                <img
                                  src="../mdi_recurring-payment.png"
                                  alt=""
                                />
                              </div>
                            )}
                          </button>
                        </div>
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
                  {Math.ceil(allPayouts?.length / itemsPerPage)}
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
                  // disabled={lastIndex >= transaction?.length}
                  className="pagination__selected"
                >
                  <img src="./arrow-right 1 (1).svg" alt="" />
                </button>
              </div>
            </nav>
          </div>
          <DialogDefault open={openSuccess} handleOpen={setSuccess}>
            <div className="px-6 py-4">
              <BankDetailsForm
                recipientAccountNumber={recipientAccountNumber}
                recipientName={recipientName}
                bankName={bankName}
                recipientIFSC={recipientIFSC}
                amount={amount}
                setSuccess1={setSuccess1}
              />
            </div>
          </DialogDefault>
          <DialogDefault open={openSuccess1} handleOpen={setSuccess1}>
            <div className="flex justify-center items-center flex-col gap-[20px] mt-[30px]">
              <img src="../Mask group.png" alt="" />
              <div className="text-[#484857] text-center">
                <span className="font-[600] text-[18px]">
                  Your Transaction Successful
                </span>
                <p className="">{getCurrentDateTime()}</p>
              </div>
              <div className="flex gap-4 my-[30px]">
                <button
                  className="bg-[#4DB7FD] text-white w-[180px] py-1 rounded-lg font-semibold"
                  onClick={handleDone}
                >
                  Done
                </button>
                <button
                  className="bg-[#4DB7FD] text-white w-[180px] py-1 rounded-lg font-semibold"
                  onClick={() => setSuccess2(true)}
                >
                  View Details
                </button>
              </div>
            </div>
          </DialogDefault>
          <DialogDefault open={openSuccess2} handleOpen={setSuccess2}>
            <div className="flex justify-center items-center flex-col gap-[20px] mt-[30px]">
              <img src="../Mask group.png" alt="" />
              <div className="text-[#484857] text-center">
                <span className="font-[600] text-[18px] ">
                  Your Transaction Successful
                </span>
                <p className="">{getCurrentDateTime()}</p>
              </div>
              <div className="text-[#484857] text-center ">
                <span className="">Transaction ID</span>
                <p className="font-[600] text-[18px]">TD 12345678909711</p>
              </div>
              <div className="text-[#484857] text-center  ">
                <span className="">Debited From</span>
                <p className="font-[600] text-[18px]">TD 098765432111</p>
              </div>
              <div className="flex justify-center my-[30px]">
                <button
                  className="bg-[#4DB7FD] text-white w-[180px] py-1 rounded-lg font-semibold"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </DialogDefault>
        </div>
      </div>
    </div>
  );
};

export default Payouts;
