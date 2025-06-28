import React, { useState, useEffect } from 'react';
import { Fab, Zoom, useTheme } from '@mui/material';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: theme.zIndex.fab,
          }}
        >
          <Fab
            color="primary"
            size="medium"
            onClick={scrollToTop}
            sx={{
              background: 'linear-gradient(45deg, #10B981, #34D399)',
              '&:hover': {
                background: 'linear-gradient(45deg, #059669, #10B981)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 