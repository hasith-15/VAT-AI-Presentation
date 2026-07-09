import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMissed, Clock, Hourglass, TrendingUp, HelpCircle, TrendingDown } from 'lucide-react';

const Slide3 = () => {
  const problems = [
    { title: 'Missed Calls', icon: <PhoneMissed size={48} color="#ff4d4d" />, delay: 0.1 },
    { title: 'Staff Unavailable', icon: <Clock size={48} color="#ff4d4d" />, delay: 0.2 },
    { title: 'Slow Response Times', icon: <Hourglass size={48} color="#ff4d4d" />, delay: 0.3 },
    { title: 'High Employee Costs', icon: <TrendingUp size={48} color="#ff4d4d" />, delay: 0.4 },
    { title: 'Repetitive Questions', icon: <HelpCircle size={48} color="var(--primary)" />, delay: 0.5 },
    { title: 'Lost Leads', icon: <TrendingDown size={48} color="#ff4d4d" />, delay: 0.6 },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
        The Problem
      </motion.h2>
      
      <div className="layout-grid-3x2">
        {problems.map((prob, index) => (
          <motion.div 
            key={index}
            className="grid-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: prob.delay, type: 'spring' }}
          >
            <motion.div
              animate={index === 0 ? { scale: [1, 1.2, 1] } : {}}
              transition={index === 0 ? { duration: 1.5, repeat: Infinity } : {}}
            >
              {prob.icon}
            </motion.div>
            <h3>{prob.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slide3;
