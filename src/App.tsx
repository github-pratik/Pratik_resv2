import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Education from './pages/Education';
import Skills from './pages/Skills';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="experience" element={<Experience />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="education" element={<Education />} />
            <Route path="skills" element={<Skills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}