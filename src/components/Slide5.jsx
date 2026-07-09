import React from 'react';
import { motion } from 'framer-motion';

const Slide5 = () => {
  const nodes = ["Customer Call", "AI Voice Agent", "NLP Parser", "Action Engine", "Data Sync"];
  
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        How It Works
      </motion.h2>
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative' }}>
          
          {nodes.map((node, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3, type: 'spring' }}
                style={{
                  background: 'var(--card-bg)',
                  border: '2px solid var(--primary)',
                  borderRadius: '12px',
                  padding: '20px',
                  width: '150px',
                  textAlign: 'center',
                  boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)',
                  position: 'relative',
                  zIndex: 2,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <h4 style={{ margin: 0, color: 'var(--text)' }}>{node}</h4>
              </motion.div>
              
              {index < nodes.length - 1 && (
                <div style={{ position: 'relative', width: '60px', height: '4px', background: 'rgba(0, 229, 255, 0.2)', zIndex: 1 }}>
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: index * 0.3 }}
                    style={{
                      position: 'absolute',
                      top: '-3px',
                      left: 0,
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      boxShadow: '0 0 10px var(--accent)'
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1.5 }}
        style={{ marginTop: '2rem', textAlign: 'center', color: '#a8b2d1' }}
      >
        <p>Updates CRM & Google Sheets seamlessly in real-time.</p>
      </motion.div>
    </div>
  );
};

export default Slide5;
