import React from 'react';
import srsData from '../data/srsData';

function ResearchGroups() {
  return (
    <section className="section">
      <h2>Research Groups</h2>
      <ul>
        {srsData.researchGroups.map((group, index) => (
          <li key={index}>{group}</li>
        ))}
      </ul>
    </section>
  );
}

export default ResearchGroups;
