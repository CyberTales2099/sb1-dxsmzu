import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { Code, UserCheck, BarChart } from 'lucide-react';

const features = [
  {
    title: 'Deep Analysis',
    description: 'Analyze code, projects, and psychometric data to uncover hidden talent and predict job success.',
    icon: Code,
  },
  {
    title: 'Personalized Matching',
    description: 'Our AI algorithms match candidates with the right opportunities based on their unique profiles.',
    icon: UserCheck,
  },
  {
    title: 'Data-Driven Insights',
    description: 'Provide companies with valuable data and analytics to inform their hiring strategies.',
    icon: BarChart,
  },
];

const Features: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center">
          AI-Powered Talent Acquisition
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'background.paper' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <feature.icon size={48} className="text-primary" />
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3" align="center">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;