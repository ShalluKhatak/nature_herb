import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import { CheckMobileView } from '../util/util_functions'


const Home = () => {
  const navigate = useNavigate()
  const isMobile = CheckMobileView();
  console.log(isMobile);
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <h1>Embrace Nature’s Healing Power</h1>
        <p>
          Discover personalised herbal solutions, consult with top professionals, and
          get natural medicines delivered to your doorstep.
        </p>
        <div className="cta">
          <button className="primary" onClick={() => navigate('/signup')}>Get Started</button>
          <button className="secondary" onClick={() => navigate('/login')}>Login</button>
        </div>
          </section>

      {/* Features Grid */}
      {isMobile ? (
        <FeaturesCarousel />
      ) : (
        <section className="features">
          <div className="feature-card">
            <h3>Order Remedies</h3>
            <p>Easily browse and order organic, lab-tested herbal medicines for any health concern.</p>
          </div>
          <div className="feature-card">
          <h3>Book Appointments</h3>
          <p>Connect with certified naturopaths and Ayurveda experts for personalised care.</p>
        </div>
        <div className="feature-card">
          <h3>Tailored Prescriptions</h3>
          <p>Receive customised medicine plans prepared by our in-house pharmacists.</p>
        </div>
      </section>
      )}

      {/* Testimonial */}
      <section className="testimonial">
        <blockquote>
          “After switching to Nature Herb, my chronic migraine has reduced drastically.
          The team’s personalised approach is truly life-changing!”
        </blockquote>
        <cite>— Priya Sharma</cite>
      </section>

      {/* Footer */}
      <footer>
        © {new Date().getFullYear()} Nature Herb. All rights reserved.
      </footer>
    </main>
  )
}


export default Home




const features = [
  {
    title: 'Order Remedies',
    desc: 'Easily browse and order organic, lab-tested herbal medicines for any health concern.',
  },
  {
    title: 'Book Appointments',
    desc: 'Connect with certified naturopaths and Ayurveda experts for personalised care.',
  },
  {
    title: 'Tailored Prescriptions',
    desc: 'Receive customised medicine plans prepared by our in-house pharmacists.',
  },
];

const FeaturesCarousel = () => {
  const [current, setCurrent] = useState(0);
  return (
    <section className="features">
      <div className="feature-card">
        <h3>{features[current].title}</h3>
        <p>{features[current].desc}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
        {features.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              height: 10,
              width: 10,
              borderRadius: '50%',
              background: current === idx ? '#0f9d58' : '#ccc',
              margin: '0 4px',
              display: 'inline-block',
              cursor: 'pointer',
            }}
          ></span>
        ))}
      </div>
    </section>
  );
}


