import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random/1600x900?ai,technology)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h1" component="h1" gutterBottom color="white">
          DeepData AI: Unlocking the Power of AI and Data for Talent Acquisition
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="white">
          Find the perfect AI/ML talent with our AI-powered matching engine.
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
            Request a Demo
          </Button>
          <Button variant="outlined" color="secondary" size="large">
            Join the Network
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;