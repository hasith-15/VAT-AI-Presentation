import React from 'react';
import { motion } from 'framer-motion';

const GlobeNetwork = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: '2px solid rgba(0, 229, 255, 0.2)',
          position: 'relative'
        }}
      >
        {/* Globe Lines */}
        <div style={{ position: 'absolute', top: 0, left: '50%', width: '2px', height: '100%', background: 'rgba(0, 229, 255, 0.2)' }} />
        <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '2px', background: 'rgba(0, 229, 255, 0.2)' }} />
        
        {/* Nodes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'var(--primary)',
              boxShadow: '0 0 10px var(--primary)',
              marginTop: '-5px',
              marginLeft: '-5px',
              transform: `rotate(${deg}deg) translateX(150px)`
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

const Slide2 = () => {
  return (
    <div className='layout-split-50'>
      <div style={{ justifyContent: 'center' }}>
        <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          Who We Are
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          VAT-AI helps businesses automate customer communication using intelligent AI voice agents that answer calls, book appointments, qualify leads, and provide 24/7 customer support.
        </motion.p>
        
        <div style={{ marginTop: '2rem' }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>Our Mission</h3>
            <p>Eradicate missed business opportunities.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>Industries Served</h3>
            <p>10+ Commercial and Healthcare verticals.</p>
          </motion.div>
        </div>
      </div>
      
      <div>
        <GlobeNetwork />
      </div>
    </div>
  );
};

export default Slide2;
