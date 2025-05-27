// src/pages/ReceivedCVs.jsx
import React from "react";
import { Link } from "react-router-dom";
import sltLogo from "../assets/images/slt.png";

const ReceivedCVs = () => {
  return (
    <div className="min-h-screen bg-[#f1f6fb] flex flex-col">
      {/* Header */}
      <header className="bg-white px-6 py-4 flex justify-between items-center shadow-md rounded-b-[30px]">
        <div className="flex items-center gap-4">
          <img src={sltLogo} alt="SLT-MOBITEL Logo" className="h-12" />
          <span className="text-[#0066b3] font-bold text-xl">Training Program</span>
        </div>
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-black font-semibold text-sm hover:bg-[#0074e8] hover:text-white px-4 py-2 rounded-lg transition"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-black font-semibold text-sm hover:bg-[#0074e8] hover:text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-56 bg-[#0052a0] py-8 px-3 min-h-screen">
          <ul className="space-y-6">
            <li>
              <Link to="/jobcreation" className="text-white pl-5 relative hover:font-bold hover:text-[#d4eaff] before:content-['▶'] before:absolute before:left-0 hover:before:text-white">
                Job Creation
              </Link>
            </li>
            <li>
              <Link to="/jobmodification" className="text-white pl-5 relative hover:font-bold hover:text-[#d4eaff] before:content-['▶'] before:absolute before:left-0 hover:before:text-white">
                Job Modification
              </Link>
            </li>
            <li className="text-white font-bold relative before:content-['▶'] before:absolute before:left-0 before:text-white">
              <Link to="/received-cvs" className="pl-5">
                Received CVs
              </Link>
            </li>
            <li>
              <Link to="/acceptedcv" className="text-white pl-5 relative hover:font-bold hover:text-[#d4eaff] before:content-['▶'] before:absolute before:left-0 hover:before:text-white">
                Accepted CVs
              </Link>
            </li>
          </ul>
        </aside>

        {/* Content */}
        <section className="flex-1 p-10 flex justify-center items-start">
          <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-6xl transition">
            <h2 className="text-2xl font-bold text-[#003366] mb-6">Received CVs</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-[#0052a0] text-white">
                  <tr>
                    <th className="py-4 px-5 text-left rounded-tl-xl">Job Title</th>
                    <th className="py-4 px-5 text-left">Name</th>
                    <th className="py-4 px-5 text-left">Gender</th>
                    <th className="py-4 px-5 text-left">Field</th>
                    <th className="py-4 px-5 text-left">Contact Number</th>
                    <th className="py-4 px-5 text-left rounded-tr-xl">CV</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#f5f7fa]">
                    <td className="py-3 px-5">Software</td>
                    <td className="py-3 px-5">Dinith</td>
                    <td className="py-3 px-5">Male</td>
                    <td className="py-3 px-5">IT</td>
                    <td className="py-3 px-5">074 3231211</td>
                    <td className="py-3 px-5">dinith.pdf</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-5">Telecom</td>
                    <td className="py-3 px-5">Dilshara</td>
                    <td className="py-3 px-5">Male</td>
                    <td className="py-3 px-5">IT</td>
                    <td className="py-3 px-5">074 3231211</td>
                    <td className="py-3 px-5">dilshara.pdf</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReceivedCVs;
