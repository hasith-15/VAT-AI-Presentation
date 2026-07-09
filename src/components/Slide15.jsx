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
            <p style={{ margin: 0 }}><strong>Phone:</strong> +91 98765 43210</p>
            <p style={{ margin: 0 }}><strong>Email:</strong> contact@vat-ai.com</p>
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
          justifyContent: 'center'
        }}>
          {/* Using a placeholder for QR code since we don't have the real path yet */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'url(/qr.png) no-repeat center center',
            backgroundSize: 'cover'
          }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
               <rect width="100" height="100" fill="#fff" />
               <path d="M10 10 h30 v30 h-30 z M15 15 h20 v20 h-20 z" fill="#000" />
               <path d="M60 10 h30 v30 h-30 z M65 15 h20 v20 h-20 z" fill="#000" />
               <path d="M10 60 h30 v30 h-30 z M15 65 h20 v20 h-20 z" fill="#000" />
               <rect x="50" y="50" width="10" height="10" fill="#000" />
               <rect x="70" y="50" width="10" height="10" fill="#000" />
               <rect x="60" y="70" width="10" height="10" fill="#000" />
               <rect x="80" y="80" width="10" height="10" fill="#000" />
               <text x="50" y="95" fontSize="8" fill="#000">Scan to chat</text>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide15;
