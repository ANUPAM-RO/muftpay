import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="flex flex-col justify-between z-40 w-60  transition-transform -translate-x-full sm:translate-x-0 h-[100%]"
        style={{ backgroundColor: "#001524", color: "#FFFFFF" }}
        aria-label="Sidebar"
      >
        <div className="py-4">
          <div className="m-4 mb-10">
            <div className="flex justify-center">
              <img src="./MUFTPAY.svg" alt="Logo" />
            </div>
          </div>
          <ul className="space-y-2 font-medium">
            <li className="m-4">
              <Link
                to="/"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 0 && "bg-blue-400 rounded-lg"
                }`}
                onClick={() => handleLinkClick(0)}
              >
                <img src="./Dashboard.svg" alt="" />
                <span className="ms-3">Overview</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/kyc"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 1 && "bg-blue-400 rounded-lg"
                }`}
                onClick={() => handleLinkClick(1)}
              >
                <img src="./FilePlus.svg" alt="" />
                <span className="ms-3">KYC</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/transactions"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 2 && "bg-blue-400  rounded-lg"
                }`}
                onClick={() => handleLinkClick(2)}
              >
                <img src="./ClockCounterClockwise.svg" alt="" />
                <span className="ms-3">Transactions</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/user-management"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 3 && "bg-blue-400 rounded-lg"
                }`}
                onClick={() => handleLinkClick(3)}
              >
                <img src="./UsersThree.svg" alt="" />
                <span className="ms-3">User Management</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/notifications"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 4 && "bg-blue-400 rounded-lg"
                }`}
                onClick={() => handleLinkClick(4)}
              >
                <img src="./BellSimple.svg" alt="" />
                <span className="ms-3">Notifications</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/payment"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 5 && "bg-blue-400 rounded-lg"
                }`}
                onClick={() => handleLinkClick(5)}
              >
                <img src="./HandCoins.svg" alt="" />
                <span className="ms-3">Payment</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/reports"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 6 && "bg-blue-400 rounded-lg"
                }`}
                onClick={() => handleLinkClick(6)}
              >
                <img src="./ChartLine.svg" alt="" />
                <span className="ms-3">Reports</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/security"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 7 && "bg-blue-400 rounded-lg"
                }`}
                onClick={() => handleLinkClick(7)}
              >
                <img src="./ShieldCheck.svg" alt="" />
                <span className="ms-3">Security</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/support"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 8 && "bg-blue-400 rounded-lg"
                }`}
                onClick={() => handleLinkClick(8)}
              >
                <img src="./Question.svg" alt="" />
                <span className="ms-3">Support</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-center  py-2 px-4 bg-gray-600 mx-4 mt-10 mb-4 rounded-md cursor-pointer">
            <img src="./Frame 39997.svg" alt="" />
            <p className="ms-3 text-xl">Logout</p>
          </div>

        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
