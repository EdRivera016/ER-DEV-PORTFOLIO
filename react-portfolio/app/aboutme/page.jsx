// app/aboutme/page.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me-section py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold mb-6">About Me</h1>
        <p className="text-lg mb-4">
          Hi, I'm Edwin Rivera, a Jr Full Stack Engineer passionate about creating seamless digital experiences.
          With a proficiency in multiple programming languages and technologies, I am looking to grow in the industry.
        </p>
        <ul className="info-list">
          <li><strong>Name:</strong> Edwin Rivera</li>
          <li><strong>Phone:</strong> (813)-454-4235</li>
          <li><strong>Experience:</strong> 6+ Months</li>
          <li><strong>Nationality:</strong> Puerto Rican</li>
          <li><strong>Email:</strong> edwinrivera016@outlook.com</li>
          <li><strong>Languages:</strong> English, Spanish</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
