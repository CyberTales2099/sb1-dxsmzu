import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Brain size={32} className="text-primary mr-2" />
          <Typography variant="h6" component="div">
            DeepData AI
          </Typography>
        </Box>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Features</Button>
        <Button color="inherit">Testimonials</Button>
        <Button color="primary" variant="contained">
          Request Demo
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;