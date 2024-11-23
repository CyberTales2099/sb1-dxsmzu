import React from 'react';
import { Container, Typography, Box, Link, Grid } from '@mui/material';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 6, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              DeepData AI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Revolutionizing talent acquisition for the age of AI.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@deepdataai.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 (555) 123-4567
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <Linkedin />
              </Link>
              <Link href="#" color="inherit">
                <Github />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} DeepData AI. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;