import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Student Research Society</h1>
      <nav>
        <ul>
          <li><Link to="/">About SRS</Link></li>
          <li><Link to="/research-groups">Research Groups</Link></li>
          <li><Link to="/achievements">Achievements</Link></li>
          <li><Link to="/facilities">Facilities</Link></li>
          <li><Link to="/news-events">News/Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
