import React, { useState } from "react";
import "../../index.css";
import { formatTime, getDateFromISOString } from "../../utiils";
import useUsers from "../../hooks/useUsers";
import Navbar from "../common/Navbar";
const Users = () => {
    const {users} = useUsers();
  console.log(users)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(users);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    // Filter the data based on the search term
    const results = users?.filter(
      (item) =>
        item?.name?.toLowerCase().includes(term.toLowerCase()) ||
        item?.email?.toLowerCase().includes(term.toLowerCase()) ||
        item?.mobileNumber?.toLowerCase().includes(term.toLowerCase()) ||
        item?.userType?.toLowerCase().includes(term.toLowerCase())   
    );
    setSearchResults(results);
  };


  // Logic to calculate the index of the last item on the current page
  const lastIndex = currentPage * itemsPerPage;
  // Logic to calculate the index of the first item on the current page
  const firstIndex = lastIndex - itemsPerPage;
  // Slice the data array to get the items for the current page
  let currentItems = !searchResults?.length
  ? users?.slice(firstIndex, lastIndex)
  : searchResults?.slice(firstIndex, lastIndex);

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  
  return (
    <div className="mt-4 flex-1 mr-4">
    <Navbar searchTerm={searchTerm} handleSearch={handleSearch} />
    <div className="m-4" >
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex justify-between w-full p-4">
          <p className="text-2xl" style={{ color:"#222222" , fontWeight: 600}}>All Users</p>
         
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
                Email
              </th>
              <th scope="col" className="px-4 py-3">
                Mobile
              </th>
              <th scope="col" className="px-4 py-3">
              Date Of Birth
              </th>
              <th scope="col" className="px-4 py-3">
              Pan Card Number
              </th>
              <th scope="col" className="px-4 py-3">
              User Type
              </th>
            </tr>
          </thead>
          <tbody>
            {!!currentItems?.length && currentItems?.map((data, i) => (
            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-4 py-4">{data?.name}</td>
              <td className="px-4 py-4">{data?.email}</td>
              <td className="px-4 py-4">{data?.mobileNumber}</td>
              <td className="px-4 py-4">{getDateFromISOString(data?.dateOfBirth)}</td>
                <td className="px-4 py-4">{data?.panCardNumber}</td>
              <td className="px-4 py-4">{data?.userType}</td>
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
              {Math.ceil(users?.length / itemsPerPage)}
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
                  disabled={lastIndex >= users?.length}
                  className="pagination__selected" 
                >
                  <img src="./arrow-right 1 (1).svg" alt="" />
                </button>
              </div>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Users;
