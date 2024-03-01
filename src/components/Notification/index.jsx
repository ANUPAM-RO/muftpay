import React, { useState } from "react";
import './index.css'

const Notification = () => {
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
  return (
    <div>
        <p className="pb-6" style={{ color:"#222222" , fontWeight: 600}}>Notifications</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead
            className="text-md bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            style={{ color: "#718EBF" }}
          >
            <tr>
              <th scope="col" className="px-4 py-3">
                Transaction #
              </th>
              <th scope="col" className="px-4 py-3">
                Mobile Number
              </th>
              <th scope="col" className="px-4 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-4 py-3">
                Amount
              </th>
              <th scope="col" className="px-4 py-3 w-44">
               Confirmation Sent
              </th>
              <th scope="col" className="px-4 py-3 w-44">
                Invoice Generated
              </th>
              <th scope="col" className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-4 py-4">078 2824 3334 </td>
              <td className="px-4 py-4">(209) 555-0104</td>
              <td className="px-4 py-4">Flores, Juanita</td>
              <td className="px-4 py-4">$275.43</td>
              <td className="w-4 p-4">
                <div className="flex items-center justify-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="w-4 p-4">
                <div className="flex items-center justify-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
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
          <div className="flex items-center">
            <div
              style={{ backgroundColor: "#F5F5F5", color: "#222222" }}
              className="flex items-center gap-2 px-4 h-8 rounded-md cursor-pointer"
            >
              Export
              <img src="./Share.svg" alt="" />
            </div>
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
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Notification;
