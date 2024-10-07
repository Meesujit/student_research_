import React from 'react';
import srsData from '../data/srsData';

function ContactDetails() {
  return (
    <section className="section">
      <h2>Contact Us</h2>
      <p>Email: {srsData.contactDetails.email}</p>
      <p>Location: {srsData.contactDetails.location}</p>
    </section>
  );
}

export default ContactDetails;
