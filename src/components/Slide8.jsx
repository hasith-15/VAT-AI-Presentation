import React from 'react';
import { motion } from 'framer-motion';
import { Home, Bed, Activity, Utensils, BookOpen, Car, Scissors, ShoppingBag } from 'lucide-react';

const Slide8 = () => {
  const industries = [
    { name: 'Real Estate', icon: <Home size={48} color="var(--primary)" /> },
    { name: 'Hotels', icon: <Bed size={48} color="var(--primary)" /> },
    { name: 'Hospitals / Clinics', icon: <Activity size={48} color="var(--primary)" /> },
    { name: 'Restaurants', icon: <Utensils size={48} color="var(--primary)" /> },
    { name: 'Educational Institutions', icon: <BookOpen size={48} color="var(--primary)" /> },
    { name: 'Automobile Showrooms', icon: <Car size={48} color="var(--primary)" /> },
    { name: 'Salons', icon: <Scissors size={48} color="var(--primary)" /> },
    { name: 'Finance / E-commerce', icon: <ShoppingBag size={48} color="var(--primary)" /> },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
        Industries We Serve
      </motion.h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '30px', 
        padding: '20px' 
      }}>
        {industries.map((ind, index) => (
          <motion.div 
            key={index}
            className="grid-item"
            style={{ padding: '40px 20px', perspective: '1000px' }}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8, type: 'spring' }}
            whileHover={{ scale: 1.1, rotateY: 10, rotateX: 10, backgroundColor: 'rgba(0, 229, 255, 0.1)' }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
            >
              {ind.icon}
            </motion.div>
            <h3 style={{ fontSize: '1.2rem', marginTop: '15px' }}>{ind.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slide8;
