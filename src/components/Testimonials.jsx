import React from 'react';
import '../styles/testimonials.css';  // Importing CSS

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: 'Alice Green', feedback: 'Vinod’s design brought our website to life! Beautiful, functional, and eco-friendly.' },
    { id: 2, name: 'Bob Brown', feedback: 'Professional and talented. Vinod’s attention to detail is impressive.' },
    { id: 3, name: 'Charlie Wood', feedback: 'I love the organic feel of my new website. Highly recommend!' },
  ];

  return (
    <div className="testimonials">
      <h3>What Clients Are Saying</h3>
      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
