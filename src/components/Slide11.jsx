import React from 'react';
import { motion } from 'framer-motion';

const Slide11 = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
        ROI (Return on Investment)
      </motion.h2>
      
      <div className="layout-split-50" style={{ alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{ background: 'var(--card-bg)', padding: '30px', borderRadius: '16px', border: '1px solid #ff4d4d' }}
        >
          <h3 style={{ color: '#ff4d4d', textAlign: 'center', marginBottom: '20px' }}>Traditional Lost Revenue Matrix</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>100 Calls/Day</div>
            <div style={{ color: '#ff4d4d' }}>↓</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>20 Missed</div>
            <div style={{ color: '#ff4d4d' }}>↓</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>10 Lost Clients</div>
            <div style={{ color: '#ff4d4d' }}>↓</div>
            <div style={{ fontSize: '2rem', fontWeight: '900', color: '#ff4d4d', background: 'rgba(255, 77, 77, 0.1)', padding: '10px 20px', borderRadius: '8px' }}>
              ₹2,00,000 Lost/Month
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 style={{ color: 'var(--primary)', textAlign: 'center', marginBottom: '20px' }}>Live Financial Comparison Table</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.1rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--primary)' }}>
                <th style={{ padding: '15px', textAlign: 'left', color: '#a8b2d1' }}>Metric</th>
                <th style={{ padding: '15px', textAlign: 'left', color: '#ff4d4d' }}>Without VAT-AI</th>
                <th style={{ padding: '15px', textAlign: 'left', color: 'var(--accent)' }}>With VAT-AI</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>Missed Calls</td>
                <td style={{ padding: '15px', color: '#ff4d4d' }}>High Leakage</td>
                <td style={{ padding: '15px', color: 'var(--accent)', fontWeight: 'bold' }}>0 Missed Calls</td>
              </tr>
              {/* Row 2 */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>Availability</td>
                <td style={{ padding: '15px', color: '#ff4d4d' }}>Limited Hours</td>
                <td style={{ padding: '15px', color: 'var(--accent)', fontWeight: 'bold' }}>24/7 Monitored</td>
              </tr>
              {/* Row 3 */}
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>Operational Speed</td>
                <td style={{ padding: '15px', color: '#ff4d4d' }}>Slow / Delayed</td>
                <td style={{ padding: '15px', color: 'var(--accent)', fontWeight: 'bold' }}>Instantaneous</td>
              </tr>
              {/* Row 4 */}
              <tr>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>Overhead Costs</td>
                <td style={{ padding: '15px', color: '#ff4d4d' }}>High Salaries</td>
                <td style={{ padding: '15px', color: 'var(--accent)', fontWeight: 'bold' }}>Low Operating Cost</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide11;
