import React from 'react';
import srsData from '../data/srsData';

function Facilities() {
  return (
    <section className="section">
      <h2>Facilities/Structure</h2>
      <p>{srsData.facilities}</p>
    </section>
  );
}

export default Facilities;
