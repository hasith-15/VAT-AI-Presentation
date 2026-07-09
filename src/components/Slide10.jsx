import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Slide10 = () => {
  const points = [
    { title: 'Customized AI', desc: 'Tailored to your exact business documents.' },
    { title: 'Fast Deployment', desc: 'Live in under 7 days.' },
    { title: 'Affordable Pricing', desc: 'Fraction of traditional call center costs.' },
    { title: 'Secure Integration', desc: 'End-to-end data encryption.' },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
        Why Choose VAT-AI?
      </motion.h2>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, type: 'spring' }}
            style={{
              background: 'linear-gradient(90deg, rgba(10, 25, 47, 0.8) 0%, rgba(0, 229, 255, 0.1) 100%)',
              border: '1px solid rgba(0, 229, 255, 0.2)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '8px',
              padding: '20px 30px',
              width: '80%',
              maxWidth: '800px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
            }}
          >
            <div style={{ background: 'rgba(0, 255, 102, 0.2)', borderRadius: '50%', padding: '10px', marginRight: '20px' }}>
              <Check size={24} color="var(--accent)" />
            </div>
            <div>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '1.5rem', color: 'var(--text)' }}>{point.title}</h3>
              <p style={{ margin: 0, color: '#a8b2d1', fontSize: '1.2rem' }}>{point.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slide10;
