import React from "react";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <div>
      <div className="flex min-h-screen">
        <div className="bg-[#FFFFFF] w-2/12 border-r border-gray-200">
          <div className="px-4">
            <img
              src="https://softvalley.net/img/logo.png"
              className=""
              alt=""
            />
          </div>
          <div className="flex items-center px-4">
            <div className="bg-[#E1E1E1] p-3 rounded-full w-12 h-12">
              <img
                src="https://i.ibb.co/8sg0q27/user-2.png"
                className=""
                alt=""
              />
            </div>
            <div>
              <h2 className="ml-2">Hello! Good Evening Admin</h2>
            </div>
          </div>
          <div className="w-full h-[2px] mt-5 bg-[#cbcbcb]"></div>
          <div className="">
            <ul className="menu">
              <li>
                <Link className="pl-6">
                  <img
                    src="https://i.ibb.co/LdWdK0P/dashboard.png"
                    className="w-5"
                    alt=""
                  />
                  Dashboard
                </Link>
                <Link className="bg-[#405189] text-white font-medium pl-6">
                  <img
                    src="https://i.ibb.co/VDNrsts/search-1.png"
                    className="w-5"
                    alt=""
                  />
                  Leads
                </Link>
                <Link className="pl-6">
                  <img
                    src="https://i.ibb.co/THj3VcZ/customer.png"
                    className="w-5"
                    alt=""
                  />
                  Customer
                </Link>
                <Link className="pl-6">
                  <img
                    src="https://i.ibb.co/ZNjp9Z3/sales.png"
                    className="w-5"
                    alt=""
                  />
                  Sales
                </Link>
                <Link className="pl-6">
                  <img
                    src="https://i.ibb.co/ftwrbJR/expenses.png"
                    className="w-5"
                    alt=""
                  />
                  Expences
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#FBFBFB] w-11/12">
          <div className="py-3 px-7 flex items-center justify-between">
            <div>
              <h2 className="font-medium text-xl">Leads</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <img
                src="https://i.ibb.co/WFJTtq2/full-screen.png"
                className="w-5"
                alt=""
              />
            </div>
          </div>
          <div className="mt-8 relative px-7">
            <input
              type="text"
              placeholder="Search in leads table..."
              className="border py-2 pl-3 pr-8 rounded-md w-3/12 border-gray-200 focus:outline-none"
            />
            <img
              src="https://i.ibb.co/6Nd4TKy/search-interface-symbol-1.png"
              alt=""
              className="absolute top-[10px] right-[75%] w-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
