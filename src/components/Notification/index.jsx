import React, { useRef, useState } from "react";
import "../../index.css";
import { useReactToPrint } from "react-to-print";

const Notification = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const componentPdf = useRef();

  const lastIndex = currentPage * itemsPerPage;

  const firstIndex = lastIndex - itemsPerPage;

  // const currentItems = users?.slice(firstIndex, lastIndex);

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "KycData",
    onAfterPrint:()=>alert("Data saved in pdf")
  })

  return (
    <div>
      <p className="text-2xl pb-6" style={{ color: "#222222", fontWeight: 600 }}>
        Notifications
      </p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

        <div ref={componentPdf}>
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
          </div>
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
              onClick={generatePDF}
            >
              Export
              <img src="./Share.svg" alt="" />
            </div>
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
                // disabled={lastIndex >= users?.length}
                className="pagination__selected"
              >
                <img src="./arrow-right 1 (1).svg" alt="" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Notification;
