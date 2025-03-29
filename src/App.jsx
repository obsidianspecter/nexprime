import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MeetOurFamily from './pages/MeetOurFamily';
import TeamMemberProfile from './pages/TeamMemberProfile';
import GenerativeAI from './pages/services/GenerativeAI';
import WebDevelopment from './pages/services/WebDevelopment';
import MLDeepLearning from './pages/services/MLDeepLearning';
import MobileDevelopment from './pages/services/MobileDevelopment';
import DatabaseSolutions from './pages/services/DatabaseSolutions';
import CloudInfrastructure from './pages/services/CloudInfrastructure';
import './styles.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/meet-our-family" element={<MeetOurFamily />} />
        <Route path="/team/:id" element={<TeamMemberProfile />} />
        <Route path="/services/generative-ai" element={<GenerativeAI />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ml-deep-learning" element={<MLDeepLearning />} />
        <Route path="/services/mobile-development" element={<MobileDevelopment />} />
        <Route path="/services/database-solutions" element={<DatabaseSolutions />} />
        <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;