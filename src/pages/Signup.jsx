import React, { useState } from 'react';
import signupImg from '../assets/images/signup.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const { userId, name, password, confirmPassword } = formData;
    if (!userId || !name || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Submit logic (you can integrate with backend later)
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({
      userId: '',
      name: '',
      password: '',
      confirmPassword: '',
    });
    setError('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-wrap bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-6xl">
        {/* Left Image */}
        <div className="flex-1 min-w-[300px] p-4 flex justify-center items-center">
          <img
            src={signupImg}
            alt="signup illustration"
            className="w-full max-w-lg rounded-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-[#0053A0] text-white p-10 flex flex-col justify-center items-center min-w-[320px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Create Your Account</h2>
          {error && <div className="mb-4 text-red-300 text-sm">{error}</div>}
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">
            <div className="mb-5 w-full">
              <label className="block mb-2 text-base">User ID</label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                placeholder="Enter User ID"
                className="w-full px-5 py-3 rounded-full text-black text-base focus:outline-none"
              />
            </div>
            <div className="mb-5 w-full">
              <label className="block mb-2 text-base">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="w-full px-5 py-3 rounded-full text-black text-base focus:outline-none"
              />
            </div>
            <div className="mb-5 w-full relative">
              <label className="block mb-2 text-base">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full px-5 py-3 rounded-full text-black text-base focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[50%] translate-y-[-50%] text-sm text-blue-100"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className="mb-5 w-full">
              <label className="block mb-2 text-base">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-5 py-3 rounded-full text-black text-base focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-2/5 py-3 rounded-full bg-white text-[#0053A0] font-semibold text-base hover:bg-gray-200 hover:scale-105 transition-transform duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
