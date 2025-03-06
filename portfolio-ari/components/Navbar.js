import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ari.dev
        </Typography>
        <Box>
          <Button color="inherit" href="/about">Sobre</Button>
          <Button color="inherit" href="/projects">Projetos</Button>
          <Button color="inherit" href="/contact">Contato</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
