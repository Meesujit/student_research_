import React from 'react';
import srsData from '../data/srsData';

function About() {
  return (
    <section className="section">
      <h2>About Our SRS</h2>
      <p>{srsData.about}</p>
      <h3>Objective</h3>
      <p>{srsData.objective}</p>
      <h3>Rationale</h3>
      <p>{srsData.rationale}</p>
      <h3>Location</h3>
      <p>{srsData.location}</p>
    </section>
  );
}

export default About;
