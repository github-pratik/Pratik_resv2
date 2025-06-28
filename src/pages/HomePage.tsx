import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Box,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
  Avatar,
  Stack,
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Download as DownloadIcon,
  Close as CloseIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  EmojiEvents as EmojiEventsIcon,
  Code as CodeIcon,
  Rocket as RocketIcon,
  Favorite as FavoriteIcon,
  Coffee as CoffeeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const resumeUrl = "https://drive.google.com/file/d/1OTGe_nAvhWCpMQYXIhQn-fiXpaJyKobY/view?usp=sharing";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const portfolioItems = [
    {
      icon: WorkIcon,
      title: 'Experience',
      description: 'Professional journey and projects',
      path: '/experience',
      color: '#6366F1',
    },
    {
      icon: EmojiEventsIcon,
      title: 'Certifications',
      description: 'Professional credentials and courses',
      path: '/certifications',
      color: '#10B981',
    },
    {
      icon: SchoolIcon,
      title: 'Education',
      description: 'Academic background and research',
      path: '/education',
      color: '#3B82F6',
    },
    {
      icon: CodeIcon,
      title: 'Skills',
      description: 'Technical expertise and tools',
      path: '/skills',
      color: '#8B5CF6',
    },
  ];

  const aboutCards = [
    {
      icon: RocketIcon,
      title: 'Passionate Developer',
      description: 'Dedicated to creating efficient and innovative solutions through code. Experienced in both frontend and backend development.',
    },
    {
      icon: FavoriteIcon,
      title: 'AI Enthusiast',
      description: 'Fascinated by machine learning and its applications. Currently researching NLP and computer vision solutions.',
    },
    {
      icon: CoffeeIcon,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and methodologies. Committed to personal and professional growth.',
    },
  ];

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, #000000 0%, #1F2937 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Animated background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 25% 25%, #10B981 0%, transparent 50%), radial-gradient(circle at 75% 75%, #34D399 0%, transparent 50%)',
            animation: 'pulse 4s ease-in-out infinite alternate',
          }}
        />

        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              {/* Status Chip */}
              <motion.div variants={itemVariants}>
                <Chip
                  icon={<Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10B981' }} />}
                  label="Available for work!"
                  sx={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#10B981',
                    border: '1px solid #10B981',
                    mb: 4,
                    '& .MuiChip-icon': {
                      color: '#10B981',
                    },
                  }}
                />
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    background: 'linear-gradient(45deg, #FFFFFF, #10B981)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                  }}
                >
                  Hello I'm Pratik Patil!
                </Typography>
              </motion.div>

              {/* Subtitle */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    color: 'text.primary',
                    mb: 1,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Aspiring Software Developer
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                  }}
                >
                  from Fairfax, VA
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    maxWidth: 600,
                    mx: 'auto',
                    mb: 6,
                    fontSize: '1.25rem',
                  }}
                >
                  Specialist in Javascript, Java, Python and Innovation.
                </Typography>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent="center"
                  sx={{ mb: 8 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<DownloadIcon />}
                    onClick={() => setIsResumeModalOpen(true)}
                    sx={{ minWidth: 150 }}
                  >
                    Resume
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/pshpatil/"
                    target="_blank"
                    sx={{ minWidth: 150 }}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/github-pratik"
                    target="_blank"
                    sx={{ minWidth: 150 }}
                  >
                    GitHub
                  </Button>
                </Stack>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* About Section */}
      <Box component="section" sx={{ py: 10, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
                  About Me
                </Typography>
                <Box
                  sx={{
                    width: 80,
                    height: 4,
                    backgroundColor: 'primary.main',
                    mx: 'auto',
                    borderRadius: 2,
                  }}
                />
              </Box>
            </motion.div>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {aboutCards.map((card, index) => (
                <Box key={index} sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 32px)' } }}>
                  <motion.div variants={cardVariants}>
                    <Card
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Avatar
                          sx={{
                            width: 56,
                            height: 56,
                            mx: 'auto',
                            mb: 3,
                            backgroundColor: 'primary.main',
                          }}
                        >
                          <card.icon sx={{ fontSize: 28 }} />
                        </Avatar>
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                          {card.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {card.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box component="section" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
                  My Portfolio
                </Typography>
                <Box
                  sx={{
                    width: 80,
                    height: 4,
                    backgroundColor: 'primary.main',
                    mx: 'auto',
                    borderRadius: 2,
                  }}
                />
              </Box>
            </motion.div>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {portfolioItems.map((item, index) => (
                <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 32px)', lg: '1 1 calc(25% - 32px)' } }}>
                  <motion.div variants={cardVariants}>
                    <Card
                      component={Link}
                      to={item.path}
                      sx={{
                        height: '100%',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease-in-out',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.02)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 4, textAlign: 'center' }}>
                        <Avatar
                          sx={{
                            width: 48,
                            height: 48,
                            mx: 'auto',
                            mb: 3,
                            backgroundColor: item.color,
                          }}
                        >
                          <item.icon />
                        </Avatar>
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {item.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 0.5,
                          }}
                        >
                          Explore
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        component="section"
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #1F2937 0%, #000000 100%)',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Turning coffee into code & ideas into reality
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 6,
                    color: 'text.secondary',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Let's Get Shit Done!
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent="center"
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<EmailIcon />}
                    onClick={() => setIsContactModalOpen(true)}
                    sx={{ minWidth: 150 }}
                  >
                    Contact Me
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/pshpatil/"
                    target="_blank"
                    sx={{ minWidth: 150 }}
                  >
                    LinkedIn
                  </Button>
                </Stack>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Resume Modal */}
      <Dialog
        open={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Resume</Typography>
          <IconButton
            onClick={() => setIsResumeModalOpen(false)}
            sx={{ color: 'text.secondary' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <iframe
            src={resumeUrl}
            width="100%"
            height="600"
            style={{ border: 'none' }}
            title="Resume"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsResumeModalOpen(false)}>Close</Button>
          <Button
            variant="contained"
            href={resumeUrl}
            target="_blank"
            startIcon={<DownloadIcon />}
          >
            Download
          </Button>
        </DialogActions>
      </Dialog>

      {/* Contact Modal */}
      <Dialog
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Contact Information</Typography>
          <IconButton
            onClick={() => setIsContactModalOpen(false)}
            sx={{ color: 'text.secondary' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <EmailIcon color="primary" />
              <Typography>
                <strong>Email:</strong> pratik.patil@example.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <PhoneIcon color="primary" />
              <Typography>
                <strong>Phone:</strong> +1 (555) 123-4567
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocationIcon color="primary" />
              <Typography>
                <strong>Location:</strong> Fairfax, VA
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LinkedInIcon color="primary" />
              <Typography>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/pshpatil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.palette.primary.main }}
                >
                  linkedin.com/in/pshpatil
                </a>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <GitHubIcon color="primary" />
              <Typography>
                <strong>GitHub:</strong>{' '}
                <a
                  href="https://github.com/github-pratik"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.palette.primary.main }}
                >
                  github.com/github-pratik
                </a>
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsContactModalOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HomePage;