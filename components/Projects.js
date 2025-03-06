import React, { useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  { 
    title: "Projeto 1", 
    description: "Descrição do projeto 1.", 
    image: "/project1.jpg",
    github: "https://github.com/seu-usuario/projeto1",
    demo: "https://projeto1.vercel.app/",
    production: "https://www.projeto1.com" // Link real da produção
  },
  { 
    title: "Projeto 2", 
    description: "Descrição do projeto 2.", 
    image: "/project2.jpg",
    github: "https://github.com/seu-usuario/projeto2",
    demo: "https://projeto2.vercel.app/",
    production: "https://www.projeto2.com"
  }
];

export default function Projects() {
  useEffect(() => {
    console.log("Projects section loaded");
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6 }}
    >
      <Box id="projects" sx={{ mt: 15, p: 5, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Meus Projetos
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card 
                sx={{
                  backgroundColor: '#1e1e1e', 
                  color: 'white', 
                  transition: '0.3s',
                  '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }
                }}
              >
                <CardMedia 
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {project.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    href={project.demo} 
                    target="_blank"
                    sx={{ mt: 2, mx: 1 }}
                  >
                    Ver Demo
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    href={project.github} 
                    target="_blank"
                    sx={{ mt: 2, mx: 1 }}
                  >
                    Código
                  </Button>
                  <Button 
                    variant="contained" 
                    color="success" 
                    href={project.production} 
                    target="_blank"
                    sx={{ mt: 2, mx: 1 }}
                  >
                    Em Produção
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
}
