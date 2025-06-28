import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { Favorite as FavoriteIcon, AutoAwesome as AutoAwesomeIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              © {new Date().getFullYear()} Designed with{' '}
              <motion.span
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 16, color: 'primary.main' }} />
              </motion.span>{' '}
              and Made with{' '}
              <motion.span
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FavoriteIcon sx={{ fontSize: 16, color: 'error.main' }} />
              </motion.span>{' '}
              by Pratik Patil.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;