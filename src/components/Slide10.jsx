import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Slide10 = () => {
  const features = [
    { title: 'Hyper Customization', desc: 'Tailored flows specific to your industry.' },
    { title: 'Lightning Fast Deployment', desc: 'Go live in days, not months.' },
    { title: 'Secure Integration', desc: 'Bank-grade security for your data.' },
  ];

  const competitors = [
    { name: 'Synthflow Ai', price: '$0.15', oldPrice: '₹14.00' },
    { name: 'Retell Ai', price: '$0.17', oldPrice: '₹16.22' },
    { name: 'VAPI-Ai', price: '$0.11', oldPrice: '₹10.22' },
    { name: 'VAT-AI', price: '$0.023', oldPrice: '₹2.20', highlight: true },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', color: '#0055ff', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}
      >
        COMPETITIVE ADVANTAGE
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        style={{ textAlign: 'center', color: 'white', marginBottom: '40px' }}
      >
        Why VAT-AI Leads the Market
      </motion.h2>
      
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        
        {/* Left Column - Features */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, type: 'spring' }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div style={{ 
                background: 'rgba(0, 85, 255, 0.1)', 
                borderRadius: '50%', 
                width: '40px', 
                height: '40px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginRight: '20px',
                border: '1px solid rgba(0, 85, 255, 0.3)'
              }}>
                <Check size={20} color="#0055ff" />
              </div>
              <div>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#fff' }}>{feature.title}</h3>
                <p style={{ margin: 0, color: '#888', fontSize: '0.9rem' }}>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column - Pricing Comparison */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          style={{ 
            flex: 1, 
            background: 'rgba(10, 15, 30, 0.8)', 
            borderRadius: '16px', 
            padding: '30px', 
            border: '1px solid rgba(0, 85, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Lightning bolt watermark (simplified with CSS) */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: '150px',
            color: 'rgba(255,255,255,0.02)',
            fontWeight: 'bold',
            lineHeight: 1,
            zIndex: 0,
            transform: 'rotate(15deg)'
          }}>
            ⚡
          </div>

          <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '20px', position: 'relative', zIndex: 1 }}>Unbeatable Pricing (Per Min)</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', position: 'relative', zIndex: 1 }}>
            {competitors.map((comp, idx) => (
              <div key={idx} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 20px',
                borderRadius: '8px',
                background: comp.highlight ? 'rgba(0, 85, 255, 0.1)' : 'rgba(255,255,255,0.03)',
                border: comp.highlight ? '1px solid #0055ff' : '1px solid rgba(255,255,255,0.05)',
              }}>
                <span style={{ color: comp.highlight ? '#0055ff' : '#fff', fontWeight: 'bold' }}>{comp.name}</span>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem' }}>{comp.price}</div>
                  <div style={{ color: '#666', fontSize: '0.8rem', textDecoration: 'line-through' }}>{comp.oldPrice}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: '25px', 
            paddingTop: '15px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center',
            color: '#0055ff',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
            position: 'relative',
            zIndex: 1
          }}>
            PREMIUM TECH AT A FRACTION OF THE COST
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Slide10;
