import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/slt logo.png";

const AcceptedCVs = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9fbfc] text-[#333]">
      {/* Header */}
      <header className="bg-white px-4 md:px-10 py-4 flex justify-between items-center border-b shadow-sm">
        <div className="flex items-center gap-3">
          <img src={logo} alt="SLT-MOBITEL Logo" className="h-10 w-auto" />
          <span className="text-lg md:text-xl font-bold text-[#0066b3]">Training Program</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm md:text-base font-semibold">
          <Link to="/" className="hover:text-[#0066b3] transition-transform duration-200 transform hover:scale-105">Home</Link>
          <Link to="/logout" className="hover:text-[#0066b3] transition-transform duration-200 transform hover:scale-105">Logout</Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-[#0066b3]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#004a99] text-white px-6 py-4 space-y-4">
          <Link to="/jobcreation" className="block hover:bg-[#0052a0] px-4 py-2 rounded">Job Creation</Link>
          <Link to="/jobmodification" className="block hover:bg-[#0052a0] px-4 py-2 rounded">Job Modification</Link>
          <Link to="/received" className="block hover:bg-[#0052a0] px-4 py-2 rounded">Received CVs</Link>
          <Link to="/acceptedcv" className="block bg-[#0052a0] font-bold px-4 py-2 rounded">▶ Accepted CVs</Link>
        </div>
      )}

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="w-64 bg-[#004a99] text-white px-6 py-10 space-y-6 hidden md:block">
          <ul className="space-y-5">
            <li>
              <Link to="/jobcreation" className="hover:bg-[#0052a0] px-5 py-2 block rounded">Job Creation</Link>
            </li>
            <li>
              <Link to="/jobmodification" className="hover:bg-[#0052a0] px-5 py-2 block rounded">Job Modification</Link>
            </li>
            <li>
              <Link to="/received" className="hover:bg-[#0052a0] px-5 py-2 block rounded">Received CVs</Link>
            </li>
            <li className="bg-[#0052a0] px-5 py-2 rounded">
              <Link to="/acceptedcv" className="font-bold">▶ Accepted CVs</Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-10">
          <div className="bg-white p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg w-full max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-[#333]">Accepted CVs</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse">
                <thead className="bg-[#004a99] text-white uppercase text-sm">
                  <tr>
                    <th className="p-3 sm:p-4">Job Title</th>
                    <th className="p-3 sm:p-4">Name</th>
                    <th className="p-3 sm:p-4">Gender</th>
                    <th className="p-3 sm:p-4">Field</th>
                    <th className="p-3 sm:p-4">Contact Number</th>
                    <th className="p-3 sm:p-4">CV</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50 text-sm sm:text-base">
                    <td className="p-3 sm:p-4">Software</td>
                    <td className="p-3 sm:p-4">John Doe</td>
                    <td className="p-3 sm:p-4">Male</td>
                    <td className="p-3 sm:p-4">QA Trainee</td>
                    <td className="p-3 sm:p-4">1234567890</td>
                    <td className="p-3 sm:p-4 text-[#0066b3] font-semibold">
                      <a href="#" className="hover:underline">Download</a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 text-sm sm:text-base">
                    <td className="p-3 sm:p-4">Telecommunication</td>
                    <td className="p-3 sm:p-4">Jane Smith</td>
                    <td className="p-3 sm:p-4">Female</td>
                    <td className="p-3 sm:p-4">Trainee</td>
                    <td className="p-3 sm:p-4">0987654321</td>
                    <td className="p-3 sm:p-4 text-[#0066b3] font-semibold">
                      <a href="#" className="hover:underline">Download</a>
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
