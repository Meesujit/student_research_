import React from 'react';
import srsData from '../data/srsData';
import { heroImage, location, objective, relational, SRSstudent } from '../assets';
import SRSCard from '../components/SRSCard';
import Founder from '../components/Founder';
import CollaboratorsCarosoule from '../components/CollaboratorsCarosoule';
function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="hero-image-container">
            <img src={heroImage} alt="Student Research Society" className="hero-image" />
            <div className="overlay">
              <h1 className="hero-heading">Welcome to Student Research Society</h1>
              <p className="hero-paragraph">
                The Student Research Society (SRS) is dedicated to fostering innovation and research excellence
                among students. Our focus is on advanced fields like AI, Quantum Computing, Cloud Technologies, and more.
              </p>
            </div>
          </div>
          <div className='about-heading'>
            <h2>About Student Search Society</h2>
          </div>
          <div className="srs-cards-container">
            <SRSCard
              title="About SRS"
              description={srsData.about}
              buttonText="Learn More"
              imageUrl={SRSstudent}
            />
            <SRSCard
              title="Objective"
              description={srsData.objective}
              buttonText="Learn More"
              imageUrl={objective}
            />
            <SRSCard
              title="Rationale"
              description={srsData.rationale}
              buttonText="Learn More"
              imageUrl={relational}
            />
            <SRSCard
              title="Location"
              description={srsData.location}
              buttonText="Learn More"
              imageUrl={location}
            />
          </div>
        </div>
        <Founder />
        <CollaboratorsCarosoule />
      </section>      
    </>
  );
}

export default About;
