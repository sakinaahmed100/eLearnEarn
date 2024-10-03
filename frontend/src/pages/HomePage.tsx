import React from 'react';
import '../styles/HomePage.css'; // Add your CSS file here
import HeroImage from "../assets/heroImage.jpeg" 
import image1 from "../assets/codeChallenge.jpeg"
import image2 from "../assets/professionals.jpeg"
import image3 from "../assets/acheivements.jpeg"

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to eLearnEarn</h1>
          <p>Your interactive platform for mastering coding skills.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className='hero-image-container'>
        <img 
          src={HeroImage}
          alt="Coding illustration" 
          className="hero-image"
        />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature">
          <img 
            src={image1} 
            alt="Interactive Learning" 
            className="feature-image"
          />
          <h3>Interactive Learning</h3>
          <p>Engage with coding challenges and interactive exercises designed to reinforce your skills.</p>
        </div>
        <div className="feature">
          <img 
            src={image2}
            alt="Expert Instructors" 
            className="feature-image"
          />
          <h3>Expert Instructors</h3>
          <p>Learn from industry professionals with real-world experience and insights.</p>
        </div>
        <div className="feature">
          <img 
            src={image3}
            alt="Certification" 
            className="feature-image"
          />
          <h3>Certification</h3>
          <p>Earn certificates upon completing courses and tests to showcase your achievements.</p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h2>Popular Courses</h2>
        <div className="course-card">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Course Image" 
            className="course-image"
          />
          <h3>Introduction to Python</h3>
          <p>A beginner-friendly course to get started with Python programming.</p>
          <button className="cta-button">Explore Course</button>
        </div>
        <div className="course-card">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Course Image" 
            className="course-image"
          />
          <h3>Advanced JavaScript</h3>
          <p>Enhance your JavaScript skills with advanced concepts and techniques.</p>
          <button className="cta-button">Explore Course</button>
        </div>
        {/* Add more courses as needed */}
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial">
          <p>"eLearnEarn transformed my coding skills. The interactive exercises are amazing!"</p>
          <p>- Alex Johnson</p>
        </div>
        <div className="testimonial">
          <p>"The expert instructors and comprehensive courses helped me land my dream job."</p>
          <p>- Jordan Lee</p>
        </div>
        {/* Add more testimonials as needed */}
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 eLearnEarn. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;



