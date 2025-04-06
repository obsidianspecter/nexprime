import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MeetOurFamily from './pages/MeetOurFamily';
import TeamMemberProfile from './pages/TeamMemberProfile';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import GenerativeAI from './pages/services/GenerativeAI';
import WebDevelopment from './pages/services/WebDevelopment';
import MLDeepLearning from './pages/services/MLDeepLearning';
import MobileDevelopment from './pages/services/MobileDevelopment';
import DatabaseSolutions from './pages/services/DatabaseSolutions';
import CloudInfrastructure from './pages/services/CloudInfrastructure';
import './styles.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ScrollToTop component to ensure the page scrolls to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/meet-our-family" element={<MeetOurFamily />} />
        <Route path="/team/:id" element={<TeamMemberProfile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
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