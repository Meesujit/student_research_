import React from 'react';


function SRSCard({ title, description, buttonText, imageUrl }) {
  return (
    <div className="srs-card">
      <div className="srs-card-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="overlay">
          <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="apply-btn">{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SRSCard;
