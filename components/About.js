import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function About() {
  useEffect(() => {
    console.log("About section loaded");
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <Box id="about" sx={{ mt: 15, p: 5, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Sobre Mim
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
          Desenvolvedor Front-End especializado em <strong>React, Next.js e Material UI</strong>, 
          focado em criar interfaces elegantes, intuitivas e performáticas. Transformo complexidade 
          em simplicidade e código em experiências digitais envolventes. Se você busca alguém para 
          construir produtos incríveis que encantam usuários e impulsionam negócios, aqui estou.
        </Typography>
      </Box>
    </motion.div>
  );
}
