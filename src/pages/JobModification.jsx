import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import sltLogo from "../assets/images/slt logo.png";
import searchIcon from "../assets/images/search.png";

const JobModification = () => {
  const handleEdit = (jobId) => {
    console.log(`Edit job: ${jobId}`);
  };

  const handleDelete = (jobId) => {
    console.log(`Delete job: ${jobId}`);
  };

  const jobs = [
    { id: "IT", field: "QA Trainee", date: "2023/10/14", status: "Rejected" },
    { id: "HR", field: "HR Trainee", date: "2023/09/11", status: "Accepted" },
    { id: "Finance", field: "Accountant", date: "2023/08/16", status: "Rejected" },
    { id: "IT", field: "Web Developer", date: "2023/08/02", status: "Accepted" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f9fbfc]">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center rounded-b-3xl border-b">
        <div className="flex items-center gap-4">
          <img src={sltLogo} alt="SLT-MOBITEL Logo" className="h-10" />
          <span className="text-xl font-bold text-[#0066b3]">Training Program</span>
        </div>
        <div className="space-x-6">
          <Link to="/" className="text-black font-medium hover:bg-[#0066b3] hover:text-white px-4 py-2 rounded transition">
            Home
          </Link>
          <Link to="#" className="text-black font-medium hover:bg-[#0066b3] hover:text-white px-4 py-2 rounded transition">
            Logout
          </Link>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-[#0052a0] w-56 py-8 px-4 text-white min-h-screen">
          <ul className="space-y-6">
            <li>
              <Link
                to="/jobcreation"
                className="block pl-4 hover:text-yellow-400 relative before:content-['▶'] before:absolute before:left-0"
              >
                Job Creation
              </Link>
            </li>
            <li className="text-yellow-400 font-bold">
              <Link
                to="/jobmodification"
                className="block pl-4 relative before:content-['▶'] before:absolute before:left-0"
              >
                Job Modification
              </Link>
            </li>
            <li>
              <Link
                to="/received"
                className="block pl-4 hover:text-yellow-400 relative before:hover:content-['▶'] before:absolute before:left-0"
              >
                Received CVs
              </Link>
            </li>
            <li>
              <Link
                to="/acceptedcv"
                className="block pl-4 hover:text-yellow-400 relative before:hover:content-['▶'] before:absolute before:left-0"
              >
                Accepted CVs
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-6 relative flex flex-col items-center">
          {/* Search Box */}
          <div className="absolute top-6 right-10 bg-white border border-gray-300 rounded-full shadow-inner flex items-center px-4 py-1">
            <input
              type="text"
              placeholder="Search"
              className="outline-none border-none text-sm px-2 py-1 w-44"
            />
            <button>
              <img src={searchIcon} alt="Search" className="w-5" />
            </button>
          </div>

          {/* Job Modification Table */}
          <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-8 mt-20 hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-[#0052a0] text-center mb-6">Modify Jobs</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-[#0052a0] text-white">
                  <tr>
                    <th className="rounded-tl-2xl px-6 py-3">Job ID</th>
                    <th className="px-6 py-3">Job Field</th>
                    <th className="px-6 py-3">Created Date</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="rounded-tr-2xl px-6 py-3">Modification</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-[#f5f7fa]" : "bg-white"}>
                      <td className="px-6 py-4">{job.id}</td>
                      <td className="px-6 py-4">{job.field}</td>
                      <td className="px-6 py-4">{job.date}</td>
                      <td className="px-6 py-4">{job.status}</td>
                      <td className="px-6 py-4 flex space-x-4">
                        <button
                          onClick={() => handleEdit(job.id)}
                          className="text-[#0052a0] hover:text-[#003f7d] text-lg"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(job.id)}
                          className="text-[#0052a0] hover:text-[#003f7d] text-lg"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobModification;
