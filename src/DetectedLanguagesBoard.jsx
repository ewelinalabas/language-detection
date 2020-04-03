import React from 'react';
import { Grid, Typography, List } from '@material-ui/core';
import { DetectedLanguagesItem } from './DetectedLanguagesItem';

export const DetectedLanguagesBoard = ({ detectedLanguages, handleSearch }) => {
  return (
    <Grid container>
      <List dense={false}>
        {detectedLanguages.map((language, index) => 
          <DetectedLanguagesItem
            key={index} 
            code={language.language_code}
            name={language.language_name}
            percentageMatch={language.percentage}
            handleSearch={handleSearch}
          />
        )}
      </List>
    </Grid>
  );
}

