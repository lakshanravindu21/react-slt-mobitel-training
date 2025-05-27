import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/slt logo.png";

const AcceptedCVs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9fbfc] text-[#333]">
      {/* Header */}
      <header className="bg-white px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center border-b shadow-sm relative z-10">
        <div className="flex items-center gap-3">
          <img src={logo} alt="SLT-MOBITEL Logo" className="h-10" />
          <span className="text-xl font-bold text-[#0066b3]">Training Program</span>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-[#0066b3] focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden md:flex gap-6 text-[16px] font-semibold">
          <Link
            to="/"
            className="hover:text-[#0066b3] transition-transform duration-200 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/logout"
            className="hover:text-[#0066b3] transition-transform duration-200 transform hover:scale-105"
          >
            Logout
          </Link>
        </div>
      </header>

      <div className="flex flex-1 flex-col md:flex-row relative">
        {/* Sidebar */}
        <aside
          className={`bg-[#004a99] text-white px-6 py-6 space-y-6 w-full md:w-64 absolute md:static z-20 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <ul className="space-y-5">
            <li>
              <Link
                to="/jobcreation"
                className="hover:bg-[#0052a0] px-5 py-2 block rounded"
              >
                Job Creation
              </Link>
            </li>
            <li>
              <Link
                to="/jobmodification"
                className="hover:bg-[#0052a0] px-5 py-2 block rounded"
              >
                Job Modification
              </Link>
            </li>
            <li>
              <Link
                to="/received"
                className="hover:bg-[#0052a0] px-5 py-2 block rounded"
              >
                Received CVs
              </Link>
            </li>
            <li className="bg-[#0052a0] px-5 py-2 rounded">
              <Link to="/acceptedcv" className="font-bold">
                ▶ Accepted CVs
              </Link>
            </li>
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-x-auto">
          <div className="bg-white p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg w-full max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#333]">
              Accepted CVs
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead className="bg-[#004a99] text-white uppercase text-sm">
                  <tr>
                    <th className="p-4">Job Title</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Gender</th>
                    <th className="p-4">Field</th>
                    <th className="p-4">Contact Number</th>
                    <th className="p-4">CV</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50 text-sm md:text-base">
                    <td className="p-4">Software</td>
                    <td className="p-4">John Doe</td>
                    <td className="p-4">Male</td>
                    <td className="p-4">QA Trainee</td>
                    <td className="p-4">1234567890</td>
                    <td className="p-4 text-[#0066b3] font-semibold">
                      <a href="#" className="hover:underline">
                        Download
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 text-sm md:text-base">
                    <td className="p-4">Telecommunication</td>
                    <td className="p-4">Jane Smith</td>
                    <td className="p-4">Female</td>
                    <td className="p-4">Trainee</td>
                    <td className="p-4">0987654321</td>
                    <td className="p-4 text-[#0066b3] font-semibold">
                      <a href="#" className="hover:underline">
                        Download
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AcceptedCVs;
