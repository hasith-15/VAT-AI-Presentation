import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  return (
    <div style={{ position: 'relative', width: '150px', height: '150px', margin: '0 auto 2rem auto', perspective: '1000px' }}>
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          transformStyle: 'preserve-3d',
        }}
      >
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'url(/logo.png) no-repeat center center',
          backgroundSize: 'contain',
          filter: 'drop-shadow(0 0 15px var(--primary))'
        }}>
          {/* Fallback styling in case image is missing */}
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 10px var(--primary))' }}>
             <path d="M50 10 L90 50 L10 50 Z" fill="transparent" stroke="var(--primary)" strokeWidth="4" />
             <path d="M25 50 L75 50 L50 90 Z" fill="var(--primary)" />
          </svg>
        </div>
      </motion.div>
      <motion.div
        animate={{ scaleX: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '-50%',
          width: '200%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
          zIndex: -1
        }}
      />
    </div>
  );
};

const Slide1 = () => {
  return (
    <div className='layout-center-hero'>
      <AnimatedLogo />
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        VAT-AI
      </motion.h1>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        "Gives Wings to Businesses"
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{ fontSize: '1.5rem', color: 'var(--accent)', fontWeight: 'bold' }}
      >
        AI Call Automation Solutions
      </motion.p>
      
      <div style={{ width: '50px', height: '2px', background: 'var(--primary)', margin: '2rem auto' }} />
      
    </div>
  );
};

export default Slide1;
