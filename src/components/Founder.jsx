import React from 'react';
import { achyutaSamantaImage } from '../assets/index.js';

const Founder = () => {
    return (
        <div className="founder-section">
            <h2 className="founder-heading">Founder & Mentor</h2>
            <div className="founder-container">
                <img src={achyutaSamantaImage} alt="Achyuta Samanta" className="founder-image" />
                <div className="founder-content">
                    <h2>Achyuta Samanta</h2>
                    <p>
                        Achyuta Samanta is the founder of KIIT (Kalinga Institute of Industrial Technology) and KISS (Kalinga Institute of Social Sciences).
                        He is known for his contributions to education and social service in India, and his efforts have transformed the lives of many underprivileged children through education.
                    </p>
                    <p>
                        With a vision to make quality education accessible to all, Achyuta Samanta has established various initiatives aimed at empowering students and fostering a culture of research and innovation.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Founder;
