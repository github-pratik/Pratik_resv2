import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
  Grid,
  useTheme,
  useMediaQuery,
  Avatar,
  Divider,
  Link,
} from '@mui/material';
import {
  Work as WorkIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  Code as CodeIcon,
  GitHub as GitHubIcon,
  OpenInNew as OpenInNewIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ExperienceItem = ({
  title,
  company,
  location,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          mb: 4,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows[8],
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
            <Avatar
              sx={{
                width: 56,
                height: 56,
                mr: 3,
                backgroundColor: 'primary.main',
              }}
            >
              <WorkIcon />
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                {title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {company}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {period}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {location}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Key Responsibilities:
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {description.map((item: string, index: number) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Technologies Used:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {technologies.map((tech: string, index: number) => (
                <Chip
                  key={index}
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: 'primary.main',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                  }}
                />
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectCard = ({ title, description, image, tags, link }: ProjectCardProps) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <Card
        sx={{
          height: '100%',
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.shadows[8],
          },
        }}
      >
        <Box
          sx={{
            height: 200,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.6 }}
          >
            {description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {tags.map((tag: string, index: number) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: 'primary.main',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                }}
              />
            ))}
          </Box>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 600,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            View Project
            <OpenInNewIcon sx={{ fontSize: 16 }} />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const experiences = [
    {
      title: 'Persistent Martian Intern',
      company: 'Persistent Systems',
      location: 'India',
      period: 'June 2023 – August 2023',
      description: [
        'Collaborated in Agile sprints contributing to database management and application debugging.',
        'Enhanced code efficiency by 30% through optimization and debugging under mentor guidance.',
        'Managed large datasets using MySQL, ensuring data integrity and retrieval performance.',
      ],
      technologies: ['MySQL', 'Agile', 'Debugging', 'SQL'],
    },
    {
      title: 'Web Developer Intern',
      company: 'PHN Technology',
      location: 'India',
      period: 'April 2023 – June 2023',
      description: [
        'Developed backend systems using Node.js and MongoDB, improving portfolio website management.',
        'Integrated REST APIs, enabling real-time dynamic content updates reducing content update time by 30%.',
        'Implemented client-side enhancements using AJAX and JavaScript.',
      ],
      technologies: ['Node.js', 'MongoDB', 'JavaScript', 'AJAX', 'REST API'],
    },
  ];

  const projects = [
    {
      title: 'Instant Market - GMU Student Marketplace',
      description:
        'A campus-focused e-commerce platform for GMU students to buy and sell essentials like textbooks and electronics. Features include user roles, AI-powered recommendations, receipt generation, and sales analytics dashboard.',
      image: 'https://i.imgur.com/JmSbSn4.gif',
      tags: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap 5',
        'LocalStorage',
        'SessionStorage',
        'AI Recommendation',
      ],
      link: 'https://github.com/github-pratik/GMU_Instant_Market',
    },
    {
      title: 'Pokémon Dashboard - React + PokéAPI',
      description:
        'An interactive React-based dashboard that fetches and displays data from the PokéAPI. Users can search, filter, and view detailed Pokémon info with charts highlighting unique data insights.',
      image: 'https://i.imgur.com/gZp4at4.gif',
      tags: ['React', 'Data Visualization', 'PokéAPI', 'Routing'],
      link: 'https://github.com/github-pratik/CodePath_Dasboard_part-2',
    },
  ];

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

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
                Work Experience
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                My professional journey and contributions
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

          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 8 }}>
              {experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
              ))}
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card sx={{ mb: 8 }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      mr: 2,
                      backgroundColor: 'primary.main',
                    }}
                  >
                    <CodeIcon />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Featured Projects
                  </Typography>
                </Box>
                <Divider sx={{ mb: 4 }} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {projects.map((project, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: { xs: '1 1 100%', md: '1 1 calc(50% - 32px)' },
                      }}
                    >
                      <ProjectCard {...project} />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;