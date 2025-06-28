import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Slide,
  useScrollTrigger,
  Fade,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  // Hide navbar on scroll down, show on scroll up
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certificates', path: '/certifications' },
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/skills' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const NavButton = ({ item }: { item: typeof navItems[0] }) => (
    <NavLink
      to={item.path}
      style={{ textDecoration: 'none' }}
      onClick={handleNavClick}
    >
      {({ isActive }) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            color="inherit"
            sx={{
              mx: 1,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: isActive ? '100%' : '0%',
                height: '2px',
                backgroundColor: theme.palette.primary.main,
                transform: 'translateX(-50%)',
                transition: 'width 0.3s ease-in-out',
              },
              '&:hover::after': {
                width: '100%',
              },
            }}
          >
            {item.name}
          </Button>
        </motion.div>
      )}
    </NavLink>
  );

  const MobileNavItem = ({ item }: { item: typeof navItems[0] }) => (
    <NavLink
      to={item.path}
      style={{ textDecoration: 'none' }}
      onClick={handleNavClick}
    >
      {({ isActive }) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          whileHover={{ x: 10 }}
        >
          <ListItem
            sx={{
              backgroundColor: isActive ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
              borderLeft: isActive ? `3px solid ${theme.palette.primary.main}` : 'none',
              '&:hover': {
                backgroundColor: 'rgba(16, 185, 129, 0.05)',
              },
            }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                '& .MuiListItemText-primary': {
                  color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                  fontWeight: isActive ? 600 : 400,
                },
              }}
            />
          </ListItem>
        </motion.div>
      )}
    </NavLink>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${theme.palette.divider}`,
            zIndex: theme.zIndex.drawer + 1,
          }}
          elevation={0}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Logo/Brand */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #10B981, #34D399)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  Pratik Patil
                </Typography>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavButton item={item} />
                  </motion.div>
                ))}
              </Box>
            )}

            {/* Theme Toggle & Mobile Menu Button */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                  onClick={() => setDarkMode(!darkMode)}
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: theme.palette.primary.main,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    },
                  }}
                >
                  {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </motion.div>

              {isMobile && (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <IconButton
                    onClick={toggleMenu}
                    sx={{
                      color: theme.palette.text.secondary,
                      '&:hover': {
                        color: theme.palette.primary.main,
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      },
                    }}
                  >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                </motion.div>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleMenu}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            borderLeft: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        <Box sx={{ pt: 8, pb: 2 }}>
          <List>
            <AnimatePresence>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MobileNavItem item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </List>
        </Box>
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;