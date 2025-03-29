import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MeetOurFamily from './pages/MeetOurFamily';
import TeamMemberProfile from './pages/TeamMemberProfile';
import './styles.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/meet-our-family" element={<MeetOurFamily />} />
        <Route path="/team/:id" element={<TeamMemberProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;