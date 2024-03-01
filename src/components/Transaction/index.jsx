import React, { useState } from "react";
import "./index.css";
const Transaction = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  const selectedPagehandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  const sortOptions = [
    { lable: 2023, value: 2023 },
    { lable: 2022, value: 2022 },
    { lable: 2021, value: 2021 },
    { lable: 2020, value: 2020 },
  ];
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex justify-between w-full p-4">
          <p style={{ color:"#222222" , fontWeight: 600}}>All Transactions</p>
          <div>
            <select
              id="countries"
              style={{
                backgroundColor: "#F5F7FA",
                color: "#2497E7",
                border: "1px solid #2497E7",
              }}
              className="px-4 text-gray-900 text-sm rounded-md block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-4 py-4">Ralph Edwards</td>
              <td className="px-4 py-4">28/10/2012</td>
              <td className="px-4 py-4">04:02 am</td>
              <td className="px-4 py-4">ICICI Bank</td>
              <td className="px-4 py-4">$328.85</td>
              <td className="px-4 py-4">Completed</td>
            </tr>
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between px-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing
            <span className="font-semibold text-gray-900 dark:text-white px-1">
              1-5
            </span>
            of
            <span className="font-semibold text-gray-900 dark:text-white pl-1">
              100
            </span>
          </span>

            
            <div className="pagination">
              <img
                className={
                  page > 1 ? "pagination__nondisable" : "pagination__disable"
                }
                onClick={() => selectedPagehandler(page - 1)}
                src="./arrow-right 1.svg"
                alt=""
              />
              {[...Array(totalPages)].map((_, i) => (
                <span
                  className={
                    page === i + 1
                      ? "pagination__selected"
                      : "pagination__nonselected"
                  }
                  key={i}
                  onClick={() => selectedPagehandler(i + 1)}
                >
                  {i + 1}
                </span>
              ))}
              <img
                src="./arrow-right 1 (1).svg"
                alt=""
                className={
                  page < totalPages
                    ? "pagination__nondisable"
                    : "pagination__disable"
                }
                onClick={() => selectedPagehandler(page + 1)}
              />
            </div>
        </nav>
      </div>
    </div>
  );
};

export default Transaction;
