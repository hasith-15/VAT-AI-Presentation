import React from 'react';
import { motion } from 'framer-motion';

const Slide13 = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
        Pricing
      </motion.h2>
      
      <div className="layout-pricing-columns">
        
        <motion.div 
          className="pricing-tier"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <h3 style={{ color: '#fff' }}>Starter</h3>
          <ul>
            <li>Core AI Voice Agent</li>
            <li>Google Sheets Sync</li>
            <li>Standard Reporting</li>
            <li>Email Support</li>
          </ul>
        </motion.div>

        <motion.div 
          className="pricing-tier pro"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: 'spring' }}
        >
          <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'var(--background)', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
            MOST POPULAR
          </div>
          <h3>Professional</h3>
          <ul>
            <li>Advanced CRM Integration</li>
            <li>WhatsApp Automated Follow-ups</li>
            <li>Custom Call Flows</li>
            <li>Priority Support</li>
          </ul>
        </motion.div>

        <motion.div 
          className="pricing-tier"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring' }}
        >
          <h3 style={{ color: 'var(--accent)' }}>Enterprise</h3>
          <ul>
            <li>Custom Training & LLM Deployment</li>
            <li>Dedicated Local Support Channel</li>
            <li>SLA Guarantee</li>
            <li>On-premise Options</li>
          </ul>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Slide13;
