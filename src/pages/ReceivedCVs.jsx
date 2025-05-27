import React from "react";
import { Link } from "react-router-dom";
import sltLogo from "../assets/images/slt.png";

const ReceivedCVs = () => {
  return (
    <div className="min-h-screen bg-[#f1f6fb] flex flex-col">
      {/* Header */}
      <header className="bg-white px-4 sm:px-6 py-4 flex flex-wrap sm:flex-nowrap justify-between items-center shadow-md rounded-b-[30px]">
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <img src={sltLogo} alt="SLT-MOBITEL Logo" className="h-8 sm:h-12" />
          <span className="text-[#0066b3] font-bold text-lg sm:text-xl whitespace-nowrap">
            Training Program
          </span>
        </div>
        <div className="flex gap-2 sm:gap-4 mt-3 sm:mt-0 flex-wrap justify-center sm:justify-start w-full sm:w-auto">
          <Link
            to="/"
            className="text-black font-semibold text-xs sm:text-sm hover:bg-[#0074e8] hover:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-black font-semibold text-xs sm:text-sm hover:bg-[#0074e8] hover:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition whitespace-nowrap"
          >
            Logout
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 flex-col sm:flex-row">
        {/* Sidebar */}
        <aside className="w-full sm:w-56 bg-[#0052a0] py-6 sm:py-8 px-4 sm:px-3 min-h-[auto] sm:min-h-screen overflow-x-auto">
          <ul className="space-y-4 sm:space-y-6 text-sm sm:text-base min-w-[220px]">
            <li>
              <Link
                to="/jobcreation"
                className="text-white pl-5 relative hover:font-bold hover:text-[#d4eaff] before:content-['▶'] before:absolute before:left-0 hover:before:text-white"
              >
                Job Creation
              </Link>
            </li>
            <li>
              <Link
                to="/jobmodification"
                className="text-white pl-5 relative hover:font-bold hover:text-[#d4eaff] before:content-['▶'] before:absolute before:left-0 hover:before:text-white"
              >
                Job Modification
              </Link>
            </li>
            <li className="text-white font-bold relative before:content-['▶'] before:absolute before:left-0 before:text-white">
              <Link to="/received-cvs" className="pl-5">
                Received CVs
              </Link>
            </li>
            <li>
              <Link
                to="/acceptedcv"
                className="text-white pl-5 relative hover:font-bold hover:text-[#d4eaff] before:content-['▶'] before:absolute before:left-0 hover:before:text-white"
              >
                Accepted CVs
              </Link>
            </li>
          </ul>
        </aside>

        {/* Content */}
        <section className="flex-1 p-4 sm:p-10 flex justify-center items-start overflow-x-auto">
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg w-full max-w-full sm:max-w-6xl transition">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mb-6 text-center sm:text-left">
              Received CVs
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[600px] sm:min-w-full">
                <thead className="bg-[#0052a0] text-white">
                  <tr>
                    <th className="py-3 px-3 sm:py-4 sm:px-5 text-left rounded-tl-xl whitespace-nowrap">Job Title</th>
                    <th className="py-3 px-3 sm:py-4 sm:px-5 text-left whitespace-nowrap">Name</th>
                    <th className="py-3 px-3 sm:py-4 sm:px-5 text-left whitespace-nowrap">Gender</th>
                    <th className="py-3 px-3 sm:py-4 sm:px-5 text-left whitespace-nowrap">Field</th>
                    <th className="py-3 px-3 sm:py-4 sm:px-5 text-left whitespace-nowrap">Contact Number</th>
                    <th className="py-3 px-3 sm:py-4 sm:px-5 text-left rounded-tr-xl whitespace-nowrap">CV</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#f5f7fa]">
                    <td className="py-2 px-3 sm:py-3 sm:px-5">Software</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-5">Dinith</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-5">Male</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-5">IT</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-5">074 3231211</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-5">dinith.pdf</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2 px-3 sm:py-3 sm:px-5">Telecom</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-5">Dilshara</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-5">Male</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-5">IT</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-5">074 3231211</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-5">dilshara.pdf</td>
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
