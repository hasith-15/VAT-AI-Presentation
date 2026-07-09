import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Slide14 = () => {
  const steps = [
    "Business Discussion",
    "Requirement Collection",
    "AI Model Training",
    "Rigorous Testing",
    "Go Live & Launch",
    "Optimization & Support"
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
        Implementation Process
      </motion.h2>
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, type: 'spring' }}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--primary)',
                borderRadius: '8px',
                padding: '20px',
                width: '180px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--accent)',
                color: 'var(--background)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                {index + 1}
              </div>
              <p style={{ marginTop: '10px', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text)' }}>{step}</p>
            </motion.div>
            
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.1 }}
              >
                <ChevronRight size={32} color="rgba(0, 229, 255, 0.5)" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Slide14;
