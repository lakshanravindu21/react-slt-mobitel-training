import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import sltLogo from '../assets/images/slt.png';
import mobitelImage from '../assets/images/mobitelimage.png';
import fbIcon from '../assets/images/10.png';
import twIcon from '../assets/images/11.png';
import igIcon from '../assets/images/12.png';
import liIcon from '../assets/images/13.png';
import ytIcon from '../assets/images/14.png';
import appIcon from '../assets/images/15.png';

const jobList = [
  {
    title: "Trainee Network Engineers",
    description:
      "We are hiring new training network engineers for SLTMobitel. Only an associate degree, a bachelor’s degree in computer science, information technology, computer engineering, or a related field undergraduates (3rd year, 4th year), and fresh graduates are preferred.",
    points: [
      "No job experiences are needed.",
      "Networking knowledge.",
      "Operating systems knowledge.",
      "Network devices and security knowledge.",
      "Networking device configuration knowledge.",
    ],
  },
  {
    title: "Accountant - Financial Accounting",
    description:
      "Sri Lanka Telecom is in search of high caliber, result-oriented and qualified individuals capable of playing a key role in the finance team. You will be engaged in a range of tasks in financial accounting in a highly IT-backed work environment and expected to collaborate with subsidiary companies and cross-functional departments to implement key business drivers and operational controls.",
    points: [
      "Associate Membership of ICA/CIMA/ACCA",
      "Preference will be given to the candidates who are prize winners.",
      "Be a resilient leader with excellent interpersonal and communication skills.",
    ],
  },
  {
    title: "Engineers",
    description:
      "As an Engineer of the pioneering ICT solutions provider, you will be a distinguished member of our team, which is mainly responsible for planning, designing, operating and maintaining our state-of-the-art ICT infrastructure.",
    points: [
      "Four-year Degree in BSc Engineering/ Bachelor of Technology from a University/Institute recognized by UGC - Sri Lanka and Institute of Engineers - Sri Lanka, equivalent to SLQF 6. OR",
      "Associate Member of the Institute of Engineers, Sri Lanka.",
      "Thorough knowledge and experience in the field of Data Centre Network Security/IDC Storage Systems/ Hybrid Cloud Deployment & Management and the area of IT & Digital Platforms would be a definite advantage.",
    ],
  },
  {
    title: "Technicians",
    description:
      "Technicians are mainly responsible to install, maintain and repair electronic communications equipment in telecommunication networks and internet supply systems. Examine telecommunications equipment and systems to find and repair faults.",
    points: [
      "06 passes at the G.C.E. (O/L) exam including Sinhala Tamil and English Language and Mathematics and 03 credit passes in one sitting AND",
      "Should have obtained Skilled Competence Certificate - NAITA in the relevant field equivalent to NVQ Level 4 (Telecommunication / Electrical/Electronic/ ICT/Power / Air Conditioning etc).",
    ],
  },
];

const Home = () => {
  return (
    <div className="font-sans text-[#0E1338] bg-white">
      {/* Hero image */}
      <div className="relative">
        <div
          className="h-[450px] w-full bg-cover bg-center rounded-b-3xl"
          style={{ backgroundImage: `url(${mobitelImage})` }}
        ></div>
        <header className="absolute top-0 left-0 right-0 flex justify-between items-center bg-white px-6 py-2 max-w-[1500px] mx-auto rounded-[20px] shadow-md flex-wrap mt-3">
          <div className="flex items-center gap-4">
            <img src={sltLogo} alt="SLT Logo" className="h-[55px]" />
            <h1 className="text-lg font-bold text-[#0055A2]">Training Program</h1>
          </div>
          <nav className="flex gap-5 font-semibold flex-wrap text-sm">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about" className="hover:text-blue-600">About Us</Link>
            <Link to="/UserJobs" className="hover:text-blue-600">Vacancies</Link>
            <Link to="/login" className="hover:text-blue-600">Login</Link>
          </nav>
        </header>
      </div>

      {/* Job Cards */}
      <main className="flex flex-wrap justify-center gap-8 max-w-[1500px] mx-auto py-16 px-6">
        {jobList.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-[48%] lg:w-[23%] p-5 border border-gray-200 flex flex-col"
          >
            <div className="bg-[#003B73] text-white text-center font-bold text-base py-2 rounded-xl mb-3 shadow-sm">
              {job.title}
            </div>
            <p className="text-sm text-gray-800 mb-3 leading-relaxed text-justify">
              {job.description}
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 mb-4">
              {job.points.map((point, idx) => (
                <li key={idx} className="leading-snug">{point}</li>
              ))}
            </ul>
            <div className="mt-auto text-center">
              <button className="bg-gradient-to-r from-[#0055A2] to-[#00C6FF] text-white font-medium rounded-full px-5 py-2 text-sm shadow-md hover:shadow-lg hover:scale-105 transition duration-200 w-full">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-100 to-gray-300 px-4 py-10 rounded-t-3xl">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between gap-10">
          <div>
            <h4 className="text-lg font-semibold mb-3">ABOUT US</h4>
            <a href="#" className="block text-sm text-gray-700 hover:text-blue-500">Corporate Responsibility</a>
            <a href="#" className="block text-sm text-gray-700 hover:text-blue-500">Investors</a>
            <a href="#" className="block text-sm text-gray-700 hover:text-blue-500">Media Center</a>
            <a href="#" className="block text-sm text-gray-700 hover:text-blue-500">Careers</a>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">BUSINESS</h4>
            <a href="#" className="block text-sm text-gray-700 hover:text-blue-500">Enterprises</a>
            <a href="#" className="block text-sm text-gray-700 hover:text-blue-500">SME</a>
            <a href="#" className="block text-sm text-gray-700 hover:text-blue-500">Wholesale</a>
            <a href="#" className="block text-sm text-gray-700 hover:text-blue-500">International</a>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">CONTACT US</h4>
            <p className="text-sm text-gray-800">Sri Lanka Telecom PLC<br />Lotus Road, Colombo 01</p>
            <p className="text-sm">Tel: +94 112 021 000</p>
            <p className="text-sm">Email: pr@slt.lk</p>
            <p className="text-sm">Mon - Fri: 9am to 5pm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">CUSTOMER SUPPORT</h4>
            <p className="text-sm">Telephone: 1212</p>
            <p className="text-sm">Email: 1212@slt.com.lk</p>
            <p className="text-sm">Self Service: +94 112 12 12 12</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap mt-6">
            <img src={fbIcon} alt="Facebook" className="w-7 h-7" />
            <img src={twIcon} alt="Twitter" className="w-7 h-7" />
            <img src={igIcon} alt="Instagram" className="w-7 h-7" />
            <img src={liIcon} alt="LinkedIn" className="w-7 h-7" />
            <img src={ytIcon} alt="YouTube" className="w-7 h-7" />
            <img src={appIcon} alt="App Store" className="w-7 h-7" />
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-700">
          © 2025 Sri Lanka Telecom PLC
        </div>
      </footer>
    </div>
  );
};

export default Home;
