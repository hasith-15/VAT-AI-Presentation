import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Slide9 = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 'real-estate',
      title: 'Real Estate',
      customer: "I'd like to know about available plots.",
      ai: "I can absolutely help! Providing details now... (Collects budget ➔ Books site visit)"
    },
    {
      id: 'hotel',
      title: 'Hotel',
      customer: "I need a room tomorrow.",
      ai: "Checking availability... Room secured! Confirmation sent."
    },
    {
      id: 'clinic',
      title: 'Clinic',
      customer: "I need an appointment with the doctor.",
      ai: "Accessing live schedule... Slot locked for 3:00 PM."
    }
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
        Real-Life Use Cases
      </motion.h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            style={{
              padding: '15px 40px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              background: activeTab === index ? 'var(--primary)' : 'rgba(0, 229, 255, 0.1)',
              color: activeTab === index ? 'var(--background)' : 'var(--primary)',
              border: '2px solid var(--primary)',
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: activeTab === index ? '0 0 20px var(--primary)' : 'none'
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'var(--card-bg)',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              borderRadius: '16px',
              padding: '40px',
              width: '80%',
              maxWidth: '800px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary)' }} />
            
            <div style={{ marginBottom: '30px' }}>
              <span style={{ fontSize: '1rem', color: '#a8b2d1', textTransform: 'uppercase', letterSpacing: '2px' }}>Customer</span>
              <p style={{ fontSize: '1.5rem', margin: '10px 0 0 0', color: 'var(--text)' }}>"{tabs[activeTab].customer}"</p>
            </div>
            
            <div style={{ background: 'rgba(0, 255, 102, 0.1)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
              <span style={{ fontSize: '1rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>AI Agent</span>
              <p style={{ fontSize: '1.5rem', margin: '10px 0 0 0', color: '#fff' }}>"{tabs[activeTab].ai}"</p>
            </div>
            
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slide9;
