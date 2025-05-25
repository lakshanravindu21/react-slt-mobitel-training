import React, { useState } from 'react';
import logo from '../assets/images/1.png';
import background from '../assets/images/15.avif';

const ApplyJob = () => {
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <header className="w-full px-6 md:px-16 mt-4">
        <div className="max-w-[1600px] mx-auto bg-white rounded-full px-8 py-4 shadow-md flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="SLT Logo" className="h-14" />
            <h1 className="text-2xl font-bold text-[#0055A2]">Training Program</h1>
          </div>
          <nav className="flex flex-wrap gap-8 text-[16px] font-semibold text-gray-700">
            <a href="/appliedjob" className="hover:text-blue-600">Job status</a>
            <a href="/applyjob" className="hover:text-blue-600 text-blue-800">Apply for job</a>
            <a href="/userjobs" className="hover:text-blue-600">Jobs for you</a>
            <a href="/home" className="hover:text-blue-600">Home</a>
            <a href="/login" className="hover:text-blue-600">Login</a>
          </nav>
        </div>
      </header>

      <div className="w-full max-w-4xl mx-auto mt-12 bg-white p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md">
        <form>
          <h2 className="text-lg md:text-xl font-semibold mb-6">
            Job Title: <span className="font-normal text-gray-700">Web Development Trainee</span>
          </h2>

          <label className="block mb-4 text-sm font-medium">
            Name with Initials:
            <input type="text" name="initials" required className="mt-2 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </label>

          <label className="block mb-4 text-sm font-medium">
            Full Name:
            <input type="text" name="fullname" required className="mt-2 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </label>

          <label className="block mb-4 text-sm font-medium">
            Gender:
            <select name="gender" required className="mt-2 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="" disabled selected>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="block mb-4 text-sm font-medium">
            Date of Birth:
            <input type="date" name="dob" required className="mt-2 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </label>

          <label className="block mb-4 text-sm font-medium">
            Email:
            <input type="email" name="email" required className="mt-2 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </label>

          <label className="block mb-4 text-sm font-medium">
            Contact Number:
            <input type="tel" name="contact" required className="mt-2 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </label>

          <label className="block mb-4 text-sm font-medium">
            Field:
            <select name="field" required className="mt-2 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="" disabled selected>Select Field</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
            </select>
          </label>

          <div className="upload-section my-8">
            <label className="block mb-2 text-sm font-medium">Upload your CV here</label>
            <div className="border-2 border-dashed border-gray-300 p-8 text-center rounded-lg bg-gray-50 text-gray-600">
              <p className="text-sm mb-2">Drag & Drop files here</p>
              <span className="block text-sm text-gray-500 mb-2">or</span>
              <label className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-md cursor-pointer hover:bg-blue-200">
                Browse Files
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <p className="mt-2 text-sm text-gray-700">{fileName}</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
