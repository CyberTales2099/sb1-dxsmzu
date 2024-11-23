import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const CallToAction: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Ready to Find the Perfect AI/ML Talent?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
            Request a Demo
          </Button>
          <Button variant="outlined" color="secondary" size="large" sx={{ mr: 2 }}>
            Post a Job
          </Button>
          <Button variant="outlined" color="secondary" size="large">
            Join the Network
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CallToAction;