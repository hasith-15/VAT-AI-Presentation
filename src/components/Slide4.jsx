import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const HolographicBot = () => {
  return (
    <div style={{ position: 'relative', width: '300px', height: '400px', margin: '0 auto' }}>
      {/* Bot Body */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'rgba(0, 229, 255, 0.1)',
          border: '2px solid var(--primary)',
          boxShadow: '0 0 30px var(--primary), inset 0 0 20px var(--primary)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)' }}
          />
        </div>
        
        {/* Hologram base rings */}
        <motion.div 
          animate={{ rotateX: 60, rotateZ: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '2px dashed var(--accent)',
            position: 'absolute',
            bottom: '20px',
            transformStyle: 'preserve-3d'
          }}
        />
        <div style={{
          width: '100px',
          height: '20px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)',
          position: 'absolute',
          bottom: '0',
          filter: 'blur(5px)'
        }} />
      </motion.div>
    </div>
  );
};

const Slide4 = () => {
  const features = [
    { text: 'Answers calls instantly ➔ 0-second latency' },
    { text: 'Available 24/7 ➔ Non-stop operation' },
    { text: 'Speaks naturally ➔ Advanced NLP voice synthesis' },
    { text: 'Books appointments ➔ Direct calendar integration' },
    { text: 'Collects customer details ➔ Instant CRM parsing' },
    { text: 'Transfers important calls ➔ Smart human routing' }
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
        Our Solution
      </motion.h2>
      
      <div className="layout-feature-showcase">
        <div style={{ flex: 1 }}>
          <HolographicBot />
        </div>
        
        <ul className="feature-list">
          {features.map((feat, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <CheckCircle className="check-icon" size={28} />
              <span dangerouslySetInnerHTML={{ __html: feat.text.replace('➔', '<strong style="color:var(--primary)">➔</strong>') }} />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slide4;
