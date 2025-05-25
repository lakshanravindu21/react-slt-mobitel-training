import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/images/google.png';
import facebookIcon from '../assets/images/facebook.png';
import loginImage from '../assets/images/login.png';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f5fd] p-6">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center gap-10 p-10 max-w-6xl w-full">
        {/* Login Box */}
        <div className="bg-[#0055A2] text-white rounded-3xl w-full lg:w-[504px] h-auto p-10 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold mb-6">Login</h2>
          <form className="w-full space-y-4">
            <div>
              <label className="block text-lg mb-1">Email address :</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full h-14 px-5 rounded-full text-black text-base outline-none"
              />
            </div>
            <div>
              <label className="block text-lg mb-1">Password :</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="w-full h-14 px-5 rounded-full text-black text-base outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full h-14 mt-2 bg-white text-[#0055A2] font-bold rounded-full hover:bg-[#003b73] hover:text-white transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up link */}
          <div className="text-sm mt-4">
            Don&apos;t have an account?
            <Link to="/signup" className="font-bold underline">Sign Up</Link>
          </div>

          {/* OR Divider */}
          <div className="relative my-6 w-full text-center">
            <span className="bg-[#0055A2] px-4 relative z-10">OR</span>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white z-0"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-5 justify-center">
            <img
              src={googleIcon}
              alt="Google Login"
              className="w-14 h-14 rounded-xl cursor-pointer hover:scale-110 transition-transform"
            />
            <img
              src={facebookIcon}
              alt="Facebook Login"
              className="w-14 h-14 rounded-xl cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>

        {/* Login Image */}
        <div className="w-full lg:w-auto">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="w-full max-w-md hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
