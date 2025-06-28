import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
  Avatar,
  useTheme,
  useMediaQuery,
  Link,
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  OpenInNew as ExternalLinkIcon,
  EmojiEvents as AwardIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialId?: string;
  url?: string;
}

const CertificationCard = ({
  title,
  issuer,
  date,
  image,
  credentialId,
  url,
}: CertificationCardProps) => {
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
            backgroundColor: 'background.paper',
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
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, lineHeight: 1.3 }}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              mb: 2,
            }}
          >
            {issuer}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          </Box>
          {credentialId && (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              <strong>Credential ID:</strong> {credentialId}
            </Typography>
          )}
          {url && (
            <Link
              href={url}
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
              Verify Certificate
              <ExternalLinkIcon sx={{ fontSize: 16 }} />
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Certifications = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const certifications = [
    {
      title: 'WEB102 | Intermediate Web Development',
      issuer: 'CodePath Org',
      date: 'May 2025',
      image:
        'https://5340557.fs1.hubspotusercontent-na1.net/hub/5340557/hubfs/custom-video-thumbnails/120232%20-%20What%20is%20CodePath%20Sizzle%20Reel%20(Miami-Focused)%20-%20V8_V1%20(1)-thumb-1.jpeg?length=1920',
      credentialId: '',
      url: 'https://drive.google.com/file/d/1WORm0VHcf9UyQPJZ2KU7dKGYBFTRpz_r/view?usp=sharing',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Jan 2025',
      image: 'https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
      credentialId: '',
      url: 'https://www.credly.com/badges/3d0c6308-34d0-4e65-b84b-5202919ce18e/public_url',
    },
    {
      title: 'Introduction to Programming Using Python',
      issuer: 'Geeks of Geeks',
      date: 'Dec 2022',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240304152903/python-tutorial-2.webp',
      credentialId: '',
      url: 'https://media.geeksforgeeks.org/courses/certificates/2a76bbe03be558d2c05aebb7a1acd9a5.pdf',
    },
    {
      title: 'Introduction to Web APIs',
      issuer: 'Linkedin Learning',
      date: 'Mar 2023',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*tmD_elC_QhRU0Cag2cKoKA.jpeg',
      credentialId: '',
      url: 'https://www.linkedin.com/learning/certificates/3d00e5c6da9088a300e34d014178513cd802cbd34534aedba13e2ed28416bf42?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAi%2FkvU%2BzTRydsbQD9kNeZQ%3D%3D',
    },
    {
      title: 'A Critical Skill for Project Managers',
      issuer: 'Linkedin Learning',
      date: 'Apr 2021',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*tmD_elC_QhRU0Cag2cKoKA.jpeg',
      credentialId: '',
      url: 'https://www.linkedin.com/learning/certificates/c5a0a68d18c1e6256c0e3c5f88dc4f71d86883c1076041f99fd08927e9102cb3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAi%2FkvU%2BzTRydsbQD9kNeZQ%3D%3D',
    },
    {
      title: 'AI&ML Virtual Internship',
      issuer: 'EduSkills Foundation',
      date: 'Jul 2023',
      image: 'https://connect.eduskillsfoundation.org/connect_2023/assets/frontend/img/new-logo2.png',
      credentialId: '',
      url: 'https://www.linkedin.com/in/pshpatil/details/certifications/1733365303158/single-media-viewer/?profileId=ACoAACNgqTkBUN3uwR0UdPvVqIGHqF0JJYXuLAA',
    },
    {
      title: 'AWS Academy Machine Learning Foundations',
      issuer: 'AWS Academy',
      date: 'Jun 2023',
      image: 'https://images.credly.com/size/680x680/images/254b883a-44a3-4cec-b6f2-946a80522b39/image.png',
      credentialId: '',
      url: 'https://www.credly.com/badges/cc1b9219-3364-484b-8e30-bd056eaeda99/print',
    },
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'AWS Academy',
      date: 'May 2023',
      image: 'https://images.credly.com/size/680x680/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png',
      credentialId: '',
      url: 'https://www.credly.com/badges/4c579d89-e5a2-4854-bd47-1ae76a2eed98',
    },
    {
      title: 'Cloud Engineering Track and Data Science & Machine Learning',
      issuer: 'Google Cloud',
      date: 'Dec 2021',
      image: 'https://assets.techrepublic.com/uploads/2024/10/tr_20241028-google-cloud-platform-the-smart-persons-guide.jpg',
      credentialId: '',
      url: 'https://www.linkedin.com/in/pshpatil/details/certifications/1735622454490/single-media-viewer/?profileId=ACoAACNgqTkBUN3uwR0UdPvVqIGHqF0JJYXuLAA',
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
                Certifications
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Professional credentials and completed courses
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
              {certifications.map((cert, index) => (
                <CertificationCard key={index} {...cert} />
              ))}
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Certifications;