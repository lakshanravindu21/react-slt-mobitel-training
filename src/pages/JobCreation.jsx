import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/slt.png";

const JobCreation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f7fa] text-[#333]">
      {/* Header */}
      <header className="bg-white px-6 py-4 flex justify-between items-center shadow-md rounded-tr-2xl z-10">
        <div className="flex items-center gap-4">
          <img src={logo} alt="SLT-MOBITEL Logo" className="h-12" />
          <span className="text-xl font-bold text-[#0066b3]">Training Program</span>
        </div>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link to="/" className="hover:text-[#0074e8] transition">Home</Link>
          <Link to="/logout" className="hover:text-[#0074e8] transition">Logout</Link>
        </nav>
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-[#0052a0] text-white p-6 md:block min-h-[auto] md:min-h-screen">
          <ul className="space-y-6 mt-4 flex md:flex-col justify-around md:justify-start">
            <li className="relative text-lg font-semibold">
              <Link
                to="/jobcreation"
                className="pl-6 text-white relative before:content-['▶'] before:absolute before:left-0 before:text-white"
              >
                Job Creation
              </Link>
            </li>
            <li>
              <Link to="/jobmodification" className="hover:text-[#cde8ff] block pl-6">
                Job Modification
              </Link>
            </li>
            <li>
              <Link to="/received" className="hover:text-[#cde8ff] block pl-6">
                Received CVs
              </Link>
            </li>
            <li>
              <Link to="/acceptedcv" className="hover:text-[#cde8ff] block pl-6">
                Accepted CVs
              </Link>
            </li>
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 md:p-10 overflow-auto">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#333] mb-6">
              Company Job Vacancy: Web Development Trainee
            </h2>
            <form className="flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Job ID"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
                />
                <input
                  type="text"
                  placeholder="Job Field"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
                />
                <input
                  type="text"
                  placeholder="Job Position"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
                />
                <input
                  type="text"
                  placeholder="Background"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
                />
                <input
                  type="text"
                  placeholder="Salary"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
                />
                <input
                  type="email"
                  placeholder="Company Email"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
                />
                <input
                  type="text"
                  placeholder="Company Location"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
                />
                <input
                  type="date"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
                />
                <input
                  type="text"
                  placeholder="Work Type"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
                />
                <textarea
                  placeholder="Job Description"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm col-span-full h-28 resize-y"
                />
              </div>
              <button
                type="submit"
                className="mt-8 self-end bg-[#0074e8] text-white px-8 py-3 rounded-full text-base hover:bg-[#005bb5] transition"
              >
                Create
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobCreation;
