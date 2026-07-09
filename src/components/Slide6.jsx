import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Globe, Shield, Calendar, Filter, Database, Table, MessageSquare, Disc, BarChart2 } from 'lucide-react';

const Slide6 = () => {
  const features = [
    { title: 'Natural Human Voice', icon: <Mic size={40} color="var(--primary)" /> },
    { title: 'Multiple Languages', icon: <Globe size={40} color="var(--primary)" /> },
    { title: '24/7 Availability', icon: <Shield size={40} color="var(--primary)" /> },
    { title: 'Appointment Booking', icon: <Calendar size={40} color="var(--primary)" /> },
    { title: 'Lead Qualification', icon: <Filter size={40} color="var(--primary)" /> },
    { title: 'CRM Integration', icon: <Database size={40} color="var(--primary)" /> },
    { title: 'Google Sheets', icon: <Table size={40} color="var(--primary)" /> },
    { title: 'WhatsApp Follow-up', icon: <MessageSquare size={40} color="var(--primary)" /> },
    { title: 'Call Recording', icon: <Disc size={40} color="var(--primary)" /> },
    { title: 'Analytics Dashboard', icon: <BarChart2 size={40} color="var(--primary)" /> },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
        Features
      </motion.h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(5, 1fr)', 
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '20px', 
        height: 'calc(100% - 100px)' 
      }}>
        {features.map((feat, index) => (
          <motion.div 
            key={index}
            className="grid-item"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 229, 255, 0.3)' }}
          >
            {feat.icon}
            <h3 style={{ fontSize: '1rem', marginTop: '10px' }}>{feat.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slide6;
