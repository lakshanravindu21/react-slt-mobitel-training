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
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex flex-col items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Header */}
      <header className="w-[98%] max-w-[1700px] mt-4 bg-white/90 backdrop-blur-md shadow-xl rounded-3xl px-6 md:px-10 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="SLT Logo" className="h-12" />
            <h1 className="text-lg sm:text-xl font-bold text-[#0055A2]">
              Training Program
            </h1>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-[16px] sm:text-lg font-semibold text-gray-800">
            <a href="/appliedjob" className="hover:text-blue-600 transition">Job Status</a>
            <a href="/applyjob" className="text-blue-700 font-bold">Apply for Job</a>
            <a href="/acceptedcv" className="hover:text-blue-600 transition">Jobs for You</a>
            <a href="/home" className="hover:text-blue-600 transition">Home</a>
            <a href="/login" className="hover:text-blue-600 transition">Login</a>
          </nav>
        </div>
      </header>

      {/* Form Section */}
      <div className="w-[95%] max-w-4xl mx-auto mt-12 bg-white/90 backdrop-blur-lg p-6 sm:p-10 rounded-3xl shadow-2xl">
        <form>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
            Apply for Web Development Trainee
          </h2>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Name with Initials:</label>
              <input type="text" name="initials" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Full Name:</label>
              <input type="text" name="fullname" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Gender:</label>
              <select name="gender" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500">
                <option value="" disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Date of Birth:</label>
              <input type="date" name="dob" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Email:</label>
              <input type="email" name="email" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Contact Number:</label>
              <input type="tel" name="contact" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-gray-700">Field:</label>
              <select name="field" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500">
                <option value="" disabled selected>Select Field</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Fullstack</option>
              </select>
            </div>
          </div>

          {/* Upload CV */}
          <div className="my-8">
            <label className="block mb-3 font-medium text-gray-700">Upload your CV</label>
            <div className="border-2 border-dashed border-gray-300 p-6 sm:p-8 rounded-xl bg-gray-50 text-center text-gray-600">
              <p className="text-sm mb-2">Drag & Drop your CV here</p>
              <span className="block text-sm text-gray-500 mb-3">or</span>
              <label className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-md cursor-pointer hover:bg-blue-200">
                Browse Files
                <input type="file" onChange={handleFileChange} className="hidden" />
              </label>
              <p className="mt-2 text-sm text-gray-800 font-medium">{fileName}</p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-900 transition text-lg shadow-lg"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
