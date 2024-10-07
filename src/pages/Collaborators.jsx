import React from 'react';
import srsData from '../data/srsData';

function Collaborators() {
  return (
    <section className="section">
      <h2>Collaborators</h2>
      <p>{srsData.collaborators}</p>
    </section>
  );
}

export default Collaborators;
