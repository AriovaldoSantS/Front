import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "NestJS", icon: "" } // Sem logo oficial no Devicon, mas podemos adicionar uma imagem customizada
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ mt: 15, p: 5, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Minhas Habilidades
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index} xs={6} sm={4} md={3}>
            {skill.icon ? (
              <Avatar 
                src={skill.icon} 
                alt={skill.name} 
                sx={{ width: 70, height: 70, mx: "auto" }}
              />
            ) : (
              <Typography variant="h5" fontWeight="bold" sx={{ mt: 3 }}>
                {skill.name}
              </Typography>
            )}
            <Typography variant="body1" sx={{ mt: 1 }}>
              {skill.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
