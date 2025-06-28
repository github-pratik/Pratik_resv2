import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
  Divider,
  Link,
  Grid,
} from '@mui/material';
import {
  Code as CodeIcon,
  Storage as DatabaseIcon,
  Dns as ServerIcon,
  Language as GlobeIcon,
  Psychology as BrainIcon,
  AccountTree as GitBranchIcon,
  Monitor as MonitorIcon,
  Inventory as BoxIcon,
  Cloud as CloudIcon,
  PhoneAndroid as SmartphoneIcon,
  MenuBook as BookOpenIcon,
  ShowChart as LineChartIcon,
  Layers as LayersIcon,
  Edit as PencilIcon,
  Terminal as CommandIcon,
  Keyboard as KeyboardIcon,
  Settings as SettingsIcon,
  Tag as HashIcon,
  Description as FileCodeIcon,
  Warning as MailWarningIcon,
  ViewInAr as ProjectorIcon,
  Dashboard as PanelsTopLeftIcon,
  OpenInNew as OpenInNewIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface SkillIconProps {
  icon: React.ComponentType<any>;
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const SkillIcon = ({ icon: Icon, name }: SkillIconProps) => {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 3,
          height: '100%',
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows[8],
            borderColor: 'primary.main',
          },
        }}
      >
        <Avatar
          sx={{
            width: 48,
            height: 48,
            mb: 2,
            backgroundColor: 'primary.main',
          }}
        >
          <Icon />
        </Avatar>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          {name}
        </Typography>
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
          {link && (
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
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const technicalSkills = [
  { icon: FileCodeIcon, name: 'Python' },
  { icon: FileCodeIcon, name: 'JavaScript' },
  { icon: FileCodeIcon, name: 'Java' },
  { icon: FileCodeIcon, name: 'C++' },
  { icon: FileCodeIcon, name: 'TypeScript' },
  { icon: GlobeIcon, name: 'HTML/CSS' },
  { icon: MonitorIcon, name: 'React' },
  { icon: MonitorIcon, name: 'Next.js' },
  { icon: MonitorIcon, name: 'Node.js' },
  { icon: MonitorIcon, name: 'Django' },
  { icon: MonitorIcon, name: 'GraphQL' },
  { icon: MonitorIcon, name: 'MySQL' },
  { icon: MonitorIcon, name: 'PostgreSQL' },
  { icon: DatabaseIcon, name: 'MongoDB' },
  { icon: BoxIcon, name: 'Redis' },
  { icon: CloudIcon, name: 'AWS' },
  { icon: CloudIcon, name: 'Google Cloud' },
  { icon: CloudIcon, name: 'Azure' },
  { icon: ServerIcon, name: 'Docker' },
  { icon: ServerIcon, name: 'Kubernetes' },
  { icon: SettingsIcon, name: 'Terraform' },
  { icon: SettingsIcon, name: 'Jenkins' },
  { icon: GitBranchIcon, name: 'Git & GitHub' },
  { icon: BrainIcon, name: 'TensorFlow' },
  { icon: BrainIcon, name: 'PyTorch' },
  { icon: BrainIcon, name: 'Scikit-learn' },
  { icon: BrainIcon, name: 'Keras' },
  { icon: BrainIcon, name: 'Pandas' },
  { icon: BrainIcon, name: 'NumPy' },
  { icon: BrainIcon, name: 'OpenCV' },
  { icon: MonitorIcon, name: 'PowerBI' },
  { icon: CodeIcon, name: 'BeautifulSoup' },
  { icon: SettingsIcon, name: 'REST APIs' },
  { icon: PanelsTopLeftIcon, name: 'Agile/Scrum' },
  { icon: PanelsTopLeftIcon, name: 'WebGL (basic)' },
  { icon: CodeIcon, name: 'AJAX/jQuery' },
  { icon: CodeIcon, name: 'Figma' },
];

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const conciseCount = 12;
  const conciseSkills = technicalSkills.slice(0, conciseCount);
  const skillsToShow = showAllSkills ? technicalSkills : conciseSkills;

  const projects = [
    {
      title: 'SmartSplit - AI-Powered Bill Splitting App',
      description:
        'A smart bill-splitting app built for GDG BuildAthon that uses OCR and Firebase to scan receipts, assign items to people, and calculate shared costs with tax and tip. Real-time updates and an intuitive UI make group payments seamless.',
      image: 'https://raw.githubusercontent.com/github-pratik/smafrt_splitter_GDG/main/Demo1.gif',
      tags: ['React', 'TypeScript', 'TailwindCSS', 'Firebase', 'OCR', 'Lucide React', 'Vite'],
      link: 'https://github.com/github-pratik/smafrt_splitter_GDG',
    },
    {
      title: 'Smart Clipboard Manager - Chrome Extension',
      description:
        'A privacy-first, manual clipboard manager Chrome extension with a minimal, modern UI and local AI features. Features include smart tagging, categorization, summarization, and semantic search—all running locally for privacy.',
      image: 'https://i.imgur.com/JmSn4.gif',
      tags: ['JavaScript', 'Chrome Extension', 'AI', 'Privacy', 'Local Storage', 'Manifest V3'],
      link: 'https://github.com/github-pratik/Smart-Clipboard-Manager',
    },
    {
      title: 'Edulearn Bolt - AI-Powered Learning Platform',
      description:
        'A community-driven, open-source platform empowering educators and students with accessible learning resources, optional premium content, and AI-powered features. Built for Bolt.new Hackathon 2025.',
      image: 'https://i.imgur.com/Zp4at4.gif',
      tags: ['TypeScript', 'Supabase', 'AI Chat', 'Voice AI', 'OpenRouter', 'RevenueCat'],
      link: 'https://github.com/github-pratik/Edulearn_Bolt',
    },
    {
      title: 'Instant Market - GMU Student Marketplace',
      description:
        'A campus-focused e-commerce platform for GMU students to buy and sell essentials like textbooks and electronics. Features include user roles, AI-powered recommendations, receipt generation, and sales analytics dashboard.',
      image: 'https://i.imgur.com/JmSbSn4.gif',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'LocalStorage', 'SessionStorage', 'AI Recommendation'],
      link: 'https://github.com/github-pratik/GMU_Instant_Market',
    },
    {
      title: 'Real-Time Speech Analytics Dashboard',
      description:
        'An advanced dashboard for real-time speech analysis with sentiment detection, emotion recognition, and speech-to-text capabilities. Provides comprehensive analytics and insights.',
      image: 'https://i.imgur.com/YyTqE1.gif',
      tags: ['React', 'WebRTC', 'Speech Recognition', 'Sentiment Analysis', 'Real-time Analytics'],
      link: 'https://github.com/github-pratik/Real-Time-Speech-Analytics-Dashboard',
    },
    {
      title: 'Homework Grader - AI-Powered Grading System',
      description:
        'An intelligent homework grading system that uses AI to automatically evaluate student submissions, provide feedback, and generate detailed reports for educators.',
      image: 'https://imgur.com/A6jvDV.gif',
      tags: ['Python', 'AI/ML', 'Natural Language Processing', 'Education Tech', 'Automation'],
      link: 'https://github.com/github-pratik/HomeworkGrader',
    },
    {
      title: 'UI Coding Assistant - AI-Powered Dev Tool',
      description:
        'A prototype tool for GMU SWE632 that assists UI developers in generating components, analyzing design/code, and checking accessibility. Includes simulated AI suggestions, performance evaluation, and WCAG testing.',
      image: 'https://i.imgur.com/YxyTqE1.gif',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap 5', 'Jest', 'Selenium', 'Prism.js'],
      link: 'https://github.com/github-pratik/UICoding_assistant',
    },
    {
      title: 'Java Oracle University DB - GMU GUI',
      description:
        'A comprehensive Java application with Oracle database integration for university management. Features a modern GUI for managing student records, courses, and academic data.',
      image: 'https://github.com/github-pratik/Wb_Scraping_and_Classification/assets/90708235/14e0b9fd-9f83-4081-b431-22a6254c66cf',
      tags: ['Java', 'Oracle Database', 'Swing GUI', 'JDBC', 'Database Design'],
      link: 'https://github.com/github-pratik/Java_Oracle_UniversityDB_GMU_GUI',
    },
    {
      title: 'Crewmate - Database Management with Supabase',
      description:
        'A modern database management application built with Supabase for efficient data handling, real-time updates, and scalable backend operations.',
      image: 'https://i.imgur.com/JmSSn4.gif',
      tags: ['Supabase', 'React', 'TypeScript', 'Database Management', 'Real-time'],
      link: 'https://github.com/github-pratik/Crewmate_DBSupabase',
    },
    {
      title: 'Pokémon Dashboard - React + PokéAPI',
      description:
        'An interactive React-based dashboard that fetches and displays data from the PokéAPI. Users can search, filter, and view detailed Pokémon info with charts highlighting unique data insights.',
      image: 'https://i.imgur.com/gZp4at4.gif',
      tags: ['React', 'PokéAPI', 'Data Visualization', 'Charts', 'Routing'],
      link: 'https://github.com/github-pratik/CodePath_Dasboard_part-2',
    },
    {
      title: "Trippin' on Cats - Cat Discovery App",
      description:
        "A fun and interactive cat breed explorer that fetches random cats via API. Users can ban unwanted traits, keep a visual history of seen cats, and enjoy a sleek glass-style UI with responsive design.",
      image: "https://imgur.com/A6jJvDV.gif",
      tags: ['JavaScript', 'Async/Await', 'API Integration', 'CSS Effects', 'Responsive Design'],
      link: "https://github.com/github-pratik/CodePath-week5-trippin-on-Cats",
    },
    {
      title: 'Web Scraping and News Classification',
      description:
        'Python-based project that scrapes news articles and classifies them using KNN and SVM models. Includes data preprocessing, cross-validation, and visualization of classification performance.',
      image: 'https://github.com/github-pratik/Web_Scraping_and_Classification/assets/90708235/14e0b9fd-9f83-4081-b431-22a6254c66cf',
      tags: ['Python', 'BeautifulSoup', 'Scikit-learn', 'KNN', 'SVM', 'Pandas', 'NLTK'],
      link: 'https://github.com/github-pratik/Web_Scraping_and_Classification',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
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
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #10B981, #34D399)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textAlign: 'center',
                  mb: 1,
                }}
              >
                Projects & Skills
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Explore my projects and technical skills
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
            <Box sx={{ mb: 6 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Tabs
                  value={activeTab}
                  onChange={(e, newValue) => setActiveTab(newValue)}
                  sx={{
                    mb: 4,
                    '& .MuiTabs-indicator': {
                      backgroundColor: theme.palette.primary.main,
                      height: 3,
                    },
                  }}
                >
                  <Tab
                    label="Projects"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: 600,
                      '&.Mui-selected': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  />
                  <Tab
                    label="Skills"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: 600,
                      '&.Mui-selected': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  />
                </Tabs>
              </Box>
            </Box>
          </motion.div>

          {activeTab === 0 && (
            <motion.div variants={itemVariants}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}>
                  Featured Projects
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: 'repeat(1, 1fr)',
                      sm: 'repeat(2, 1fr)',
                      lg: 'repeat(3, 1fr)',
                    },
                    gap: 4,
                  }}
                >
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </Box>
              </Box>
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}>
                  Technical Skills
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: 'repeat(2, 1fr)',
                      sm: 'repeat(3, 1fr)',
                      md: 'repeat(4, 1fr)',
                      lg: 'repeat(6, 1fr)',
                    },
                    gap: 3,
                    mb: 4,
                  }}
                >
                  {skillsToShow.map((skill, index) => (
                    <SkillIcon key={index} {...skill} />
                  ))}
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    onClick={() => setShowAllSkills(!showAllSkills)}
                    sx={{ minWidth: 200 }}
                  >
                    {showAllSkills ? 'Show Less' : 'Show All Skills'}
                  </Button>
                </Box>
              </Box>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;