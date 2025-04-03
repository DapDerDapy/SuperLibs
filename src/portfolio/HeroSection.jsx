// src/portfolio/HeroSection.jsx
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => (
  <section className="hero-section">
    <motion.div 
      className="hero-text"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1.5 }}
    >
      <h1>Hey there! I'm Daniel.</h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Scroll to learn more about me and my work.
      </motion.p>
    </motion.div>
  </section>
);

export default HeroSection;
