import React from 'react';
import srsData from '../data/srsData'

function NewsEvents() {
  return (
    <section className="section">
      <h2>News/Events</h2>
      <ul>
        {srsData.newsEvents.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </section>
  );
}

export default NewsEvents;
