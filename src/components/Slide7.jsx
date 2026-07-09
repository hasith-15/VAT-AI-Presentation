import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

const Slide7 = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
        Benefits
      </motion.h2>
      
      <div className="layout-comparison-cards">
        <motion.div 
          className="card legacy"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 style={{ color: '#ff4d4d', textAlign: 'center', marginBottom: '2rem' }}>The Legacy Way</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <XCircle size={24} color="#ff4d4d" style={{ marginRight: '15px' }} />
              <span style={{ fontSize: '1.2rem', color: '#a8b2d1' }}>"We provide 24/7 Support." (Often delayed)</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <XCircle size={24} color="#ff4d4d" style={{ marginRight: '15px' }} />
              <span style={{ fontSize: '1.2rem', color: '#a8b2d1' }}>"We use AI Voice." (Robotic & frustrating)</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="card highlight"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 style={{ color: 'var(--primary)', textAlign: 'center', marginBottom: '2rem' }}>The VAT-AI Way</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <CheckCircle size={32} color="var(--accent)" style={{ marginRight: '15px', minWidth: '32px' }} />
              <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>"Never lose a customer because nobody answered the phone."</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircle size={32} color="var(--accent)" style={{ marginRight: '15px', minWidth: '32px' }} />
              <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>"Professional customer experience every single time."</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide7;
