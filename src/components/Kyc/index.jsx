import React, { useState , useRef } from "react";
import "../../index.css";
import useUsers from "../../hooks/useUsers";
import { useReactToPrint } from 'react-to-print';
import Navbar from "../common/Navbar";
const Kyc = () => {
  const { users } = useUsers();
  const componentPdf = useRef()
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
 
    // Filter the data based on the search term
    const results = users?.filter(item =>
      item?.name?.toLowerCase().includes(term.toLowerCase()) ||
      item?.panCardNumber?.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "KycData",
    onAfterPrint:()=>alert("Data saved in pdf")
  })


  // Logic to calculate the index of the last item on the current page
  const lastIndex = currentPage * itemsPerPage;
  // Logic to calculate the index of the first item on the current page
  const firstIndex = lastIndex - itemsPerPage;
  // Slice the data array to get the items for the current page
  let currentItems = !searchResults?.length ? users?.slice(firstIndex, lastIndex) : searchResults?.slice(firstIndex, lastIndex);

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
        <Navbar searchTerm={searchTerm} handleSearch={handleSearch}/>
        <div className="m-4">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div ref={componentPdf} style={{ width:'100%'}}>
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
                Pan Card Number
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
                  <td className="px-4 py-4">#</td>
                  <td className="px-4 py-4">{data?.name}</td>
                  <td className="px-4 py-4">{data?.panCardNumber}</td>
              
                </tr>
              ))}
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
              {currentPage}
            </span>
            of
            <span className="font-semibold text-gray-900 dark:text-white pl-1">
             {Math.ceil(users?.length/itemsPerPage)}
            </span>
          </span>
          <div className="flex items-center" >
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
      </div>
  
  );
};

export default Kyc;
