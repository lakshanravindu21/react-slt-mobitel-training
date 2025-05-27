import React from 'react';
import { Link } from 'react-router-dom';
import SLTLogo from '../assets/images/1.png';
import bgImage from '../assets/images/15.avif';

const UserJobs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Header */}
      <header className="w-full px-4 mt-6">
        <div className="bg-white/95 shadow-xl py-3 px-6 rounded-full w-full flex justify-between items-center flex-wrap gap-6 transition-all duration-300">
          <div className="flex items-center">
            <img src={SLTLogo} alt="SLT Logo" className="h-16" />
            <h1 className="ml-4 text-2xl md:text-3xl font-bold text-[#0055A2]">
              Training Program
            </h1>
          </div>
          <nav className="flex flex-wrap gap-6 font-semibold text-lg text-black transition-all duration-300">
            <Link to="/appliedJob" className="hover:text-blue-700 transition-all">Job Status</Link>
            <Link to="/apply" className="hover:text-blue-700 transition-all">Apply for Job</Link>
            <Link to="/acceptedcv" className="hover:text-blue-700 transition-all">Jobs for You</Link>
            <Link to="/" className="hover:text-blue-700 transition-all">Home</Link>
            <Link to="/login" className="hover:text-blue-700 transition-all">Login</Link>
          </nav>
        </div>
      </header>

      {/* Section Title */}
      <div className="pt-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#00BFFF] drop-shadow-md">
          Find your job that is prefer for you
        </h2>
      </div>

      {/* Job Cards (Balanced Grid Layout) */}
      <main className="mt-12 px-6 md:px-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {jobData.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-2xl w-80 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-[#003B73] text-white text-center font-bold text-lg py-4 rounded-t-2xl">
                {job.title}
              </div>
              <div className="p-4 text-sm text-gray-700 h-[300px] overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                <p className="mb-3 text-justify">{job.description}</p>
                <ul className="list-disc list-inside space-y-1">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 text-center">
                <Link to="/apply">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-200">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Job Status Button */}
      <div className="py-12 text-center">
        <Link to="/appliedJob">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300">
            Check Applied Job Status
          </button>
        </Link>
      </div>
    </div>
  );
};

const jobData = [
  {
    title: 'Trainee Network Engineers',
    description:
      'We are hiring new training network engineers for SLTMobitel. Only an associate degree, a bachelor’s degree in computer science, information technology, computer engineering, or a related field undergraduates (3rd year, 4th year), and fresh graduates are preferred.',
    requirements: [
      'No job experiences are needed.',
      'Networking knowledge.',
      'Operating systems knowledge.',
      'Network devices and security knowledge.',
      'Networking device configuration knowledge.',
    ],
  },
  {
    title: 'Accountant - Financial Accounting',
    description:
      'Sri Lanka Telecom is in search of high caliber, result-oriented and qualified individuals. You will collaborate with subsidiaries and departments to implement operational controls.',
    requirements: [
      'Associate Membership of ICA/CIMA/ACCA',
      'Preference to prize winners.',
      'Excellent communication and leadership skills.',
    ],
  },
  {
    title: 'Engineers',
    description:
      'As an Engineer of the pioneering ICT solutions provider, you will be part of our team, planning, designing, operating and maintaining ICT infrastructure.',
    requirements: [
      'Four-year ICT related degree.',
      'Associate Member of IESL.',
      'Knowledge of cloud, data center, and security is an advantage.',
    ],
  },
  {
    title: 'Technicians',
    description:
      'Technicians install, maintain and repair electronic communications equipment in telecommunication networks. Examine equipment and systems to find and repair faults.',
    requirements: [
      '6 O/L passes + English + Math.',
      'Level 4 technical certification.',
      'Repair and fault diagnosis skills.',
    ],
  },
];

export default UserJobs;
