import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Slide12 = () => {
  const [demoState, setDemoState] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDemoState(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
        Live Demo Simulation
      </motion.h2>
      
      <div className="layout-split-50">
        {/* Left Side: Incoming Phone Call */}
        <div style={{ background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--primary)', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '30px' }}>Incoming Call Dashboard</h3>
          
          <div style={{ width: '250px', height: '400px', background: '#111', borderRadius: '30px', border: '5px solid #333', padding: '20px', position: 'relative', overflow: 'hidden' }}>
            <motion.div 
              animate={{ opacity: demoState > 0 ? 1 : 0.5, scale: demoState === 1 ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 1, repeat: demoState === 1 ? Infinity : 0 }}
              style={{ textAlign: 'center', marginTop: '40px' }}
            >
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: demoState > 0 ? 'var(--accent)' : '#555', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2rem' }}>📱</span>
              </div>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0' }}>{demoState === 0 ? 'Waiting...' : demoState === 1 ? 'Incoming Call' : 'VAT-AI Agent'}</h4>
              <p style={{ color: '#aaa' }}>{demoState === 0 ? '' : demoState === 1 ? '+91 98765 43210' : '00:14'}</p>
            </motion.div>
            
            {demoState >= 2 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ position: 'absolute', bottom: '30px', left: '20px', right: '20px', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '10px' }}>
                <p style={{ margin: 0, color: 'var(--accent)', fontSize: '0.9rem' }}>"Hello! I am the AI assistant. How can I help you today?"</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Side: Google Sheets & WhatsApp */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
          
          <div style={{ background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid rgba(0, 229, 255, 0.3)', padding: '20px', flex: 1 }}>
             <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '15px' }}>Google Sheets Sync</h3>
             <table style={{ width: '100%', fontSize: '0.9rem', color: '#fff', borderCollapse: 'collapse' }}>
               <thead>
                 <tr style={{ background: 'rgba(0, 229, 255, 0.2)' }}>
                   <th style={{ padding: '8px', textAlign: 'left' }}>Time</th>
                   <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
                   <th style={{ padding: '8px', textAlign: 'left' }}>Phone</th>
                   <th style={{ padding: '8px', textAlign: 'left' }}>Requirement</th>
                 </tr>
               </thead>
               <tbody>
                 {demoState >= 3 && (
                   <motion.tr initial={{ opacity: 0, backgroundColor: 'var(--accent)' }} animate={{ opacity: 1, backgroundColor: 'transparent' }} transition={{ duration: 1 }}>
                     <td style={{ padding: '8px', borderBottom: '1px solid #333' }}>Just now</td>
                     <td style={{ padding: '8px', borderBottom: '1px solid #333' }}>John Doe</td>
                     <td style={{ padding: '8px', borderBottom: '1px solid #333' }}>+91 98765...</td>
                     <td style={{ padding: '8px', borderBottom: '1px solid #333' }}>Needs Appointment</td>
                   </motion.tr>
                 )}
               </tbody>
             </table>
          </div>

          <div style={{ background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid rgba(0, 255, 102, 0.3)', padding: '20px', flex: 1, position: 'relative' }}>
            <h3 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '15px' }}>WhatsApp Automated Ping</h3>
            {demoState >= 3 ? (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ background: '#075E54', padding: '15px', borderRadius: '10px 10px 10px 0', display: 'inline-block' }}>
                <p style={{ margin: 0, color: '#fff', fontSize: '0.95rem' }}>Hi John, your appointment is confirmed for tomorrow. Here are the details...</p>
              </motion.div>
            ) : (
              <p style={{ color: '#555', fontStyle: 'italic' }}>Waiting for data...</p>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Slide12;
