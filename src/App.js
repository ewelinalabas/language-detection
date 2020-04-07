import React from 'react';
import { ThemeProvider, Grid } from '@material-ui/core';
import { LanguageDetector } from './components/LanguageDetector';
import { ApplicationBar } from './components/ApplicationBar';
import { Footer } from './components/Footer';
import theme from './theme';
import './App.css';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <ApplicationBar />
        <LanguageDetector />
        <Footer/>
    </ThemeProvider>
  );
}
