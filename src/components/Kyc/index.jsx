import React, { useState } from "react";
import "./index.css";
import useUsers from "../../hooks/useUsers";
const Kyc = () => {
  const { users } = useUsers();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);


  // Logic to calculate the index of the last item on the current page
  const lastIndex = currentPage * itemsPerPage;
  // Logic to calculate the index of the first item on the current page
  const firstIndex = lastIndex - itemsPerPage;
  // Slice the data array to get the items for the current page
  const currentItems = users?.slice(firstIndex, lastIndex);

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead
            className="text-md bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            style={{ color: "#718EBF" }}
          >
            <tr>
              <th scope="col" className="px-4 py-3">
                #
              </th>
              <th scope="col" className="px-4 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-4 py-3">
                Aadhar Card Number
              </th>
              <th scope="col" className="px-4 py-3">
                Pan Card Number
              </th>
              <th scope="col" className="px-4 py-3 w-36">
                Pan Card Upload
              </th>
              <th scope="col" className="px-4 py-3 w-44">
                Aadhar Card Upload
              </th>
              <th scope="col" className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {!!currentItems?.length &&
              currentItems?.map((data, i) => (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-4 py-4">#</td>
                  <td className="px-4 py-4">{data?.name}</td>
                  <td className="px-4 py-4">{data?.aadharNumber}</td>
                  <td className="px-4 py-4">{data?.panCardNumber}</td>
                  <td className="w-4 p-4">
                    <div className="flex items-center justify-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        checked={data?.aadharCardImage}
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
                        checked={data?.panCardImage}
                        className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <img src="./Component 5.svg" alt="" />
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
             {Math.ceil(users?.length/itemsPerPage)}
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
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="pagination__selected"
                >
                  <img src="./arrow-right 1.svg" alt="" />
                </button>
                <button
                  onClick={nextPage}
                  disabled={lastIndex >= users?.length}
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

export default Kyc;
