import React from 'react';
import { Grid } from '@material-ui/core';
import { LanguageDetector } from './LanguageDetector';
import { ApplicationBar } from './ApplicationBar';
import { Footer } from './Footer';
import './App.css';

export const App = () => {
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <ApplicationBar />
      <LanguageDetector />
      <Footer />
    </Grid>
  );
}
