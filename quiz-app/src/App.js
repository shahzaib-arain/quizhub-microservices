import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quizzes from './pages/Quizzes';
import Questions from './pages/Questions';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark', // Dark mode base
    primary: {
      main: '#ff0000', // Vibrant red
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#212121', // Dark gray/black
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e',   // Slightly lighter for cards
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#ff4d4d', // Light red for accents
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif', // Modern font
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes/*" element={<Quizzes />} />
          <Route path="/questions/*" element={<Questions />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;