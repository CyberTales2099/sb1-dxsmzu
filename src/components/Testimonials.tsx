import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';

const testimonials = [
  {
    quote: "DeepData AI helped us find the perfect AI engineer for our team. Their platform provided deep insights into candidates' skills and potential that we couldn't get anywhere else.",
    author: "Jane Doe",
    title: "CTO at TechInnovate",
    avatar: "https://source.unsplash.com/random/100x100?woman,professional",
  },
  {
    quote: "As an AI researcher, I was impressed with DeepData AI's ability to understand my unique skills and connect me with relevant opportunities.",
    author: "John Smith",
    title: "AI Researcher",
    avatar: "https://source.unsplash.com/random/100x100?man,researcher",
  },
];

const Testimonials: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center">
          What Our Clients Say
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'background.paper' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" paragraph>
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Avatar src={testimonial.avatar} sx={{ width: 60, height: 60, mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1">{testimonial.author}</Typography>
                      <Typography variant="body2" color="textSecondary">{testimonial.title}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;