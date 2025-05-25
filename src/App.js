import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserJobs from './pages/UserJobs';
import AppliedJobStatus from './pages/AppliedJobStatus';
import Apply from './pages/Apply';
import AcceptedCVs from "./pages/AcceptedCVs";
import JobCreation from './pages/JobCreation';
import JobModification from "./pages/JobModification";
import ReceivedCVs from "./pages/ReceivedCVs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} /> {/* ✅ Route for login */}
        <Route path="/signup" element={<Signup />} />
         <Route path="/userjobs" element={<UserJobs />} />
         <Route path="/appliedJob" element={<AppliedJobStatus />} />
         <Route path="/apply" element={<Apply />} />
         <Route path="/acceptedcv" element={<AcceptedCVs />} />
         <Route path="/jobcreation" element={<JobCreation />} />
         <Route path="/jobmodification" element={<JobModification />} />
         <Route path="/received" element={<ReceivedCVs />} />

      </Routes>
    </Router>
  );
}

export default App;
