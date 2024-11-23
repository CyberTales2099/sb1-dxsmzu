import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Revolutionizing Talent Acquisition for the Age of AI
        </Typography>
        <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: 'background.default' }}>
          <Typography variant="body1" paragraph>
            DeepData AI provides deep insights into candidates' skills, experience, psychometrics, and character, enabling companies to make data-driven hiring decisions. We go beyond traditional methods to uncover hidden talent and predict job success, using AI to analyze code, projects, and assessments.
          </Typography>
          <Typography variant="body1">
            Our cutting-edge technology combines machine learning algorithms with expert human insights to create a comprehensive talent acquisition platform that's tailored for the AI and data science industries.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;