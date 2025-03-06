import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Contact() {
  useEffect(() => {
    console.log("Contact section loaded");
  }, []);

  return (
    <Box id="contact" sx={{ mt: 15, p: 5, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contato
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Me envie uma mensagem e entrarei em contato o mais breve possível.
      </Typography>

      {/* Botão para baixar o currículo */}
      <Button 
        variant="contained" 
        color="info" 
        href="/curriculo.pdf" 
        download
        sx={{ mt: 2 }}
      >
        Baixar Currículo
      </Button>

      {/* Links para redes sociais */}
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="secondary" href="https://www.linkedin.com/in/ariovaldo-santana/" target="_blank" sx={{ mx: 1 }} startIcon={<LinkedInIcon />}>
          LinkedIn
        </Button>
        <Button variant="contained" color="primary" href="https://github.com/AriovaldoSantS" target="_blank" sx={{ mx: 1 }} startIcon={<GitHubIcon />}>
          GitHub
        </Button>
        <Button variant="contained" color="success" href="https://wa.me/5571991244751" target="_blank" sx={{ mx: 1 }} startIcon={<WhatsAppIcon />}>
          WhatsApp
        </Button>
      </Box>
    </Box>
  );
}
