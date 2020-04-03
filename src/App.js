import React from 'react';
import { ThemeProvider, Grid } from '@material-ui/core';
import { LanguageDetector } from './LanguageDetector';
import { ApplicationBar } from './ApplicationBar';
import { Footer } from './Footer';
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
