import React from 'react';
import srsData from '../data/srsData';

function Achievements() {
  return (
    <section className="section">
      <h2>Achievements</h2>
      <ul>
        {srsData.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
