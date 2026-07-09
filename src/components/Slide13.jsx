import React from 'react';
import { motion } from 'framer-motion';

const Slide13 = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', color: '#0055ff', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}
      >
        PRICING TIERS
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        style={{ textAlign: 'center', color: 'white', marginBottom: '60px' }}
      >
        Simple. Scalable. Transparent.
      </motion.h2>
      
      <div className="layout-pricing-columns">
        
        {/* Starter */}
        <motion.div 
          className="pricing-tier"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
          style={{ background: '#111', borderColor: '#333' }}
        >
          <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '5px' }}>Starter</h3>
          <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '20px' }}>For small teams beginning automation.</p>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
            <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff' }}>$99</span>
            <span style={{ fontSize: '1rem', color: '#888', marginLeft: '5px' }}>/mo</span>
          </div>
          <ul style={{ marginBottom: '30px', flex: 1 }}>
            <li><span style={{ color: '#3b82f6', marginRight: '10px' }}>✓</span>1000 AI Minutes</li>
            <li><span style={{ color: '#3b82f6', marginRight: '10px' }}>✓</span>Basic Voice Models</li>
            <li><span style={{ color: '#3b82f6', marginRight: '10px' }}>✓</span>Email Support</li>
            <li><span style={{ color: '#3b82f6', marginRight: '10px' }}>✓</span>Standard Integration</li>
          </ul>
          <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: '#222', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Get Started</button>
        </motion.div>

        {/* Professional */}
        <motion.div 
          className="pricing-tier pro"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: 'spring' }}
          style={{ background: '#111', borderColor: '#3b82f6', position: 'relative' }}
        >
          <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '5px' }}>Professional</h3>
          <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '20px' }}>For growing businesses scaling up.</p>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
            <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff' }}>$299</span>
            <span style={{ fontSize: '1rem', color: '#888', marginLeft: '5px' }}>/mo</span>
          </div>
          <ul style={{ marginBottom: '30px', flex: 1 }}>
            <li><span style={{ color: '#3b82f6', marginRight: '10px' }}>✓</span>5000 AI Minutes</li>
            <li><span style={{ color: '#3b82f6', marginRight: '10px' }}>✓</span>Premium Voices</li>
            <li><span style={{ color: '#3b82f6', marginRight: '10px' }}>✓</span>24/7 Priority Support</li>
            <li><span style={{ color: '#3b82f6', marginRight: '10px' }}>✓</span>Multi Language Support</li>
          </ul>
          <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: '#3b82f6', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Get Started</button>
        </motion.div>

        {/* Enterprise */}
        <motion.div 
          className="pricing-tier"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring' }}
          style={{ background: '#111', borderColor: '#333' }}
        >
          <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '5px' }}>Enterprise</h3>
          <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '20px' }}>Custom solutions for large scale.</p>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
            <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff' }}>Custom</span>
          </div>
          <ul style={{ marginBottom: '30px', flex: 1 }}>
            <li><span style={{ color: '#3b82f6', marginRight: '10px' }}>✓</span>Unlimited Minutes</li>
            <li><span style={{ color: '#3b82f6', marginRight: '10px' }}>✓</span>Voice Cloning</li>
            <li><span style={{ color: '#3b82f6', marginRight: '10px' }}>✓</span>Dedicated Account Manager</li>
            <li><span style={{ color: '#3b82f6', marginRight: '10px' }}>✓</span>Custom Engineering</li>
          </ul>
          <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: '#222', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Get Started</button>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Slide13;
