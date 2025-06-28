import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  School as SchoolIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  MenuBook as BookOpenIcon,
  EmojiEvents as AwardIcon,
  Work as WorkIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  courses?: string[];
  achievements?: string[];
}

const EducationItem = ({
  degree,
  institution,
  location,
  period,
  description,
  courses,
  achievements,
}: EducationItemProps) => {
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
              <SchoolIcon />
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                {degree}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {institution}
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

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {description}
          </Typography>

          {courses && (
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <BookOpenIcon sx={{ fontSize: 20, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Key Courses
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {courses.map((course: string, index: number) => (
                  <Chip
                    key={index}
                    label={course}
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
          )}

          {achievements && (
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AwardIcon sx={{ fontSize: 20, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Achievements
                </Typography>
              </Box>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {achievements.map((achievement: string, index: number) => (
                  <Typography
                    key={index}
                    component="li"
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {achievement}
                  </Typography>
                ))}
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Education = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const educationItems = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'George Mason University',
      location: 'Fairfax, VA',
      period: 'Aug 2024 - Dec 2026',
      description:
        'Focusing on Artificial Intelligence, Machine Learning, Secure Software, and Cloud Computing.',
      courses: [
        'Machine Learning',
        'Artificial Intelligence',
        'Secure Software Design',
        'Algorithms',
        'Database Systems',
      ],
      achievements: ['Current GPA: 3.78/4.00'],
    },
    {
      degree: 'Bachelor of Technology in Computer Engineering',
      institution: 'Pimpri Chinchwad College of Engineering, University of Pune',
      location: 'Pune, India',
      period: 'Aug 2020 - May 2024',
      description:
        'Graduated with a strong foundation in computing, systems, and software engineering.',
      courses: [
        'Operating Systems',
        'Cloud Computing',
        'AI & ML',
        'Data Structures',
        'Software Testing',
        'Algorithms',
      ],
      achievements: [
        'CGPA: 8.51/10.00',
        'Published research paper in Springer ICSCS 2023 on image analysis using computer vision',
      ],
    },
  ];

  const additionalTraining = [
    {
      title: 'WEB102 | Intermediate Web Development',
      issuer: 'CodePath Org (Online)',
      date: 'Feb 2025',
    },
    {
      title: 'AI&ML Virtual Internship',
      issuer: 'EduSkills Foundation',
      date: 'Jul 2023',
    },
    {
      title: 'Cloud Engineering Track and Data Science & Machine Learning',
      issuer: 'Google Cloud',
      date: 'Dec 2021',
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
                Education
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                My academic background and qualifications
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
              {educationItems.map((item, index) => (
                <EducationItem key={index} {...item} />
              ))}
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
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
                    <WorkIcon />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Additional Training
                  </Typography>
                </Box>
                <Divider sx={{ mb: 4 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {additionalTraining.map((training, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        sx={{
                          borderLeft: `4px solid ${theme.palette.primary.main}`,
                          pl: 3,
                          py: 2,
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            backgroundColor: 'rgba(16, 185, 129, 0.05)',
                            transform: 'translateX(8px)',
                          },
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {training.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: 'primary.main', fontWeight: 500, mb: 1 }}
                        >
                          {training.issuer}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {training.date}
                        </Typography>
                      </Box>
                    </motion.div>
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

export default Education;