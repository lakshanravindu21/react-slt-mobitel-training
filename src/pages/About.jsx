import React from 'react';
import { Link } from 'react-router-dom';
import sltLogo from '../assets/images/slt.png';
import aboutImage from '../assets/images/about.png';


const About = () => {
  return (
    <div className="bg-[#F4F8FB] min-h-screen font-['Inter']">
      {/* Navbar */}
      <header className="w-[98%] mx-auto mt-6 h-[88px] rounded-[35px] flex items-center justify-between px-6 bg-white shadow-md relative z-50">
        <div className="flex items-center">
          <img src={sltLogo} alt="SLT Logo" className="w-[100px] mr-5" />
          <h1 className="text-[28px] font-bold text-[#0055A2] font-['Montserrat']">Training Program</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-4 text-[20px] font-medium">
  <Link to="/" className="text-black hover:text-blue-600">Home</Link>
  <span>|</span>
  <Link to="/about" className="text-black hover:text-blue-600">About Us</Link>
  <span>|</span>
  <Link to="/UserJobs" className="text-black hover:text-blue-600">Vacancies</Link>
  <span>|</span>
  <Link to="/login" className="text-black hover:text-blue-600">Login</Link>
</nav>

      </header>

      {/* About Us Section */}
      <section className="flex flex-wrap justify-between items-start px-[5%] py-12 gap-8 bg-white rounded-[20px] shadow-lg mx-auto mt-8 max-w-[1400px]">
        <div className="flex-1 min-w-[300px] max-w-[600px]">
          <h2 className="text-[48px] font-bold text-[#0055A2] font-['Lato'] mb-6">About Us</h2>
          <p className="text-[20px] text-justify font-['Lato'] mb-8">
            Welcome to <strong>SLT-Mobitel</strong>, where technology meets innovation. Established as Sri Lanka's premier telecommunications service provider, we are dedicated to delivering reliable, high-speed connectivity and cutting-edge solutions. Our mission is to empower individuals, businesses, and communities through seamless communication and digital transformation. With a passionate team of technology experts, we continuously push the boundaries to connect Sri Lanka to the world, fostering a smarter and more connected future. Join us as we shape the next generation of digital experiences.
          </p>
          <button className="bg-[#0055A2] text-white rounded-full py-3 px-10 text-[20px] font-bold hover:bg-[#003B73] hover:scale-105 transition-all duration-300">
            Learn more
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center min-w-[300px]">
          <img
            src={aboutImage}
            alt="Team"
            className="rounded-xl max-w-[600px] w-full shadow-md hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
