import React from 'react';
import { Link } from 'react-router-dom';
import SLTLogo from '../assets/images/1.png';
import bgImage from '../assets/images/15.avif';

const AppliedJobStatus = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Wide & Rounded Navigation Bar */}
      <header className="w-[95%] mx-auto mt-4 bg-white/90 shadow-lg px-6 py-4 rounded-3xl">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <img src={SLTLogo} alt="SLT Logo" className="h-16" />
            <h1 className="ml-4 text-3xl font-bold text-[#0055A2]">Training Program</h1>
          </div>
          <nav className="flex flex-wrap gap-8 justify-center text-lg font-semibold text-gray-800">
            <Link to="/appliedJob" className="hover:text-blue-600 transition duration-200">Job Status</Link>
            <Link to="/apply" className="hover:text-blue-600 transition duration-200">Apply for Job</Link>
            <Link to="/jobcreation" className="hover:text-blue-600 transition duration-200">Jobs for You</Link>
            <Link to="/" className="hover:text-blue-600 transition duration-200">Home</Link>
            <Link to="/login" className="hover:text-blue-600 transition duration-200">Login</Link>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex justify-center items-start px-4 py-10">
        <div className="bg-white/95 p-10 rounded-3xl shadow-xl w-full max-w-6xl overflow-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Applied Job Status
          </h2>
          <table className="min-w-full border-collapse text-base text-left">
            <thead className="bg-[#004a99] text-white">
              <tr>
                <th className="px-6 py-4 rounded-tl-xl">Job Field</th>
                <th className="px-6 py-4">Job Position</th>
                <th className="px-6 py-4">Recommendation</th>
                <th className="px-6 py-4 rounded-tr-xl">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4">Software</td>
                <td className="px-6 py-4">Male</td>
                <td className="px-6 py-4">Approved yesterday</td>
                <td className="px-6 py-4 text-green-600 font-semibold">Approved</td>
              </tr>
              <tr className="bg-gray-100 border-b hover:bg-gray-200 transition">
                <td className="px-6 py-4">Telecommunication</td>
                <td className="px-6 py-4">Trainee</td>
                <td className="px-6 py-4">Rejected yesterday</td>
                <td className="px-6 py-4 text-red-600 font-semibold">Rejected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AppliedJobStatus;
