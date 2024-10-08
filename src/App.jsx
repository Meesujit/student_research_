import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import ResearchGroups from './pages/ResearchGroups';
import Achievements from './pages/Achievements';
import Collaborators from './pages/Collaborators';
import Facilities from './pages/Facilities';
import NewsEvents from './pages/NewsEvents';
import ContactDetails from './pages/ContactDetails';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/research-groups" element={<ResearchGroups />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/collaborators" element={<Collaborators />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/contact" element={<ContactDetails />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
