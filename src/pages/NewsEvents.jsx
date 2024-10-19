import React from 'react';


function NewsEvents() {
  return (
    <section className="floating-hero">
            <div className="floating-hero-content">
                <h1>Communicate Better</h1>
                <p>Clarity gives you the blocks & components you need to create a truly professional website.</p>
                <button className="floating-cta-button">Start Our 14 Days Free Trial</button>
                <div className="floating-video-intro">
                    <span className="floating-play-icon">▶</span> Watch 1 min intro
                </div>
            </div>

            <div className="floating-avatar-grid">
                <div className="floating-avatar-item floating-avatar-1">
                    <img src="avatar1.jpg" alt="Albert Flores" />
                    <div className="floating-avatar-label">Albert Flores <span>Product Team Lead</span></div>
                </div>
                <div className="floating-avatar-item floating-avatar-2">
                    <img src="avatar2.jpg" alt="Jacob Jones" />
                    <div className="floating-avatar-label">Jacob Jones <span>UX Designer</span></div>
                </div>
                <div className="floating-avatar-item floating-avatar-3">
                    <img src="avatar3.jpg" alt="Ralph Edwards" />
                    <div className="floating-avatar-label">Ralph Edwards <span>Front-end Developer</span></div>
                </div>
                <div className="floating-avatar-item floating-avatar-4">
                    <img src="avatar4.jpg" alt="Jane Cooper" />
                    <div className="floating-avatar-label">Jane Cooper <span>Account Manager</span></div>
                </div>
                <div className="floating-avatar-item floating-avatar-5">
                    <img src="avatar5.jpg" alt="John Doe" />
                    <div className="floating-avatar-label">John Doe <span>Team Member</span></div>
                </div>
            </div>
        </section>
  );
}

export default NewsEvents;
