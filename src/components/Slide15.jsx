import React from 'react';
import { motion } from 'framer-motion';

const Slide15 = () => {
  return (
    <div className="layout-center-hero" style={{ gap: '30px' }}>
      <motion.h1 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
      >
        Thank You
      </motion.h1>
      
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          background: 'var(--card-bg)',
          border: '2px solid var(--primary)',
          borderRadius: '16px',
          padding: '40px',
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
          boxShadow: '0 0 40px rgba(0, 229, 255, 0.2)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div style={{ flex: 1, textAlign: 'left' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Ready to transform your customer communication?</h2>
          <p style={{ fontSize: '1.5rem', color: 'var(--accent)', fontWeight: 'bold', marginBottom: '30px' }}>Let's give your business wings.</p>
          
          <div style={{ fontSize: '1.2rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <p style={{ margin: 0 }}><strong>Phone:</strong> +918500416456</p>
            <p style={{ margin: 0 }}><strong>Email:</strong> hasithvippala15@gmail.com</p>
            <p style={{ margin: 0 }}><strong>Website:</strong> www.vat-ai.com</p>
          </div>
        </div>

        <div style={{
          width: '200px',
          height: '200px',
          background: '#fff',
          borderRadius: '12px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
        }}>
          <img 
            src="/qr.png" 
            alt="WhatsApp QR Code" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{ display: 'none', width: '100%', height: '100%', textAlign: 'center', color: '#000', alignContent: 'center' }}>
            Please add qr.png to public folder
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide15;
