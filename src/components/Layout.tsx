import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.default',
        position: 'relative',
      }}
    >
      {/* Grid background overlay for depth effect */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.3,
          zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default Layout;