import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Visualizations from './components/Visualizations';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4a90e2',
    },
    secondary: {
      main: '#50e3c2',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Features />
          <Visualizations />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;