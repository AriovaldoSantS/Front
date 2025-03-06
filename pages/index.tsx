import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Container, Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    console.log("Home component loaded");
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: { xs: 8, md: 12 }, textAlign: 'center', px: { xs: 2, sm: 4 } }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Oi, sou <span style={{ color: '#90caf9' }}>Ari</span> 👋
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Desenvolvedor Front-End | Criando experiências incríveis na web
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            sx={{
              mt: 4,
              transition: '0.3s',
              '&:hover': { transform: 'scale(1.05)' }
            }}
            href="#projects"
          >
            Veja Meus Projetos
          </Button>
        </motion.div>
      </Container>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
